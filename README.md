This is Frontend developer technical assessment.

Create an application for managing your clients (CRM). A user should be able to add a new
client and view all the clients they have in their system.

# Introduction

For Live Demo visit here https://crm-amber.vercel.app/

## Tech Stack or library

- NEXTjs 13 (app route)
- Tailwind Css
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

Firstly the data table set with two random static fake data. To add new client data, click on New Client Button and it will pop a dialog form for client details. Fill the form and click Save Changes button after that close the dialog and click refresh button to update latest data. To view Client Details click the actions button on the far right row and click User Details. If the client inactive, just click the inactive button and click refresh button top of the data table for lastest change. For sorting status and create date, click the row data table with arrow icon for ascending and click back for decending the data.

## Improvement

- Fix table mobile responsive screen.
- Use filter instead of sorting createdAt row.
