import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  addMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  addBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>
            Bob ate <span className="spanEl">{mango}</span> mangoes{' '}
            <span className="spanEl">{banana}</span> bananas
          </h1>
          <div className="content-container">
            <div className="item">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="i"
                alt="mango"
              />
              <button className="btn" onClick={this.addMango}>
                Eat Mango
              </button>
            </div>
            <div className="item">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="i"
                alt="banana"
              />
              <button className="btn" onClick={this.addBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
