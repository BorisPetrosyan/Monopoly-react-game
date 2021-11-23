export const gamePlayersActionCreators = {
    setWhoseTurn: (value)  => ({type: 'TURN_PLAYER' ,payload: value}),

    checkWhoseTurn: () => ( dispatch , state) => {
        const playerTurn = state().gamePlayersReducer.playerTurn
        if(playerTurn === 1) {
            dispatch(gamePlayersActionCreators.setWhoseTurn(2))
        }
        if(playerTurn === 2 ) {
            dispatch(gamePlayersActionCreators.setWhoseTurn(1))
        }

    }
}