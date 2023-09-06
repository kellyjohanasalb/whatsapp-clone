import React from 'react';


  

export function SignUp() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const phoneNumberExists = await doesNumberExist(/* número de celular */);
      
        if (phoneNumberExists) {
          alert('El número de celular ingresado ya está registrado.');
        } else {
          // Hacer petición POST para crear el usuario
          // Mostrar alerta de éxito
          alert('Usuario creado exitosamente.');
        }
      }
      
  
    return (
      <div>
        <h1>Create an account</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Nombre" required />
          <input type="number" placeholder="Número de celular" required />
          <input type="password" placeholder="Contraseña" required />
          <input type="url" placeholder="URL de imagen" required />
          <textarea placeholder="Escribe tu frase"></textarea>
          <button type="submit">Sign up</button>
        </form>
      </div>
    );
  }
  