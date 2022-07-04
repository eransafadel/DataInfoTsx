import React, { useEffect, useState } from "react";
import { fetchGender, fetchNationality } from "../api/index";
import "./Home.css";
import DataUI from "./DataUI";
import {Data} from '../Utility/macros';

 import {useDispatch,useSelector} from "react-redux";
 import {RootState} from "../state/store";
 import {addItem} from "../state/features/dataSlice";
// import { bindActionCreators } from "redux";
// import { actionCreators,State } from "../state";




  const Home: React.FC = () =>  {
  const [render, setRender] = useState(true);

  const [name, setName] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [nation, setNation] = useState<string>("");
  const [namesData, setNamesData] = useState<Array<Data>>([]);

  
  const dispatch = useDispatch();
  const data = useSelector((state:RootState) => state.data.value);

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
    dispatch(addItem(obj));
  }


  console.log("data is heyy:",data);

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
