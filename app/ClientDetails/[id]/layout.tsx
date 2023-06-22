import React from 'react';
import ClientDetails from './page';
import Link from 'next/link';

export const metadata = {
  title: 'Client Details',
  description: 'Client Details Information',
};

function RootLayout() {
  return (
    <div>
      <div className="flex flex-col min-h-screen justify-center items-center">
        <Link href="/" className="text-lg font-bold">
          Back
        </Link>
        <h1>Client Details</h1>
        <ClientDetails />
      </div>
    </div>
  );
}

export default RootLayout;
