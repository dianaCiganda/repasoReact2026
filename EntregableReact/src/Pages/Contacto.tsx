import { useState } from "react";
import "./Contacto.css";

function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);

    alert("Mensaje enviado ✨");

    setForm({
      nombre: "",
      email: "",
      mensaje: ""
    });
  };

  return (
    <div className="contacto-container">
      <h1>Contacto</h1>

      <form className="contacto-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          value={form.nombre}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Tu email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="mensaje"
          placeholder="Escribí tu mensaje..."
          value={form.mensaje}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;