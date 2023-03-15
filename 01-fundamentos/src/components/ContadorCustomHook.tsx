import useCounter from '../hooks/useCounter'

const ContadorCustomHook = () => {
  const {counter,handleCounter}= useCounter()
  return (
    <>
      <h3>Custom Hook</h3>
      <h3 className="mt-5 p-3">
        Contador: <strong>{counter}</strong>
      </h3>
      <button className="btn btn-success p-2 m-3" onChange={()=>handleCounter(1)}>+1</button>
      <button className="btn btn-primary p-2 m-3" onChange={()=>handleCounter(-1)}>-1</button>
    </>
  );
};

export default ContadorCustomHook; 
