import React, { Component } from 'react';
import '../styles/App.css';
import Form from './Form.js'
import Result from './Result.js'
import Header from './Header.js'
import Footer from './Footer.js'

const APIkey ='c06272c73de545a7f672d9cd0437f163'
class App extends Component {

  state={
    value: "",
    date: '',
    city: '',
    sunrise: '',
    sunset: '',
    temp: '',
    pressure: '',
    wind: '',
    humidity: '',
    timezone: '',
    err: false,
  }
  slideRef = React.createRef();

  handleInputChange = (e)=>{
    this.setState({
      value: e.target.value
    })
    e.target.value=""
  }

handleCitySubmit = (e) =>{
  e.preventDefault();
  const API =`http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIkey}&units=metric`;

  fetch(API)
  .then(response => {
    if(response.ok){
      return response;
    }
    throw Error("Nie udało się pobrać danych")
  })
  .then(response =>  response.json())
  .then(data => {
    const date = new Date().toLocaleString();
    this.setState(prevState =>({
      err: false,
      date: date,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
      temp: data.main.temp,
      pressure: data.main.pressure,
      humidity: data.main.humidity,
      wind: data.wind.speed,
      timezone: data.timezone,
      city: prevState.value,
    }))
  })
  .catch(err => {
    console.log(err);
    this.setState( prevState => ({
      err: true,
      city: prevState.value,
    }))
  }) 
}
slideDown = () =>   {
  this.slideRef.current.scrollIntoView({ behavior: 'smooth' })
}


  render(){
  return (
    <div className="App" >
      <Header/>
      <Form 
      value={this.state.value} 
      change={this.handleInputChange} 
      submit={this.handleCitySubmit}
      slideDown={this.slideDown}
      />
      <Result  weather={this.state}/>
      <Footer/>
      <div ref={this.slideRef}></div>
      
    </div>
  );
  }
}

export default App;
