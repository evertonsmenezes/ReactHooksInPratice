import React, { useState } from 'react';
import './App.css';

export default function Example1() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [result, setResult] = useState(0);
  const [listResult, setListResult] = useState([]);

  return (
    <div className="div-main">
      <div>
        <input value={value1} onChange={event => setValue1(Number(event.target.value))} type="number" />
        <input value={value2} onChange={event => setValue2(Number(event.target.value))} type="number" />
        <button onClick={() => setResult(value1 + value2)}>Calculate</button>
        <span>{result}</span>
        <button onClick={() => setListResult([...listResult, result])}>Add List</button>
      </div>
      <div>
        <span>results</span>
        {
          listResult.map((item, index) => (
            <p key={`item${index}`}>
              {item}
            </p>
          ))
        }
      </div>
    </div>
  );
}
