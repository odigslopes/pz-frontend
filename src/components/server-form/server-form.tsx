'use client';

import { Button, FormControl, FormErrorMessage, FormLabel, Input, VStack } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowDownToLine } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { revalidate } from '@/helpers';

const createServerSchema = z.object({
  serverName: z.string().min(1, { message: 'Forneça um nome para o servidor.' }),
  ipAddress: z.string().ip({ message: 'Forneça um endereço IP válido.' }),
  port: z.string().refine(
    (str) => {
      const parsedPort = parseInt(str, 10);
      return !isNaN(parsedPort) && Number.isInteger(parsedPort);
    },
    { message: 'Forneça um número de porta válido.' }
  ),
});

type createServerData = z.infer<typeof createServerSchema>;

export function ServerForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createServerData>({
    resolver: zodResolver(createServerSchema),
  });
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsLoading(true);
      const payload = {
        ...data,
        port: Number(data.port),
      };
      await fetch('https://dolphin-app-u66b7.ondigitalocean.app/server-configurations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      revalidate({ tag: 'server' });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  });

  return (
    <VStack
      as="form"
      onSubmit={onSubmit}
      padding={4}
      margin={4}
      borderWidth="2px"
      borderColor="gray.400"
      borderRadius={8}
    >
      <FormControl isInvalid={!!errors.serverName}>
        <FormLabel>Nome do servidor</FormLabel>
        <Input
          {...register('serverName')}
          placeholder="Digite o nome do servidor"
          _placeholder={{ color: '#FCF7F8' }}
        />
        <FormErrorMessage>{errors.serverName?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.ipAddress}>
        <FormLabel>Endereço de IP</FormLabel>
        <Input {...register('ipAddress')} placeholder="Digite o IP" _placeholder={{ color: '#FCF7F8' }} />
        <FormErrorMessage>{errors.ipAddress?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.port}>
        <FormLabel>Porta do servidor</FormLabel>
        <Input {...register('port')} placeholder="Digite a porta" _placeholder={{ color: '#FCF7F8' }} />
        <FormErrorMessage>{errors.port?.message}</FormErrorMessage>
      </FormControl>
      <Button bg="#3AD5F8" color="white" size="sm" type="submit" isLoading={isLoading}>
        <ArrowDownToLine size={20} />
      </Button>
    </VStack>
  );
}
