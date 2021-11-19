export const gameRulesActionCreators = {
    setWhoseTurn: (value)  => ({type: 'TURN_PLAYER' ,payload: value}),

    checkWhoseTurn: () => ( dispatch , state) => {
        const playerTurn = state().gamePlayersReducer.playerTurn
        if(playerTurn === 1) {
            dispatch(gameRulesActionCreators.setWhoseTurn(2))
        }
        if(playerTurn === 2 ) {
            dispatch(gameRulesActionCreators.setWhoseTurn(1))
        }

    }
}