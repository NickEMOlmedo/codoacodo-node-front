import alertSuccess from '../components/alertSuccess';
import alertError from '../components/alertError';

const sendForm = async (url, data) => {

    try {
        const token = localStorage.getItem('token'); 

        const headers = {

            'Content-Type': 'application/json',
        };

        if (token) {
            
            headers['authorization'] = token; 
        }

        const response = await fetch(url, {

            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)

        });

        await new Promise(resolve => setTimeout(resolve, 500));

        if (response.ok) {

            alertSuccess(); 

        } else {

            console.error(`Error: ${response.status} - ${response.statusText}`);
            
            throw new Error('Error al enviar el formulario');
        }
    } catch (error) {

        await new Promise(resolve => setTimeout(resolve, 500)); 

        alertError(error);

        console.error('Error en la solicitud POST:', error);
    }
};

export default sendForm;
