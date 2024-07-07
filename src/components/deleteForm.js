import alertSucces from '../components/alertSuccess'
import alertError from '../components/alertError'

const deleteForm = async (url, data) => {

    try {

        const response = await fetch(url, {

            method: 'DELETE',
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

export default deleteForm;