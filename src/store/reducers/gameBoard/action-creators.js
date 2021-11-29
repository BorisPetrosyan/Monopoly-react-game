export const gameBoardActionCreators = {
    changePosition: (value)  => (
        {type: 'CHANGE_POSITION' ,payload: value}
    ),
    setPosition: (value) => ( dispatch , state) => {
        const playerTurn = state().gamePlayersReducer.playerTurn
        const gameBoard = state().gameBoardReducer.gameBoard
        const positionPlayers = gameBoard.filter((i) => i.positionIn.length)
        let playerOne = positionPlayers.find((i) => i.positionIn.includes(1))?.id
        let playerTwo = positionPlayers.find((i) => i.positionIn.includes(2))?.id


        const newGameBoard = gameBoard.map((item) => {
            if(item.id === playerOne &&  playerTurn ===1 ) {
                let position = item.positionIn.filter(i => i !== 1 )
                return {...item, positionIn: position}
            }  else if(item.id === playerTwo &&  playerTurn === 2 ) {
                let position = item.positionIn.filter(i => i !== 2 )
                return {...item, positionIn: position}
            }
              else {
                return item
            }
        })

        const newGameBoardMoved = newGameBoard.map((item) => {
            if(playerTurn ===1 ) {
                if(playerOne + value >= 40) {
                    playerOne = playerOne - 40
                }
                if (item.id === playerOne + value) {
                    let position = item.positionIn
                    position.push(1)
                    return {...item, positionIn: position}
                } else {
                    return item
                }
            }
            if(playerTurn === 2 ) {
                if(playerTwo + value >= 40) {
                    playerTwo = playerTwo - 40
                }
                if (item.id === playerTwo + value) {
                    let position = item.positionIn
                    position.push(2)
                    return {...item, positionIn: position}
                } else {
                    return item
                }
            }
            return item
        })

        // setTimeout(() => {
        //
        //
        // },0)
        dispatch(gameBoardActionCreators.changePosition(newGameBoardMoved))
    }
}