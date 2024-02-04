'use client';

import { FormControl, FormLabel, IconButton, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react';
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

      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/steam`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      revalidate({ tag: 'mods' });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  });

  return (
    <VStack as="form" onSubmit={onSubmit}>
      <FormControl>
        <FormLabel fontSize="xs" color="#FCF7F8">
          Workshop ID
        </FormLabel>
        <InputGroup>
          <Input
            {...register('workshopId')}
            fontSize="xs"
            placeholder="Insira o Workshop ID"
            _placeholder={{ color: '#FCF7F8' }}
          />
          <InputRightElement>
            <IconButton
              bg="#3AD5F8"
              color="white"
              size="md"
              aria-label="digite o id do mod"
              icon={<PlusSquare size={20} />}
              type="submit"
              isLoading={isLoading}
              borderLeftRadius="none"
            />
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </VStack>
  );
}
