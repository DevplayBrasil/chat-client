import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  Link,
  Center,
  FormErrorMessage,
  HStack,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { PasswordInput } from '../../components/PasswordInput';
import { useRegisterLogic } from './logic';

export function RegisterPage() {
  const { errors, handleSubmit } = useRegisterLogic();

  return (
    <Stack spacing={8}>
      <Box>
        <Heading mb={2}>Cadastre-se</Heading>
        <Text>Faça sua conta agora para conversar com seus amigos</Text>
      </Box>

      <form onSubmit={handleSubmit}>
        <Stack>
          <FormControl isInvalid={!!errors.name}>
            <FormLabel>Nome</FormLabel>
            <Input placeholder="Nome" name="name" />
            <FormErrorMessage>{errors.name}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.email}>
            <FormLabel>E-mail</FormLabel>
            <Input type="email" placeholder="E-mail" name="email" />
            <FormErrorMessage>{errors.email}</FormErrorMessage>
          </FormControl>

          <HStack>
            <FormControl isInvalid={!!errors.password}>
              <FormLabel>Senha</FormLabel>
              <PasswordInput placeholder="Senha" name="password" />
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.confirmPassword}>
              <FormLabel>Confirmar senha</FormLabel>
              <PasswordInput
                placeholder="Confirmar senha"
                name="confirmPassword"
              />
              <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>
            </FormControl>
          </HStack>

          <Button type="submit">Criar conta</Button>
        </Stack>
      </form>

      <Center>
        <Link as={RouterLink} to="/login">
          Já tenho uma conta
        </Link>
      </Center>
    </Stack>
  );
}
