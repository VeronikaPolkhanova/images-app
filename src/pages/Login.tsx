import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Page from "../components/Page";
import Input from "../components/Input";
import Button from "../components/Button";
import { Error, Success } from "../components/Messages";

import { api } from "../api/apiSlice";

const AuthContainer = styled.div`
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Login = () => {
  const [auth, { data: response, isSuccess }] = api.useAuthUserMutation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const onSubmit = () => {
    auth({ email, password });
  };

  const navigate = useNavigate();
  const goTo = useCallback((url: string) => navigate(url), [navigate]);

  useEffect(() => {
    if (response?.token) {
      const token = response?.token;
      localStorage.setItem("token", token);
    }
  }, [response]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      goTo("/");
    }
  }, [goTo, response]);

  return (
    <Page>
      <h1>Login</h1>
      <AuthContainer>
        <Input label="email" value={email} onChange={onChangeEmail} />
        <Input label="password" value={password} onChange={onChangePassword} />
        <Button label="Submit" onAction={onSubmit} />
        {!response?.token && isSuccess && <Error>User not found</Error>}
        {response?.token && <Success>Welcome</Success>}
      </AuthContainer>
    </Page>
  );
};

export default Login;
