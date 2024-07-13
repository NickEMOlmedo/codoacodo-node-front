import alertSuccess from '../components/alertSuccess';
import alertError from '../components/alertError';

const updateForm = async (url, empleado) => {
    try {
        const token = localStorage.getItem('token');

        const headers = {
            
            'Content-Type': 'application/json',
        };

        if (token) {
            headers['authorization'] = token;
        }

        const response = await fetch(url, {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify(empleado)
        });

        await new Promise(resolve => setTimeout(resolve, 500));

        if (response.ok) {
            alertSuccess('Empleado actualizado con éxito');
        } else {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
    } catch (error) {
        alertError(error);
    }
};

export default updateForm;
