import {gamePlayersActionCreators} from "./gameRules/action-creators";
import {gameRulesActionCreators} from "./gamePlayers/action-creators";

export  const allActionCreators = {
    ...gameRulesActionCreators,
    ...gamePlayersActionCreators

}
