'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { faker } from '@faker-js/faker';

import { useEffect, useState } from 'react';
import { User } from '../Client/columns';

function AddUser() {
  const [clients, setClients] = useState<User[]>([]);

  // State variables to manage form input values
  const [id, setId] = useState(faker.string.uuid().slice(0, 8));
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [avatar, setAvatar] = useState('');
  const [organization, setOrganization] = useState('');
  const [assigned, setAssignedTo] = useState('');

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Create a new client object with the form data
    const newClient: User = {
      id,
      name,
      contact,
      avatar,
      organization,
      assigned,
      status: 'active',
      createdAt: new Date().toLocaleString(),
    };

    // Add the new client to the existing clients array
    const updatedClients = [...clients, newClient];
    setClients(updatedClients);

    // Save the updated client data to local storage
    localStorage.setItem('clients', JSON.stringify(updatedClients));

    // Reset form fields
    setId('');
    setName('');
    setContact('');
    setAvatar('');
    setOrganization('');
    setAssignedTo('');

    window.alert(
      'Successfully Added New Client! Refresh the table for the latest data.'
    );
  };

  useEffect(() => {
    const storedClients = localStorage.getItem('clients');
    if (storedClients) {
      const parsedClients: User[] = JSON.parse(storedClients);
      setClients(parsedClients);
    }
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">+ New Client</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Client</DialogTitle>
          <DialogDescription>
            Enter the client details. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="Id" className="text-right">
                ID
              </Label>
              <Input
                id="id"
                value={id}
                onChange={(e) => setId(e.target.value)}
                disabled
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="name col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="contact" className="text-right">
                Contact Info
              </Label>
              <Input
                id="contact"
                type="tel"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="contact col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="avatar" className="text-right">
                Avatar
              </Label>
              <Input
                id="avatar"
                type="file"
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="org" className="text-right">
                Organization
              </Label>
              <Input
                id="org"
                type="text"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                className="org col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="assigned" className="text-right">
                Assigned To
              </Label>
              <Input
                id="assigned"
                value={assigned}
                onChange={(e) => setAssignedTo(e.target.value)}
                className="assigned col-span-3"
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddUser;
