import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'
import Filter from './Filter.js'
import Results from './Results.js'
import beerData from './data/beerData.js'

class App extends Component {
  constructor () {
    super()
    this.state = {
      beerData,
      min_abv: 0,
      max_abv: 15,
      min_ibu: 0,
      max_ibu: 100,
      filteredData: beerData,
      breweryName: 'All',
      beerType: 'Any',
      populateFormsData: ''

     
    }
    this.change = this.change.bind(this)
    this.filteredData = this.filteredData.bind(this)
    this.populateForms = this.populateForms.bind(this)
  }
  change(event){
    var name = event.target.name
    var value = event.target.value

    this.setState({
      [name]:value
    }, () => {
      console.log(this.state)
      this.filteredData()
    })
  }
  filteredData(){
 var returnedData = this.state.beerData.filter((item) => {
   return item.ABV >= this.state.min_abv && item.ABV <= this.state.max_abv && item.IBU <= this.state.max_ibu && item.IBU >= this.state.min_ibu
 })

 if(this.state.breweryName != "All"){
   returnedData = returnedData.filter((item) =>{
     return item.breweryName == this.state.breweryName
   })
 }

 if(this.state.beerType != "Any"){
  returnedData = returnedData.filter((item) =>{
    return item.beerType == this.state.beerType
  })
}

 this.setState({
   filteredData: returnedData
 })

}

populateForms (){
  //beerType
  var beerTypes = this.state.beerData.map((item) =>{
    return item.beerType
  })

  beerTypes = new Set(beerTypes)
  beerTypes = [...beerTypes]
  beerTypes = beerTypes.sort()

  //breweryName
  var breweryNames = this.state.beerData.map((item) =>{
    return item.breweryName
  })

  breweryNames = new Set(breweryNames)
  breweryNames = [...breweryNames]
  breweryNames = breweryNames.sort()
  

  this.setState({
    populateFormsData: {
      beerTypes,
      breweryNames
    }
  },
() => {
  console.log(this.state)
}
)

}

  render () {
    return (
    <div>
      <Header />
      <section id="content">
        <Filter change={this.change} globalState={this.state} populateAction={this.populateForms}/>
        <Results beerData={this.state.filteredData}/>
        </section>
    </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
