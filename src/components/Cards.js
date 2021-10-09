import  React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import moment from 'moment';


function Cards({totalcase,deaths,recovered,critical,active,day,newcase,newdeath}) {
    return (
        <>
        <Card sx={{ minWidth: 275, maxWidth: 300, borderRadius:4, mx:"auto", my:"30px", boxShadow: 5}}>
        <CardContent>
          <Typography variant="h6" color="text.primary" gutterBottom>
          Total Cases
          </Typography>
          <Typography variant="h5" component="div">
      
          </Typography>
          <Typography sx={{ mb: 1.5, fontSize:"14" }} color="text.primary">
          {totalcase}
          </Typography>
          <Typography sx={{ mb: 1.5, fontSize:"14" }} color="text.primary">
            Deaths: {deaths}
      
          </Typography>
          <Typography sx={{ mb: 1.5, fontSize:"14" }} color="text.primary">
            Recovered: {recovered}
      
          </Typography>
          <Typography sx={{  fontSize:"18px" }} color>
           Last updated {moment(day).startOf('ss').fromNow()}
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ minWidth: 275, maxWidth: 300, borderRadius:4, mx:"auto", my:"30px", boxShadow: 5}}>
        <CardContent>
          <Typography variant="h6" color="text.primary" gutterBottom>
          Active Cases
          </Typography>
          <Typography variant="h5" component="div">
      
          </Typography>
          <Typography sx={{ mb: 1.5, fontSize:"14" }} color="text.primary">
            {active}
          </Typography>
          <Typography sx={{ mb: 1.5, fontSize:"14" }} color="text.primary">
            New: {newcase}  /  Critical: {critical}
          </Typography>
          <Typography sx={{  fontSize:"18px" }}>
          Last updated {moment(day).startOf('ss').fromNow()}
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ minWidth: 275, maxWidth: 300, borderRadius:4, mx:"auto", my:"30px", boxShadow: 5}}>
        <CardContent>
          <Typography variant="h6" color="text.primary" gutterBottom>
          Closed Cases
          </Typography>
          <Typography variant="h5" component="div">
          <Typography sx={{ mb: 1.5, fontSize:"14" }} color="text.primary">
           Recovered: {recovered}
          </Typography>
          </Typography>
          <Typography sx={{ mb: 1.5, fontSize:"14" }} color="text.primary">
         
             Total Deaths:      {deaths}
          </Typography>
          <Typography sx={{ mb: 1.5, fontSize:"14" }} color="text.primary">
          New Deaths:      {newdeath}
          </Typography>
          <Typography sx={{  fontSize:"18px" }}>
          Last updated {moment(day).startOf('ss').fromNow()}
          </Typography>
        </CardContent>
      </Card>
      </>
    )
}

export default Cards
/*
        
      
      
*/