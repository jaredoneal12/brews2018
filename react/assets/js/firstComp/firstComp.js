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
      max_ibu: 120,
      filteredData: beerData,
      breweryName: 'All',
      beerType: 'Any',
      populateFormsData: '',
      sortBy: 'ABV-desc',
      view: 'card',
      search: ''

     
    }
    this.change = this.change.bind(this)
    this.filteredData = this.filteredData.bind(this)
    this.populateForms = this.populateForms.bind(this)
    this.changeView = this.changeView.bind(this)
  }
  componentWillMount(){

    var beerData = this.state.beerData.sort((a,b) =>
  {
    return a.ABV - b.ABV
  })

    this.setState({
      beerData
    })
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

  changeView(viewName){
    this.setState({
      view: viewName
    })
    console.log("view changed")
  }

  filteredData(){
 var returnedData = this.state.beerData.filter((item) => {
   return (item.ABV >= this.state.min_abv && item.ABV <= this.state.max_abv) && (item.IBU >= this.state.min_ibu && item.IBU <= this.state.max_ibu)
 })

 if(this.state.breweryName != 'All'){
   returnedData = returnedData.filter((item) => {
     return item.breweryName == this.state.breweryName
   })
 }

 if(this.state.beerType != 'Any'){
  returnedData = returnedData.filter((item) => {
    return item.beerType == this.state.beerType
  })
}

if(this.state.sortBy == 'ABV-desc') {
  returnedData = returnedData.sort((a,b) => {
    return a.ABV - b.ABV 
  })
}

if(this.state.sortBy == 'ABV-asc') {
  returnedData = returnedData.sort((a,b) => {
    return b.ABV - a.ABV 
  })
}

if(this.state.search !=''){
  returnedData = returnedData.filter((item) => {
    var beerName = item.beerName.toLowerCase()
    var searchText = this.state.search.toLowerCase()
    var n = beerName.match(searchText)

    var breweryName = item.breweryName.toLowerCase()
    var searchText = this.state.search.toLowerCase()
    var m = breweryName.match(searchText)

    

    if(n != null) {
      return true
    }
    if(m !=null){
      return true
    }
    console.log("searched")
  })
}
  

 this.setState({
   filteredData: returnedData
 })
 console.log("data filtered")
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
        <Results beerData={this.state.filteredData} change={this.change} globalState={this.state} changeView={this.changeView}/>
        </section>
    </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
