import React from 'react';
import {PlayerOne, PlayerTwo} from "../Elements/PlayersIcons";

const MonoPlace = ({className,leftStyle, inPosition}) => {

    return (
        <div className={className} style={leftStyle}>
            {inPosition.length && inPosition[0] === 1 ? <PlayerOne /> : null}
            {inPosition.length && inPosition[1] === 2 ? <PlayerTwo /> : null}
        </div>
    );
};

export default MonoPlace;