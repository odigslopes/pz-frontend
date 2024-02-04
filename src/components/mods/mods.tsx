'use client';

import { Button, Heading, HStack, IconButton, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import NextLink from 'next/link';

import { revalidate } from '@/helpers';
import { IMod } from '@/types/IMod';

interface ModsProps {
  mods: IMod[];
  preview?: boolean;
  serverId?: string;
  isEnabled?: boolean;
  serverMods?: IMod[];
}

export function Mods({ mods, preview = false, serverId = undefined, serverMods = [] }: ModsProps) {
  const handleAddMod = async (modId: string) => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/server-configurations/${serverId}/steam-mods/${modId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      revalidate({ tag: `server-configurations-${serverId}` });
    } catch (error) {
      console.log('nao deu');
    }
  };

  const verifyIfModExistsOnServer = (modId: string) => {
    return serverMods.some((mod) => mod.id === modId);
  };

  return (
    <SimpleGrid columns={[1, 2, 3, 4]} spacing={4} alignItems="flex-start" textAlign="justify">
      {mods.map((mod) => (
        <VStack
          key={mod.id}
          height="100%"
          spacing={4}
          padding={4}
          borderWidth="2px"
          borderColor="gray.400"
          borderRadius={8}
        >
          <Image src={mod.imageUrl} width={120} height={120} alt="image avatar" />
          <HStack>
            <Heading as="h1" size="sm" textTransform="uppercase">
              {mod.title}
            </Heading>
            <IconButton
              color="#3AD5F8"
              as={NextLink}
              variant="ghost"
              aria-label="..."
              href={mod.workshopUrl}
              target="_blank"
              icon={<ExternalLink />}
            />
          </HStack>
          <Text flexGrow={1} noOfLines={3} fontSize="sm">
            {mod.description}
          </Text>
          {!preview && serverId && !verifyIfModExistsOnServer(mod.id) ? (
            <Button onClick={() => handleAddMod(mod.id)} colorScheme="blue" size="sm">
              Adicionar ao servidor
            </Button>
          ) : (
            <Button colorScheme="blue" size="sm" disabled>
              Remover do servidor
            </Button>
          )}
          {verifyIfModExistsOnServer(mod.id) && <Text>Mod instalado no servidor</Text>}
        </VStack>
      ))}
    </SimpleGrid>
  );
}
