import { Heading, HStack, IconButton, Link, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

import { Form } from '@/components/form';
import { IMod } from '@/types/IMod';

const getData = async () => {
  const data = await fetch('https://dolphin-app-u66b7.ondigitalocean.app/steam', {
    method: 'GET',
    next: {
      tags: ['mods'],
    },
  });
  return data.json();
};

export default async function Home() {
  const data: IMod[] = await getData();
  return (
    <VStack padding={6}>
      <Heading>Consulta mods por ID</Heading>
      <HStack spacing="0" justify="space-between" width="100%" padding={4}>
        <HStack flex={1} justify="center" align="center">
          <Form />
        </HStack>
      </HStack>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={4} alignItems="flex-start" textAlign="justify">
        {data.map((mod) => (
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
                as={Link}
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
          </VStack>
        ))}
      </SimpleGrid>
    </VStack>
  );
}
