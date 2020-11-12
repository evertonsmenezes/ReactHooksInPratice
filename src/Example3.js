import React, { useState, useMemo, useCallback, memo } from 'react';
import './App.css';

function _listResul({
  result,
  setListResult
}) {
  return (
    <>
      <span>{result}</span>
      <button onClick={() => setListResult(oldValue => {
        return [...oldValue, result];
      })}>Add List</button>
    </>
  );
}

const ListResultMemo = memo(_listResul);

export default function Example3() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [result, setResult] = useState(0);
  const [listResult, setListResult] = useState([]);

  const _calculate = useCallback(() => {
    setResult(value1 + value2)
  }, [value1, value2]);

  const _divCalculate = useMemo(() => {
    console.log('_divCalculate');
    return (
      <>
        <input value={value1} onChange={event => setValue1(Number(event.target.value))} type="number" />
        <input value={value2} onChange={event => setValue2(Number(event.target.value))} type="number" />
        <button onClick={_calculate}>Calculate</button>
      </>
    );
  }, [value1, value2, _calculate]);

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

  return (
    <div className="div-main">
      <div>
        {_divCalculate}
        {_divResult}
      </div>
      <div>
        <span>results</span>
        <ListResultMemo
          listResult={listResult}
          setListResult={setListResult}
        />
      </div>
    </div>
  );
}
