import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import React, { useState } from 'react';
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Contador from "./components/Contador";
import ContadorMejorado from "./components/Contador Mejorado";
import ShopinCard from "./components/ShopinCard";

function App() {
  //const [count, setCount] = useState(0);
  return (
   <div>
    
    <ShopinCard/>
    <hr />

    <h2>REDUCERS</h2>
   {/*  <Contador/> */}
    <hr />
{/*     <ContadorMejorado/> */}
   </div>
  )
}

export default App;
