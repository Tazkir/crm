This is Frontend developer technical assessment.

Create an application for managing your clients (CRM). A user should be able to add a new
client and view all the clients they have in their system.

# Introduction

For Live Demo visit here https://crm-amber.vercel.app/

## Tech Stack or library

- NEXTjs 13 (app route)
- Tailwind Css
- Typescript
- Shadcn
- TanStack
- Fakerjs

## Installation

```bash
git clone git@github.com:Tazkir/crm.git
cd crm
npm install
npm run dev
```

## Getting Started

- app/page.tsx = Home page where it render table client list component.
- app/Client/page.tsx = Client list Data Table component.
- app/Client/dataTable.tsx = Reusable component provide by shadcn.
- app/Client/columns.tsx = Define coloum and row data type for the data table.
- app/AddUser/page.tsx = Button and modal dialog for adding new client details.
- app/ClientDetails/[id]/page.tsx = Dynamic route where display client details page.

### Instruction

To begin with, the data table is initially populated with two randomly generated static fake data entries. If you wish to add a new client, simply click on the "New Client" button, which will open a dialog form where you can enter the client's details. Once you have filled out the form, click the "Save Changes" button, then close the dialog. To ensure that the latest data is displayed, click the refresh button.

To view the details of a specific client, locate the row in the table and click on the actions button, which is located at the far right. From the dropdown menu, select "User Details" to access the client's detailed information. If you want to mark the client as inactive, click the "Inactive" button. Remember to click the refresh button at the top of the data table to reflect the latest changes.

For sorting the data based on the status and creation date, simply click on the respective column in the data table. Clicking on the column with an arrow icon will sort the data in ascending order, while clicking again will sort it in descending order.

## Improvement

- Fix overflow table mobile responsive screen.
- Use filter instead of sorting createdAt row.
