import React from 'react';
import {PlayerOne} from "../Elements/PlayersIcons";
import {useSelector} from "react-redux";

const MonoPlace = ({className,leftStyle, inPosition}) => {


    const {gamePlayersReducer} = useSelector(state => state)

    const wherePlayerOne = () => {
        let  x = gamePlayersReducer.players.playerOne.position
    }



    return (
        <div className={className} style={leftStyle}>
            {inPosition ? <PlayerOne player={inPosition.player}/> : null}
        </div>
    );
};

export default MonoPlace;