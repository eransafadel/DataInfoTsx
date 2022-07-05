import { URL_GENDER, URL_NATION } from "../constants/macros.js";
import axios from "axios";

export const getGender = async (req, res) => {
    const name = req.query.value;
    const url = `${URL_GENDER}${name}`;
    
    
    try {
      const { data } = await axios.get(url);
      if(data["gender"]===null)
        res.status(404).json("name without specified gender");
      res.send(data["gender"]);
    } catch (error) {
      res.status(404).json("404!");
    }
};

export const getNation = async (req, res) => {
  const name = req.query.value;
  const url = `${URL_NATION}${name}`;

  try {
    const { data } = await axios.get(url);
    res.send(data);
  } catch (error) {
    res.status(404).json(error);
  }
};
