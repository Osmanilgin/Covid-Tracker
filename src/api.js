import axios from 'axios';

export const getCasesData = async (value) => {
    try {
        const { data: {response}} = await axios.get(process.env.REACT_APP_COVID_URL , 
        {
           params:{country: value},
        
        headers: {
            'x-rapidapi-host': process.env.REACT_APP_COVID_HOST,
            'x-rapidapi-key': process.env.REACT_APP_COVID_KEY
        },})
     return response;
    }
    catch (error){
        console.log(error);
    }
}

export const getCountries = async () => {
    try {
        const { data: {response}} = await axios.get(process.env.REACT_APP_COVID_URL2 , 
        {
    
        
        headers: {
            'x-rapidapi-host': process.env.REACT_APP_COVID_HOST,
            'x-rapidapi-key': process.env.REACT_APP_COVID_KEY
        },})
     return response;
    }
    catch (error){
        console.log(error);
    }
}
