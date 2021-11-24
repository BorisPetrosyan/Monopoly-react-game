import React from 'react';
import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'
import {useDispatch, useSelector} from "react-redux";
import {allActionCreators} from "../../store/reducers/action-creators";

const Dice = () => {

    const dispatch =  useDispatch()
    const start = useSelector(state => state)["gameRulesReducer"].start


    const  rollDoneCallback =(num) => {
        if(!start) dispatch(allActionCreators.startGame(true))
        dispatch(allActionCreators.zarChange(num))
        dispatch(allActionCreators.checkWhoseTurn())
        dispatch(allActionCreators.setPosition(num))
    }
    return (
        <div style={{position:'absolute',top:'8vw',left:'5vw'}}>
            <div>
                <ReactDice
                    numDice={1}
                    rollDone={rollDoneCallback}
                    // disableIndividual={true}
                    rollTime={1}
                />
            </div>
        </div>
    );
};

export default Dice;