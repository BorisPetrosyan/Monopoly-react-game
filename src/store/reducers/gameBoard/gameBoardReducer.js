

const initialState = {
    gameBoard : [
        {id: 0,name:'GO', positionIn: [1], styles:['go', {right:'0vw'}]},
        {
            id: 1,
            name: 'MEDITERRANEAN AVE.',
            priceInfo: {
                fixPrice:60,
                priceHouses:[10,30,90,160],
                playerBuy: null,
                placeBuyPriceIs: null,
                isHotel: false
            },
            positionIn: [null,2],
            styles:[
                'lowHome',
                {right:'7.95vw'}
            ]
        },
        {
            id: 2,
            name: 'COMMUNITY CHEST',
            cards: [],
            styles:[
                'lowHome',
                {right:'12.85vw'}
            ],
            positionIn: [],
        },
        {
            id: 3,
            name: 'BALTIC AVE.',
            priceInfo: {
                fixPrice:60,
                priceHouses:[20,60,180,320],
                playerBuy: null,
                placeBuyPriceIs: null,
                isHotel: false
            },
            positionIn: [],
            styles:[
                'lowHome',
                {right: '17.75vw'}
            ]
        },
        {
            id: 4,
            name: 'INCOME TAX',
            payTax:200,
            positionIn: [],
            styles:[
                'lowHome',
                {right:'22.65vw'}
            ]
        },
        {
            id: 5,
            name: 'READING RAILROAD',
            priceInfo: {
                fixPrice:200,
                playerBuy: null,
                placeBuyPriceIs: null,
                isHotel: false
            },
            positionIn: [],
            styles:[
                'lowHome',
                {right:'27.55vw'}
            ]
        },
        {
            id: 6,
            name: 'ORIENTAL AVE.',
            priceInfo: {
                fixPrice:100,
                priceHouses:[30,90,270,400],
                playerBuy: null,
                placeBuyPriceIs: null,
                isHotel: false
            },
            positionIn: [],
            styles:[
                'lowHome',
                {right:'32.55vw'}
            ]
        },
        {
            id: 7,
            name: 'CHANCE',
            cards: [],
            styles:[
                'lowHome',
                {right:'37.45vw'}
            ],
            positionIn: [],
        },
        {
            id: 8,
            name: 'VERMONT AVE.',
            priceInfo: {
                fixPrice:100,
                priceHouses:[30,90,270,400],
                playerBuy: null,
                placeBuyPriceIs: null,
                isHotel: false
            },
            positionIn: [],
            styles:[
                'lowHome',
                {right:'42.35vw'}
            ]
        },
        {
            id: 9,
            name: 'CONNECTICUT AVE.',
            priceInfo: {
                fixPrice:120,
                priceHouses:[40,100,300,450],
                playerBuy: null,
                placeBuyPriceIs: null,
                isHotel: false
            },
            positionIn: [],
            styles:[
                'lowHome',
                {right:'47.28vw'}
            ]
        },
        {
            id: 10,
            name: 'JAIL',
            waiting:3,
            styles:[
                'go',
                {right:'52.19vw'}
            ],
            positionIn: [],
        },
        {
            id: 11,
            name: 'ST.CHARLES PLACE',
            priceInfo: {
                fixPrice:140,
                priceHouses:[50,150,450,625],
                playerBuy: null,
                placeBuyPriceIs: null,
                isHotel: false
            },
            positionIn: [],
            styles:[
                'lowHomeL',
                {top:'41.4vw'}
            ]
        },
        {
            id: 12,
            name: 'ELECTRIC COMPANY',
            priceInfo: {
                fixPrice:150,
                playerBuy: null,
                placeBuyPriceIs: null,
                isHotel: false
            },
            positionIn: [],
            styles:[
                'lowHomeL',
                {top:'37.3vw'}
            ]
        },
        {
            id: 13,
            name: 'STATES AVE.',
            priceInfo: {
                fixPrice:140,
                priceHouses:[50,150,450,625],
                playerBuy: null,
                placeBuyPriceIs: null,
                isHotel: false
            },
            positionIn: [],
            styles:[
                'lowHomeL',
                {top:'33.15vw'}
            ]
        },
        {
            id: 14,
            name: 'VIRGINIA AVE.',
            priceInfo: {
                fixPrice:160,
                priceHouses:[60,180,500,700],
                playerBuy: null,
                placeBuyPriceIs: null,
                isHotel: false
            },
            positionIn: [],
            styles:[
                'lowHomeL',
                {top:'29.10vw'}
            ]
        },
        {
            id: 15,
            name: 'PENNSYLVANIA RAILROAD',
            priceInfo: {
                fixPrice:200,
                playerBuy: null,
                placeBuyPriceIs: null,
                isHotel: false
            },
            positionIn: [],
            styles:[
                'lowHomeL',
                {top:'25vw'}
            ]
        },
        {
            id: 16,
            name: 'ST.JAMES PLACE',
            priceInfo: {
                fixPrice:180,
                priceHouses:[70,200,550,750],
                playerBuy: null,
                placeBuyPriceIs: null,
                isHotel: false
            },
            positionIn: [],
            styles:[
                'lowHomeL',
                {top:'20.9vw'}
            ]
        },
        {
            id: 17,
            name: 'COMMUNITY CHEST',
            cards: [],
            styles:[
                'lowHomeL',
                {top:'16.8vw'}
            ],
            positionIn: [],
        },
        {
            id: 18,
            name: 'TENNESSEE AVE.',
            priceInfo: {
                fixPrice:180,
                priceHouses:[70,200,550,750],
                playerBuy: null,
                placeBuyPriceIs: null,
                isHotel: false
            },
            positionIn: [],
            styles:[
                'lowHomeL',
                {top:'12.68vw'}
            ]
        },
        {
            id: 19,
            name: 'NEW YORK AVE.',
            priceInfo: {
                fixPrice:200,
                priceHouses:[80,220,600,800],
                playerBuy: null,
                placeBuyPriceIs: null,
                isHotel: false
            },
            positionIn: [],
            styles:[
                'lowHomeL',
                {top:'8.58vw'}
            ]
        },
        {
            id: 20,
            name: 'FREE PARKING',
            styles:[
                'lowHomeL',
                {top:'2vw',height:'6.5vw'}
            ],
            positionIn: [],
        },
        {
            id: 21,
            name: 'KENTUCKY AVE.',
            priceInfo: {
                fixPrice:220,
                priceHouses:[90,250,700,875],
                playerBuy: null,
                placeBuyPriceIs: null,
                isHotel: false
            },
            positionIn: [],
            styles:[
                'highHome',
                {left: '7.95vw'}
            ]
        },
        {
            id: 22,
            name: 'CHANCE',
            cards: [],
            styles:[
                'highHome',
                {left:'12.9vw'}
            ],
            positionIn: [],
        },
        {
            id: 23,
            name: 'INDIANA AVE.',
            priceInfo: {
                fixPrice:220,
                priceHouses:[90,250,700,875],
                playerBuy: null,
                placeBuyPriceIs: null,
                isHotel: false
            },
            positionIn: [],
            styles:[
                'highHome',
                {left: '17.77vw'}
            ]
        },
        {
            id: 24,
            name: 'ILLINOIS AVE.',
            priceInfo: {
                fixPrice:240,
                priceHouses:[100,300,750,925],
                playerBuy: null,
                placeBuyPriceIs: null,
                isHotel: false
            },
            positionIn: [],
            styles:[
                'highHome',
                {left: '22.66vw'}
            ]
        },
        {
            id: 25,
            name: 'B. & 0. RAILROAD',
            priceInfo: {
                fixPrice:200,
                playerBuy: null,
                placeBuyPriceIs: null,
                isHotel: false
            },
            positionIn: [],
            styles:[
                'highHome',
                {left: '27.63vw'}
            ]
        },
        {
            id: 26,
            name: 'ATLANTIC AVE.',
            priceInfo: {
                fixPrice:260,
                priceHouses:[110,330,800,975],
                playerBuy: null,
                placeBuyPriceIs: null,
                isHotel: false
            },
            positionIn: [],
            styles:[
                'highHome',
                {left: '32.55vw'}
            ]
        },
        {
            id: 27,
            name: 'VENTNOR AVE.',
            priceInfo: {
                fixPrice:260,
                priceHouses:[110,330,800,975],
                playerBuy: null,
                placeBuyPriceIs: null,
                isHotel: false
            },
            positionIn: [],
            styles:[
                'highHome',
                {left: '37.45vw'}
            ]
        },
        {
            id: 28,
            name: 'WATER WORKS',
            priceInfo: {
                fixPrice:150,
                playerBuy: null,
                placeBuyPriceIs: null,
                isHotel: false
            },
            positionIn: [],
            styles:[
                'highHome',
                {left: '42.35vw'}
            ]
        },
        {
            id: 29,
            name: 'MARVIN GARDENS',
            priceInfo: {
                fixPrice:280,
                priceHouses:[110,330,800,975],
                playerBuy: null,
                placeBuyPriceIs: null,
                isHotel: false
            },
            positionIn: [],
            styles:[
                'highHome',
                {left:'47.27vw'}
            ]
        },
        {
            id: 30,
            name: 'GO TO JAIL',
            styles:[
                'highHome',
                {left:'52.15vw',width:'7.85vw'}
            ],
            positionIn: [],
            goToIdPosition:10
        },
        {
            id: 31,
            name: 'PACIFIC AVE',
            priceInfo: {
                fixPrice:300,
                priceHouses:[130,390,900,1100],
                playerBuy: null,
                placeBuyPriceIs: null,
                isHotel: false
            },
            positionIn: [],
            styles:[
                'highHomeR',
                {top:'8.6vw'}
            ]
        },
        {
            id: 32,
            name: 'NORTH CAROLINA AVE.',
            priceInfo: {
                fixPrice:300,
                priceHouses:[130,390,900,1100],
                playerBuy: null,
                placeBuyPriceIs: null,
                isHotel: false
            },
            positionIn: [],
            styles:[
                'highHomeR',
                {top:'12.75vw'}
            ]
        },
        {
            id: 33,
            name: 'COMMUNITY CHEST',
            cards: [],
            styles:[
                'highHomeR',
                {top:'16.85vw'}
            ],
            positionIn: [],
        },
        {
            id: 34,
            name: 'PENNSYLVANIA AVE.',
            priceInfo: {
                fixPrice:320,
                priceHouses:[150,450,1000,1200],
                playerBuy: null,
                placeBuyPriceIs: null,
                isHotel: false
            },
            positionIn: [],
            styles:[
                'highHomeR',
                {top:'20.91vw'}
            ]
        },
        {
            id: 35,
            name: 'SHORT LINE',
            priceInfo: {
                fixPrice:200,
                playerBuy: null,
                placeBuyPriceIs: null,
                isHotel: false
            },
            positionIn: [],
            styles:[
                'highHomeR',
                {top:'25vw'}
            ]
        },
        {
            id: 36,
            name: 'CHANCE',
            cards: [],
            styles:[
                'highHomeR',
                {top:'29.1vw'}
            ],
            positionIn: [],
        },
        {
            id: 37,
            name: 'PARK PLACE',
            priceInfo: {
                fixPrice:350,
                priceHouses:[175,500,1100,1300],
                playerBuy: null,
                placeBuyPriceIs: null,
                isHotel: false
            },
            positionIn: [],
            styles:[
                'highHomeR',
                {top:'33.2vw'}
            ]
        },
        {
            id: 38,
            name: 'LUXURY TAX',
            priceInfo: {
                fixPrice:100,
                playerBuy: null,
                placeBuyPriceIs: null,
                isHotel: false
            },
            positionIn: [],
            styles:[
                'highHomeR',
                {top:'37.27vw'}
            ]
        },
        {
            id: 39,
            name: 'BOARDWALK',
            priceInfo: {
                fixPrice:400,
                priceHouses:[200,600,1400,1700],
                playerBuy: null,
                placeBuyPriceIs: null,
                isHotel: false
            },
            positionIn: [],
            styles:[
                'highHomeR',
                {top:'41.3vw'}
            ]
        },
    ]
}



export const  gameBoardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_POSITION':
            console.log(action.payload)
            // return{ ...state, state: action.payload }
        default: return state
    }
}