import Swal from "sweetalert2";

const alertErrorLogin = (error) => {

    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "¡Error , verificar los datos ingresados!",
        footer: error.message,
      });
}

export default alertErrorLogin;