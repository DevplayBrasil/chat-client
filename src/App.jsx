import { Center, Heading } from '@chakra-ui/react';
import { ToDoList } from './components/TodoList';

function App() {
  return (
    <Center h="100vh" flexDirection="column">
      <Heading mb={6}>Lista de tarefas</Heading>

      <ToDoList />
    </Center>
  );
}

export default App;
