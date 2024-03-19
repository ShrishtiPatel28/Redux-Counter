import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import { Increment,Decrement } from "../Redux/counterAction";



function Counter() {
  const dispatch = useDispatch()
  const counter = useSelector(state =>state.counter)
  return (
    <div className="main flex flex-col items-center mt-[100px]">
      <h1 className="font-bold text-xl mb-[9px]">Counter</h1>
      <div className="counter flex items-center gap-5">
        <button className="border-2 border-green-500 p-2 " onClick={()=>dispatch(Increment())}>
          Increment
        </button> {counter}
        <button className="border-2 border-red-500 p-2"  onClick={()=>dispatch(Decrement())}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
