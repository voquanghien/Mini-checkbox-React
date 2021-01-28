import { useState } from "react";
import CheckboxSingle from "./CheckboxSingle";
import './App.css';

export default function App() {
  const [checkbox, setCheckBox] = useState({ number: 0, children: [] });

  const inputCheckBoxNum = (number) => {
    const children = [];
    for (let i = 0; i < number; i++) {
      let tmpChildren = [];
      for (let j = 0 ; j < number; j++) {
        tmpChildren.push(false);
      }
      children.push(tmpChildren);
    }

    setCheckBox({ number, children });
  }

  const setCheckboxVal = (a, b, value) => {
    let children = checkbox.children.map((e, i) => 
      a === i 
        ? e = e.map((t, j) => j === b ? t = value : t)
        : e
    )

    setCheckBox({ ...checkbox, children: children })
  }

  const renderCheckbox = (checkbox) => {
    const { number } = checkbox;
    const result = [];
    for (let i = 0; i < number; i++) {
      let tmpArray = [];
      for (let j = 0 ; j < number; j++) {
        tmpArray.push(<CheckboxSingle key={`${i}_${j}`} row={i} column={j} setCheckboxVal={setCheckboxVal} />);
      }
      result.push(<div key={i} className="single-container">{tmpArray}</div>);
    }

    console.log(checkbox.children);
    return result;
  }

  return (
    <div className="App">
      <input type="number" onInput={e => inputCheckBoxNum(e.target.value)} />
      {renderCheckbox(checkbox)}
    </div>
  );
}
