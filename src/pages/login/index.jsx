import { Button, Container, Heading, Input, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export function LoginPage() {
  return (
    <Container>
      <Heading>Página do login</Heading>
      <Text>Insira seus dados</Text>

      <Input />

      <Link to="/">
        <Button>Ir para página inicial</Button>
      </Link>
    </Container>
  );
}
