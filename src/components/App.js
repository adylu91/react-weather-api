import "../styles/App.css";
import sun from "../images/sun.png";
import React, { Component } from "react";
import Input from "./Input.js";
import SearchResults from "./SearchResults";
import Weather from "./Weather";
import { cities } from "../data/cities";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      API_KEY: "d9b3e5b4104ef08d34ad41f85f847475",
      inputTextValue: "",
      townsList: [],
      resultsList: [],
      weather: {
        cityName: "",
        temp: "",
        description: "",
      },
    };
  }

  townsFilter(value) {
    if (value === "") return [];
    const val = value.toLowerCase();
    let townsList = [...this.state.townsList];
    townsList = townsList.filter((it) => {
      const name = it.name.toLowerCase();
      return name.match(val);
    });
    return townsList;
  }

  handleOnChange = (e) => {
    const value = e.target.value;
    const resultsList = this.townsFilter(value);
    this.setState({
      inputTextValue: value,
      resultsList,
    });
  };

  handleOnClick = (e) => {
    const name = e.currentTarget.attributes.name.value.split("_");
    const weather = {
      cityName: "",
      temp: "",
    };
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${
        name[0]
      },${""},${"POL"}&lang=pl&appid=${this.state.API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        weather.cityName = name[0];
        weather.temp = res.main.temp;
        weather.description = res.weather[0].description;
        this.setState({ weather });
      });
  };

  componentDidMount() {
    const townsList = [...cities];
    this.setState({
      townsList,
    });
  }

  render() {
    return (
      <div className="app_wrapper">
        <div className="app_left_container">
          <div className="app_logo">
            <div className="app_logo_container">
              <h1 className="app_logo_header">WeatherAPI</h1>
              <p className="app_logo_description">
                aplikacja pogodowa dla Ciebie
              </p>
              <img className="app_logo_img" src={sun} alt="logo" />
            </div>
          </div>
          <div className="app_input_container">
            <Input
              handleOnChange={this.handleOnChange}
              inputTextValue={this.state.inputTextValue}
            />
          </div>
          <SearchResults
            resultsList={this.state.resultsList}
            handleOnClick={this.handleOnClick}
          />
        </div>
        <div className="app_right_container">
          <Weather weather={this.state.weather} />
        </div>
      </div>
    );
  }
}

export default App;
