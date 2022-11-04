import { Box, Button, HStack, Input } from '@chakra-ui/react';
import { useState } from 'react';

export function TodoForm({ onAddTodo }) {
  const [text, setText] = useState('');

  function onSubmit(event) {
    event.preventDefault();

    if (text.length < 1) {
      alert('Digite o valor!');
      return;
    }

    onAddTodo(text);
    setText('');
  }

  function onChangeText(event) {
    setText(event.target.value);
  }

  return (
    <Box>
      <form onSubmit={onSubmit}>
        <HStack>
          <Input
            placeholder="Digite a sua tarefa"
            value={text}
            onChange={onChangeText}
          />

          <Button type="submit">Adicionar</Button>
        </HStack>
      </form>
    </Box>
  );
}
