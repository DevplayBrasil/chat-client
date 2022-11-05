import { Button, Container, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <Container>
      <Heading>Pagina inicial</Heading>
      <Text>Seja bem vindo</Text>

      <Link to="/login">
        <Button>Ir para login</Button>
      </Link>
    </Container>
  );
}
