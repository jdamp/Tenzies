import React from "react";

interface DieProps {
    initValue: number
}

export default function Die(props: DieProps) {
    const [value, setValue] = React.useState(props.initValue);
    
    return(
        <div className="dieFace">
            <p className="dieNumber">{value}</p>
        </div>
    );
}