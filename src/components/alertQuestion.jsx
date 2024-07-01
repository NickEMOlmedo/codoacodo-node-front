import Swal from 'sweetalert2';


const alertQuestion = ({elemento, titulo, esConfirmado}) => {
  return (

    Swal.fire({
        title: `Estas seguro de eliminar el ${elemento} ${titulo}`,
        text: "Esta accion no puede revertirse!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ejecutar"
      }).then((result) => {
        if (result.isConfirmed) {

          esConfirmado();

          Swal.fire({
            title: "Eliminado!",
            text: `El " " ${elemento}  ${titulo} ha sido eliminado, `, 
            icon: "success"
          });
        }
      })


  )
}

export default alertQuestion


