import React from "react";
import * as XLSX from "xlsx";

const ExportToExcel = () => {
  const exportToExcel = () => {
    // Datos de ejemplo (puedes reemplazarlo con tus datos)
    const data = [
      { name: "John", age: 28, email: "john@example.com" },
      { name: "Jane", age: 31, email: "jane@example.com" },
      { name: "Jack", age: 25, email: "jack@example.com" },
    ];

    // Crear una hoja de trabajo a partir de los datos
    const worksheet = XLSX.utils.json_to_sheet(data);

    // Crear un libro de trabajo
    const workbook = XLSX.utils.book_new();

    // Agregar la hoja al libro
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    // Exportar el archivo Excel
    XLSX.writeFile(workbook, "datos.xlsx");
  };

  return (
    <div>
      <button onClick={exportToExcel}>Exportar a Excel</button>
    </div>
  );
};

export default ExportToExcel;
