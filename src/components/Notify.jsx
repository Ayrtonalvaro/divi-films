import React from 'react'
import { toast, ToastContainer } from 'react-toastify/dist/components'
const Notify = () => {
  toast.succes('Pelicula agregada'),
    {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    };
  
  
}

export default Notify
