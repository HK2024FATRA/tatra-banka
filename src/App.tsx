import './App.css'

import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import wizard from './assets/wizard.png'
import wizardFalling from './assets/wizard_falling.png';
import wizardDown from './assets/wizard_down.png';
import wizardPointing from './assets/wizard_pointing.png';
import wizardWatch from './assets/wizard_watch.png';
import logo from './assets/tb-logo.png';
import React from 'react';
import {InfoForm} from './info-form/InfoForm.tsx';
import {Login} from './login/Login.tsx';
import {useAuth0} from '@auth0/auth0-react';
import {Footer} from './footer/Footer.tsx';

function App() {
    const { isAuthenticated} = useAuth0();

    const headerStyle = {
        backgroundColor: '#000', // black background
        color: '#fff', // white text
        padding: '10px 20px', // padding
        display: 'flex', // use flex for layout
        alignItems: 'center', // vertical alignment
        justifyContent: 'space-between', // space between the items
    };

  return (
    <>
      <Parallax pages={13} style={{top: '0', left: '0'}}>

          <ParallaxLayer
              offset={0}
              speed={0.1}
              factor={0.5}>
              <div style={headerStyle}>
                  <div>
                      <img src={logo} alt="Logo" style={{height: '100px'}}/>
                  </div>

                  <div style={headerStyle}>
                      {
                          isAuthenticated && (
                                  <button className="tb-button">Začni investovať</button>
                          )
                      }
                      <Login></Login>
                  </div>
              </div>
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
                      <p>
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
                      <p>
                          Hneď. Už včera bolo neskoro. Čím skôr, tým lepšie. Nechaj svoje peniaze <b>pracovať</b>.
                      </p>
                  </div>
                  <img src={wizardWatch} alt={'wizzard watch'}/>
              </div>
          </ParallaxLayer>

          <ParallaxLayer
              speed={0.1}
              offset={9.5}>
              <div className="step">
                  <img src={wizard} alt={'wizzard'}/>
                  <h2>Neváhaj a kontaktuj nášho pracovníka pre vypracovanie <a className="link-h">investičného plánu</a></h2>
              </div>
          </ParallaxLayer>

          <ParallaxLayer offset={10.5}>
              <Footer></Footer>
          </ParallaxLayer>
      </Parallax>
    </>
  )
}

export default App;
