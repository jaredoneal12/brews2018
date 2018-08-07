import React, { Component} from 'react'
import ReactDOM from 'react-dom'


export default class Results extends Component {
  constructor () {
    super()
    this.state = {
      
    }
    this.loopBeers =this.loopBeers.bind(this)
  }
  loopBeers (){

    var {beerData} = this.props

    if(beerData == undefined || beerData.length == 0){
      return "Sorry your filter did not match any results"
    }

    return beerData.map((beer, index) => { 
        return (<div className="col-md-3" key={index}>
        <div className="beer">
            <div className="beerImg">
              <img src={"../img/" + beer.breweryName + ".png"} />
          </div>
          <div className="bottom-info">
          <span className="beerName">{beer.beerName}</span>
            <div className="names">
      
          <span className="breweryName">{beer.breweryName}</span>
          <span className="beerType">{beer.beerType}</span>
          </div>
          <div className="stats">
          <span className="ABVValue">ABV: {beer.ABV}%</span>
          <span className="IBUValue">IBU: {beer.IBU}</span>
          </div>
          </div>
        </div>
        </div>)
    })
  }
  render () {
    return (<section id="results">
    <section className="searchBar">
    <input type="text" name="search" placeholder="Search for a beer" onChange={this.props.change} />
    </section>
    <section className="sortBar">
      <div className="sortOptions">
      <div className="options">
      <select name="sortBy" className="sortBy" onChange={this.props.change}>
      <option value="ABV-desc">Low ABV</option>
      <option value="ABV-asc">High ABV</option>
      </select>
      </div>
      </div>
    </section>
    <section className="beerResults">

  {this.loopBeers()}

     </section>
   
    </section>)
  }
}


