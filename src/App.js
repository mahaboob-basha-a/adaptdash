import React from 'react'
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import './app.css'
import OtherPages from './components/OtherPages';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <div className='page'>
      <Header />
      <div className='home-page'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/*' element={<OtherPages />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App