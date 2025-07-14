// Lista de visitas guardadas
import React, { useEffect, useState } from 'react';

function ListaVisitas() {
  const [visitas, setVisitas] = useState([]);

  useEffect(() => {
    const datos = JSON.parse(localStorage.getItem('visitas')) || [];
    setVisitas(datos);
  }, []);

  const eliminarVisita = (id) => {
    const nuevasVisitas = visitas.filter(v => v.id !== id);
    setVisitas(nuevasVisitas);
    localStorage.setItem('visitas', JSON.stringify(nuevasVisitas));
  };

  return (
    <section>
      <h2>Visitas registradas</h2>
      {visitas.length === 0 ? (
        <p>No hay visitas registradas.</p>
      ) : (
        <ul>
          {visitas.map((v) => (
            <li key={v.id} style={{ marginBottom: '1rem', borderBottom: '1px solid #ccc' }}>
              <strong>Nombre:</strong> {v.nombre}<br />
              <strong>RUT:</strong> {v.rut}<br />
              <strong>Fecha:</strong> {v.fecha}<br />
              <strong>Entrada:</strong> {v.horaEntrada} | <strong>Salida:</strong> {v.horaSalida}<br />
              <strong>Reserva:</strong> {v.reserva}<br />
              <strong>Observación:</strong> {v.observacion || '—'}<br />
              <strong>Especie observada:</strong> {v.especie || '—'}<br />
              <strong>Fotografías:</strong> {v.fotos || 0}<br />
              <button onClick={() => eliminarVisita(v.id)}>🗑️ Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default ListaVisitas;
