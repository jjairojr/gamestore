import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

import assetImage from '../../assets/cod.jpg';

import { Container, Image, BuyDiv, IconDiv, Price } from './styles';

const GameCard: React.FC = () => {
  return (
    <Container>
      <Image src={assetImage} />
      <BuyDiv>
        <IconDiv>
          <FiShoppingCart color="#fff" size={20} />
        </IconDiv>
        <Price>R$ 29,99</Price>
      </BuyDiv>
    </Container>
  );
};

export default GameCard;
