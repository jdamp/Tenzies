import React from "react";

interface RollButtonProps {
    clickHandler(event: React.MouseEvent<HTMLButtonElement>): void;    
}


export default function RollButton(props: RollButtonProps) {
    return (
        <button className="rollButton" onClick={props.clickHandler}>
            Roll
        </button>
    );
}