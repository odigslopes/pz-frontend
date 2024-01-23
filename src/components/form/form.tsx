'use client';

import { FormControl, FormLabel, IconButton, Input, VStack } from '@chakra-ui/react';
import { PlusSquare } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { revalidate } from '@/helpers';

export function Form() {
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsLoading(true);
      const payload = {
        ...data,
        workshopId: Number(data.workshopId),
      };

      await fetch('https://dolphin-app-u66b7.ondigitalocean.app/steam', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      revalidate();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  });

  return (
    <VStack as="form" onSubmit={onSubmit}>
      <FormControl>
        <FormLabel>Digite workshopID</FormLabel>
        <Input {...register('workshopId')} placeholder="workshopID" />
      </FormControl>
      <IconButton
        size="lg"
        aria-label="digite o id do mod"
        icon={<PlusSquare size={20} />}
        type="submit"
        isLoading={isLoading}
      />
    </VStack>
  );
}
