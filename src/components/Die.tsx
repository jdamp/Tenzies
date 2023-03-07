import React from "react";

 interface DieProps {
    value: number,
    isHeld: boolean,
    id: string,
    clickHandler(event: React.MouseEvent<HTMLDivElement>): void;
}

export default function Die(props: DieProps) {
    const styles = {
        backgroundColor: props.isHeld? "#59E391": "white"
    };

    return(
        <div className="dieFace" style={styles} onClick={props.clickHandler}>
            <p className="dieNumber">{props.value}</p>
        </div>
    );
}
