import { Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { Server } from 'lucide-react';

import { ServerForm } from '@/components/server-form';
import { IServer } from '@/types/IServer';

const getData = async () => {
  const data = await fetch('https://dolphin-app-u66b7.ondigitalocean.app/server-configurations', {
    method: 'GET',
    next: {
      tags: ['server'],
    },
  });
  return data.json();
};

export default async function ServerPage() {
  const data: IServer[] = await getData();
  return (
    <VStack spacing={4} padding={6} align="center">
      <Heading>Servidor</Heading>
      <ServerForm />
      <VStack align="start" spacing={4}>
        {data.map((server) => (
          <HStack
            key={server.id}
            spacing={4}
            padding={2}
            width="300px"
            align="start"
            borderWidth="2px"
            borderColor="gray.400"
            borderRadius={8}
          >
            <Server color="#3AD5F8" size={20} />
            <VStack align="start" spacing={2}>
              <Heading as="h1" size="xs" textTransform="uppercase">
                {server.serverName}
              </Heading>
              <Text>
                IP: {server.ipAddress}:{server.port}
              </Text>
            </VStack>
          </HStack>
        ))}
      </VStack>
    </VStack>
  );
}
