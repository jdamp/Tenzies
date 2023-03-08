import React from "react";

interface RollButtonProps {
    clickHandler(event: React.MouseEvent<HTMLButtonElement>): void;
    buttonText: string;
}

export default function RollButton(props: RollButtonProps) {
    return (
        <button className="rollButton" onClick={props.clickHandler}>
            {props.buttonText}
        </button>
    );
}
