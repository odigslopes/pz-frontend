'use server';

import { IMod } from '@/types/IMod';

export const getSteamData = async (): Promise<IMod[]> => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/steam`, {
    method: 'GET',
    next: {
      tags: ['mods'],
    },
  });
  return data.json();
};
