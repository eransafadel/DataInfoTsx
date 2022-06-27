import React from 'react';
import './Row.css';
import {Data} from '../components/Home';
interface Props {
    key: number;
    row:Data;
  }


const Row: React.FC<Props> = ({key,row}) => {
    console.log("row:",row);
  return (
    <div key={key} className="row">
        <div>
      <h4>{`${row.name} | ${row.gender} | ${row.nation}`} </h4>
      </div>
</div>
  )
}

export default Row;
