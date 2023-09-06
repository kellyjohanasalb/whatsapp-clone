import React from 'react';
import { useState } from 'react';
import "../scss/Formulario.scss";


export function Formulario(){
    const [cellphone, setCellphone] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(nombre === || contraseña === "" ){
            setError(true)
            return
        }

        setError(false)
    }

    return(
        <section>
            <h1>SignIn</h1>

            <form className='formulario' onSubmit={handleSubmit}>
                <input type="number" value={cellphone} onChange={e => setCellphone(e.target.value)}></input>
                <input type="password" value={contraseña} onChange={e => setContraseña(e.target.value)}></input>
                <button>Sign in</button><a href="/signup">Sign up for free</a>
            </form>
            knfkiwjnefknflowneofiwenfokjksdjnksndfsnfkjhsdjjdjdjdjuievbghhhh
            {error && <p>Todos los campos son obligatorios</p>}
        </section>
    )
}