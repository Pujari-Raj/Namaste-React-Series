import React, { useMemo, useState } from "react";
import { findPrime } from "../utils/helper";

//useMemo Hook-Demo
const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  console.log("Rendering!!!!");

  // const cachedValue = useMemo(calculateValue, dependencies)
  const prime = useMemo(() => findPrime(text), [text]);
  //   const prime = findPrime(text);
  return (
    <div
      className={
        "m-4 p-2 w-96 h-96 border border-black " +
        (isDarkTheme && "bg-gray-900 text-white")
      }
    >
      <div>
        <input
          className="border border-black w-72 px-2"
          type="number"
          value={text}
          placeholder="enter a no"
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <button
          className="m-10 p-2 bg-green-200"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Toggle
        </button>
      </div>
      <div>
        <h1 className="mt-4 font-bold text-xl">nth Prime : {prime}</h1>
      </div>
    </div>
  );
};

export default Demo;
