import {
  Box,
  Button,
  Center,
  Heading,
  PinInput,
  PinInputField,
  Stack,
  Text,
  Link,
  HStack,
} from '@chakra-ui/react';
import { useConfirmRegisterLogic } from './logic';
import { Link as RouterLink } from 'react-router-dom';
import { CONFIRM_CODE_SIZE } from '../../../data/config';

export function ConfirmRegisterPage() {
  const { code, setCode, handleSubmit } = useConfirmRegisterLogic();

  return (
    <Stack spacing={8}>
      <Box>
        <Heading mb={2}>Confirme seu cadastro</Heading>
        <Text>
          Você recebeu em seu e-mail um código para confirmar o seu cadastro!
        </Text>
      </Box>

      <form onSubmit={handleSubmit}>
        <Stack>
          <Center mb={4}>
            <HStack align="center">
              <PinInput value={code} onChange={setCode} type="alphanumeric">
                {Array.from({ length: CONFIRM_CODE_SIZE }, (_, index) => (
                  <PinInputField key={index} />
                ))}
              </PinInput>
            </HStack>
          </Center>

          <Button type="submit">Confirmar o cadastro</Button>
        </Stack>
      </form>

      <Center>
        <Link as={RouterLink} to="/register">
          Voltar para cadastro
        </Link>
      </Center>
    </Stack>
  );
}
