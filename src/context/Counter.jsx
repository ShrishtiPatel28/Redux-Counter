import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Increment, Decrement } from "../Redux/counterAction";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  return (
    <div className="w-full h-screen bg-[#f5e9ea] relative border-[30px] border-white">
      <div className="">
        <div className="counter flex flex-col items-center justify-center gap-2 absolute top-[30%] left-[48%]">
          <button
            className="font-bold rounded-full transition duration-300"
            onClick={() => dispatch(Decrement())}
          >
            <IoIosArrowUp style={{ fontSize: "42px",color:"#fb7185",opacity:"60%"}} />
          </button>
          <span className="counter-value text-5xl bg-[#e11d48] text-white rounded-3xl w-20 h-20 bg-zinc-300 flex justify-center items-center font-bold" style={{opacity:"90%"}}>
            {counter}
          </span>
          <button
            className="font-bold rounded-full transition duration-300"
            onClick={() => dispatch(Increment())}
          >
            <IoIosArrowDown style={{ fontSize: "42px",color:"#fb7185",opacity:"60%"}} />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Counter;
