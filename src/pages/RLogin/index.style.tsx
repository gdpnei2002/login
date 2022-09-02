import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 1rem;

  img{
    margin-left: 10%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 400px;
  min-height: 520px;
  padding: 45px;
  border-radius: 32px;
  background-color: var(--bg-clr-white);
  box-shadow: 6px 6px 2px var(--bg-clr-brown);
`;

export const Title = styled.h1`
  width: 100%;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 400;
  color: var(--clr-black);
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin-bottom: 2rem;
  &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 48px;
    width: 100%;
    height: 2px;
    background-color: var(--bg-clr-brown);
  }
`;

export const Fieldset = styled.fieldset`
  width: 100%;
  height: 100%;
  margin-bottom: 1.25rem;
`;

export const Group = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 1rem;

  .label {
    margin-bottom: 12px;
    font-weight: 400;
    font-style: italic;
    color: var(--clr-brown);
  }

  .input {
    width: 100%;
    padding: 10px 48px 10px 6px;
    border: none;
    border-radius: 4px;
    box-shadow: 0px 0px 4px 2px #aaa;
  }
`;

export const Extras = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  &::after {
    position: absolute;
    width: 100%;
    text-align: center;
    content: 'Desenvolvido por Darwinsoft';
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.875rem;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  font-weight: 300;
  color: var(--clr-black);
  transition: all 0.3s ease;

  &[type='submit'] {
    width: 50%;
    padding: 0.4rem 0;
    margin: 0 auto;
    box-shadow: 2px 4px 8px #aaa;
    border-radius: 4px;
    color: var(--clr-white);
    background-color: var(--bg-clr-brown);
  }

  &[type='button'] {
    margin-bottom: 0.875rem;
    padding: 6px;
    font-weight: 400;
    background-color: transparent;
  }

  &[type='button']:hover {
    border: 1px solid var(--clr-brown);
    border-radius: 6px;
    color: var(--clr-brown);
  }
`;

export const BoxIcon = styled.div`
  position: relative;
  width: 100%;

  .icon {
    position: absolute;
    right: 14px;
    top: 50%;
    z-index: 10;
    font-size: 1.25rem;
    transform: translateY(-50%);
    color: var(--clr-brown);
  }
`;
