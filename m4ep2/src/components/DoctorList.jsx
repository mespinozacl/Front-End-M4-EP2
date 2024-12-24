import React, { useState, useEffect } from 'react';
import DoctorCard from './DoctorCard';

function DoctorList() {
  const [doctores, setDoctors] = useState([]);

  useEffect(() => {
    // Simulación de la carga de datos desde una API
    setTimeout(() => {
      setDoctors([
        { id: 1, nombre: 'Dr. Juan Pérez', especialidad: 'Cardiología', experiencia: 10 },
        { id: 2, nombre: 'Dra. Ana Gómez', especialidad: 'Dermatología', experiencia: 5 },
      ]);
    }, 1000); // Simula un retraso en la carga de datos
  }, []);

  return (
    <div>
      <h2>Lista de Doctores</h2>
      <div>
        {doctores.map(doctor => (
          <DoctorCard key={doctor.id} nombre={doctor.nombre} especialidad={doctor.especialidad} experiencia={doctor.experiencia} />
        ))}
      </div>
      <div id="modal-root" />
    </div>
  );
}

export default DoctorList;