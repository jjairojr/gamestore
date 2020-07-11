import React from 'react';

import GameCard from '../../components/GameCard';
import Cart from '../../components/Cart';

import { Container, GameDiv, GameContainer, Teste } from './styles';

const Home: React.FC = () => {
  return (
    <Teste>
      <Container>
        <Cart />
        <GameContainer>
          <GameDiv>
            <GameCard />
          </GameDiv>
          <GameDiv end>
            <GameCard />
          </GameDiv>
          <GameDiv>
            <GameCard />
          </GameDiv>
        </GameContainer>
      </Container>
    </Teste>
  );
};

export default Home;
