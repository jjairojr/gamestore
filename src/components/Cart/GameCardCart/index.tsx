import React, { useCallback, useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import { useToasts } from 'react-toast-notifications';

import { useCart } from '../../../hooks/cart';

import {
  Container,
  Image,
  ImageContainer,
  Footer,
  Icon,
  GamePrice,
  GameName,
} from './styles';

interface GameDataInterface {
  id: number;
  name: string;
  price: number;
  score: number;
  image: string;
  quantidade: number;
}

interface GameInterface {
  game: GameDataInterface;
}

const GameCardCart: React.FC<GameInterface> = ({ game }) => {
  const [gameImage, setGameImage] = useState('');

  const { addToast } = useToasts();

  const { removeProductOnCart } = useCart();

  const loadImage = useCallback(async () => {
    const img = await import(`../../../assets/${game.image}`);
    setGameImage(img.default);
  }, [game]);

  useEffect(() => {
    loadImage();
  }, [loadImage]);

  const removeGame = useCallback(() => {
    addToast('Game was removed succesfully!', {
      appearance: 'warning',
      autoDismiss: true,
    });
    removeProductOnCart(game.id);
  }, [removeProductOnCart, game, addToast]);

  return (
    <Container>
      <div>
        <ImageContainer>
          <Image src={gameImage} />
        </ImageContainer>
        <GameName>{game.name}</GameName>
        <GamePrice>
          <div>
            Qtd:
            {game.quantidade}
          </div>
          <div>
            R$
            {game.price.toFixed(2)}
          </div>
        </GamePrice>
        <Footer>
          <Icon onClick={removeGame}>
            <FaTrash size={15} color="#FF9000" />
          </Icon>
        </Footer>
      </div>
    </Container>
  );
};

export default GameCardCart;
