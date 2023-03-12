import { useState } from 'react'


const useCounter = (initial:number = 18) => {
    const [counter, setCounter] = useState(initial);

    const handleCounter =(num:number)=>{
    setCounter(counter+num)
  }

  return {
    counter,
    handleCounter
  }

}

export default useCounter