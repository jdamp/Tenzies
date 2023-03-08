import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix} from '@fortawesome/free-solid-svg-icons';

 interface DieProps {
    value: number,
    isHeld: boolean,
    id: string,
    rolling: boolean,
    clickHandler(event: React.MouseEvent<HTMLDivElement>): void;
}

export default function Die(props: DieProps) {
    const styles = {
        color: props.isHeld? "#59E391": "#5035FF"
    };
    console.log(props)
    let icons = [faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix];
    return(
        <div className="dieFace" onClick={props.clickHandler}>
            <FontAwesomeIcon className={"dieIcon" + (props.rolling && " Die-shaking")} icon={icons[props.value - 1]} style={styles}/>
        </div>
    );
}
