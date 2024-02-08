import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";

import ButtonIcon from "@components/Buttons/BottonIcon.tsx";

import { navigation } from "@utils/constants";

import LogoIcon from "@assets/svgs/logo.svg";
import PawsIcon from "@assets/svgs/paws.svg";

export default function Header(): JSX.Element {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="container z-20 mx-auto bg-white md:mt-2 md:rounded lg:mt-2 lg:rounded">
      <nav
        className="flex items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <>
              <span className="sr-only">FindPet</span>
              <img className="h-10 w-auto" src={LogoIcon} alt="find-pet" />
            </>
          </Link>
        </div>
        {!mobileMenuOpen && (
          <div className="flex lg:hidden">
            <button
              type="button"
              className="text-gray-700 -m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="size-6" aria-hidden="true" />
            </button>
          </div>
        )}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm text-gray-900 font-semibold leading-6"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <ButtonIcon
            icon={<img src={PawsIcon} className="w-8" alt="paws" />}
            text="Log in"
            className="gap-x-1"
            onClick={() => {
              navigate({ to: "/" });
            }}
          />
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-30 backdrop-blur" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-30 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="#" className="-m-1.5 p-1.5">
              <>
                <span className="sr-only">FindPet</span>
                <img
                  className="h-10 w-auto"
                  src={LogoIcon}
                  alt="find-pet-logo"
                />
              </>
            </Link>
            <button
              type="button"
              className="text-gray-700 -m-2.5 rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="size-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-base text-gray-900 -mx-3 block rounded-lg px-3 py-2 font-semibold leading-7 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <ButtonIcon
                  icon={<img src={PawsIcon} alt="paws" />}
                  text="Log in"
                />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
