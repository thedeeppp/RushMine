'use client';

import React from 'react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

function AlertBox({ alertTitle, alertDescription, closeAlertBox }: any) {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <Alert
        variant="destructive"
        className="relative p-6 rounded-lg shadow-lg bg-gradient-to-r from-[#1A2C38] to-[#213743] text-white border border-[#557086] max-w-sm w-full"
      >
        <div className="flex flex-col items-center">
          <AlertTitle className="text-xl font-bold text-[#E63946] mb-2">
            {alertTitle}
          </AlertTitle>
          <AlertDescription className="text-sm text-[#a4bcd3] text-center mb-4">
            {alertDescription}
          </AlertDescription>
          <button
            onClick={closeAlertBox}
            className="px-4 py-2 bg-[#00E701] text-black rounded-md font-semibold hover:bg-[#1FFF20] transition duration-300"
          >
            Close
          </button>
        </div>
      </Alert>
    </div>
  );
}

export default AlertBox;
