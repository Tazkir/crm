'use client';

import { useEffect, useState } from 'react';

import { User, columns } from './columns';
import { DataTable } from './data-table';

import { faker } from '@faker-js/faker';
import { Button } from '@/components/ui/button';
import AddUser from '../AddUser/page';

// Function to get data (users) either from local storage or generate fake data
async function getData(): Promise<User[]> {
  // Create static data since using local storage
  const fakeData: User[] = [
    // Creating a user object with random properties using faker library
    {
      id: faker.string.uuid().slice(0, 8),
      name: faker.person.firstName(),
      contact: faker.phone.number().slice(0, 13),
      avatar: faker.image.avatar(),
      organization: faker.company.name(),
      assigned: faker.person.firstName(),
      status: faker.helpers.arrayElement(['active', 'inactive']),
      createdAt: faker.date.recent().toLocaleString(),
    },
    {
      id: faker.string.uuid().slice(0, 8),
      name: faker.person.firstName(),
      contact: faker.phone.number().slice(0, 13),
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

    // Return existing data from local storage along with fake data
    return [...fakeData, ...parsedData];
  }

  // Return only fake data if no data is stored in local storage
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

  // Function to fetch data from a source (in this case, using getData function)
  const fetchData = async () => {
    const fetchedData = await getData();
    setData(fetchedData);
  };

  // Function to handle the refresh button click
  const handleRefresh = () => {
    fetchData();
  };

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-end items-end py-5 gap-3">
        {/* Button component with variant "outline" and click event handler */}
        <Button variant="outline" id="refresh" onClick={handleRefresh}>
          Refresh
        </Button>
        {/* Component to add a new user */}
        <AddUser />
      </div>

      {/* Data table component to display the user data */}
      <DataTable columns={columns} data={data} />
    </div>
  );
}
