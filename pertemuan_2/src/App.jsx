import React from 'react';
import CarExample from './components/CarExample.jsx';
import Button from './components/Button.jsx';
import Hello from './components/Hello.jsx';
import ExamplePropsCars from './components/ExamplePropsCars.jsx';
import GarasiCar from './components/GarasiCar.jsx';
import CarModel from './components/CarModel.jsx';
import Parent from './components/Parent.jsx';
import SwitchButton from './components/SwitchButton.jsx';
import GreetingsLanguage from './components/GreetingsLanguage.jsx';
import LoginPage from './components/LoginPage.jsx';
import ExampleList from './components/ExampleList.jsx';
import ClubSoccerList from './components/ClubSoccersList.jsx';
import MenuRestoran from './components/MenuRestoran.jsx';
import InventoriKarakter from './components/InventoriKarakter.jsx';
import FavColor from './components/FavColor.jsx'
import ExampleUsestate from './components/ExampleUsestate.jsx'

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

      <Parent />
      <SwitchButton />
      <GreetingsLanguage />
      <LoginPage />
      <ExampleList />
      <ClubSoccerList />
      <MenuRestoran />
      <InventoriKarakter />
      <FavColor />
      <ExampleUsestate />
    </>
  )
}

export default App
