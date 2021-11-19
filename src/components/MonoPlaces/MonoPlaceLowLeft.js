import React from 'react';
import MonoPlace from "./MonoPlace";

const MonoPlaceLowLeft = ({className,leftStyle}) => {
    return (
        <>
            <MonoPlace className={'lowHomeL'}  leftStyle={{top:'41.4vw'}}/>
            <MonoPlace className={'lowHomeL'} leftStyle={{top:'37.3vw'}} />
            <MonoPlace className={'lowHomeL'} leftStyle={{top:'33.15vw'}} />
            <MonoPlace className={'lowHomeL'} leftStyle={{top:'29.10vw'}} />
            <MonoPlace className={'lowHomeL'} leftStyle={{top:'25vw'}} />
            <MonoPlace className={'lowHomeL'} leftStyle={{top:'20.9vw'}} />
            <MonoPlace className={'lowHomeL'} leftStyle={{top:'16.8vw'}} />
            <MonoPlace className={'lowHomeL'} leftStyle={{top:'12.68vw'}} />
            <MonoPlace className={'lowHomeL'} leftStyle={{top:'8.58vw'}} />
            <MonoPlace className={'lowHomeL'} leftStyle={{top:'2vw',height:'6.5vw'}} />

        </>
    );
};

export default MonoPlaceLowLeft;