import React, { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard';
import PropTypes from 'prop-types';

function ServiceList() {

  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    // Simulación de la carga de datos desde una API
    setTimeout(() => {
      setServicios([
        { id: 1, nombre: 'Cardiología' },
        { id: 2, nombre: 'Dermatología' },
        { id: 3, nombre: 'Pediatría' },
      ]);
    }, 1000); // Simula un retraso en la carga de datos
  }, []);

  return (
    <div className="service-list">
      <h2>Servicios:</h2>
      {servicios.map(servicio => (
        <ServiceCard key={servicio.id} nombre={servicio.nombre} />
      ))}
    </div>
  );
}

export default ServiceList;