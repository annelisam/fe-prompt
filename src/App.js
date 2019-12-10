import React from 'react';
import ResponsiveDrawer from './components/Responsivedrawer';
import Navbar from './components/Nav';
import Dashboard from './components/Dashboard'; 

function App() {
  return (
    <div className='app-wrapper'>
      <ResponsiveDrawer />
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;
