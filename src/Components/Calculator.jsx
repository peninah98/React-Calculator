import React, { useState } from "react";

const Calculator = () => {
  const [data, setData] = useState("");

  const buttons = [];

  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ".", "%"].forEach((element) => {
    buttons.push(
      <button
        onClick={(e) => {
          setData(data + e.target.getAttribute("data-value"));
        }}
        data-value={element}
        key={element}
        className="bg-yellow-600 rounded-md p-1 border text-bold text-2xl hover:text-white hover:bg-gray-700"
      >
        {element}
      </button>
    );
  });

  return (
    <div>
      <div>
        <div className="m-auto  border border-black w-1/2 mt-10 mb-6 py-4 bg-orange-100 px-2 text-gray-700">
          {data}
        </div>
        <div className="m-auto  grid grid-cols-3 w-1/2 justify-center gap-1 items-center">
          {buttons}
        </div>
      </div>
      <div className="bg-gray-600 p-1 w-1/2 m-auto flex justify-center gap-1">
        <button
          className="shadow-xl w-12 p-1 rounded-md bg-orange-200"
          onClick={() => setData(data.substring(0, data.length - 1))}
        >
          Clear
        </button>
        <button
          className="shadow-xl w-12 p-1 rounded-md bg-orange-200"
          onClick={() => setData("")}
        >
          AC
        </button>
        <button
          onClick={() => {
            setData((prevData) => {
              if ( Number(prevData) > 0) {
                return "-" + prevData;
              } else if ( Number(prevData) < 0) {
                return prevData.replace("-", "");
              }
              return prevData;
            });
          }}
          value="+-"
          className="shadow-xl w-12 p-1 rounded-md bg-orange-200"
        >
          +-
        </button>
      </div>
      <div className="bg-gray-600 p-1 grid grid-cols-5 w-1/2 m-auto  items-center justify-center">
        <button
          onClick={(e) => setData(data + e.target.value)}
          value="+"
          className="shadow-xl w-12 p-1 rounded-md bg-orange-200"
        >
          +
        </button>
        <button
          onClick={(e) => setData(data + e.target.value)}
          value="-"
          className="shadow-xl w-12 p-1 rounded-md bg-orange-200"
        >
          -
        </button>
        <button
          onClick={(e) => setData(data + e.target.value)}
          value="*"
          className="shadow-xl w-12 p-1 rounded-md bg-orange-200"
        >
          *
        </button>
        <button
          onClick={(e) => setData(data + e.target.value)}
          value="/"
          className="shadow-xl w-12 p-1 rounded-md bg-orange-200"
        >
          /
        </button>
        <button
          className="shadow-xl w-12 p-1 rounded-md bg-orange-200"
          onClick={() => {
            try {
              setData(
                String(eval(data)).length > 3 &&
                  String(eval(data)).includes(".")
                  ? String(eval(data).toFixed(4))
                  : String(eval(data))
              );
            } catch (error) {
              console.log(error);
            }
          }}
          value="="
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
