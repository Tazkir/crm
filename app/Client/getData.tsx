import { faker } from '@faker-js/faker';
import { User } from './columns';

// Function to get data (users) either from local storage or generate fake data as reusable component

export async function getData(): Promise<User[]> {
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
      status: faker.helpers.arrayElement(['ACTIVE', 'INACTIVE']),
      createdAt: faker.date.recent().toLocaleString(),
    },
    {
      id: faker.string.uuid().slice(0, 8),
      name: faker.person.firstName(),
      contact: faker.phone.number().slice(0, 13),
      avatar: faker.image.avatar(),
      organization: faker.company.name(),
      assigned: faker.person.firstName(),
      status: faker.helpers.arrayElement(['ACTIVE', 'INACTIVE']),
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
