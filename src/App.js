import "./App.scss";
import {useState, useEffect} from "react"
import axios from "axios"

function App() {

  const [value, setvalue] = useState("London")

  useEffect(() => {
    fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=London%2Cuk&lat=0&lon=0&callback=test&id=2172797&lang=null&units=imperial&mode=xml", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "bebf6a999bmsh550618a16d0d2f5p1aca13jsn7a1843ff29ef"
      }
    })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.error(err);
    })
  
  }, [])

  const sendrequ = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">

        <div className="content">
        
        <div className="form">
          <form action="">
          <input type="text" name="" id="input_text" placeholder="City name..." value={value} onChange={e => setvalue(e.target.value)}/>
          <button className="submit" onClick={sendrequ}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></button>
          </form>
        </div>
        <div className="temp_data">
        <div className="temperature">26°</div>
          <div className="city">{value}</div>
        </div>
        

        </div>
      

      
        
    </div>
  );
}

export default App;

/*

API KEY = b1d80fed408ec26ede9762b85ce5b27e

`api.openweathermap.org/data/2.5/weather?q=${value}&appid=`

      

LINK = api.openweathermap.org/data/2.5/weather?q={city name}&appid=b1d80fed408ec26ede9762b85ce5b27e

api.openweathermap.org/data/2.5/weather?q=london&appid=b1d80fed408ec26ede9762b85ce5b27e



*/
