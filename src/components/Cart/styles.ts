import styled from 'styled-components';

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

  span {
    color: #7e7e7e;
    font-weight: 500;
  }
`;

export const EmptyCart = styled.img`
  width: 100px;
`;
