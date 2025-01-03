import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

export const useInput = (
  initialValue: string,
  validators?: Array<(value: string) => boolean>
) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (validators) {
      willUpdate = validators.every((validator) => validator(value));
      if (willUpdate) {
        setValue(value);
      }
    } else setValue(value);
  };
  return { value, onChange };
};

export function App() {
  const maxLen = (value: string): boolean => value.length <= 10;
  const includeAt = (value: string): boolean => !value.includes("@");
  const name = useInput("Mr.", [maxLen, includeAt]);
  return (
    <div className="App">
      <h1>Hello</h1>
      {/* <input placeholder="Name" value={name.value} onChange={name.onChange} /> */}
      {/* 함수와 변수의 이름이 같다면(value와 onChange) 위와 아래의 결과가 같음 */}
      <input placeholder="Name" {...name} />
    </div>
  );
}
