import {
  Heading,
  Modal,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export function PrivateRoute({ children }) {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <>
        {children}
        <Modal isCentered isOpen={true}>
          <ModalOverlay backdropFilter="blur(10px)"></ModalOverlay>
          <ModalContent bg="transparent" shadow="none">
            <Heading textAlign="center" color="white">
              Carregando
            </Heading>
            {/* <ModalBody></ModalBody> */}
          </ModalContent>
        </Modal>
      </>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
