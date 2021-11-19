import React from 'react';
import MonoPlaceLow from "./components/MonoPlaces/MonoPlaceLow";
import MonoPlaceLowLeft from "./components/MonoPlaces/MonoPlaceLowLeft";
import MonoPlaceHigh from "./components/MonoPlaces/MonoPlaceHigh";
import MonoPlaceHighRight from "./components/MonoPlaces/MonoPlaceHighRight";
import Dice from "./components/Elements/Dice";



const App = () => {
    return (<>
        <div style={{margin: '0 auto', maxWidth:'60vw',paddingTop:'2vw',position:'relative'}}>
          <img   src={require('./assets/images/monopolia.jpg').default} alt='monopoly' style={{height:'50vw', width:'60vw'}}/>


                <MonoPlaceLow/>
                <MonoPlaceLowLeft/>
                <MonoPlaceHigh/>
                <MonoPlaceHighRight/>

        </div>
            <Dice/>
        </>
    );
};

export default App;

