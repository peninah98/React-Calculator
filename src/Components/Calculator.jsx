import React, { useState } from 'react';

const Calculator = () => {
  const [data, setData] = useState(""); 

  const buttons = [];

  [9, 8, 7, 6, 5, 4, 3, 2, 1, ".", "%"].forEach(element => {
    buttons.push(
      <button
        onClick={e => {
          setData(data + e.target.getAttribute('data-value')); 
        }}
        data-value={element} 
        key={element}
        className='bg-yellow-600 rounded-md p-2 border text-bold text-2xl hover:text-white hover:bg-gray-700'
      >
        {element}
      </button>
    );
  });

  return (
    <div>
      <div className='m-auto  border border-black w-1/2 mt-10 mb-6 py-4 bg-orange-100 px-2 text-gray-700'>{data}</div>
      <div className='m-auto  grid grid-cols-3 w-1/2 justify-center items-center'>{buttons}</div>
    </div>
  );
};

export default Calculator;
