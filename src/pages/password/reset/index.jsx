import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Stack,
  Text,
  Link,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { PasswordInput } from '../../../components/PasswordInput';
import { useResetPasswordLogic } from './logic';

export function ResetPasswordPage() {
  const { handleSubmit, errors } = useResetPasswordLogic();

  return (
    <Stack>
      <Box>
        <Heading>Recupere a sua senha!</Heading>
        <Text>Digite a sua nova senha para concluir a recuperação</Text>
      </Box>

      <form onSubmit={handleSubmit}>
        <Stack>
          <FormControl isInvalid={!!errors.password}>
            <FormLabel>Senha</FormLabel>
            <PasswordInput placeholder="Senha" name="password" />
            <FormErrorMessage>{errors.password}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.password}>
            <FormLabel>Confirmar senha</FormLabel>
            <PasswordInput
              placeholder="Confirmar senha"
              name="confirmPassword"
            />
            <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>
          </FormControl>

          <Button type="submit">Resetar a senha</Button>
        </Stack>
      </form>

      <Center>
        <Link as={RouterLink} to="/login">
          Voltar para login
        </Link>
      </Center>
    </Stack>
  );
}
