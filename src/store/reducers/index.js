// import auth from './auth'
// import  event from './event'
import {gameRulesReducer} from "./gameRules/gameRulesReducer";
import {gamePlayersReducer} from "./gamePlayers/gamePlayersReducer";
import {gameBoardReducer} from "./gameBoard/gameBoardReducer";
// eslint-disable-next-line import/no-anonymous-default-export
export  default  {
    gameRulesReducer,
    gamePlayersReducer,
    gameBoardReducer
}