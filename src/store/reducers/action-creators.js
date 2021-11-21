import {gamePlayersActionCreators} from "./gameRules/action-creators";
import {gameRulesActionCreators} from "./gamePlayers/action-creators";
import {gameBoardActionCreators} from "./gameBoard/action-creators";

export  const allActionCreators = {
    ...gameRulesActionCreators,
    ...gamePlayersActionCreators,
    ...gameBoardActionCreators,
}
