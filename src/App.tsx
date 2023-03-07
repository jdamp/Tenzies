import React from 'react';
import './App.css';
import Die from './components/Die';
import RollButton from './RollButton';


function allNewDice(): Array<number> {
  return Array.from({length: 10}, () => Math.ceil(Math.random()*6));
}

export default function App() {
  const startValues = allNewDice();
  const dies = startValues.map(val => <Die initValue={val}/>)
  return (
  <main>
    <div className='dieContainer'>
    {dies}
    </div>
    <RollButton onClick={}/>
  </main>)
}


