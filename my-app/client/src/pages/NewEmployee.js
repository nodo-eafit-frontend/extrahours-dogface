// client/src/pages/NewEmployee.js
import React, { useState } from 'react';
import Header from '../components/Header';

const NewEmployee = () => {
  const [employee, setEmployee] = useState({
      documento: '',
      nombres: '',
      apellidos: '',
      telefono: '',
      email: '',
      cargo: '',
      area: '',
      sueldo_base: '',
      empleador_idempleador: ''
  });

  const handleChange = (e) => {
      const { name, value } = e.target;
      setEmployee({
          ...employee,
          [name]: value
      });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await fetch('http://localhost:5000/create', { // URL del backend
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(employee)
          });

          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();
          console.log('Employee created:', data);
      } catch (error) {
          console.error('There was an error creating the employee!', error);
      }
  };

  return (
      <form onSubmit={handleSubmit}>
          <input type="text" name="documento" value={employee.documento} onChange={handleChange} placeholder="Documento" />
          <input type="text" name="nombres" value={employee.nombres} onChange={handleChange} placeholder="Nombres" />
          <input type="text" name="apellidos" value={employee.apellidos} onChange={handleChange} placeholder="Apellidos" />
          <input type="text" name="telefono" value={employee.telefono} onChange={handleChange} placeholder="Teléfono" />
          <input type="email" name="email" value={employee.email} onChange={handleChange} placeholder="Email" />
          <input type="text" name="cargo" value={employee.cargo} onChange={handleChange} placeholder="Cargo" />
          <input type="text" name="area" value={employee.area} onChange={handleChange} placeholder="Área" />
          <input type="number" name="sueldo_base" value={employee.sueldo_base} onChange={handleChange} placeholder="Sueldo Base" />
          <input type="text" name="empleador_idempleador" value={employee.empleador_idempleador} onChange={handleChange} placeholder="ID Empleador" />
          <button type="submit">Crear Empleado</button>
      </form>
  );
};

export default NewEmployee;
