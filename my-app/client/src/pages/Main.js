// client/src/pages/Main.js
import React, { useState } from 'react';
import Header from '../components/Header';
import Table from '../components/Table';
import Pagination from '../components/Pagination';

const Main = () => {
    const [employees, setEmployees] = useState([
        // Aquí van tus datos de empleados
    ]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const currentData = employees.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div>
            <Header />
            <h1>Página Principal</h1>
            <Table data={currentData} />
            <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(employees.length / itemsPerPage)}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default Main;
