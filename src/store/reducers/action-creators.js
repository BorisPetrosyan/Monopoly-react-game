import {gameRulesActionCreators} from "./gameRules/action-creators";
import {gameBoardActionCreators} from "./gameBoard/action-creators";
import {gamePlayersActionCreators} from "./gamePlayers/action-creators";

export  const allActionCreators = {
    ...gameRulesActionCreators,
    ...gameBoardActionCreators,
    ...gamePlayersActionCreators
}
