import React, { useEffect, useState } from "react";
import { fetchGender, fetchNationality } from "../api/index";
import "./Home.css";
import DataUI from "./DataUI";
import { toNamespacedPath } from "path/posix";

export interface Data {
    name: string;
    gender: string;
    nation: string;
}

  const Home: React.FC = () =>  {
  const [render, setRender] = useState(true);

  const [name, setName] = useState<string>("Eran");
  const [gender, setGender] = useState<string>("");
  const [nation, setNation] = useState<string>("");
  const [namesData, setNamesData] = useState<Array<Data>>([]);// need to init?

  const getDataName = async () => {
   
    if (name.length === 0) return;
    const genderData = await fetchGender(name);
    const nationData = await fetchNationality(name);
    
    setGender(genderData);
    setNation(nationData);
    setRender(!render);
   
   
  };
  const handleChange = (e:any) => {
   setName(e.target.value);
  };

  const enterNewItem = ()=>{
    
    if(name===''||gender===''|| nation==='' )
      return;
    let obj :Data = { name, gender , nation };
    setNamesData([...namesData, obj]);
  }

  useEffect(()=>{

    enterNewItem();
    setName("");
  },[render]);

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    getDataName();
    
  };

  useEffect(() => {
    getDataName();
  }, []);


  console.log(namesData);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="username"
            placeholder="Enter your name"
            required={true}
            onChange={handleChange}
            value={name}
          />
        </label>
      </form>
   {namesData.length>0 && <DataUI namesData={namesData}/> }
    </div>
  );
}

export default Home;
