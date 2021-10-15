import "./App.scss";
import {useState, useEffect} from "react"
import axios from "axios"

function App() {

  const [value = "London", setvalue] = useState()
  const [city, setcity] = useState(null)
  

  useEffect(() => {
     const  FetchApi = async()=>{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=b1d80fed408ec26ede9762b85ce5b27e`)
        console.log(response)
        let jsonresponse = await response.json()
        console.log(jsonresponse)
        setcity(jsonresponse.main)
     }
     FetchApi()
  
  }, [value])

  const sendrequ = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">

        <div className="content">
        
        <div className="form">
          <form action="">
          <input type="text" name="" id="input_text" placeholder="City name..." value={value} onChange={e => setvalue(e.target.value)}/>
          <button className="submit" onClick={sendrequ}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
               <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
             </svg></button>
          </form>
        </div>

        {!city ? ( <p className="city_dont_found">City dont found</p>) : (<div className="temp_data">
        <div className="temperature">{city.temp} C°</div>
        <div className="minmax">
          Min: {city.temp_min} | Max: {city.temp_max}
        </div>
          <div className="city">{value}</div>
        </div>
        )}
        

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
