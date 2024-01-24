import { Flex } from '@chakra-ui/react';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `Mods Project Zomboid`,
  description: `apresentação de lista de mods para project zomboid`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <Flex direction="column" minHeight="100vh">
            {children}
          </Flex>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
