"use client";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import PageBaseConfiguration from "@/configuration";

import Logo from "@/public/theme/logo.png";

export interface HeaderItem {
  name: string;
  href: string;
}

export default function Header({ menuItems }: { menuItems: HeaderItem[] }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pageConfig = PageBaseConfiguration();

  return (
    <header className="absolute inset-x-0 top-0 z-50 mx-auto max-w-screen-2xl">
      <nav
        className="flex items-center justify-between px-6 pt-4 2xl:px-0"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <div className="-m-1.5 p-1.5">
            <span className="sr-only">{pageConfig.title}</span>
            <Image
              className="h-10 w-auto"
              src={Logo}
              alt={pageConfig.title}
              width={260}
            />
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center p-2 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Öffne Menü</span>
            <Bars3Icon className="h-8 w-8" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-10 xl:gap-x-12">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-md font-semibold leading-6 text-white drop-shadow-lg"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <h3>Hundefreunde Herzogenrath e.V.</h3>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
