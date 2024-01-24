import { Box, HStack, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

import { ColorMode } from '../color-mode';

export function Header() {
  return (
    <HStack align="center" position="sticky" top={0} bg="#0D0221" zIndex="sticky" justify="space-between" height="80px">
      <HStack padding={2} margin="auto" spacing={2}>
        <Link
          as={NextLink}
          href="/"
          padding={2}
          borderWidth="1px"
          borderRadius={10}
          borderColor="gray.400"
          fontSize="xl"
          color="gray.400"
          fontWeight="bold"
        >
          Mods
        </Link>
        <Link
          as={NextLink}
          href="/server"
          padding={2}
          borderWidth="1px"
          borderRadius={10}
          borderColor="gray.400"
          fontSize="xl"
          color="gray.400"
          fontWeight="bold"
        >
          Servidor
        </Link>
      </HStack>
      <Box position="absolute" right={0}>
        <ColorMode />
      </Box>
    </HStack>
  );
}
