import { Checkbox, HStack, ListItem, Text } from '@chakra-ui/react';

export function TodoItem({ text, done, onToggle }) {
  return (
    <ListItem>
      <HStack>
        <Checkbox checked={done} onClick={onToggle} />
        <Text>{text}</Text>
      </HStack>
    </ListItem>
  );
}
