// client/src/pages/NewEmployee.js
import React, { useState } from 'react';
import Header from '../components/Header';

const NewEmployee = () => {
  const [employee, setEmployee] = useState({
    nombres: '',
    apellidos: '',
    documento: '',
    email: '',
    sueldo: '',
    fechaInicio: '',
    fechaFin: '',
    totalHoras: '',
    observaciones: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del nuevo empleado al servidor
    console.log(employee);
  };

  return (
    <div>
      <Header />
      <h1>Nuevo Empleado</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombres"
          placeholder="Nombres"
          value={employee.nombres}
          onChange={handleChange}
        />
        <input
          type="text"
          name="apellidos"
          placeholder="Apellidos"
          value={employee.apellidos}
          onChange={handleChange}
        />
        <input
          type="text"
          name="documento"
          placeholder="Documento"
          value={employee.documento}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={employee.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="sueldo"
          placeholder="Sueldo"
          value={employee.sueldo}
          onChange={handleChange}
        />
        <input
          type="date"
          name="fechaInicio"
          placeholder="Fecha Inicio"
          value={employee.fechaInicio}
          onChange={handleChange}
        />
        <input
          type="date"
          name="fechaFin"
          placeholder="Fecha Fin"
          value={employee.fechaFin}
          onChange={handleChange}
        />
        <input
          type="number"
          name="totalHoras"
          placeholder="Total Horas"
          value={employee.totalHoras}
          onChange={handleChange}
        />
        <textarea
          name="observaciones"
          placeholder="Observaciones"
          value={employee.observaciones}
          onChange={handleChange}
        />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default NewEmployee;
