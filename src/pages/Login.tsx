import React, { useState } from "react";
import styled from "styled-components";

import Input from "../components/Input";
import Button from "../components/Button";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const AuthContainer = styled.div`
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUser = (e: any) => {
    setUser(e.target.value);
  };

  const onChangePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const onSubmit = () => {
    console.log({ user, password });
  };

  return (
    <Page>
      <h1>Login</h1>
      <AuthContainer>
        <Input label="user" value={user} onChange={onChangeUser} />
        <Input label="password" value={password} onChange={onChangePassword} />
        <Button label="Submit" onAction={onSubmit} />
      </AuthContainer>
    </Page>
  );
};

export default Login;
