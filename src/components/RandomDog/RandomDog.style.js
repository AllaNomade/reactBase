import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  margin: 15px 0px;
`;

export const Conteiner = styled.div`
align-items: center;
display: flex;
height: 400px;
justify-content: center;
position: relative;
margin-bottom: 15px;

`;

export const Image = styled.img`
 ${({ loading }) => css`
 opacity: 0;
 height: 100%;
 transition: opacity 200ms ease-in-out;
 ${!loading && css`
 opacity:1;
 `}
 `}
`;

export const LoadingText = styled.div`
  ${({ loading }) => css`
  position: absolute;
  opacity: 0;

  ${loading && css`
 opacity:1;
    `}
  `}
`;

export const Button = styled.button`
  background-color: royalblue;
  border-radius: 3px;
  border: none;
  color: white;
  cursor: pointer;
  padding: 10px;

  &:disabled {
    background-color:gray;
  }
`;
