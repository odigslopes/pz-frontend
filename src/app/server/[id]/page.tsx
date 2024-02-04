import { Text, VStack } from '@chakra-ui/react';
import { Heading } from 'lucide-react';

import { Mods } from '@/components/mods';
import { getSteamData } from '@/lib/api-service';
import { IServer } from '@/types/IServer';

const getData = async (id: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/server-configurations/${id}`, {
    method: 'GET',
    next: {
      tags: [`server-configurations-${id}`],
    },
  });

  return response.json();
};

export default async function ServerIdPage({ params }: { params: { id: string } }) {
  const data: IServer = await getData(params.id);
  const availableMods = await getSteamData();

  return (
    <VStack>
      <Heading> {data.serverName}</Heading>
      <Text>
        {data.ipAddress}:{data.port}
      </Text>
      <Mods mods={availableMods} serverId={data.id} serverMods={data.steamMods} />
    </VStack>
  );
}
