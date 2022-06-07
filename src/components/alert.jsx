import React from 'react';
const Alert = () => {

  return (
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Hey recuerda!</strong> si estas en smartphone puedes guardar la página como aplicación entrando en: ( ☰ / ⁝ ) y selecciona la opción: (Agregar a la pantalla principal) y listo.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  );
}
export default Alert;