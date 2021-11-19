import React from 'react'


export  const PlayerOne = ({player}) => {
    return(
        <div>
            <img
                src={require(`../../assets/images/${player}.png`).default}
                alt='player'
                style={{height:'1.5vw', width:'1.5vw',right: '3vw',top: '4.5vw',position:'absolute'}}
            />
        </div>
    )
}

