import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
const Modal = ({title,children, isOpen,setIsOpen,className}) => {

  function closeModal() {
    setIsOpen(false);
  }


  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
            
              <Dialog.Panel className={` transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all  ${className}`}>
              <div className="mb-4 absolute top-0 right-0 text-end">
                  <button
                    type="button"
                    className="  rounded-md border border-transparent bg-[#FFE2DA] px-4 py-2 font-bold text-[#7A5542] hover:bg-[#FFCCB3] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    X
                  </button>
                </div>
                <Dialog.Title
                  as="h3"
                  className="text-lg mb-4 font-semibold leading-6 text-[#7A5542]"
                >
                  {title}
                </Dialog.Title>
                <div className="mt-2">
                  {children}
                </div>

                
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
