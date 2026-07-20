"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, PhoneIcon } from "@heroicons/react/24/outline";
import PageBaseConfiguration from "@/configuration";

import Logo from "@/public/theme/logo.png";

export interface HeaderItem {
  name: string;
  href: string;
  disabled?: boolean;
  children?: HeaderItem[];
}

export default function Header({
  menuItems,
  children,
}: {
  menuItems: HeaderItem[];
  children: React.ReactElement;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const pageConfig = PageBaseConfiguration();

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header>
      <div className="absolute inset-x-0 top-0 z-50 mx-auto max-w-(--breakpoint-2xl)">
        <nav
          className="flex items-center justify-between px-6 pt-4 2xl:px-0"
          aria-label="Hauptnavigation"
          role="navigation"
        >
          <div className="flex lg:flex-1">
            <div className="-m-1.5 p-1.5">
              <span className="sr-only">{pageConfig.title}</span>
              <Link href="/" aria-label="Zur Startseite">
                <Image
                  className="h-10 w-auto"
                  src={Logo}
                  alt={pageConfig.title}
                  width={260}
                  height={100}
                  priority={true}
                />
              </Link>
            </div>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center p-2 text-white"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Menü öffnen"
            >
              <Bars3Icon className="h-8 w-8" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-4 xl:gap-x-6">
            {menuItems.map(
              (item) =>
                !item.disabled && (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-md leading-8 font-semibold text-white drop-shadow-lg transition-colors hover:text-blue-200 ${
                      isActive(item.href) ? "border-b-2 border-white" : ""
                    }`}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ),
            )}
            <Link
              href="/anfahrt"
              className="inline-flex items-center rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-sky-500"
              aria-label="Kontakt aufnehmen"
            >
              <PhoneIcon className="mr-1 h-4 w-4" aria-hidden="true" />
              Kontakt
            </Link>
          </div>
        </nav>
        <Dialog
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50 bg-black/25" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="-m-1.5 p-1.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  Hundefreunde Herzogenrath e.V.
                </h3>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Menü schließen"
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {menuItems.map(
                    (item) =>
                      !item.disabled && (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`-mx-3 block rounded-lg px-3 py-2 text-base leading-7 font-semibold transition-colors hover:bg-gray-50 ${
                            isActive(item.href)
                              ? "bg-blue-50 text-blue-600"
                              : "text-gray-900"
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                          aria-current={
                            isActive(item.href) ? "page" : undefined
                          }
                        >
                          {item.name}
                        </Link>
                      ),
                  )}
                  <div className="border-t border-gray-200 pt-4">
                    <Link
                      href="/anfahrt"
                      className="flex items-center justify-center rounded-lg bg-sky-600 px-4 py-3 text-base font-semibold text-white transition-colors hover:bg-sky-500"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <PhoneIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                      Kontakt aufnehmen
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </div>

      {children}
    </header>
  );
}
