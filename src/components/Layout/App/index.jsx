import {
  Avatar,
  Button,
  Container,
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Skeleton,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import { PrivateRoute } from '../../Private';
import { FiLogOut, FiMoon, FiSun, FiChevronDown } from 'react-icons/fi';
import { NAVBAR_HEIGHT } from '../../../data/config';

export function AppLayout() {
  const { user, signOut } = useAuth();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <PrivateRoute>
      <Container maxW="container.xl">
        {/* Navbar */}
        <Flex
          height={NAVBAR_HEIGHT}
          justify="space-between"
          alignItems="center"
        >
          <Image src="/logo.png" h={10} />

          {/* Space */}

          <Flex gap={2}>
            <IconButton
              onClick={toggleColorMode}
              icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
            />

            {user ? (
              // <Text>asdsa</Text>
              <Menu>
                <MenuButton as={Button} rightIcon={<FiChevronDown />}>
                  {user.name}
                </MenuButton>
                <MenuList>
                  <Flex px={4} gap={2} alignItems="center">
                    <Avatar src={user.avatar} size="sm" />
                    <Text>{user.name}</Text>
                  </Flex>
                  <MenuDivider />
                  <MenuItem as={Link} to="/profile">
                    Editar dados
                  </MenuItem>
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
              <Skeleton />
            )}
          </Flex>
        </Flex>

        {/* Conteúdo */}
        <Outlet />
      </Container>
    </PrivateRoute>
  );
}
