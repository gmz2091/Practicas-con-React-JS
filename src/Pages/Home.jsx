import React from 'react';
import InputForm from '../Components/InputForm';

const Home = () => {
    return (
    <div className="App">      
      <header className="App-header">
        <InputForm placeholder='Name' label='Nombre'/>
        <InputForm placeholder='Correo' label='Correo'/>
      </header>
    </div>
    );
}

export default Home;
