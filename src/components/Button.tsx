import React from "react";
import styled from "styled-components";

interface ButtonProp {
  label: string;
  onAction: () => void;
}

const StyledButton = styled.button`
  width: 100px;
  background-color: blue;
  color: #ffffff;
  padding: 5px;
  cursor: pointer;
`;

const Button = (props: ButtonProp) => {
  return <StyledButton onClick={props.onAction}>{props.label}</StyledButton>;
};

export default Button;
