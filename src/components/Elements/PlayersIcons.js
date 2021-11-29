import React from 'react'


export  const PlayerOne = ({styles}) => {
    return(
        <div>
            <img
                src={require(`../../assets/images/1.png`).default}
                alt='player1'
                style={styles[0] === 'lowHomeL'  ? null : {height:'1.5vw', width:'1.5vw',right: styles[0] === 'highHomeR' ? '4.4vw' :  '3vw',top: styles[0] === 'highHome'?  '1.5vw':styles[0] === 'highHomeR' ? '0.5vw' :  '4.5vw',position:'absolute'}}
                className={styles[0] === 'lowHomeL'  ? 'p1leftSide' : null}
            />
        </div>
    )
}

export  const PlayerTwo = ({styles}) => {



    return(
        <div>
            <img
                src={require(`../../assets/images/2.png`).default}
                alt='player2'
                style={styles[0] === 'lowHomeL'  ? null :{height:'2vw', width:'2vw',right: styles[0] === 'highHome' ? '0.5vw' : '0.5vw',top:styles[0] === 'highHome' ? '1.2vw' : styles[0] === 'highHomeR' ? '0.2vw' : '4.1vw',position:'absolute',transform:styles[0] === 'highHome' ? 'scaleX(-1)':'scaleX(1)'}}
                className={styles[0] === 'lowHomeL'  ? 'p2leftSide' : null}
            />
        </div>
    )
}

// right: 0.5vw;
// top: 4.1vw;
// right: 0.5vw;
// top: 1.2vw;
// position: absolute;
// transform: scaleX(-1)
