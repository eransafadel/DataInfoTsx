import React from 'react';
import "./Form.css";

interface Props {
   handleSubmit: (e: any) => Promise<void>;
   setName : React.Dispatch<React.SetStateAction<string>>
   name:string
  }


const Form: React.FC<Props> = ({handleSubmit,setName,name}) => {
  return (
    <form onSubmit={handleSubmit}>
    <label>
      Name:
      <input
        type="text"
        name="username"
        placeholder="Enter your name"
        required={true}
        onChange={(e:any)=>{ setName(e.target.value);}}
        value={name}
      />
    </label>
  </form>
  )
};

export default Form;
