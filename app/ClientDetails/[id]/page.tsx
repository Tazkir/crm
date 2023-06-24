'use client';

import { User } from '@/app/Client/columns';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function ClientDetails() {
  const [client, setClient] = useState<User | null>(null);

  // Set id based on url client id
  const { id } = useParams();

  useEffect(() => {
    const storedData = localStorage.getItem('clients');
    if (storedData) {
      const clients = JSON.parse(storedData);

      // Match the id from local storage
      const selectedClient = clients.find((i: User) => i.id === id);

      // Set selected client into state
      setClient(selectedClient);
    }
  }, [id]);

  // If client data is not available yet, show a loading message
  if (!client) {
    return (
      <div className="flex flex-col items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div key={client.id} className="flex flex-col justify-center gap-5 text">
      <p>ID: {client.id}</p>
      <p>Name: {client.name}</p>
      <p>Contact Info: {client.contact}</p>
      <p>Organization: {client.organization}</p>
      <p>Assigned To: {client.assigned}</p>
      <p>Status: {client.status}</p>
      <p>Created At: {client.createdAt}</p>
    </div>
  );
}
