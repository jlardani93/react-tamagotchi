import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import User from './User'
import Admin from './Admin'
import Moment from 'moment'

export default class App extends React.Component {

  birthTimeUpdateTimer: null;

  constructor(props){
    super(props);
    console.log("this is 'this' in App:");
    console.log(this);
    this.state = {
      dinoList: {},
      activeDino: null
    };
    this.handleNewDino = this.handleNewDino.bind(this);
    this.updateDinoBirthTimes = this.updateDinoBirthTimes.bind(this);
  }

  handleNewDino(dino){
    let newDinoList = {};
    // var newDinoList = Object.assign({}, this.state.dinoList, {[dino.key]: dino});
    Object.keys(this.state.dinoList).forEach((key)=>{
      newDinoList[key] = Object.create(this.state.dinoList[key]);
    });
    dino.birthTime = dino.birthMoment.from(new Moment(), true);
    newDinoList[dino.key] = dino;
    // console.log(this['state']);
    this.setState({
      dinoList: newDinoList
    });
    // console.log(this.state);
  }

  updateDinoBirthTimes(){
    let newDinoList = Object.assign({}, this.state.dinoList);
    Object.values(newDinoList).forEach((dino)=>{
      dino.birthTime = dino.birthMoment.from(new Moment(), true);
    })
    this.setState({dinoList: newDinoList});
  }

  updateDinoStats(){
    let newDinoList = Object.assign({}, this.state.dinoList);
    Object.values(newDinoList).forEach((dino)=>{
      dino.health -= 1;
      dino.satiety -= 1;
      dino.excitement -= 1;
      dino.energy -= 1;
    })
    this.setState({dinoList: newDinoList}); 
  }

  componentDidMount(){
    this.birthTimeUpdateTimer = setInterval(this.updateDinoBirthTimes, 5000);
  }

  componentWillUnmount(){
    clearInterval(this.birthTimeUpdateTimer);
  }

  render(){
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
