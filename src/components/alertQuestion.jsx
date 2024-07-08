import Swal from 'sweetalert2';

const alertQuestion = async (elemento, titulo, esConfirmado) => {

  const result = await Swal.fire({

    title: `¿Estás seguro de eliminar el ${elemento} ${titulo}?`,
    text: "¡Esta acción no puede revertirse!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ejecutar"
  });

  if (result.isConfirmed) {

    const isDeleted = await esConfirmado();

    if (isDeleted) {

      Swal.fire({
        title: "¡Eliminado!",
        text: `El ${elemento} ${titulo} ha sido eliminado.`,
        icon: "success"
        
      });

      // Recarga la página 2 segundos después de la confirmación
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  }
}

export default alertQuestion;
