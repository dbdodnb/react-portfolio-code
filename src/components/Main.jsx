import React from 'react'
import * as THREE from 'three'
import NET from 'vanta/dist/vanta.net.min'
import MainButton from './Buttons/MainButton'
import MainButton2 from './Buttons/MainButton2'

class Main extends React.Component {
  constructor(props){
    super(props)
    this.vantaRef = React.createRef()
  }
  componentDidMount(){
    this.vantaEffect = NET({
      el: this.vantaRef.current, THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 4416006,
      points: 11.00,
      maxDistance: 19.00,
      spacing: 14.00,
      showDots: false,
      backgroundColor: 15987699,
    })
  }
  componentWillUnmount(){
    if (this.vantaEffect) this.vantaEffect.destroy()
  }

  render(){
    return(
      <>
        <main
          ref={this.vantaRef}
          id='home'
        >
          <div className="mainContainer container flexSB">
            <div className="main__part">
              <div className="main__info">
                <p className="main__headline">
                  Hello, I'm Danyil Mamentovych
                </p>
                <p className="main__subheading">I'm front-end developer</p>
              </div>
              <div className="main__buttons">
                <MainButton2></MainButton2>
                <MainButton></MainButton>
              </div>
            </div>
          </div>
        </main>
      </>
    )
  }
}

export default Main