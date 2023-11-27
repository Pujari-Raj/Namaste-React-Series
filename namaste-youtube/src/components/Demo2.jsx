import React, { useState, useRef, useEffect } from "react";

const Demo2 = () => {
  const [y, setY] = useState(0);
  let x = 0;

  const ref = useRef(null);
  /** not like => ref = 0
   * ref = { current: 0 }
   *
   *
   * */

  console.log("Rendering....");

  const i = useRef(null);
  // let i = {
  //   current: null,
  // };
  useEffect(() => {
    if (i.current) return;
    i.current = setInterval(() => {
      console.log("Namaste React", Math.random());
    }, 1000);
  }, []);

  return (
    <div>
      <div className="m-4 p-2 bg-slate-50 border border-black w-96 h-96">
        <div>
          <button
            className="bg-green-100 p-2 m-4"
            onClick={() => {
              x = x + 1;
              console.log("x=" + x);
            }}
          >
            Increase x
          </button>
          <span className="font-bold text-xl">Let = {x}</span>
        </div>
        <div>
          <button
            className="bg-green-600 p-2 m-4"
            onClick={() => {
              setY(y + 1);
            }}
          >
            Increase Y
          </button>
          <span className="font-bold text-xl">State = {y}</span>
        </div>
        <div>
          <button
            className="bg-green-100 p-2 m-4"
            onClick={() => {
              ref.current = ref.current + 1;
              console.log("ref=", ref.current);
            }}
          >
            Increase Ref
          </button>
          <span className="font-bold text-xl">Ref = {ref.current}</span>
        </div>
        <button
          className="bg-red-900 p-4 m-4 text-white font-bold rounded-lg"
          onClick={() => {
            clearInterval(i.current);
          }}
        >
          Stop Printing
        </button>
      </div>
    </div>
  );
};

/**
 * When you click the "Increase Ref" button, the onClick event handler is triggered. It updates the ref.current value by incrementing it by 1 (ref.current = ref.current + 1). However, this ref update alone doesn't cause a re-render of the component.

In React, when a component's state or props change, React triggers a re-render to update the UI. However, changes to the ref object itself do not trigger a re-render because refs are meant for handling mutable values that don't affect the component's rendering.

In the case of the "Increase Y" button, when you click it, the setY function is called to update the state variable y by incrementing it by 1 (setY(y + 1)). This state update triggers a re-render of the component, and as a result, the updated value of ref.current is printed in the <span> element.

On the other hand, when you click the "Increase x" button, the x variable is incremented (x = x + 1), but this change doesn't trigger a re-render because x is a local variable and not part of the component's state or props. Therefore, the updated value of x is not reflected in the UI, and it is not printed in the <span> element.

Reloading the page also triggers a re-render of the component, causing the updated value of ref.current to be displayed in the <span> element. Reloading the page essentially resets the component's state and triggers a fresh rendering.


 * So, to summarize, the ref value gets printed in the <span> element when the component is re-rendered due to a state update or when the page is reloaded. Changes to the ref object itself don't trigger a re-render, but changes to the state variable y do.
 * 
 */
export default Demo2;
