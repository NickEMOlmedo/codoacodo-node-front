import alertSucces from '../components/alertSuccess'
import alertError from '../components/alertError'

const updateForm = async (url, data) => {

    try {

        const response = await fetch(url, {

            method: 'PUT',
            headers: {

                'Content-Type': 'application/json',

            },

            body: JSON.stringify(data)

        })

        if (response.ok) {

            alertSucces();

        }

    } catch (error) {

        alertError(error);

    }

}

export default updateForm;