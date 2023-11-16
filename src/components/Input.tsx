import React from "react";
import styled from "styled-components";

import { InputProp } from "../types";

const Field = styled.input`
  border: 1px solid blue;
  padding: 10px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;

  color: blue;
`;

const Input = (prop: InputProp) => {
  return (
    <Label>
      {prop.label}
      <Field value={prop.value} onChange={prop.onChange} />
    </Label>
  );
};

export default Input;
