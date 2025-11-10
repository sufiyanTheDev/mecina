import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import "./index.css";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-blue-600">React 19 + TS + JS + Tailwind + Radix</h1>

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Open Dialog
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-xl shadow-xl">
            <Dialog.Title className="text-xl font-semibold">Radix UI Dialog</Dialog.Title>
            <Dialog.Close asChild>
              <button className="mt-4 px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                Close
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default App;
