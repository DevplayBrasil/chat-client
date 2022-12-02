import { useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { api } from '../../../services/api';

export function useForgetPasswordLogic() {
  const [error, setError] = useState();
  const toast = useToast({ position: 'top' });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const { elements } = event.target;

    const email = elements.email.value;

    if (!email) return setError(true);
    setError(false);

    setLoading(true);
    const { data: response } = await api
      .post('/users/forget-password', {
        email,
        origin: window.location.origin,
      })
      .catch((error) => {
        return { data: error.response.data };
      });
    setLoading(false);

    console.log(response);

    toast({
      title:
        'Se o e-mail existir em nossa base, enviaremos o link para recuperação!',
    });
  }

  return { handleSubmit, error, loading };
}
