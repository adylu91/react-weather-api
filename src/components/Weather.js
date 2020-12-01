import "../styles/Weather.css";

const Weather = (props) => {
  const name = props.weather.cityName;
  const handleOnClick = props.handleOnClick;

  const temp = (props.weather.temp - 273.15).toFixed(2);
  const description = props.weather.description;
  if (name !== "") {
    return (
      <div className="weather_wrapper">
        <div className="weather_name">
          <h4>
            Pogoda dla: <span>{name}</span>
          </h4>
        </div>
        <div className="weather_temp">
          <h4>
            Temperatura: <span>{temp}°C</span>{" "}
          </h4>
        </div>
        <div className="weather_description">
          <h4>
            Opis: <span>{description}</span>
          </h4>
        </div>
        <button
          className="saveBtn"
          name="saveBtn"
          type="button"
          onClick={handleOnClick}
        >
          Zapisz
        </button>
      </div>
    );
  } else {
    return (
      <div className="weather_info">nie wybrano żadnej miejscowości...</div>
    );
  }
};

export default Weather;
