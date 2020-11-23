import "../styles/App.css";
import sun from "../images/sun.png";

function App() {
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
          <label className="app_input_label" htmlFor="app_input_town">
            Szukaj miasta:
          </label>
          <input className="app_input_town" id="app_input_town" type="text" />
        </div>
        <div className="app_input_results">salkdjsla</div>
      </div>
      <div className="app_right_container"></div>
    </div>
  );
}

export default App;
