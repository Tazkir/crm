import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';

export type User = {
  id: string;
  name: string;
  contact: string;
  avatar: string;
  organization: string;
  assigned: string;
  status: 'active' | 'inactive';
  createdAt: string;
};

const activehandle = (event: React.FormEvent) => {
  event.preventDefault();
  const userId = event.currentTarget.getAttribute('data-user-id');

  // Retrieve data from local storage
  const storedData = localStorage.getItem('clients');
  if (storedData) {
    const clients = JSON.parse(storedData);

    // Find the user with the matching ID
    const updatedClients = clients.map((client: User) => {
      if (client.id === userId) {
        return {
          ...client,
          status: 'active',
        };
      }
      return client;
    });

    // Update the status in local storage
    localStorage.setItem('clients', JSON.stringify(updatedClients));

    window.alert('Status has change to Active. Please Refresh for latest data');
  }
};

const inactivehandle = (event: React.FormEvent) => {
  event.preventDefault();
  const userId = event.currentTarget.getAttribute('data-user-id');

  // Retrieve data from local storage
  const storedData = localStorage.getItem('clients');
  if (storedData) {
    const clients = JSON.parse(storedData);

    // Find the user with the matching ID
    const updatedClients = clients.map((client: User) => {
      if (client.id === userId) {
        return {
          ...client,
          status: 'inactive',
        };
      }
      return client;
    });

    // Update the status in local storage
    localStorage.setItem('clients', JSON.stringify(updatedClients));

    window.alert(
      'Status has change to Inactive. Please Refresh for latest data'
    );
  }
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'contact',
    header: 'Contact Info',
  },
  {
    accessorKey: 'organization',
    header: 'Organization',
  },
  {
    accessorKey: 'assigned',
    header: 'Assigned To',
  },
  {
    accessorKey: 'status',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'createdAt',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Created
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const client = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>
              <Link href={`/ClientDetails/${client.id}`}>Client Detail</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem
              className="cursor-pointer"
              data-user-id={client.id}
              onClick={activehandle}
            >
              Active
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer"
              data-user-id={client.id}
              onClick={inactivehandle}
            >
              Inactive
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
