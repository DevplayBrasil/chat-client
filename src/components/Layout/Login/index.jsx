import { Box, Center, Container, Image, Text } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

export function LoginLayout() {
  return (
    <Container>
      <Center h="100vh" flexDirection="column" justifyContent="space-between">
        <Image src="/logo.png" h={50} my={50} />

        <Box py={10} px={8} rounded="lg" bg="gray.50">
          <Outlet />
        </Box>

        <Box my={50}>
          <Text>@thumendess - DevPlay</Text>
        </Box>
      </Center>
    </Container>
  );
}
