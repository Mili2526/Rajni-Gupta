import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="bg-secondary text-primary inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-1.5  font-semibold shadow-sm">
          Rajni Gupta
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-primary"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-[60] right-0 mt-2 w-56 origin-top-right rounded-md shadow-lg focus:outline-none">
          <div className="py-1 bg-secondary">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/about"
                  className= " text-primary block px-4 py-2 font-medium hover:bg-gray-200"
                >
                  About
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/educationalQualifications"
                  className= " text-primary block px-4 py-2 font-medium hover:bg-gray-200 "
                >
                  Qualifications
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/experience"
                  className= " text-primary block px-4 py-2 font-medium hover:bg-gray-200"
                >
                  Experience
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/timelines"
                  className= " text-primary block px-4 py-2 font-medium hover:bg-gray-200"
                >
                  Timelines
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
