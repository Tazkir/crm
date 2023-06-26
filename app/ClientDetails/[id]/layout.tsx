import React from 'react';
import ClientDetails from './page';
import Link from 'next/link';

export const metadata = {
  title: 'Client Details',
  description: 'Client Details Information',
};

function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center gap-5">
      <div className="bg-slate-400/20 rounded-2xl p-2">
        <Link href="/" className="text-lg font-bold">
          back
        </Link>
        <h1 className="text-3xl">Client Details</h1>
      </div>
      <ClientDetails />
    </div>
  );
}

export default RootLayout;
