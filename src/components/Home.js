import React, { useEffect, useState } from 'react'
import { Container } from '@mui/material';
import useStyles from './Styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Cards from './Cards';
import BarChart from './BarChart';
import { getCasesData, getCountries } from '../api';


function Home() {
   const classes = useStyles();
   
   const [places,setPlaces] = useState([]);
   const [countries,setCountries] = useState([]);
   const [value,setValue] = useState('Usa');
 
  

      
         useEffect(() =>
         {
             getCasesData(value)
             .then((data) => {
               setPlaces(data);
             })
         },[value])
    
         useEffect(() =>
         {
             getCountries()
             .then((data) => {
              setCountries(data);
             })
         },[])

             
       

    return (
        <>
        <div className={classes.container}>
            <h1 className="mx-auto text-center p-5 text-4xl font-serif">Covid Tracker</h1>
            <Container>
          <FormControl className={classes.select} >
        <InputLabel id="demo-simple-select-label">Select a Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Select-a-Country"
          onChange={(e) => setValue(e.target.value)}
        >  
          {countries.map((country) => {
            return (
              <MenuItem value={country} >{country}</MenuItem>
            )
          })}
      </Select>
      </FormControl>
      </Container>
                 <Container  sx={{display: 'flex',}}>
                   {places.map((datas) => {
                     return (
                      <Cards
                        key={datas?.id}
                       totalcase={datas?.cases?.total?.toLocaleString()}
                       active={datas?.cases?.active?.toLocaleString()}
                       recovered={datas?.cases?.recovered?.toLocaleString()}
                       critical={datas?.cases?.critical?.toLocaleString()&& 0}
                       newcase={datas?.cases?.new?.toLocaleString() && 0}
                       deaths={datas?.deaths?.total?.toLocaleString()}
                       newdeath={datas?.deaths?.new?.toLocaleString() && 0}
                       day={datas?.day}
                      />
                     )
                   })}
             </Container>
             <BarChart  />
        </div>
        
        </>
    )
}

export default Home
