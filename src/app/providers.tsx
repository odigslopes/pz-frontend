// app/providers.tsx
'use client';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { Fragment } from 'react';

import { theme } from '@/theme/theme';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      <ColorModeScript />
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </Fragment>
  );
}
