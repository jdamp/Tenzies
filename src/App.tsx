import React from 'react';
import Confetti from 'react-confetti';
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

    const [tenzies, setTenzies] = React.useState(false);

    function rollDice() {
        const newDice = dice.map(
            die => die.isHeld ? die : {
                ...die,
                value: getRandomDieValue()
            }
        )
        setDice(newDice);
    }

    function newGame() {
        setDice(allNewDice);
        setTenzies(false);
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

    React.useEffect(
        () => {
            const allHeld = dice.every(die => die.isHeld);
            const sameValue = (dice.every(die => die.value === dice[0].value));
            if (allHeld && sameValue) {
                setTenzies(true);
            }
        },
        [dice]
    )

    return (
        <main>
            {tenzies ? <Confetti /> : <></>}
            <h1 id="heading">Tenzies</h1>
            <p id="instructions">Roll until all dice are the same. Click each dice to freeze it at its current value between rolls.</p>
            <div className='dieContainer'>
                {diceComponents}
            </div>
            <RollButton clickHandler={tenzies? newGame : rollDice} buttonText={tenzies? "New game" : "Roll"}/>
        </main>
        );
}
