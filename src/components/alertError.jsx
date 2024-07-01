import Swal from "sweetalert2";

const alertError = (error) => {

    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "¡Ha ocurrido un error!",
        footer: error.message,
      });
}

export default alertError;