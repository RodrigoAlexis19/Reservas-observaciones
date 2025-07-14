// Carga y visualiza especies desde API
import React, { useState } from 'react';

function EspeciesDesdeApi() {
  const [busqueda, setBusqueda] = useState('');
  const [resultados, setResultados] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState('');

  const buscarEspecie = async () => {
    if (busqueda.trim() === '') {
      setError('Ingresa un nombre para buscar');
      return;
    }

    setCargando(true);
    setError('');
    setResultados([]);

    try {
      const res = await fetch(`https://api.inaturalist.org/v1/taxa?q=${busqueda}`);
      const data = await res.json();

      if (data.results.length === 0) {
        setError('No se encontraron especies con ese nombre');
      } else {
        setResultados(data.results.slice(0, 5)); // Mostramos máximo 5 resultados
      }
    } catch (err) {
      setError('Error al conectar con la API');
    } finally {
      setCargando(false);
    }
  };

  return (
    <section>
      <h2>Consulta de especies observadas</h2>
      <input
        type="text"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="Ej: pudú, lechuza, araucaria"
      />
      <button onClick={buscarEspecie}>Buscar especie</button>

      {cargando && <p>🔄 Cargando...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul>
        {resultados.map((especie) => (
          <li key={especie.id} style={{ marginBottom: '1rem' }}>
            <strong>{especie.preferred_common_name || 'Sin nombre común'}</strong><br />
            <em>{especie.name}</em><br />
            {especie.default_photo && (
              <img
                src={especie.default_photo.square_url}
                alt={especie.name}
                style={{ width: '100px', height: '100px' }}
              />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default EspeciesDesdeApi;
