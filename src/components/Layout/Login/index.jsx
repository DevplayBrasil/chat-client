import {
  Box,
  Center,
  Container,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

export function LoginLayout() {
  const blockBg = useColorModeValue('gray.50', 'gray.700');

  return (
    <Container>
      <Center h="100vh" flexDirection="column" justifyContent="space-between">
        <Image src="/logo.png" h={50} my={50} />

        <Box py={10} px={8} rounded="lg" bg={blockBg}>
          <Outlet />
        </Box>

        <Box my={50}>
          <Text>@thumendess - DevPlay</Text>
        </Box>
      </Center>
    </Container>
  );
}
