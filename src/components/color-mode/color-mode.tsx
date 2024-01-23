'use client';

import { Button, useColorMode } from '@chakra-ui/react';

export function ColorMode() {
  const { toggleColorMode } = useColorMode();
  return <Button onClick={toggleColorMode}>Mude de cor</Button>;
}
