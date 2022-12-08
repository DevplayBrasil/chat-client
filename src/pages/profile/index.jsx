import { Box, Flex, Link } from '@chakra-ui/react';
import { FiChevronLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export function ProfilePage() {
  const navigate = useNavigate();

  return (
    <Box>
      <Link onClick={() => navigate(-1)}>
        <Flex gap={1} align="center">
          <FiChevronLeft />
          Voltar
        </Flex>
      </Link>
    </Box>
  );
}
