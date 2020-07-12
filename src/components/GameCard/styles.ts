import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;

  width: 500px;

  max-width: 550px;
  min-width: 300px;

  height: 300px;
  min-height: 100px;

  transition: 0.2s;

  &:hover {
    width: 550px;
    height: 320px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;

  box-shadow: 9px 8px 7px rgba(0, 0, 0, 0.42);
`;

export const BuyDiv = styled.div`
  display: flex;
  place-content: center;
  align-items: center;
  flex-direction: column;

  background: rgba(68, 67, 67, 0.8);

  width: 100px;
  height: 70px;
  position: absolute;

  bottom: 0px;
  border-bottom-right-radius: 15px;
  border-top-right-radius: 15px;

  cursor: pointer;
`;

export const IconDiv = styled.div`
  width: 40px;
  height: 40px;

  display: flex;
  place-content: center;
  align-items: center;

  background: #48a9c8;

  border-radius: 20px;
`;

export const Price = styled.div`
  font-size: 13px;

  color: #fb9000;
  font-weight: 500;
`;
