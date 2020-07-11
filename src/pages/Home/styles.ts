import styled from 'styled-components';

interface GameDivProps {
  end?: boolean;
}

export const Container = styled.div`
  max-width: 1400px;
  width: 100%;
`;
export const Teste = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const GameDiv = styled.div<GameDivProps>`
  background: yellow;
  align-self: ${props => (props.end ? 'flex-end' : 'flex-start')};

  & + div {
    margin-top: 25px;
  }
`;
