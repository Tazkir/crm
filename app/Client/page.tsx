'use client';

import { useEffect, useState } from 'react';

import { User, columns } from './columns';
import { DataTable } from './data-table';

import { Button } from '@/components/ui/button';
import { getData } from './getData';
import AddUser from '../AddUser/page';

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
    const fetchedData = (await getData()).reverse();
    setData(fetchedData);
  };

  // Function to handle the refresh button click
  const handleRefresh = () => {
    fetchData();
  };

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-end py-5 gap-3">
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
