
export const gameBoardActionCreators = {
    changePosition: (value)  => (
        {type: 'CHANGE_POSITION' ,payload: value}
    ),
    setPosition: (value) => ( dispatch , state) => {
        const playerTurn = state().gamePlayersReducer.playerTurn
        const gameBoard = state().gameBoardReducer.gameBoard

        const positionPlayers = gameBoard.filter((i) => i.positionIn.length)
         console.log(positionPlayers)
        let playerOne = positionPlayers.find((i) => i.positionIn.includes(1))?.id
        const playerTwo = positionPlayers.find((i) => i.positionIn.includes(2))?.id
        console.log(playerOne)
        // console.log(value)

        const newGameBoard = gameBoard.reduce(function (acc, item ,x) {

            const itemCopy ={...item}
            if(itemCopy.id === playerOne || itemCopy.id === 39 ) {
                console.log(playerOne)
                acc[itemCopy.id] = {...itemCopy, positionIn: []}
            }
            else if(itemCopy.id === playerOne + value) {
                    acc[itemCopy.id] = {...itemCopy, positionIn: [1]}
            }
            else {
                if(playerOne + value > 39) {
                    // acc[itemCopy.id] = {...itemCopy, positionIn: ['xxxxxxxxxxx']}
                    playerOne = playerOne + value - 39 -value - 1
                }
                acc[itemCopy.id] = itemCopy
            }
            return acc
        }, [])
        // console.log(newGameBoard)

        // if(playerTurn === 1) {
             dispatch(gameBoardActionCreators.changePosition(newGameBoard))
        // }
        // if(playerTurn === 2 ) {
        //     // dispatch(gameRulesActionCreators.setWhoseTurn(1))
        // }

    }
}