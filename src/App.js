import React, { useState, useMemo } from 'react';
import './App.css';
import Example1 from './Example1';
import Example2 from './Example2';

export default function App() {
  const [idItem, setIdItem] = useState(2);

  const _returnExample = useMemo(() => {
    switch (idItem) {
      case 1:
        return <Example1 />

      case 2:
        return <Example2 />

      default:
        return null;
    }
  }, [idItem]);

  return (
    <div className="div-main">
      <div>
        {
          listExample.map((item, index) => (
            <button key={`example${index}`} onClick={() => setIdItem(index + 1)}>Example {index + 1}</button>
          ))
        }
      </div>
      <div>
        Example {idItem}
        {
          _returnExample
        }
      </div>
    </div>
  );
}

const listExample = [
  Example1,
  Example2,
]