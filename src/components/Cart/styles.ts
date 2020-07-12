import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  border: 2px solid lightgrey;
  border-radius: 10px;
  height: 100%;
  padding: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 30px;

  > span {
    color: #7e7e7e;
    font-weight: 500;
  }
`;

export const EmptyCart = styled.img`
  width: 100px;
`;

export const GameContainer = styled.div`
  display: flex;
`;

export const SubmitContainer = styled.div`
  display: flex;
  flex-direction: column;

  border-left: 1px solid #fff;
  /* border-radius: 10px; */
  padding: 10px;

  > div > span {
    color: #fb9000;
    font-weight: 500;
  }
`;

export const Button = styled.button`
  background: #48a9c8;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#48a9c8')};
  }
`;

export const ValueContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
