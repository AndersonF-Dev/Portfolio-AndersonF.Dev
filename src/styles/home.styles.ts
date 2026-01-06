'use client';

import styled from 'styled-components';

export const Conteiner = styled.h1`
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 3rem;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.main};
  background-color: ${({ theme }) => theme.colors.zinc[300]}
`;
