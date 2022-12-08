import {
  Box,
  Flex,
  Grid,
  GridItem,
  IconButton,
  Input,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiPlus, FiSend } from 'react-icons/fi';
import { NAVBAR_HEIGHT } from '../../data/config';

export function ChatPage() {
  const blocksBg = useColorModeValue('gray.50', 'gray.700');

  return (
    <Grid
      templateColumns="300px 1fr"
      templateRows="50px 1fr 60px"
      h={`calc(100vh - ${NAVBAR_HEIGHT})`}
      gap={2}
      pb={2}
    >
      {/* Menu */}
      <GridItem rowSpan={3}>
        <Box bg={blocksBg} h="full" rounded="lg" p={4}>
          <Text>Menu</Text>
        </Box>
      </GridItem>

      {/* Header */}
      <GridItem>
        <Flex
          bg={blocksBg}
          h="full"
          rounded="lg"
          align="center"
          px={4}
          justify="space-between"
        >
          <Text>Header</Text>

          <IconButton icon={<FiPlus />} />
        </Flex>
      </GridItem>

      {/* Messages */}
      <GridItem>
        <Box bg={blocksBg} h="full" rounded="lg" p={4}>
          <Text>Messages</Text>
        </Box>
      </GridItem>

      {/* Chat Form */}
      <GridItem>
        <Flex bg={blocksBg} h="full" rounded="lg" align="center" px={4}>
          <Input />

          <IconButton icon={<FiSend />} />
        </Flex>
      </GridItem>
    </Grid>
  );
}
