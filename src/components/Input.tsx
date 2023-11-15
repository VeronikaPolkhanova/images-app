import React from "react";
import styled from "styled-components";

const Field = styled.input`
  border: 1px solid blue;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;

  color: blue;
`;

interface InputProp {
  label: string;
  value: string;
  onChange: (e: any) => void;
}

const Input = (prop: InputProp) => {
  return (
    <Label>
      {prop.label}
      <Field value={prop.value} onChange={prop.onChange} />
    </Label>
  );
};

export default Input;
