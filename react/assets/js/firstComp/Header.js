import React, { Component} from 'react'
import ReactDOM from 'react-dom'


export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  render () {
    return (<header>
      <div className="logo">Logo Here</div>

      <nav>
      <a href="#">About</a>
      <a href="#">Contact</a>
      <a href="#">Brewery Map</a>
      <a href="#" className="weekend-btn">Birmingham for the Weekend</a>
      </nav>

    </header>)
  }
}


