import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  Link,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { useForgetPasswordLogic } from './logic';

export function ForgetPasswordPage() {
  const { handleSubmit, error, loading } = useForgetPasswordLogic();

  return (
    <Stack>
      <Box>
        <Heading>Esqueceu sua senha?</Heading>
        <Text>Preencha seu e-mail para enviarmos um link para recuperação</Text>
      </Box>

      <form onSubmit={handleSubmit}>
        <Stack>
          <FormControl isInvalid={error}>
            <FormLabel>E-mail</FormLabel>
            <Input type="email" name="email" placeholder="E-mail" />
            <FormErrorMessage>Preencha o e-mail!</FormErrorMessage>
          </FormControl>

          <Button type="submit" isLoading={loading}>
            Enviar e-mail
          </Button>
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
