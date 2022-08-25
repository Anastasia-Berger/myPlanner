import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/LayoutArea/Dashboard/Dashboard';
import Footer from './Components/LayoutArea/Footer/Footer';
import Header from './Components/LayoutArea/Header/Header';
import Main from './Components/LayoutArea/Main/Main';
import Sidebar from './Components/LayoutArea/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
        <Dashboard />
        <Header />
        <Main />
        <Sidebar />
        <Footer />

    </div>
  );
}

export default App;
