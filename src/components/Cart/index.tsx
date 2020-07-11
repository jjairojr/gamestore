import React from 'react';

import { Container, EmptyCart } from './styles';

import cartImg from '../../assets/empty-cart.png';

const Cart: React.FC = () => {
  return (
    <Container>
      <EmptyCart src={cartImg} />
      <span>O carrinho está vazio!</span>
    </Container>
  );
};

export default Cart;
