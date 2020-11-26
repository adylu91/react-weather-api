const Weather = (props) => {
  return (
    <div>
      {props.weather.cityName} {props.weather.temp - 273.15}
    </div>
  );
};

export default Weather;
