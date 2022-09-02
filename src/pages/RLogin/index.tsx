import { useRef, useState } from 'react';
import {
  Container,
  Wrapper,
  Card,
  Title,
  Form,
  Fieldset,
  Group,
  BoxIcon,
  Button,
  Extras
} from './index.style';

import imgd from "../../assets/darwinimg.png"

export function RLogin() {
  const [showPass, setShowPass] = useState(false);

  return (
    <Container>
      <img src={imgd} alt="" />
      <Wrapper className="wrapper">
        <Card>
          <Title>Seja Bem - Vindo !</Title>
          <Form action="">
            <Fieldset>
              <Group>
                <label className="label" htmlFor={true ? 'login-email' : 'login-name'}>
                  Login
                </label>
                <BoxIcon>
                  <input
                    className="input"
                    name={true ? 'email' : 'name'}
                    id={true ? 'login-email' : 'login-name'}
                    type={true ? 'text' : 'email'}
                  />
                  <span className="icon">
                    <i className="bx bx-envelope"></i>
                  </span>
                </BoxIcon>
              </Group>
              <Group>
                <label className="label" htmlFor="login-password">
                  Senha
                </label>
                <BoxIcon>
                  <input
                    className="input"
                    name="password"
                    id="login-password"
                    type={showPass ? 'text' : 'password'}
                  />
                  <span
                    className="icon"
                    onClick={() => {
                      setShowPass(!showPass);
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    {showPass === true ? (
                      <i className="bx bxs-low-vision"></i>
                    ) : (
                      <i className="bx bx-show-alt"></i>
                    )}
                  </span>
                </BoxIcon>
              </Group>
            </Fieldset>
            <Button type="submit">Finalizar</Button>
          </Form>
          <Extras>
            <div>
              <Button type="button">Esqueceu a senha?</Button>
            </div>
            <div>
              <Button type="button">Cadastre-se</Button>
            </div>
          </Extras>
        </Card>
      </Wrapper>
    </Container>
  );
}
