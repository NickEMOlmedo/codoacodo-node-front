import alertError from '/src/components/alertError';
import alertSuccesRegister from '/src/components/alertSuccessRegister';



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

        if (response.ok && responseData.success) { 
            alertSuccesRegister();
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
