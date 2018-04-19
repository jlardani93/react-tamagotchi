import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import User from './User'
import Admin from './Admin'

export default class App extends React.Component {

  constructor(props){
    super(props);
    console.log("this is 'this' in App:");
    console.log(this);
    this.state = {
      dinoList: {},
      activeDino: null
    };
    this.handleNewDino = this.handleNewDino.bind(this);
  }

  handleNewDino(dino){
    let newDinoList = {}; 
    // var newDinoList = Object.assign({}, this.state.dinoList, {[dino.key]: dino});
    Object.keys(this.state.dinoList).forEach((key)=>{
      newDinoList[key] = Object.create(this.state.dinoList[key]);
    });
    newDinoList[dino.key] = dino;
    console.log(this);
    // console.log(this['state']);
    this.setState({
      dinoList: newDinoList
    });
    console.log("SET STATE HAPPENED");
    console.log(this.state);
    // console.log(this.state);
  }

  render(){
    console.log("IN RENDER");
    console.log(this.state);
    Object.keys(this.state.dinoList).forEach((dino)=>{
      console.log("DAD< I FOUDN ADINO!!!");
      console.log(dino);
    })
    return(
      <div>
       <Header />
       <Switch>
         <Route exact path="/" render={()=><User dinos={this.state.dinoList}/>} />
         <Route path="/Admin" render={()=><Admin onNewDino={this.handleNewDino} dinos={this.state.dinoList}/>} />
       </Switch>
       <Footer />
      </div>
    )
  }
}
