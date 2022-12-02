import { useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { api } from '../../../services/api';

export function useResetPasswordLogic() {
  const [errors, setErrors] = useState({});
  const toast = useToast({ position: 'top' });
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const { elements } = event.target;

    const data = {
      password: elements.password.value,
      confirmPassword: elements.confirmPassword.value,
    };

    const validateErrors = {};

    if (!data.password) validateErrors.password = 'O campo senha é obrigatório';
    if (!data.confirmPassword)
      validateErrors.confirmPassword = 'O campo confirmar senha é obrigatório';
    if (data.password !== data.confirmPassword)
      validateErrors.confirmPassword = 'Valor é diferente da senha!';

    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      return;
    }

    const { data: response } = await api
      .post('/users/reset-password', {
        password: data.password,
        token: searchParams.get('token'),
      })
      .catch((error) => {
        return { data: error.response.data };
      });

    console.log(response);

    toast({
      title: 'Nova senha salva!',
      status: 'success',
    });
    navigate('/login');
  }

  useEffect(() => {
    if (!searchParams.get('token')) {
      navigate('/login');
      return;
    }
  }, []);

  return { handleSubmit, errors };
}
