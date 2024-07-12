import alertError from './alertError';

const getData = async (url) => {
    try {
        const token = localStorage.getItem('token'); 

        const headers = {
            'Content-Type': 'application/json',
        };

        if (token) {

            headers['Authorization'] = `Bearer ${token}`; 
        }

        const response = await fetch(url, {
            method: 'GET',
            headers: headers,
        });

        await new Promise(resolve => setTimeout(resolve, 500));

        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Error al obtener los datos');
        }
    } catch (error) {
       
        await new Promise(resolve => setTimeout(resolve, 500));
        
        alertError(error);
        console.error('Error en la solicitud GET:', error);
    }
}

export default getData;
