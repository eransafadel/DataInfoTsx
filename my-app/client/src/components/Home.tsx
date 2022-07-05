import React, { useEffect, useState } from "react";
import { fetchGender, fetchNationality } from "../api/index";
import "./Home.css";
import DataUI from "./DataUI";
import { Data } from "../Utility/macros";
import Form from "./Form";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { addItem } from "../state/features/dataSlice";

const Home: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [nation, setNation] = useState<string>("");
  const [namesData, setNamesData] = useState<Array<Data>>([]);

  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.data.value);

  const getDataName = async () => {
    if (name.length === 0) return;
    const genderData = await fetchGender(name);
    const nationData = await fetchNationality(name);

    setGender(genderData);
    setNation(nationData);
  };

  const enterNewItem = () => {
    if (name === "" || gender === "" || nation === "") return;
    let obj: Data = { name, gender, nation };
    if (namesData.find((c) => c.name === obj.name) === undefined) {
      setNamesData([...namesData, obj]);
      dispatch(addItem(obj));
    } else {
      console.log("user alreay exist in list!");
    }
  };

  useEffect(() => {
    enterNewItem();
    setName("");
    setGender("");
    setNation("");
  }, [gender, nation]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    getDataName();
  };

  return (
    <>
      <Form handleSubmit={handleSubmit} setName={setName} name={name} />
      <DataUI namesData={namesData} />
    </>
  );
};

export default Home;
