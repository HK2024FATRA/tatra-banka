import './App.css'

import { Header } from './header/Header.tsx';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import img1 from './assets/img1.png';
import wizard from './assets/wizard.png'

function App() {
  return (
    <>
      <Parallax pages={10} style={{top: '0', left: '0'}} className="animation">

          <ParallaxLayer
              offset={0}
              speed={0.1}
              factor={0.5}>
              <Header></Header>
          </ParallaxLayer>

          <ParallaxLayer
              speed={1}
              offset={0.5}>
              <h2>Úvod do investovania s Tatra Bankou</h2>
          </ParallaxLayer>

          <ParallaxLayer
              speed={0.1}
              offset={1}>
              <div className="step1">
                  <img src={wizard} alt={'wizzard'}/>
                  <h2>Ahoj! Volám sa FatraBot a budem tvojím pomocníkom na ceste investovania.</h2>
              </div>
          </ParallaxLayer>

          <ParallaxLayer
              speed={1}
              offset={1}>
          </ParallaxLayer>



          {/*<ParallaxLayer offset={1} speed={1} style={{*/}
          {/*    backgroundImage: `url(${img1})`,*/}
          {/*    backgroundSize: 'cover',*/}
          {/*    backgroundPosition: 'center',*/}
          {/*    backgroundRepeat: 'no-repeat',*/}
          {/*    // Example responsive styling (for illustrative purposes)*/}
          {/*    display: 'flex',*/}
          {/*    flexDirection: 'column',*/}
          {/*    alignItems: 'center',*/}
          {/*    justifyContent: 'center',*/}
          {/*}}>*/}
          {/*</ParallaxLayer>*/}

      </Parallax>
    </>
  )
}

export default App;
