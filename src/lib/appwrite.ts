import { Account, Client } from 'appwrite';

export const client = new Client();

client.setEndpoint('https://cloud.appwrite.io/v1').setProject('logistics-management-game'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
