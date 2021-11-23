
export const gameBoardActionCreators = {
    changePosition: (value)  => (
        {type: 'CHANGE_POSITION' ,payload: value}
    ),
    setPosition: (value) => ( dispatch , state) => {
        const playerTurn = state().gamePlayersReducer.playerTurn
        const gameBoard = state().gameBoardReducer.gameBoard
        if(playerTurn === 1) {

             dispatch(gameBoardActionCreators.changePosition(state))
        }
        if(playerTurn === 2 ) {
            // dispatch(gameRulesActionCreators.setWhoseTurn(1))
        }

    }
}