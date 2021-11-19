import React from 'react';
import MonoPlace from "./MonoPlace";

const MonoPlaceHigh = ({className,leftStyle}) => {
    return (
        <>
            <MonoPlace className={'highHome'} />
            <MonoPlace className={'highHome'}  leftStyle={{left:'12.9vw'}}/>
            <MonoPlace className={'highHome'}  leftStyle={{left:'17.77vw'}}/>
            <MonoPlace className={'highHome'}  leftStyle={{left:'22.66vw'}}/>
            <MonoPlace className={'highHome'}  leftStyle={{left:'27.63vw'}}/>
            <MonoPlace className={'highHome'}  leftStyle={{left:'32.55vw'}}/>
            <MonoPlace className={'highHome'}  leftStyle={{left:'37.45vw'}}/>
            <MonoPlace className={'highHome'}  leftStyle={{left:'42.35vw'}}/>
            <MonoPlace className={'highHome'}  leftStyle={{left:'47.27vw'}}/>
            <MonoPlace className={'highHome'}  leftStyle={{left:'52.15vw',width:'7.85vw'}}/>
        </>
    );
};

export default MonoPlaceHigh;