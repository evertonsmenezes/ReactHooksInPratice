import React, { useState, useMemo } from 'react';
import './App.css';

export default function Example1() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [result, setResult] = useState(0);
  const [listResult, setListResult] = useState([]);

  const _divCalculate = useMemo(() => {
    console.log('_divCalculate');
    return (
      <>
        <input value={value1} onChange={event => setValue1(Number(event.target.value))} type="number" />
        <input value={value2} onChange={event => setValue2(Number(event.target.value))} type="number" />
        <button onClick={() => setResult(value1 + value2)}>Calculate</button>
      </>
    );
  }, [value1, value2]);

  const _divResult = useMemo(() => {
    console.log('_divResult');
    return (
      <>
        <span>{result}</span>
        <button onClick={() => setListResult(oldValue => {
          return [...oldValue, result];
        })}>Add List</button>
      </>
    );
  }, [result]);

  const _listResult = useMemo(() => {
    console.log('_listResult');
    return listResult.map((item, index) => (
      <p key={`item${index}`}>
        {item}
      </p>
    ));
  }, [listResult]);

  return (
    <div className="div-main">
      <div>
        {_divCalculate}
        {_divResult}
      </div>
      <div>
        <span>results</span>
        {
          _listResult
        }
      </div>
    </div>
  );
}
