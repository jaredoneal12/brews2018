import React, { Component} from 'react'
import ReactDOM from 'react-dom'


export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
    this.beerTypes = this.beerTypes.bind(this)
    this.breweryNames = this.breweryNames.bind(this)
  }

  componentWillMount(){
    this.props.populateAction()
  }

beerTypes(){
  if(this.props.globalState.populateFormsData.beerTypes != undefined){
  var { beerTypes } = this.props.globalState.populateFormsData
  return beerTypes.map((item) => {

    return(   

    <option key={item} value={item}>{item}</option>
    
  )

  })
}
}

breweryNames() {
  if(this.props.globalState.populateFormsData.breweryNames != undefined){
    var { breweryNames } = this.props.globalState.populateFormsData
    return breweryNames.map((item) => {
  
      return(   
  
      <option key={item} value={item}>{item}</option>
      
    )
  
    })
  }
}

  render () {
    return (<section className="filter">
      <h4>Filter</h4>
      <select name="breweryName" className="filters brewery" onChange={this.props.change}>
      <option value="All">All</option>
    {this.breweryNames()}
      </select>
      <select name="beerType" className="filters beerType" onChange={this.props.change}>
      <option value="Any">Any</option>
      {this.beerTypes()}
      </select>
      <div className="filters ABV">
      <span className="title">ABV</span>
      <input type="text" name="min_abv" className="minABV" onChange={this.props.change} value={this.props.globalState.min_abv} />
      <input type="text" name="max_abv" className="maxABV" onChange={this.props.change} value={this.props.globalState.max_abv} />
      </div>
      <div className="filters IBU" onChange={this.props.change}>
      <span className="title">IBU</span>
      <input type="text" name="min_ibu" className="minIBU" onChange={this.props.change} value={this.props.globalState.min_ibu}/>
      <input type="text" name="max_ibu" className="maxIBU" onChange={this.props.change} value={this.props.globalState.max_ibu}/>
      </div>
      </section>)
  }
}


