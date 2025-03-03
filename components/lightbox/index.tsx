"use client";

import { createEvent } from "react-event-hook";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Loader from "@/components/lightbox/loader";
import { GalleryPhoto } from "../photo-gallery";

const showLightBox = createEvent("onShowLightBox")<GalleryPhoto>();

export function showLightBoxImage(image: GalleryPhoto) {
  showLightBox.emitOnShowLightBox(image);
}

export default function Lightbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState<GalleryPhoto | null>(null);
  const [loading, setLoading] = useState(true);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const updateImage = useCallback(
    (image: GalleryPhoto) => {
      setLoading(true);
      setImage(image);
      openModal();
    },
    [openModal],
  );

  showLightBox.useOnShowLightBoxListener(updateImage);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowLeft" && image?.prev) {
        updateImage(image.prev);
      } else if (event.key === "ArrowRight" && image?.next) {
        updateImage(image.next);
      }
    }

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, image, updateImage]);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative"
          style={{ zIndex: 999 }}
          onClose={closeModal}
        >
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/80 backdrop-blur-md" />
          </TransitionChild>

          <div className="overflow-none fixed inset-0 h-96">
            <div className="flex items-center justify-center pt-6 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="transform rounded-md border-2 border-sky-500 bg-white/60 text-left align-middle shadow-md backdrop-blur-xs transition-all dark:border-sky-600 dark:bg-neutral-700/60">
                  <DialogTitle
                    as="div"
                    className="flex h-7 border-b bg-white/90"
                  >
                    <div className="vertical-center grow cursor-move justify-center truncate px-2 pt-[1px] text-center align-middle font-bold">
                      {image?.title}
                    </div>
                    <button
                      className="flex h-7 w-7 flex-none items-center justify-center rounded-tr-sm border-0 hover:bg-red-500/50 focus:bg-red-500/50 focus:outline-none"
                      aria-label="Close"
                      onClick={closeModal}
                      onTouchStart={closeModal}
                    >
                      X
                    </button>
                  </DialogTitle>
                  <div>
                    {loading && (
                      <div className="flex h-max items-center justify-center p-6">
                        <Loader />
                      </div>
                    )}
                    {image && (
                      <div className="relative">
                        <Image
                          src={image ? image.lightboxImageSrc : ""}
                          width={1200}
                          height={1200}
                          alt={image?.title || "Lightbox Image"}
                          className={`max-h-[calc(100vh-100px)] w-full rounded-b-md object-contain ${loading ? "hidden" : "visible"}`}
                          priority={true}
                          onLoad={() => {
                            setLoading(false);
                          }}
                        />
                        {!loading && (
                          <>
                            {image?.prev && (
                              <div
                                className="absolute top-0 left-2 flex h-full cursor-pointer items-center justify-center"
                                onClick={() =>
                                  image?.prev && updateImage(image.prev)
                                }
                                onTouchStart={() =>
                                  image?.prev && updateImage(image.prev)
                                }
                              >
                                <div className="rounded-full bg-white/70 p-3 font-extrabold text-neutral-700">
                                  &lt;
                                </div>
                              </div>
                            )}
                            {image?.next && (
                              <div
                                className="absolute top-0 right-2 flex h-full cursor-pointer items-center justify-center"
                                onClick={() =>
                                  image?.next && updateImage(image.next)
                                }
                                onTouchStart={() =>
                                  image?.next && updateImage(image.next)
                                }
                              >
                                <div className="rounded-full bg-white/70 p-3 font-extrabold text-neutral-700">
                                  &gt;
                                </div>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    )}
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
