import { Heading, HStack, VStack } from '@chakra-ui/react';

import { Form } from '@/components/form';
import { Mods } from '@/components/mods';
import { getSteamData } from '@/lib/api-service';
import { IMod } from '@/types/IMod';

export default async function Home() {
  const data: IMod[] = await getSteamData();

  return (
    <VStack padding={6}>
      <Heading>Consulta mods por ID</Heading>
      <HStack spacing="0" justify="space-between" width="100%" padding={4}>
        <HStack flex={1} justify="center" align="center">
          <Form />
        </HStack>
      </HStack>
      <Mods mods={data} preview />
    </VStack>
  );
}
