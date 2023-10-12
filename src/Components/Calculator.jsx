import React from 'react';
import { useState } from 'react';

const Calculator = () => {
    const Calculator = () => {
        const [display, setDisplay] = useState('0');
        const [firstOperand, setFirstOperand] = useState(null);
        const [operator, setOperator] = useState(null);
        const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);
    }



  return (
    <div className="w-64 mx-auto p-4 border border-gray-300 rounded-lg shadow-lg mt-10">
      <div className="bg-gray-100 p-2 rounded-md">
        <input
          id="display"
          className="w-full text-right text-2xl font-semibold "
          type="text"
       
        />
      </div>
      <div className="grid grid-cols-4 gap-2 mt-4">
        <button className="col-span-2 p-2 text-2xl bg-orange-500 rounded-md hover:bg-gray-400 hover:text-white">AC</button>
        <button className="p-2 text-2xl  bg-orange-500 rounded-md hover:bg-gray-500 hover:text-white">+-</button>
        <button className="p-2 text-2xl bg-orange-500 rounded-md hover:bg-gray-400 hover:text-white">%</button>
        <button className="p-2 text-2xl bg-gray-100 rounded-md hover:bg-gray-500 hover:text-white">7</button>
        <button className="p-2 text-2xl bg-gray-100 rounded-md hover:bg-gray-500 hover:text-white">8</button>
        <button className="p-2 text-2xl bg-gray-100 rounded-md hover:bg-gray-500 hover:text-white">9</button>
        <button className="p-2 text-2xl bg-orange-500 rounded-md hover:bg-gray-400 hover:text-white">*</button>
        <button className="p-2 text-2xl bg-gray-100 rounded-md hover:bg-gray-500 hover:text-white">4</button>
        <button className="p-2 text-2xl bg-gray-100 rounded-md hover:bg-gray-500 hover:text-white">5</button>
        <button className="p-2 text-2xl bg-gray-100 rounded-md hover:bg-gray-500 hover:text-white">6</button>
        <button className="p-2 text-2xl bg-orange-500 rounded-md hover:bg-gray-400 hover:text-white">-</button>
        <button className="p-2 text-2xl bg-gray-100 rounded-md hover:bg-gray-500 hover:text-white">1</button>
        <button className="p-2 text-2xl bg-gray-100 rounded-md hover:bg-gray-500 hover:text-white">2</button>
        <button className="p-2 text-2xl bg-gray-100 rounded-md hover:bg-gray-400 hover:text-white">3</button>
        <button className="p-2 text-2xl bg-orange-500 rounded-md hover:bg-gray-400 hover:text-white">Del</button>
        <button className="col-span-2 p-2 text-2xl bg-gray-100 rounded-md hover:bg-gray-500 hover:text-white">0</button>
        <button className="p-2 text-2xl bg-gray-100 rounded-md hover:bg-gray-500 hover:text-white">.</button>
        <button className="p-2 text-2xl bg-orange-500 rounded-md hover:bg-gray-400 hover:text-white">=</button>
      </div>
    </div>
  );
};

export default Calculator;
