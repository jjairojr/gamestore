import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

interface CartContextData {
  cart: CartInterface[];
  addProductOnCart(game: object): void;
  removeProductOnCart(gameId: number): void;
  cleanCart(): void;
  goBack(): void;
  finalValue: FinalValueState;
  orderDone: boolean;
}

interface CartInterface {
  id: number;
  name: string;
  price: number;
  score: number;
  image: string;
  quantidade: number;
  teste: number;
}

interface FinalValueState {
  ship: number;
  subTotal: number;
  valueTotal: number;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export const CartProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<CartInterface[]>([]);
  const [finalValue, setFinalValue] = useState<FinalValueState>(
    {} as FinalValueState,
  );
  const [isDone, setIsDone] = useState(false);

  const addProductOnCart = useCallback(
    game => {
      const gameIndex = data.findIndex(d => d.id === game.id);
      if (gameIndex >= 0) {
        const newData = [...data];
        data[gameIndex].quantidade += 1;
        newData[gameIndex].quantidade = data[gameIndex].quantidade;
        setData(newData);
      } else {
        setData([...data, { ...game, quantidade: 1 }]);
      }
    },
    [data],
  );

  const removeProductOnCart = useCallback(
    (id: number) => {
      const gameIndex = data.findIndex(d => d.id === id);
      if (gameIndex >= 0) {
        data.splice(gameIndex, 1);
        const newData = [...data];
        setData(newData);
      }
    },
    [data],
  );

  const cleanCart = useCallback(() => {
    setIsDone(true);
    setData([]);
  }, []);

  const goBack = useCallback(() => {
    setIsDone(false);
  }, []);

  const loadTotalValue = useCallback(() => {
    const subTotal = data.reduce((value, game) => {
      return value + game.price * game.quantidade;
    }, 0);
    let ship = data.reduce((value, game) => {
      return value + 10 * game.quantidade;
    }, 0);
    if (subTotal > 250) {
      ship = 0;
    }

    const valueTotal = subTotal + ship;

    setFinalValue({ ship, valueTotal, subTotal });
  }, [data]);

  useEffect(() => {
    loadTotalValue();
  }, [data, loadTotalValue]);

  return (
    <CartContext.Provider
      value={{
        cart: data,
        addProductOnCart,
        removeProductOnCart,
        finalValue,
        cleanCart,
        orderDone: isDone,
        goBack,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within an CartProvider');
  }
  return context;
}
