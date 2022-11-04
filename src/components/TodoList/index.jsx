import { Box, List } from '@chakra-ui/react';
import { useState } from 'react';
import { TodoForm } from '../Form';
import { TodoItem } from '../TodoItem';

export function ToDoList() {
  const [todos, setTodos] = useState([]);

  function onSubmit(text) {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        text,
        done: false,
      },
    ]);
  }

  function onChangeDone(id) {
    return (event) => {
      setTodos(
        todos.map((todo) => {
          if (todo.id === id) todo.done = event.target.checked;

          return todo;
        })
      );
    };
  }

  return (
    <Box>
      <Box mb={6}>
        <TodoForm onAddTodo={onSubmit} />
      </Box>

      <List>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            done={todo.done}
            text={todo.text}
            onToggle={onChangeDone(todo.id)}
          />
        ))}
      </List>
    </Box>
  );
}
