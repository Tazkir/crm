'use client';

import { useEffect, useState } from 'react';

import { User, columns } from './columns';
import { DataTable } from './data-table';

import { faker } from '@faker-js/faker';
import { Button } from '@/components/ui/button';
import AddUser from '../AddUser/page';

async function getData(): Promise<User[]> {
  const fakeData: User[] = [
    {
      id: faker.string.uuid().slice(0, 8),
      name: faker.person.firstName(),
      contact: faker.phone.number(),
      avatar: faker.image.avatar(),
      organization: faker.company.name(),
      assigned: faker.person.firstName(),
      status: faker.helpers.arrayElement(['active', 'inactive']),
      createdAt: faker.date.recent().toLocaleString(),
    },
    {
      id: faker.string.uuid().slice(0, 8),
      name: faker.person.firstName(),
      contact: faker.phone.number(),
      avatar: faker.image.avatar(),
      organization: faker.company.name(),
      assigned: faker.person.firstName(),
      status: faker.helpers.arrayElement(['active', 'inactive']),
      createdAt: faker.date.recent().toLocaleString(),
    },
  ];

  const storedData = localStorage.getItem('clients');
  if (storedData) {
    const parsedData: User[] = JSON.parse(storedData);
    return [...fakeData, ...parsedData];
  }

  return fakeData;
}

export default function UserList() {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    const clientData = localStorage.getItem('client');
    if (clientData) {
      const parsedData: User = JSON.parse(clientData);
      setData([parsedData]);
    } else {
      // Fetch data from API or local source if no client data found in local storage
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    const fetchedData = await getData();
    setData(fetchedData);
  };

  const handleRefresh = () => {
    fetchData();
  };

  return (
    <div className="container w-full mx-auto py-10">
      <div className="flex justify-end items-end py-5 gap-3">
        <Button variant="outline" onClick={handleRefresh}>
          Refresh
        </Button>
        <AddUser />
      </div>

      <DataTable columns={columns} data={data} />
    </div>
  );
}
