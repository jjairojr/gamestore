import React, { useCallback } from 'react';
import cartImg from '../../assets/empty-cart.png';
import { useCart } from '../../hooks/cart';
import GameCardCart from './GameCardCart';
import {
  Button,
  Container,
  EmptyCart,
  GameContainer,
  SubmitContainer,
  ValueContainer,
} from './styles';

const Cart: React.FC = () => {
  const { cart, finalValue, cleanCart } = useCart();

  const submitOrder = useCallback(() => {
    cleanCart();
  }, [cleanCart]);
  return (
    <Container>
      {cart.length > 0 ? (
        <ValueContainer>
          <GameContainer>
            {cart.map(game => (
              <GameCardCart key={game.id} game={game} />
            ))}
          </GameContainer>
          <SubmitContainer>
            <ValueContainer>
              Subtotal:
              <span>
                R$
                {finalValue.subTotal.toFixed(2)}
              </span>
            </ValueContainer>
            <ValueContainer>
              Frete:
              <span>
                R$
                {finalValue.ship.toFixed(2)}
              </span>
            </ValueContainer>
            <ValueContainer>
              Total:
              <span>
                R$
                {finalValue.valueTotal.toFixed(2)}
              </span>
            </ValueContainer>
            <Button onClick={submitOrder}>Finalizar Compra</Button>
          </SubmitContainer>
        </ValueContainer>
      ) : (
        <>
          <EmptyCart src={cartImg} />
          <span>O carrinho está vazio!</span>
        </>
      )}
    </Container>
  );
};

export default Cart;
