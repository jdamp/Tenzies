import React from "react";

interface DieProps {
    value: number
}

export default function Die(props: DieProps) {
    return(
        <div className="dieFace">
            <p className="dieNumber">{props.value}</p>
        </div>
    );
}