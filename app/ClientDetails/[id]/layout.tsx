'use client';

import React from 'react';
import ClientDetails from './page';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export const metadata = {
  title: 'Client Details',
  description: 'Client Details Information',
};

function RootLayout() {
  const { id } = useParams();
  return (
    <div className="flex flex-col min-h-screen justify-center items-center gap-5">
      <div className="bg-slate-400/20 rounded-2xl p-2">
        <Link href="/" className="text-lg font-bold">
          &lt; back
        </Link>
        <h1 className="text-3xl">Client Details: {id}</h1>
      </div>
      <ClientDetails />
    </div>
  );
}

export default RootLayout;
