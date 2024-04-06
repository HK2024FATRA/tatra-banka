import './App.css'

import { Header } from './header/Header.tsx';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import wizard from './assets/wizard.png'
import wizardFalling from './assets/wizard_falling.png';

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
              <div className="step">
                  <img src={wizard} alt={'wizzard'}/>
                  <h2>Ahoj! Volám sa FatraBot a budem tvojím pomocníkom na ceste investovania.</h2>
              </div>
          </ParallaxLayer>


          <ParallaxLayer offset={1.5} speed={0} sticky={{start: 2, end: 6}}>
              <div style={{height: '100vh', display: 'flex', alignItems: 'flex-start'}}>
                  <img src={wizardFalling} alt="Falling Wizard" style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'contain'}}/>
              </div>
          </ParallaxLayer>

          <ParallaxLayer speed={0.1} offset={3}>
              <div className="step-falling">
                  <div>
                      <h2>Pokúsim sa ti jednoducho vysvetliť:</h2>
                  </div>
              </div>
          </ParallaxLayer>
          <ParallaxLayer speed={0.1} offset={4}>
              <div className="step-falling">
                  <div>
                      <h2>Ako ti investovanie dokáže zhodnotiť úspory, ktoré ti ležia na účte 📈,</h2>
                  </div>
              </div>
          </ParallaxLayer>
          <ParallaxLayer speed={0.1} offset={5}>
              <div className="step-falling">
                  <div>
                      <h2>vybudovať majetok a finančnú rezervu,</h2>
                  </div>
              </div>
          </ParallaxLayer>
          <ParallaxLayer speed={0.1} offset={6}>
              <div className="step-falling">
                  <div>
                      <h2>a zabezpečiť tak tvoju finančnú stabilitu alebo slobodu.</h2>
                  </div>
              </div>
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
