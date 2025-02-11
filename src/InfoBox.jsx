import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./Info.Box.css";

export default function InfoBox ({info}){
    const INIT_URL=
     "https://images.unsplash.com/photo-1628525805785-cc1d20e7be74?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
 
     let COLD_URL ="https://images.unsplash.com/photo-1534324482290-e147f564f5b5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
     let HOT_URL ="https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
     let RAIN_URL="https://images.unsplash.com/photo-1612908485797-07a5c0a66466?q=80&w=1879&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

     let getImageUrl = () =>{
      if (info.humidity > 80){
        return RAIN_URL;

      }else if(info.temp > 15){
         return HOT_URL;
      }else{
        return COLD_URL;
      }
     };
    return(
        <div className="InfoBox">
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={getImageUrl()}
        title="weather image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <p>Temperature = {info.temp}&deg;c</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}&deg;c</p>
          <p>Max Temp = {info.tempMax}&deg;c</p>
          <p>The weather feels like {info.feelsLike}&deg;c</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    );
}

