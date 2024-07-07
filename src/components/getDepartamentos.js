import alertError from './alertError';

const getDepartamentos = async (url) => {
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

            throw new Error('Error al obtener departamentos');
        }
    } catch (error) {

        alertError(error);

        console.error('Error en la solicitud GET:', error);
        
    }
}

export default getDepartamentos;
