import React from "react";
import styled from "styled-components";

import { ButtonProps } from "../types";

const SubmitButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: blue;
  color: #ffffff;
  padding: 5px;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  height: 30px;
  background-color: #ffffff;
  border: 1px solid blue;
  color: blue;
  padding: 5px;
  cursor: pointer;
`;

const Button = (props: ButtonProps) => {
  if (props.type === "delete") {
    return <DeleteButton onClick={props.onAction}>{props.label}</DeleteButton>;
  }
  return <SubmitButton onClick={props.onAction}>{props.label}</SubmitButton>;
};

export default Button;
