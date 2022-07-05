import axios from 'axios';

const urlGender = 'http://localhost:8000/data/gender';
const urlNationality = 'http://localhost:8000/data/nation';

export const fetchGender = async (name:string) =>{
    
    const {data} = await axios.get(urlGender, {
        params: { value: name },
      });
      
   return data;
};

export const fetchNationality = async (name:string) =>{
    
    const {data} = await axios.get(urlNationality, {
        params: { value: name },
      });
      
   return data["country"][0]["country_id"];
};
