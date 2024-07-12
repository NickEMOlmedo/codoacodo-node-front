import alertErrorLogin from '/src/components/alertErrorLogin.jsx';
import alertSuccesLogin from '/src/components/alertSuccesLogin.jsx';

const responseLogin = async (url, data) => {

    try {
        const response = await fetch(url, {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify(data)

        });

        const responseData = await response.json();

        if (response.ok && responseData.token) {
            
            alertSuccesLogin();

            return responseData;

        } else {

            alertErrorLogin(responseData.message || 'Error en la solicitud');
            return { error: responseData.message || 'Error en la solicitud' };

        }
    } catch (error) {

        alertErrorLogin(error.message || 'Error en la solicitud');
        return { error: error.message };
        
    }
};

export default responseLogin;
