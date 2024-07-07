import alertError from './alertError';

const getEmpleados = async (url) => {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {

            return response.json();

        } else {

            throw new Error('Error al obtener empleados');
        }
    } catch (error) {

        alertError(error);

        console.error('Error en la solicitud GET:', error);
        
    }
}

export default getEmpleados;
