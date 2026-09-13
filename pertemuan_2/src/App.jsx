import { useState } from 'react'
import CarExample from './components/CarExample.jsx';
import Button from './components/Button.jsx';
import Hello from './components/Hello.jsx';
import ExamplePropsCars from './components/ExamplePropsCars.jsx';

import './App.css'

function App() {

  return (
    <>
      <CarExample />
      <Button text="Click Me" />
      <Hello />
      <ExamplePropsCars color="merah" />
    </>
  )
}

export default App
