"use client";

import styled from "styled-components";

export const SobreContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;

  max-width: 1440px;
  height: 716px;
  background: ${({ theme }) => theme.colors.zinc[100]};
  padding: 1rem 2rem;
  position: relative;
`;

export const ConteinerBreveDescricao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  max-width: 458px;
  width: 100%;
  height: 490px;

  position: absolute;
  left: 4%;
  top: 30%;
  z-index: 2;
`;

export const HeroDescription = styled.p`
  text-align: left;
  margin-top: 1rem;

  font-size: 20px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.zinc[500]};
`;
export const SubDescricao = styled.h2`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.4rem;

  font-size: 38px;
  font-weight: 300;
  line-height: 54px;

  span {
    font-weight: bold;
  }
  .tituloStroke {
    position: relative;
    color: white;
  }

  .tituloStroke::before {
    content: attr(data-text);
    position: absolute;
    inset: 0;
    color: transparent;
    -webkit-text-stroke: 2px black;
    z-index: -1;
  }
`;

export const FraseTitulo = styled.figure`
  position: relative;
  width: 590px;
  height: 160px;
`;
export const Avata = styled.figure`
  position: relative;
  width: 1000px;
  height: 636px;
`;

export const ButtonDownload = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  padding: 20px 16px;
  border-radius: 4px;

  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};

  text-decoration: none;
  font-weight: 600;
  cursor: pointer;

  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.85;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1.5rem;
  font-weight: 700;
`;

export const UlRedesSociais = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  padding: 0;
  margin: 0;
  margin-top: 11rem;
`;

export const LiRedesSociais = styled.li`
  color: ${({ theme }) => theme.colors.primary};
  list-style: none;
  font-size: 1rem;
  font-weight: 700;
`;

export const SocialLink = styled.a`
  width: 54px;
  height: 54px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};

  transition: all 0.25s ease;
  cursor: pointer;

  svg {
    transition: color 0.25s ease;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`;
