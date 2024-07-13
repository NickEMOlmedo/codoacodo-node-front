import alertSuccess from '../components/alertSuccess';
import alertError from '../components/alertError';

const deleteForm = async (url) => {
  try {
    const token = localStorage.getItem('token');

    const headers = {
      'Content-Type': 'application/json',
    };

    if (token) {
      headers['authorization'] = token;
    }

    const response = await fetch(url, {
      method: 'DELETE',
      headers: headers,
    });

    await new Promise(resolve => setTimeout(resolve, 500));

    if (response.ok) {

      const result = await response.json();

      if (result.status === 'success') {

        alertSuccess('Empleado eliminado con éxito');

        return true;

      } else {

        alertError('Error al eliminar el empleado');

        return false;
      }
    } else {

      alertError('Error al eliminar el empleado');

      return false;
    }
  } catch (error) {

    alertError(error.message || 'Error al eliminar el empleado');

    return false;
  }
};

export default deleteForm;
