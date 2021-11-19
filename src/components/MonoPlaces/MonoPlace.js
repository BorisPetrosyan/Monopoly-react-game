import React from 'react';
import {PlayerOne} from "../Elements/PlayersIcons";

const MonoPlace = ({className,leftStyle, inPosition}) => {
    return (
        <div className={className} style={leftStyle}>
            {inPosition ? <PlayerOne player={inPosition.player}/> : null}
        </div>
    );
};

export default MonoPlace;