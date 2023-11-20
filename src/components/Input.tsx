import React from "react";
import styled from "styled-components";

import { InputProps } from "../types";

const Field = styled.input<{ $error?: boolean }>`
  border-color: ${(props) => (props.$error ? "red" : "blue")};
  padding: 10px;
`;

const TextArea = styled.textarea<{ $error?: boolean }>`
  border: 1px solid;
  border-color: ${(props) => (props.$error ? "red" : "blue")};
  padding: 10px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;

  color: blue;
`;

const ErrorMessage = styled.p`
  color: red;
  margin: 0;
`;

const Input = (props: InputProps) => {
  return (
    <Label>
      {props.label}
      {props.rows ? (
        <TextArea
          $error={Boolean(props.errMessage)}
          rows={props.rows}
          cols={50}
          value={props.value}
          onChange={props.onChange}
        />
      ) : (
        <Field
          $error={Boolean(props.errMessage)}
          value={props.value}
          onChange={props.onChange}
        />
      )}
      {props.errMessage && <ErrorMessage>{props.errMessage}</ErrorMessage>}
    </Label>
  );
};

export default Input;
