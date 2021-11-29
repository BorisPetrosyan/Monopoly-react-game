
const initialState = {
    playerCount: 2,
    players:
        {
            playerOne: {
                id:1,
                name:'Bob',
                position: 1,
                money: 10000,
                business: []
            },
            playerTwo: {
                id:2,
                name:'Ash',
                position: 1,
                money: 10000,
                business: []
            }
        },

    playerTurn : 2,
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