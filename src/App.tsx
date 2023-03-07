import React from 'react';
import {nanoid} from 'nanoid';
import './App.css';
import Die from './components/Die';
import RollButton from './RollButton';

interface DieObject {
    value: number,
    isHeld: boolean,
    id: string
}

function getRandomDieValue(): number {
    return Math.ceil(Math.random()*6);
}

function allNewDice(): Array<DieObject> {
    return Array.from({length: 10}, () => {
        return {
            value: getRandomDieValue(),
            id: nanoid(),
            isHeld: false
        }
    });
}


export default function App() {
    const [dice, setDice] = React.useState(allNewDice());

    function rollDice() {
        const newDice = dice.map(
            die => die.isHeld ? die : {
                ...die,
                value: Math.ceil(Math.random()*6)
            }
        )
        setDice(newDice);
    }

    function holdDice(id: string): void {
        setDice(prevDice => prevDice.map(
            die => die.id === id ?
            { 
                ...die,
                isHeld: !die.isHeld
            } : die));
    }

    const diceComponents = dice.map(die => (
        <Die
            id={die.id}
            value={die.value} 
            isHeld={die.isHeld}
            clickHandler={() => holdDice(die.id)}
        />)
    );

    return (
        <main>
            <div className='dieContainer'>
                {diceComponents}
            </div>
            <RollButton clickHandler={rollDice}/>
        </main>
        );
}
