import React from 'react';
import './App.css';
import Die from './components/Die';
import RollButton from './RollButton';


function allNewDice(): Array<number> {
  return Array.from({length: 10}, () => Math.ceil(Math.random()*6));
}


export default function App() {
  const [dieValues, setDieValues] = React.useState(allNewDice());
  function buttonClick() {
    setDieValues(allNewDice);
  }

  const dies = dieValues.map(val => <Die value={val}/>)
  return (
  <main>
    <div className='dieContainer'>
    {dies}
    </div>
    <RollButton clickHandler={buttonClick}/>
  </main>)
}


