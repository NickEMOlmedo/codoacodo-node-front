import alertSuccess from '../components/alertSuccess';
import alertError from '../components/alertError';

const deleteForm = async (url) => {
  try {
    const response = await fetch(url, {

      method: 'DELETE',

      headers: {

        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {

      const result = await response.json();

      if (result.status === 'success') {
        
        alertSuccess();

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
