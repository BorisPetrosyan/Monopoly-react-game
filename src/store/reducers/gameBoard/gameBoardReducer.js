

const initialState = {
    gameBoard : [
        {id: 0,name:'GO', positionIn: []},
        {
            id: 1,
            name: 'MEDITERRANEAN AVE.',
            priceInfo: {
                price:[10,30,90,160],
                playerBuy: null,
                placeBuyPriceIs: null,
                isHotel: false
            },
            positionIn: [],
            styles:[
                'lowHome',
                '0vw'
            ]
        },
        {
            id: 2,
            name: 'COMMUNITY CHEST',
            cards: [],
            styles:[
                'lowHome',
                '7.95vw'
            ],
            positionIn: [],
        },
        {
            id: 3,
            name: 'BALTIC AVE.',
            priceInfo: {
                price:[20,60,180,320],
                playerBuy: null,
                placeBuyPriceIs: null,
                isHotel: false
            },
            positionIn: [],
            styles:[
                'lowHome',
                '12.85vw'
            ]
        },
        {
            id: 4,
            name: 'INCOME TAX',
            payTax:200,
            positionIn: [],
            styles:[
                'lowHome',
                '17.75vw'
            ]
        },
    ]
}


export const  gameBoardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_PLACE':
            return{ ...state,zar: action.payload }
        default: return state
    }
}