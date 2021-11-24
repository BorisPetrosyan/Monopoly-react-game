import React, {useEffect} from 'react';
import MonoPlace from "./MonoPlaces/MonoPlace";
import {useDispatch, useSelector} from "react-redux";
import {gameRulesActionCreators} from "../store/reducers/gameRules/action-creators";

const GameBoardContainer = ({className,styles}) => {
    const dispatch =  useDispatch()
    const gameBoard = useSelector(state => state)["gameBoardReducer"].gameBoard

    const playerTurn = useSelector(state => state)["gamePlayersReducer"].playerTurn

    return (
        <div>
            {gameBoard.map((item) =>
                <MonoPlace
                    key={item.id}
                    className={item.styles[0]}
                    leftStyle={item.styles[1]} 
                    styles={item.styles}
                    inPosition={item.positionIn}/>
            )}

        </div>
    );
};

export default GameBoardContainer;
