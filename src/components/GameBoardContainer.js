import React from 'react';
import MonoPlace from "./MonoPlaces/MonoPlace";
import {useSelector} from "react-redux";

const GameBoardContainer = ({className,styles}) => {

    // const dispatch =  useDispatch()
    // const playerTurn = useSelector(state => state)["gamePlayersReducer"].playerTurn


    const gameBoard = useSelector(state => state)["gameBoardReducer"].gameBoard

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
