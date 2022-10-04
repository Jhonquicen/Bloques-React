import React from 'react';
import './App.css';
import Advertisement from './componentes/Advertisement/Advertisement';
import Header from './componentes/Header/Header';
import Main from './componentes/Main/Main';
import Navigation from './componentes/Navigation/Navigation';
import Subcontent from './componentes/Subcontent/Subcontent';
import NaviMain from './componentes/NaviMain/NaviMain';
import Conte from './componentes/Conte/Conte';
import Sub from './componentes/Sub/Sub';

                
function App() {
  return (
    <div className="app">
          
      <Conte>
        <Header/>
        <NaviMain>
          <Navigation/>
          <Main>
            <Sub>
              <Subcontent></Subcontent>
              <Subcontent></Subcontent>
              <Subcontent></Subcontent>
            </Sub>
            <Advertisement></Advertisement>
            
          </Main>
        </NaviMain>
      </Conte>
    
    </div>
  );
}
                
export default App;

