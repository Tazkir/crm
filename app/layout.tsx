import './globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata = {
  title: 'Client List',
  description: 'Client List Data Table',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
