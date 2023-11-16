import React from "react";
import styled from "styled-components";

import { InputProps } from "../types";

const Field = styled.input`
  border: 1px solid blue;
  padding: 10px;
`;

const TextArea = styled.textarea`
  border: 1px solid blue;
  padding: 10px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;

  color: blue;
`;

const Input = (props: InputProps) => {
  return (
    <Label>
      {props.label}
      {props.rows ? (
        <TextArea
          rows={props.rows}
          cols={50}
          value={props.value}
          onChange={props.onChange}
        />
      ) : (
        <Field value={props.value} onChange={props.onChange} />
      )}
    </Label>
  );
};

export default Input;
