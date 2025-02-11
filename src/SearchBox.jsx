import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./SearchBox.css";
import { useState } from 'react';


export default function SearchBox({updateInfo}){
    let [city, setCity]= useState("")
    let [error, setError] = useState(false);
    const API_URL= "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY ="0cb7c78cad9e62df9e134938efd139b7";

    let getWeatherInfo = async () =>{
        try{
            let response = await fetch (
                `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
             );
            let jsonResponse = await response.json();
            let result ={
                city:city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
            };
            console.log(result);
            return result;
        }catch (err){
              throw err;
        }
        
    };
   
    let  handleChange =(evt)=>{
        setCity(evt.target.value);
    };
    let handleSubmit = async (evt) =>{
        try{
            evt.preventDefault();
            console.log(city);
            setCity("");
           let newInfo =await getWeatherInfo();
           updateInfo (newInfo);
           setError(false);
        }catch (err){
            setError(true);
        }
        
    };

    return(
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
            <TextField 
            id="City" 
            label="City Name" 
            variant="outlined"
             required value={city}
             onChange={handleChange}
             />
            <br></br><br></br>
            <Button 
            variant="contained" 
            type='submit'>
                Search 
            </Button>
            {error && <p>No Data For This Place</p>}
            </form>
        </div>
    );
}