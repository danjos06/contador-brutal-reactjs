import {useEffect, useState} from 'react'
import './App.css'
import brutalLogo from './assets/brutal-logo.png'
import ContadorDado from './components/contadorDado.jsx'
import ContadorTensao from './components/contadorTensao.jsx'
import ContadorCondicao from './components/contadorCondicao.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDice } from '@fortawesome/free-solid-svg-icons'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons'

function App() {

  useEffect(() => {
    const unloadCallback = (event) => {
      event.preventDefault();
      event.returnValue = "";
      return "";
    };
  
    window.addEventListener("beforeunload", unloadCallback);
    return () => window.removeEventListener("beforeunload", unloadCallback);
  }, []);

  return (
    <>
      <div className='flex justify-center p-5'><img className='h-16' src={brutalLogo} alt="logo brutal"/></div>
      <div className='grid grid-cols-5 text-center gap-28 py-2 px-28'>
        <div className='bg-gray-800/70 backdrop-blur-2xl shadow-2xl rounded-lg p-5'>
          <p className='text-5xl text-white py-3'>Danjos</p>
          <ContadorDado />
          <ContadorTensao />
          <ContadorCondicao />
        </div>
        <div className='bg-gray-800/70 backdrop-blur-2xl shadow-2xl rounded-lg p-5'>
          <p className='text-5xl text-white py-3'>Digdog</p>
          <ContadorDado />
          <ContadorTensao />
          <ContadorCondicao />
        </div>
        <div className='bg-gray-800/70 backdrop-blur-2xl shadow-2xl rounded-lg p-5'>
          <p className='text-5xl text-white py-3'>Muc</p>
          <ContadorDado />
          <ContadorTensao />
          <ContadorCondicao />
        </div>
        <div className='bg-gray-800/70 backdrop-blur-2xl shadow-2xl rounded-lg p-5'>
          <p className='text-5xl text-white py-3'>Tadas</p>
          <ContadorDado />
          <ContadorTensao />
          <ContadorCondicao />
        </div>
        <div className='bg-gray-800/70 backdrop-blur-2xl shadow-2xl rounded-lg p-5'>
          <p className='text-5xl text-white py-3'>Teteu</p>
          <ContadorDado />
          <ContadorTensao />
          <ContadorCondicao />
        </div>
      </div>
    </>
  )
}

export default App
