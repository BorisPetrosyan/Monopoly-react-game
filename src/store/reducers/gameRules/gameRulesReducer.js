

const initialState = {
    playerCount: 2,
    allMoves : 40,
    zar: null,
    waitMove : true,
    blockPlayer: true,
    movesToUnlockPlayer: null
}


export const  gameRulesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_ZAR':
            return{ ...state,zar: action.payload }
        case 'WAIT_MOVE':
            return{ ...state,blockPlayer: action.payload }
        default: return state
    }
}