import React from 'react';
import {PlayerOne, PlayerTwo} from "../Elements/PlayersIcons";

const MonoPlace = ({className,leftStyle, inPosition,styles}) => {

    return (
        <div className={className} style={leftStyle} >
            {inPosition.length && inPosition.includes(1) ? <PlayerOne styles={styles}/> : null}
            {inPosition.length && inPosition.includes(2) ? <PlayerTwo styles={styles}/> : null}
        </div>
    );
};

export default MonoPlace;