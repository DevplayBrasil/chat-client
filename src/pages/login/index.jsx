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
  Flex,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { PasswordInput } from '../../components/PasswordInput';
import { useLoginLogic } from './logic';

export function LoginPage() {
  const { errors, handleSubmit } = useLoginLogic();

  return (
    <Stack spacing={8}>
      <Box>
        <Heading mb={2}>Fazer Login</Heading>
        <Text>Preencha os campos abaixo para entrar no chat</Text>
      </Box>

      <form onSubmit={handleSubmit}>
        <Stack>
          <FormControl isInvalid={!!errors.email}>
            <FormLabel>E-mail</FormLabel>
            <Input type="email" placeholder="E-mail" name="email" />
            <FormErrorMessage>{errors.email}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.password}>
            <FormLabel>Senha</FormLabel>
            <PasswordInput placeholder="Senha" name="password" />
            <FormErrorMessage>{errors.password}</FormErrorMessage>
          </FormControl>

          <Flex justify="end">
            <Link as={RouterLink} to="/password/forget">
              Esqueci minha senha
            </Link>
          </Flex>

          <Button type="submit">Entrar no chat</Button>
        </Stack>
      </form>

      <Center>
        <Link as={RouterLink} to="/register">
          Ainda não tenho conta
        </Link>
      </Center>
    </Stack>
  );
}
