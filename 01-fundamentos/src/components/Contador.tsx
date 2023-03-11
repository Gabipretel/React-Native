import { useState } from "react";

const Contador = () => {
  const [counter, setCounter] = useState(0);

  const handleCounter =(num:number)=>{
    setCounter(counter+num)
  }

  return (
    <>
      <h3>UseState Hook</h3>
      <h3 className="mt-5 p-3">
        Contador: <strong>{counter}</strong>
      </h3>
      <button className="btn btn-success p-2 m-3" onClick={()=>handleCounter(1)}>+1</button>
      <button className="btn btn-primary p-2 m-3" onClick={()=>handleCounter(-1)}>-1</button>
    </>
  );
};

export default Contador; 
