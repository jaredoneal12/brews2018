import React, { Component} from 'react'
import ReactDOM from 'react-dom'


export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      
    }
  }
  render () {
    return (<header>
      <div className="logo">Birmingham Brews Alot</div>

      <nav>
      <a href="#">About</a>
      <a href="#">Contact</a>
      <a href="#">Brewery Map</a>
      </nav>

    </header>)
  }
}


