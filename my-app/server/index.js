import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import axios from 'axios';


const app = express();
app.use(bodyParser.json({limit:"30mb" ,extended: true }));
app.use(bodyParser.urlencoded({limit:"30mb" ,extended: true }));
app.use(cors());



app.get("/gender", async (req, res) => {

  
    const name = req.query.value;
    const url = `https://api.genderize.io/?name=${name}`;
     
    try {
      const {data}  = await axios.get(url);
      res.send(data['gender']);
    } catch (error) {
      res.status(404).json('404!');
    }
  });


  app.get("/nationality", async (req, res) => {

  
    const name = req.query.value;
    const url = ` https://api.nationalize.io/?name=${name}`;
   
    try {
      const {data}  = await axios.get(url);
     
  
      res.send(data);
    } catch (error) {
      res.status(404).json('404!');
    }
  });


const PORT = 8000; // for heroku

app.listen(PORT, () => console.log("server listening on port " + PORT));