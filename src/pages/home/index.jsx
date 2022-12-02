import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export function HomePage() {
  const { user } = useAuth();

  return (
    <Box>
      <Heading>Pagina inicial</Heading>
      <Text>Seja bem vindo {user?.name}</Text>

      <Link to="/login">
        <Button>Já tem uma conta?</Button>
      </Link>

      <Link to="/register">
        <Button>Fazer o cadastro</Button>
      </Link>
    </Box>
  );
}
