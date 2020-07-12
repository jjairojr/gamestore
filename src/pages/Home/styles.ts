import styled from 'styled-components';
import { shade } from 'polished';

interface GameDivProps {
  end: number;
}

export const Container = styled.div`
  max-width: 1400px;
  padding-bottom: 50px;
  width: 100%;
`;
export const Responsivity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const GameDiv = styled.div<GameDivProps>`
  align-self: ${props => (props.end % 2 === 0 ? 'flex-end' : 'flex-start')};

  & + div {
    margin-top: 25px;
  }
`;

export const SelectContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 20px;

  span {
    font-size: 35px;
    border-bottom: 1px solid #fff;
  }
`;

export const LottieContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.div`
  cursor: pointer;
  background: #ff9000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  border-radius: 28px;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
