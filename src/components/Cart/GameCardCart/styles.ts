import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 0 10px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ImageContainer = styled.div`
  width: 80px;
  height: 50px;

  font-size: 10px;
  text-align: center;
  margin: 10px;
`;

export const Footer = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: space-evenly;
`;

const rotate = keyframes`
  0%, 100% {
    transform: rotate(0deg)
  }
  25% {
    transform: rotate(-25deg)
  }
  75% {
    transform: rotate(25deg)
  }
`;

export const Icon = styled.div`
  cursor: pointer;
  &:hover {
    animation: ${rotate} 1s;
  }
`;

export const GamePrice = styled.div`
  font-size: 13px;
  color: #fb9000;
  text-align: center;
`;

export const GameName = styled.div`
  max-width: 100px;
  font-size: 10px;
  text-align: center;
  height: 30px;
  text-overflow: ellipsis;
  max-height: 30px;
  overflow: hidden;
`;
