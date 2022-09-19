
import styled from 'styled-components';

export const Container = styled.div`
    align-self: flex-end;
    span {
      margin: 1vw;
    }

    .wrapper {
      background: transparent;
      color: white;
      cursor: pointer;
      display: flex;
      align-items: center;

      user-select: none;
      font-weight: 300;
      text-transform: uppercase;
      font-size: 16px;
      line-height: 26px;
      letter-spacing: 2px;
      margin-top: 1vw;
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
`;


