import React from 'react';
import MonoPlace from "./MonoPlaces/MonoPlace";
import {useDispatch, useSelector} from "react-redux";

const GameBoardContainer = ({className,styles}) => {
    const dispatch =  useDispatch()
    const gameBoard = useSelector(state => state)["gameBoardReducer"].gameBoard

    const zar = useSelector(state => state)["gameRulesReducer"].zar
    const playerTurn = useSelector(state => state)["gamePlayersReducer"].playerTurn
    const start = useSelector(state => state)["gameRulesReducer"].start
    console.log(playerTurn)

    return (
        <div>
            {gameBoard.map((item) =>
                <MonoPlace key={item.id} className={item.styles[0]} leftStyle={item.styles[1]} inPosition={item.positionIn}/>
            )}

        </div>
    );
};

export default GameBoardContainer;
