import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0}

  addMango = () => {
    this.setState(prevState => ({mangoes: prevState.mangoes + 1}))
  }

  addBanana = () => {
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }

  render() {
    const {mangoes, bananas} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>
            Bob ate <span className="spanEl">{mangoes}</span> mangoes
            <span className="spanEl">{bananas}</span> bananas
          </h1>
          <div className="content-container">
            <div className="item">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="i"
                alt="mango"
              />
              <button type="button" className="btn" onClick={this.addMango}>
                Eat Mango
              </button>
            </div>
            <div className="item">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="i"
                alt="banana"
              />
              <button type="button" className="btn" onClick={this.addBanana}>
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
