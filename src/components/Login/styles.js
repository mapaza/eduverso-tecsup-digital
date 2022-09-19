import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  top: 30%;
  left: 30%;
  height: 400px;
  width: 400px;
  background-color: white;
  padding: 10px;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid black;

  .form {
    display: block;
    margin-top: 0em;
    margin: 20px;
  }

  .form-group {
    margin-bottom: 1rem;
  }

  label {
    display: inline-block;
    margin-bottom: 0.5rem;
  }

  .form-control {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  button {
    position: absolute;
    right: 30px;
    color: #fff;
    background-color: #303443;
    border-color: #303443;
    cursor: pointer;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &:hover {
      color: #303443;
      background-color: #fff;
      border-color: #282b38;
    }
  }
`;
