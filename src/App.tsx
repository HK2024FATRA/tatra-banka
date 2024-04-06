import './App.css'

import { Header } from './header/Header.tsx';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import wizard from './assets/wizard.png'
import wizardFalling from './assets/wizard_falling.png';
import wizardDown from './assets/wizard_down.png';
import wizardPointing from './assets/wizard_pointing.png';

function App() {
  return (
    <>
      <Parallax pages={100} style={{top: '0', left: '0'}} className="animation">

          <ParallaxLayer
              offset={0}
              speed={0.1}
              factor={0.5}>
              <Header></Header>
          </ParallaxLayer>

          <ParallaxLayer
              speed={0.5}
              offset={0.5}>
              <h2>Úvod do investovania s Tatra Bankou</h2>
          </ParallaxLayer>

          <ParallaxLayer
              speed={0.1}
              offset={1}>
              <div className="step">
                  <h2>Ahoj! Volám sa FatraBot a budem tvojím pomocníkom na ceste investovania.</h2>
                  <img src={wizard} alt={'wizzard'}/>
              </div>
          </ParallaxLayer>


          <ParallaxLayer offset={2} speed={0} sticky={{start: 2, end: 5.5}}>
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
                      <h2>prečo investovať,</h2>
                  </div>
              </div>
          </ParallaxLayer>
          <ParallaxLayer speed={0.1} offset={5}>
              <div className="step-falling">
                  <div>
                      <h2>ako investovať,</h2>
                  </div>
              </div>
          </ParallaxLayer>
          <ParallaxLayer speed={0.1} offset={6}>
              <div className="step-falling">
                  <div>
                      <h2>a aké sú druhy investovania.</h2>
                  </div>
              </div>
          </ParallaxLayer>

          <ParallaxLayer
              speed={0.1}
              offset={6.5}>
              <div className="step">
                  <div>
                      <h2>Prečo investovať?</h2>
                      <p>Peniaze na účte ti každý rok strácajú hodnotu kvôli inflácii. Trhy dlhodobo rastú a prinášajú
                          zisk. Nechaj svoje peniaze pracovať na tebe a využi potenciál investovania.</p>
                  </div>
                  <img src={wizardDown} alt={'wizzard'}/>
              </div>
          </ParallaxLayer>

          <ParallaxLayer
              speed={0.1}
              offset={7.5}>
              <div className="step">
                  <img src={wizardPointing} alt={'wizzard'}/>
                  <div>
                      <h2>Ako investovať?</h2>
                      <p className="left-align">
                          Pre <b>krátkodobé investičné horizonty</b> (do 5 rokov) je vhodné pristupovať <b>konzervatívnejšie</b>, čo <b>znižuje riziko straty, ale aj potenciálne výnosy</b>. <br/> <br/>
                          Naopak, pri <b>dlhodobom investovaní</b> je možné zvoliť <b>agresívnejšie stratégie</b>, ktoré prinášajú <b>vyšší potenciál</b> rastu hodnoty investície, aj keď musíš počítať s <b>možnými kratkodobými výkyvmi</b>.</p>
                  </div>
              </div>
          </ParallaxLayer>


          {/*<ParallaxLayer offset={6.5}>*/}
          {/*    <div className="step">*/}
          {/*        <img src={linechartBot} alt={'chartBot'}/>*/}
          {/*    </div>*/}
          {/*</ParallaxLayer>*/}

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
