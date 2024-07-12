import Swal from 'sweetalert2'

const alertSuccess = () => {
  return (

    Swal.fire({
        position: "center",
        icon: "success",
        title: "¡Usted ha Iniciado sesion con Exito! ",
        showConfirmButton: false,
        timer: 1500
      })
  )
}

export default alertSuccess