import React, { Component} from 'react'
import ReactDOM from 'react-dom'


export default class Results extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
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
          <div className="names">
        <span className="beerName">{beer.beerName}</span>
        <span className="breweryName">{beer.breweryName}</span>
        </div>
        <div className="stats">
        <span className="ABVValue">ABV: {beer.ABV}%</span>
        <span className="IBUValue">IBU :{beer.IBU}</span>
        </div>
        </div>
      </div>
      </div>)
    })
  }
  render () {
    return (<section id="results">
    <section className="searchBar">
    <input type="text" name="search" placeholder="Search for a beer" />
    </section>
    <section className="sortBar">
      <div className="sortOptions">
      <div className="options">
      <select name="sortBy" className="sortBy" onChange={this.props.change}>
      <option value="ABV-asc">High ABV</option>
      <option value="ABV-desc">Low ABV</option>
      </select>
      </div>
      <div className="view">
      <i className="fa fa-th-list" aria-hidden="true"></i>
      <i className="fa fa-th" aria-hidden="true"></i>
      </div>
      </div>
    </section>
    <section className="beerResults">

  {this.loopBeers()}

     </section>
    <section className="pagination">
    <ul className="paginationNums">
    <li>Prev</li>
    <li className="active">1</li>
    <li>2</li>
    <li>3</li>
    <li>Next</li>
    </ul>
    </section>
    </section>)
  }
}


