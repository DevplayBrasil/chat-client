import {
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  Skeleton,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { PasswordInput } from '../../components/PasswordInput';
import { useCallback } from 'react';
import { api } from '../../services/api';
import { useState } from 'react';
import { AxiosError } from 'axios';

const initialPasswordErrors = {
  oldPassword: '',
  newPassword: '',
  confirmPassword: '',
};

export function ProfilePage() {
  const navigate = useNavigate();
  const cardBg = useColorModeValue('gray.50', 'gray.700');
  const [nameError, setNameError] = useState();
  const [passwordErrors, setPasswordErrors] = useState(initialPasswordErrors);
  const { user, refreshUser } = useAuth();
  const avatarInputRef = useRef();
  const toast = useToast({ position: 'top' });

  const handleSelectAvatar = useCallback(
    async (event) => {
      if (!user) return;

      const file = event.target.files?.[0];
      if (!file) return;

      const formData = new FormData();
      formData.append('avatar', file);

      try {
        const { data: response } = await api.put(
          `/users/${user.id}/avatar`,
          formData
        );

        if (response) {
          toast({ title: 'Avatar atualizado!', status: 'success' });
        }

        await refreshUser();
      } catch (error) {
        toast({ title: 'Houve um erro!', status: 'error' });
      }

      event.target.value = '';
    },
    [user]
  );

  const handleUpdatePassword = useCallback(
    async (event) => {
      event.preventDefault();
      if (!user) return;

      const { elements } = event.target;
      const data = {
        oldPassword: elements.oldPassword.value,
        newPassword: elements.newPassword.value,
        confirmPassword: elements.confirmPassword.value,
      };

      const validateErrors = {};

      if (!data.oldPassword)
        validateErrors.oldPassword = 'O campo senha antiga é obrigatório!';
      if (!data.newPassword)
        validateErrors.newPassword = 'O campo nova senha é obrigatório!';
      if (!data.confirmPassword)
        validateErrors.confirmPassword =
          'O campo confirmar senha é obrigatório!';
      if (data.confirmPassword !== data.newPassword)
        validateErrors.confirmPassword =
          'O campo confirmar senha, está diferente!';

      if (Object.keys(validateErrors).length > 0) {
        setPasswordErrors(validateErrors);
        return;
      }

      const payload = {
        oldPassword: data.oldPassword,
        newPassword: data.newPassword,
      };

      try {
        const { data: response } = await api.put(
          `/users/${user.id}/password`,
          payload
        );

        if (response) {
          toast({ title: 'Senha atualizada com sucesso!', status: 'success' });
        }
      } catch (error) {
        if (error instanceof AxiosError) {
          toast({
            title: error.response.data.msg,
            description: 'Confira os dados enviados!',
            status: 'error',
          });
        }
      }
    },
    [user]
  );

  const handleUpdateName = useCallback(
    async (event) => {
      event.preventDefault();
      if (!user) return;

      const { elements } = event.target;

      const data = {
        name: elements.name.value,
      };

      if (user.name === data.name) return;
      if (!data.name) return setNameError('Nome é obrigatório!');
      setNameError(undefined);

      try {
        const { data: response } = await api.put(`/users/${user.id}`, data);

        if (response) {
          toast({ title: 'Nome atualizado!', status: 'success' });
        }

        await refreshUser();
      } catch (error) {
        toast({
          title: 'Houve um erro para atualizado o nome!',
          status: 'error',
        });
      }
    },
    [user]
  );

  return (
    <Stack>
      <Link onClick={() => navigate(-1)}>
        <HStack>
          <FiChevronLeft />
          <Text>Voltar</Text>
        </HStack>
      </Link>

      <Heading>Perfil</Heading>

      <Box rounded="lg" bg={cardBg}>
        {user ? (
          <Tabs>
            <TabList>
              <Tab>Editar perfil</Tab>
              <Tab>Alterar senha</Tab>
            </TabList>

            <TabPanels>
              <TabPanel p={10}>
                <form onSubmit={handleUpdateName}>
                  <Stack spacing={6}>
                    <HStack>
                      <Avatar src={user.avatar} />

                      <Stack>
                        <Heading size="md">{user.name}</Heading>

                        <Button
                          variant="link"
                          onClick={() =>
                            avatarInputRef.current &&
                            avatarInputRef.current.click()
                          }
                        >
                          Alterar a foto do perfil
                        </Button>
                      </Stack>
                    </HStack>

                    <Input
                      hidden
                      type="file"
                      name="avatar"
                      ref={avatarInputRef}
                      onChange={handleSelectAvatar}
                    />

                    <FormControl isInvalid={!!nameError}>
                      <FormLabel>Nome</FormLabel>
                      <Input
                        defaultValue={user.name}
                        name="name"
                        placeholder="Nome"
                      />
                      <FormErrorMessage>{nameError}</FormErrorMessage>
                    </FormControl>

                    <FormControl isDisabled>
                      <FormLabel>E-mail</FormLabel>
                      <Input defaultValue={user.email} placeholder="E-mail" />
                    </FormControl>

                    <Button alignSelf="start" type="submit">
                      Salvar
                    </Button>
                  </Stack>
                </form>
              </TabPanel>
              <TabPanel p={10}>
                <form onSubmit={handleUpdatePassword}>
                  <Stack spacing={6}>
                    <HStack>
                      <Avatar src={user.avatar} />
                      <Heading size="md">{user.name}</Heading>
                    </HStack>

                    <FormControl isInvalid={!!passwordErrors.oldPassword}>
                      <FormLabel>Senha antiga</FormLabel>
                      <PasswordInput
                        name="oldPassword"
                        placeholder="Senha antiga"
                      />
                      <FormErrorMessage>
                        {passwordErrors.oldPassword}
                      </FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={!!passwordErrors.newPassword}>
                      <FormLabel>Nova senha</FormLabel>
                      <PasswordInput
                        name="newPassword"
                        placeholder="Nova senha"
                      />
                      <FormErrorMessage>
                        {passwordErrors.newPassword}
                      </FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={!!passwordErrors.confirmPassword}>
                      <FormLabel>Confirmar nova senha</FormLabel>
                      <PasswordInput
                        name="confirmPassword"
                        placeholder="Confirmar nova senha"
                      />
                      <FormErrorMessage>
                        {passwordErrors.confirmPassword}
                      </FormErrorMessage>
                    </FormControl>

                    <Flex justify="space-between">
                      <Button alignSelf="start" type="submit">
                        Alterar senha
                      </Button>

                      <Link onClick={() => navigate('/password/forget')}>
                        Esqueceu sua senha?
                      </Link>
                    </Flex>
                  </Stack>
                </form>
              </TabPanel>
            </TabPanels>
          </Tabs>
        ) : (
          <Skeleton />
        )}
      </Box>
    </Stack>
  );
}
