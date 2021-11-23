import React from 'react';
import Dice from "./components/Elements/Dice";
import GameBoardContainer from "./components/GameBoardContainer";



const App = () => {
    return (<>
        <div style={{margin: '0 auto', maxWidth:'60vw',paddingTop:'2vw',position:'relative'}}>
          <img   src={require('./assets/images/monopolia.jpg').default} alt='monopoly' style={{height:'50vw', width:'60vw'}}/>

                <GameBoardContainer/>

        </div>
            <Dice/>
        </>
    );
};

export default App;

