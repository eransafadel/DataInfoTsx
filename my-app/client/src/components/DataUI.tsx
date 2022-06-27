import React from 'react';
import Row from './Row';
import {Data} from './Home';
interface Props {
    namesData: Array<Data>;
  }

const DataUI: React.FC<Props> = ({namesData}) => {
   const data = Array.from(namesData);
   console.log("data is:",namesData);
  return (
    <div>
         {data?.map((row,index)=>{
            return <Row key={index} row={row} />
        })}
    </div>
  )
}

export default DataUI;
