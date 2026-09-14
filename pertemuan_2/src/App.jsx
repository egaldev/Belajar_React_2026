import { useState } from 'react'
import CarExample from './components/CarExample.jsx';
import Button from './components/Button.jsx';
import Hello from './components/Hello.jsx';
import ExamplePropsCars from './components/ExamplePropsCars.jsx';
import GarasiCar from './components/GarasiCar.jsx';
import CarModel from './components/CarModel.jsx';

import './App.css'

function App() {

  return (
    <>
      <CarExample />
      <Button text="Click Me" />
      <Hello />
      <ExamplePropsCars color="merah" />
      <GarasiCar />

      <CarModel
        warna="Merah"
        merek="Toyota"
        harga="Rp. 200.000.000"
        namaPengendara="John Doe"
        beratMobil="1500 kg"
        

      />
    </>
  )
}

export default App
