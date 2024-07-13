import Swal from 'sweetalert2';

const alertQuestion = async (elemento, titulo, esConfirmado) => {

  const result = await Swal.fire({

    title: `¿Estás seguro de esta accion sobre el ${elemento} ${titulo}?`,
    text: "¡Esta acción no puede revertirse!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ejecutar"
  });

  if (result.isConfirmed) {

    const isTrue = await esConfirmado();

    if (isTrue) {

      Swal.fire({
        title: "¡Eliminado!",
        text: `El ${elemento} ${titulo} ha sido eliminado.`,
        icon: "success"
        
      });

      setTimeout(() => {
        window.location.reload();
      }, 1500);
    }
  }
}

export default alertQuestion;
