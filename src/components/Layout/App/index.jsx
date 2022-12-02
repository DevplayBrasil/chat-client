import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import { PrivateRoute } from '../../Private';
import { FiLogOut, FiUser } from 'react-icons/fi';

export function AppLayout() {
  const { user, signOut } = useAuth();

  return (
    <PrivateRoute>
      <Box bg="gray.100" p={4}>
        <Container maxW="container.xl">
          <Flex justify="space-between">
            <Image src="/logo.png" h={10} />

            {user ? (
              // <Text>asdsa</Text>
              <Menu>
                <MenuButton
                  colorScheme="gray"
                  as={Button}
                  rightIcon={<FiUser />}
                >
                  {user.name}
                </MenuButton>
                <MenuList>
                  <MenuItem>Editar dados</MenuItem>
                  <MenuItem
                    onClick={signOut}
                    display="flex"
                    justifyContent="space-between"
                  >
                    Sair <FiLogOut />
                  </MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <Button>Fazer login</Button>
            )}
          </Flex>
        </Container>
      </Box>

      <Container maxW="container.xl">
        <Outlet />
      </Container>
    </PrivateRoute>
  );
}
