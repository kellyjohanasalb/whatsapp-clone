import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [cellphone, setCellphone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Puedes reemplazar esta función con una llamada a una API o base de datos
  function validateUser(cellphone, password) {
    // Aquí puedes hacer una validación falsa para propósitos de demostración
    if (cellphone === '1234567890' && password === 'password') {
      return { isValid: true, username: 'Juan' }; // Retornar el nombre del usuario
    } else if (cellphone !== '1234567890') {
      return { isValid: false, error: 'Número incorrecto' };
    } else {
      return { isValid: false, error: 'Contraseña incorrecta' };
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!cellphone) {
      alert('El número celular es necesario');
      return;
    }
    if (!password) {
      alert('La contraseña es necesaria');
      return;
    }

    const validation = validateUser(cellphone, password);
    if (validation.isValid) {
      alert(`Bienvenido ${validation.username}`);
      navigate('/home'); // Redirecciona a la página home
    } else {
      alert(validation.error);
    }
  }

  return (
    <div  className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Número de celular"
          value={cellphone}
          onChange={(e) => setCellphone(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}

export default SignIn;



