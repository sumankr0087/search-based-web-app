import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

const UserDetailsModal = ({ user, onClose }) => (
  <Dialog.Root open={!!user} onOpenChange={onClose}>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
      <Dialog.Content className="fixed top-1/2 left-1/2 w-[424px] bg-white p-6 rounded-lg shadow-lg -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-between items-center">
          <div className="text-[24px] font-semibold">Fetch Details</div>
          <button
            onClick={onClose}
            className="text-[#09090B] p-2 text-base font-medium md:hidden"
          >
            X
          </button>
        </div>

        <div className="w-[424px] h-[17px] mt-2 text-[14px] font-normal text-[#71717A] text-left">
          Here are the details of the following employee.
        </div>

        <div className="mt-4 text-sm font-medium">
          <p>Name: {`${user.first_name} ${user.last_name}`}</p>
          <p>Location: {user?.city}</p>
          <p>Contact Number: {user?.contact_number}</p>
          <div className="mt-1">
            Profile Image:
            <img src="/Rectangle 1.png" alt="User" className="mt-2" />
          </div>
        </div>

        <div className="mt-6 text-right hidden md:block">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-[#09090B] rounded border"
          >
            Close
          </button>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default UserDetailsModal;
