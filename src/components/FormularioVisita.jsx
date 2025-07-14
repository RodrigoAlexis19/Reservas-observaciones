// Formulario para registrar visitas
import React, { useState } from 'react';

function FormularioVisita() {
  const [formulario, setFormulario] = useState({
    nombre: '',
    rut: '',
    fecha: '',
    horaEntrada: '',
    horaSalida: '',
    reserva: '',
    observacion: '',
    especie: '',
    fotos: ''
  });

  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value
    });
  };

  const guardarVisita = () => {
    // Validaciones básicas
    const camposObligatorios = ['nombre', 'rut', 'fecha', 'horaEntrada', 'horaSalida', 'reserva'];
    const faltanCampos = camposObligatorios.some(campo => formulario[campo].trim() === '');

    if (faltanCampos) {
      setMensaje('Por favor, completa todos los campos obligatorios (*)');
      return;
    }

    const nuevaVisita = {
      ...formulario,
      id: crypto.randomUUID()
    };

    const visitasGuardadas = JSON.parse(localStorage.getItem('visitas')) || [];
    visitasGuardadas.push(nuevaVisita);
    localStorage.setItem('visitas', JSON.stringify(visitasGuardadas));

    setMensaje('✅ Visita guardada correctamente');
    setFormulario({
      nombre: '',
      rut: '',
      fecha: '',
      horaEntrada: '',
      horaSalida: '',
      reserva: '',
      observacion: '',
      especie: '',
      fotos: ''
    });
  };

  return (
    <section>
      <h2>Registrar nueva visita</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" name="nombre" placeholder="Nombre *" value={formulario.nombre} onChange={handleChange} />
        <input type="text" name="rut" placeholder="RUT *" value={formulario.rut} onChange={handleChange} />
        <input type="date" name="fecha" value={formulario.fecha} onChange={handleChange} />
        <input type="time" name="horaEntrada" value={formulario.horaEntrada} onChange={handleChange} />
        <input type="time" name="horaSalida" value={formulario.horaSalida} onChange={handleChange} />

        <select name="reserva" value={formulario.reserva} onChange={handleChange}>
  <option value="">-- Selecciona una reserva o santuario * --</option>

  <optgroup label="Reservas Nacionales">
    <option value="Reserva Nacional Nonguén">Reserva Nacional Nonguén</option>
    <option value="Reserva Nacional Ñuble">Reserva Nacional Ñuble</option>
    <option value="Reserva Nacional Ralco">Reserva Nacional Ralco</option>
    <option value="Reserva Nacional Altos de Pemehue">Reserva Nacional Altos de Pemehue</option>
    <option value="Reserva Nacional Lago Lanalhue">Reserva Nacional Lago Lanalhue</option>
  </optgroup>

  <optgroup label="Parques Nacionales">
    <option value="Parque Nacional Laguna del Laja">Parque Nacional Laguna del Laja</option>
    <option value="Parque Nacional Nahuelbuta">Parque Nacional Nahuelbuta</option>
    <option value="Parque Nacional Tolhuaca">Parque Nacional Tolhuaca</option>
    <option value="Parque Nacional Alerce Andino">Parque Nacional Alerce Andino</option>
    <option value="Parque Nacional Conguillío">Parque Nacional Conguillío</option>
  </optgroup>

  <optgroup label="Santuarios de la Naturaleza">
    <option value="Santuario Humedal Vasco da Gama">Santuario Humedal Vasco da Gama</option>
    <option value="Santuario Península de Hualpén">Santuario Península de Hualpén</option>
    <option value="Santuario Río Cruces">Santuario Río Cruces</option>
    <option value="Santuario Rocas de Punta de Lobos">Santuario Rocas de Punta de Lobos</option>
  </optgroup>
</select>


        <textarea name="observacion" placeholder="Observación" value={formulario.observacion} onChange={handleChange} />
        <input type="text" name="especie" placeholder="Especie observada" value={formulario.especie} onChange={handleChange} />
        <input type="number" name="fotos" placeholder="Cantidad de fotografías" value={formulario.fotos} onChange={handleChange} />

        <button onClick={guardarVisita}>Guardar visita</button>
        {mensaje && <p>{mensaje}</p>}
      </form>
    </section>
  );
}

export default FormularioVisita;

