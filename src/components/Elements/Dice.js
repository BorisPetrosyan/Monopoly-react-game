import React from 'react';
import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'
import {useDispatch} from "react-redux";
import {allActionCreators} from "../../store/reducers/action-creators";

const Dice = () => {

    const dispatch =  useDispatch()

    const  rollDoneCallback =(num) => {
        dispatch(allActionCreators.zarChange(num))
        dispatch(allActionCreators.checkWhoseTurn())
    }
    return (
        <div style={{position:'absolute',top:'8vw',left:'5vw'}}>
            <div>
                <ReactDice
                    numDice={1}
                    rollDone={rollDoneCallback}
                    // disableIndividual={true}
                    rollTime={3}
                />
            </div>
        </div>
    );
};

export default Dice;