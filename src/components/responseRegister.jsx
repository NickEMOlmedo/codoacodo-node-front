import alertError from '/src/components/alertError';

const responseRegister = async (url, data) => {
    
    try {
        const response = await fetch(url, {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify(data),
        });

        const responseData = await response.json();

        if (responseData.status === 'success') { 

            return responseData;

        } else {

            alertError(responseData.message || 'Error en la solicitud');
            return { error: responseData.message || 'Error en la solicitud' };
        }
    } catch (error) {

        alertError(error.message || 'Error en la solicitud');
        return { error: error.message };

    }
};

export default responseRegister;
