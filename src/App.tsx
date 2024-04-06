import './App.css'

import { Header } from './header/Header.tsx';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import wizard from './assets/wizard.png'

function App() {
  return (
    <>
      <Parallax pages={3} style={{top: '0', left: '0'}} className="animation">
          <ParallaxLayer
              offset={0}
              speed={0.25}
              factor={3}>
              <Header></Header>
          </ParallaxLayer>

          <ParallaxLayer
              offset={0.5}>
              <h2>ABCD</h2>
          </ParallaxLayer>

      </Parallax>
    </>
  )
}

export default App;
