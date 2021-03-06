import React from 'react';
import './Row.css';
import {Data} from '../Utility/macros';
interface Props {
    key: string;
    row:Data;
  }


const Row: React.FC<Props> = ({key,row}) => {
    console.log("row:",row);
  return (
    <div key={key} className="row">
        
      <h4>{`${row.name} | ${row.gender} | ${row.nation}`} </h4>
      
</div>
  )
}

export default Row;
