import { User } from './columns';

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

export { activehandle, inactivehandle };
