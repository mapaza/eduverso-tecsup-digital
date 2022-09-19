import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width : 992px) {
    width: 50%;
  }
  .error{
    padding: 20px;
    text-align: center;
  }

  .title {
    font-size: 38px;
    line-height: 48px;
    text-align: left;
    font-weight: 700;
    margin-bottom: 1vw;
  }
  input, label, select {
    padding: 0 1vw;
    outline: none;
    font-size: 16px;
    line-height: 28px;
  }

  .inline{
    display: flex;
    input, select {
      flex: 1;
      width: 50%;
      margin-bottom: 1vw;
    }

    select + input,
    input + input {
      margin-left: 1vw;
    }
  }
  .checkboxes {
    margin-bottom: 1vw;
  }
  .checkbox {
    display: flex;
    align-items: center;
    font-weight: 300;
    margin-bottom: 0.4vw;
    input {
      margin-right: .5vw;
    }
    label {
      padding: 0vw;
    }
    label, input{
      font-size: 16px;
      line-height: 20px;
    }
  }

  button {
    appearance: none;
    background: transparent;
    color: white;
    cursor: pointer;
    border: 0;
    display: flex;
    align-items: center;
    align-self: flex-end;
    outline: none;
    font-weight: 300;
    text-transform: uppercase;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 2px;

    span {
      margin: 1vw;
    }

    .circle{
      background: white;
      width: 40px;
      display: flex;
      font-size: 18px;
      align-items: center;
      font-weight: bold;
      color: #000;
      justify-content: center;
      height: 40px;
      border-radius: 50%;
    }
  }
`;
