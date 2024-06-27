import Swal from "sweetalert2";

const alertError = () => {

    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "¡Has Introducido un nombre Incorrecto!",
    })
}

export default alertError;