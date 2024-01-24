'use client';

import { Button, useColorMode } from '@chakra-ui/react';
import { Moon } from 'lucide-react';

export function ColorMode() {
  const { toggleColorMode } = useColorMode();
  return (
    <Button margin={6} padding={4} onClick={toggleColorMode} bg="#3AD5F8" color="white" size="sm">
      <Moon size={20} />
    </Button>
  );
}
