import React, { useCallback, useState, useEffect } from 'react';
import Select from 'react-select';
import Lottie from 'react-lottie';
import { IoMdArrowBack } from 'react-icons/io';

import { useCart } from '../../hooks/cart';

import GameCard from '../../components/GameCard';
import Cart from '../../components/Cart';

import Mock from '../../api/mock.json';
import DoneAnimation from '../../assets/lottie/done.json';

import {
  Responsivity,
  Container,
  GameDiv,
  GameContainer,
  SelectContainer,
  LottieContainer,
  Button,
} from './styles';

interface GameDataInterface {
  id: number;
  name: string;
  price: number;
  score: number;
  image: string;
}

const Home: React.FC = () => {
  const [mockData, setMockData] = useState<GameDataInterface[]>([]);
  const [select, setSelect] = useState<any>({
    value: 'MAIS_POPULARES',
    label: 'Mais Populares',
  });

  const { orderDone, goBack } = useCart();
  const options = [
    { value: 'MAIS_POPULARES', label: 'Mais Populares' },
    { value: 'PRECO_CRESCENTE', label: 'Preço Crescente' },
    { value: 'ORDEM_ALFABETICA', label: 'Ordem Alfabética' },
  ];

  const orderGames = useCallback(event => {
    setSelect(event);
    let mockClone = [...Mock];

    switch (event.value) {
      case 'MAIS_POPULARES':
        mockClone = mockClone.sort((a, b) => {
          if (a.score > b.score) {
            return 1;
          }
          if (b.score > a.score) {
            return -1;
          }
          return 0;
        });
        setMockData(mockClone);
        break;

      case 'PRECO_CRESCENTE':
        mockClone = mockClone.sort((a, b) => {
          if (a.price > b.price) {
            return 1;
          }
          if (b.price > a.price) {
            return -1;
          }
          return 0;
        });
        setMockData(mockClone);
        break;

      case 'ORDEM_ALFABETICA':
        mockClone = mockClone.sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }
          if (b.name > a.name) {
            return -1;
          }
          return 0;
        });
        setMockData(mockClone);
        break;

      default:
        Mock.sort((a, b) => {
          if (a.score > b.score) {
            return 1;
          }
          if (b.score > a.score) {
            return -1;
          }
          return 0;
        });
    }
  }, []);

  useEffect(() => {
    orderGames({ value: 'MAIS_POPULARES', label: 'Mais Populares' });
  }, [orderGames]);

  const customStyles = {
    option: (provided: any, state: any) => ({
      ...provided,
      color: state.isSelected ? '#FF9000' : '#161616',
    }),
    control: (provided: any, state: any) => ({
      ...provided,
      width: '250px',
    }),
  };
  return (
    <>
      {orderDone ? (
        <LottieContainer>
          <Lottie
            options={{ animationData: DoneAnimation, loop: false }}
            width={500}
          />
          <div>Seu pedido foi realizado com sucesso!</div>

          <span>Clique no botão abaixo para voltar a tela de jogos.</span>
          <Button onClick={goBack}>
            <IoMdArrowBack size={30} color="#312e38" />
          </Button>
        </LottieContainer>
      ) : (
        <Responsivity>
          <Container>
            <Cart />
            <SelectContainer>
              <span>Games</span>
              <Select
                onChange={event => orderGames(event)}
                options={options}
                styles={customStyles}
                value={select}
                placeholder="Pesquise..."
                theme={theme => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary: '#312E38',
                  },
                })}
              />
            </SelectContainer>

            <GameContainer>
              {mockData.map((game, index) => (
                <GameDiv key={game.id} end={index}>
                  <GameCard key={game.id} game={game} />
                </GameDiv>
              ))}
            </GameContainer>
          </Container>
        </Responsivity>
      )}
    </>
  );
};

export default Home;
