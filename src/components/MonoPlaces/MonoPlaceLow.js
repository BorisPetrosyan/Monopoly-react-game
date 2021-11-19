import React from 'react';
import MonoPlace from "./MonoPlace";

const MonoPlaceLowLeft = () => {
    return (
        <>
            <MonoPlace className='go' />
            <MonoPlace className={'lowHome'} inPosition={{player: 1}} />
            <MonoPlace className={'lowHome'} leftStyle={{right:'12.85vw'}} />
            <MonoPlace className={'lowHome'} leftStyle={{right:'17.75vw'}} />
            <MonoPlace className={'lowHome'} leftStyle={{right:'22.65vw'}} />
            <MonoPlace className={'lowHome'} leftStyle={{right:'27.55vw'}} />
            <MonoPlace className={'lowHome'} leftStyle={{right:'32.55vw'}} />
            <MonoPlace className={'lowHome'} leftStyle={{right:'37.45vw'}} />
            <MonoPlace className={'lowHome'} leftStyle={{right:'42.35vw'}} />
            <MonoPlace className={'lowHome'} leftStyle={{right:'47.28vw'}} />
            <MonoPlace className='go' leftStyle={{right:'52.19vw'}} />
        </>
    );
};

export default MonoPlaceLowLeft;