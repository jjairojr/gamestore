import React, { useCallback, useState, useEffect } from 'react';
import { FiShoppingCart, FiStar } from 'react-icons/fi';
import { useToasts } from 'react-toast-notifications';
import { RiAddLine } from 'react-icons/ri';

import { useCart } from '../../hooks/cart';

import {
  Container,
  Image,
  BuyDiv,
  IconDiv,
  Price,
  Teste,
  GameContainer,
  GameScore,
  GameName,
  GameDescription,
} from './styles';

interface GameDataInterface {
  id: number;
  name: string;
  price: number;
  score: number;
  image: string;
}

interface GameInterface {
  game: GameDataInterface;
}

const GameCard: React.FC<GameInterface> = ({ game }) => {
  const [gameImage, setGameImage] = useState('');
  const [mouseOnCard, setMouseOnCard] = useState<boolean>(false);

  const { addToast } = useToasts();
  const { addProductOnCart } = useCart();

  const loadImage = useCallback(() => {
    import(`../../assets/${game.image}`).then(imageModule => {
      setGameImage(imageModule.default);
    });
  }, [game.image]);

  useEffect(() => {
    loadImage();
  }, [loadImage]);

  const buyProduct = useCallback(() => {
    addToast('Game was added in your cart!', {
      appearance: 'success',
      autoDismiss: true,
    });
    addProductOnCart(game);
  }, [game, addProductOnCart, addToast]);

  return (
    <Container>
      <GameContainer
        onMouseEnter={() => setMouseOnCard(true)}
        onMouseLeave={() => setMouseOnCard(false)}
      >
        {gameImage && <Image src={gameImage} />}
        <BuyDiv onClick={buyProduct}>
          <IconDiv>
            {!mouseOnCard ? (
              <FiShoppingCart color="#fff" size={20} />
            ) : (
              <RiAddLine color="#fff" size={20} />
            )}
          </IconDiv>
          <Price>
            R$
            {game.price}
          </Price>
        </BuyDiv>
      </GameContainer>
      {mouseOnCard && (
        <Teste>
          <GameName>{game.name}</GameName>
          <GameDescription>
            <div>Resumo:</div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry s standard dummy text
            ever since the 1500s, when an unknown printer took a
          </GameDescription>
          <GameScore>
            <FiStar size={15} color="#Fb9000" />
            Score:
            {game.score}
          </GameScore>
        </Teste>
      )}
    </Container>
  );
};

export default GameCard;
