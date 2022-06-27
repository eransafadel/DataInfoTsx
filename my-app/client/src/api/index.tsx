import axios from 'axios';

const urlGender = 'http://localhost:8000/gender';
const urlNationality = 'http://localhost:8000/nationality';

export const fetchGender = async (name:string) =>{
    
    const {data} = await axios.get(urlGender, {
        params: { value: name },
      });
      console.log("dataGender:",data);
   return data;
};

export const fetchNationality = async (name:string) =>{
    
    const {data} = await axios.get(urlNationality, {
        params: { value: name },
      });
      console.log("dataNation:",data["country"][0]["country_id"]);
   return data["country"][0]["country_id"];
};
