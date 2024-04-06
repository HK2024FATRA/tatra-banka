import './App.css'

import { Header } from './header/Header.tsx';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import wizard from './assets/wizard.png'

function App() {
  return (
    <>
      <Parallax pages={4}>

          <ParallaxLayer
              offset={0}
              factor={0.5}>
              <Header></Header>
          </ParallaxLayer>

          <ParallaxLayer
              offset={0.5}
              factor={0.5}
              speed={0.05}
              style={{
                  backgroundImage: `url(${wizard})`,
                  height: '100%',
              }}>
          </ParallaxLayer>
      </Parallax>
    </>
  )
}

export default App;
