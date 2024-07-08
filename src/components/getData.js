import alertError from './alertError';

const getData = async (url) => {
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

            throw new Error('Error al obtener los datos');
        }
    } catch (error) {

        alertError(error);

        console.error('Error en la solicitud GET:', error);
        
    }
}

export default getData;
