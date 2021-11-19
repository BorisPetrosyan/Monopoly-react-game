
const initialState = {
    playerCount: 2,
    players:[1,2],
    playerTurn : 1,
    waitMove : true,
    blockPlayer: true,
    movesToUnlockPlayer: null
}

export const  gamePlayersReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'TURN_PLAYER':
            return{ ...state,playerTurn: action.payload }
        default: return state
    }
}