import React from 'react'


export  const PlayerOne = () => {
    return(
        <div>
            <img
                src={require(`../../assets/images/1.png`).default}
                alt='player'
                style={{height:'1.5vw', width:'1.5vw',right: '3vw',top: '4.5vw',position:'absolute'}}
            />
        </div>
    )
}

export  const PlayerTwo = () => {
    return(
        <div>
            <img
                src={require(`../../assets/images/2.png`).default}
                alt='player'
                style={{height:'2vw', width:'2vw',right: '0vw',top: '4.5vw',position:'absolute'}}
            />
        </div>
    )
}
