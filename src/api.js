import axios from 'axios';

export const getCasesData = async (value) => {
    try {
        const { data: {response}} = await axios.get("https://covid-193.p.rapidapi.com/statistics" , 
        {
           params:{country: value},
        
        headers: {
            'x-rapidapi-host': 'covid-193.p.rapidapi.com',
            'x-rapidapi-key': 'cd5ae666e1mshe30ce4cf956d6d3p1f462ejsn42310dde83c4'
        },})
     return response;
    }
    catch (error){
        console.log(error);
    }
}

export const getCountries = async () => {
    try {
        const { data: {response}} = await axios.get("https://covid-193.p.rapidapi.com/countries" , 
        {
    
        
        headers: {
            'x-rapidapi-host': 'covid-193.p.rapidapi.com',
            'x-rapidapi-key': 'cd5ae666e1mshe30ce4cf956d6d3p1f462ejsn42310dde83c4'
        },})
     return response;
    }
    catch (error){
        console.log(error);
    }
}
