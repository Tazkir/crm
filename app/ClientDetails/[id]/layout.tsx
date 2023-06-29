import React from 'react';
import ClientDetails from './page';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Client Details',
  description: 'Client Details Information',
};

function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center gap-5">
      <div className="flex flex-row items-center space-x-3 bg-slate-400/20 rounded-2xl p-2">
        <Link href="/" className="backbut text-lg font-bold">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-3xl">Client Details</h1>
      </div>
      <ClientDetails />
    </div>
  );
}

export default RootLayout;
