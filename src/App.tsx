import './App.css'

import { Header } from './header/Header.tsx';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import wizard from './assets/wizard.png'
import wizardFalling from './assets/wizard_falling.png';
import wizardDown from './assets/wizard_down.png';
import wizardPointing from './assets/wizard_pointing.png';
import wizardWatch from './assets/wizard_watch.png';

function App() {
  return (
    <>
      <Parallax pages={20} style={{top: '0', left: '0'}} className="animation">

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
                      <h2><a href="#why" className="link-h">prečo</a> investovať,</h2>
                  </div>
              </div>
          </ParallaxLayer>
          <ParallaxLayer speed={0.1} offset={5}>
              <div className="step-falling">
                  <div>
                      <h2><a href="#how" className="link-h">ako</a> investovať,</h2>
                  </div>
              </div>
          </ParallaxLayer>
          <ParallaxLayer speed={0.1} offset={6}>
              <div className="step-falling">
                  <div>
                      <h2>a <a href="#when" className="link-h">kedy</a> začať investovať.</h2>
                  </div>
              </div>
          </ParallaxLayer>

          <ParallaxLayer
              speed={0.1}
              offset={6.5}>
              <div className="step" id="why">
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
              <div className="step" id="how">
                  <img src={wizardPointing} alt={'wizzard'}/>
                  <div>
                      <h2>Ako investovať?</h2>
                      <p className="left-align">
                          Pre <b>krátkodobé investičné horizonty</b> (do 5 rokov) je vhodné pristupovať <b>konzervatívnejšie</b>, čo <b>znižuje riziko straty, ale aj potenciálne výnosy</b>. <br/> <br/>
                          Naopak, pri <b>dlhodobom investovaní</b> je možné zvoliť <b>agresívnejšie stratégie</b>, ktoré prinášajú <b>vyšší potenciál</b> rastu hodnoty investície, aj keď musíš počítať s <b>možnými kratkodobými výkyvmi</b>.</p>
                  </div>
              </div>
          </ParallaxLayer>

          <ParallaxLayer
              speed={0.1}
              offset={8.5}>
              <div className="step" id="when">
                  <div>
                      <h2>Kedy začať investovať?</h2>
                      <p className="left-align">
                          Hneď. Už včera bolo neskoro. Čím skôr, tým lepšie. Nechaj svoje peniaze pracovať.
                      </p>
                  </div>
                  <img src={wizardWatch} alt={'wizzard watch'}/>
              </div>
          </ParallaxLayer>
      </Parallax>
    </>
  )
}

export default App;
