import alertError from './alertError';

const getData = async (url) => {

    try {

        const token = localStorage.getItem('token');

        const headers = {

            'Content-Type': 'application/json',

        };

        if (token) {

            headers['Authorization'] = token;

        }

        const response = await fetch(url, {

            method: 'GET',
            headers: headers,

        });

        await new Promise(resolve => setTimeout(resolve, 500));


        if (response.ok) {


            return response.json();


        } else {
            console.error(`Error: ${response.status} - ${response.statusText}`);

            throw new Error('Error al obtener los datos');

        }
    } catch (error) {

        await new Promise(resolve => setTimeout(resolve, 500));

        alertError(error);

        console.error('Error en la solicitud GET:', error);

        return null;
    }
}

export default getData;
