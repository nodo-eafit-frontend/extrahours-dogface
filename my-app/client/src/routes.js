import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import NewEmployee from './pages/NewEmployee';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/Login" element={<Login />} />
                <Route path="/main" element={<Main />} />
                <Route path="/" element={<NewEmployee />} />
            </Routes>
        </Router>
    );
};




export default AppRoutes;
