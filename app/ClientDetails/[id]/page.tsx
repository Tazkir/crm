'use client';

import { User } from '@/app/Client/columns';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function ClientDetails() {
  const [client, setClient] = useState<User | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const storedData = localStorage.getItem('clients');
    if (storedData) {
      const clients = JSON.parse(storedData);

      const selectedClient = clients.find((i: User) => i.id === id);

      setClient(selectedClient);
    }
  }, [id]);

  if (!client) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div key={client.id} className="flex flex-col items-center">
      <p>Name: {client.name}</p>
      <p>Contact Info: {client.contact}</p>
      <p>Organization: {client.organization}</p>
      <p>Assigned To: {client.assigned}</p>
      <p>Status: {client.status}</p>
      <p>Created At: {client.createdAt}</p>
    </div>
  );
}
