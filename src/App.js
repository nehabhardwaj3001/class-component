import React from 'react';
import './App.css';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
// constructor(props) {
//   super(props);
//   this.state = {latitude : null, errorMessage : ''};
// }

state = {latitude : null, errorMessage : ''};

componentDidMount() {
  console.log("component mounted")
  window.navigator.geolocation.getCurrentPosition(
    Position =>{
      this.setState( { latitude : Position.coords.latitude})
    }, 
    error => {
      this.setState( { errorMessage : error.message})
    }
  )
}

componentDidUpdate() {
  console.log("updated component")
}

  render() {
   if(!this.state.errorMessage && this.state.latitude){
      return <SeasonDisplay lat = {this.state.latitude}/>;
   }
    else if(this.state.errorMessage && !this.state.latitude) {
     return ( <div> error: {this.state.errorMessage} </div>);
     
    }else {
      return <Spinner message="Please accept location request" /> 
    }
  }
}

export default (App);
