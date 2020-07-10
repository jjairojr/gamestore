import React from 'react';

import assetImage from '../../assets/cod.jpg';

import { Container, Image, BuyDiv, IconDiv, Price } from './styles';

const GameCard: React.FC = () => {
  return (
    <Container>
      <Image src={assetImage} />
      <BuyDiv>
        <IconDiv />
        <Price>R$ 29,99</Price>
      </BuyDiv>
    </Container>
  );
};

export default GameCard;
