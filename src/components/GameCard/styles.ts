import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;

  width: 500px;
  height: 300px;

  transition: 0.2s;

  &:hover {
    width: 550px;
    height: 320px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;

  box-shadow: 9px 8px 7px rgba(0, 0, 0, 0.42);
`;

export const BuyDiv = styled.div`
  display: flex;
  place-content: center;
  align-items: center;
  flex-direction: column;

  background: rgba(68, 67, 67, 0.8);

  width: 70px;
  height: 70px;
  position: absolute;

  bottom: 0px;
  border-bottom-right-radius: 15px;
  border-top-right-radius: 15px;
`;

export const IconDiv = styled.div`
  width: 30px;
  height: 30px;

  background: grey;

  border-radius: 15px;
`;

export const Price = styled.div`
  font-size: 13px;
  font-weight: 500;
`;
