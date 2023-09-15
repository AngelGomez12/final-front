import { useState } from "react";

export const Form = () => {
    const [form, setForm] = useState({
        name: '',
        email: ''
    });
    const [error, setError] = useState({
        name: false,
        email: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setError((prevError) => ({
            ...prevError,
            [name]: false,
        }));

        setForm({
            ...form,
            [name]: value,
        })
    }

    const handleBlur = (e) => {
    const { name, value } = e.target;

    if (name === "name" && value.length < 5) {
      setError((prevError) => ({
        ...prevError,
        [name]: true,
      }));
    }

    if (name === "email" && value.indexOf("@") === -1) {
      setError((prevError) => ({
        ...prevError,
        [name]: true,
      }));
    }
  };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!error.name && !error.email) {
            console.log(form);
        }
    }
    return (
        <div className="container-form">
           <form onSubmit={handleSubmit} className="form">
             <input type="text" placeholder="Nombre" name="name" value={form.name} onBlur={handleBlur} onChange={handleChange} />
             {error.name && <p>Error de validación para el nombre</p>}
            <input type="text" placeholder="Email" name="email" value={form.email} onBlur={handleBlur} onChange={handleChange}/>
            {error.email && <p>Email invalido</p>}
            <button type="submit">Enviar</button>
           </form>
        </div>
    )
}
