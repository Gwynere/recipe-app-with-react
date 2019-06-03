import React, { Component } from 'react';
import './styles/App.scss';
import 'normalize.css';
import { recipes } from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';


class App extends Component {
  state = {
    recipes: recipes,
    url: "https://www.food2fork.com/api/search?key=66caac779e3d2dd687059e587c0c227b",
    details_id: 35382
  }

  // async getRecipes(){
  //   try{
  //     const data = await fetch(this.state.url);
  //     const jsonData = await data.json();
  //     this.setState({
  //       recipes: jsonData.recipes
  //     })
  //   } catch(error){
  //     console.log(error)
  //   }
  // }

  componentDidMount(){
    this.getRecipes()
  }

  displayPage = (index) => {
    switch(index){
      default:

      case 1:
        return  <RecipeList recipes={this.state.recipes} /> 
      case 0:
        return  <RecipeDetails id={this.state.details_id} />
    }
  }

  render() {
    // console.log(this.state.recipes)
    return(
      <React.Fragment>
        {this.displayPage()}
      </React.Fragment>
    )
  }
}

export default App;
