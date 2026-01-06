"use client";

import styled from "styled-components";

// export const HeaderContainer = styled.header`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-between;

//   max-width: 1440px;
//   height: 104px;
//   background: ${({ theme }) => theme.colors.zinc[100]};
//   padding: 1rem 2rem;
// `;

export const HeaderContainer = styled.header<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 11.7%;
  max-width: 1375px;
  width: 100%;
  height: 104px;
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem 2rem;

  background-color: ${({ theme, $scrolled }) =>
    $scrolled ? "rgba(255, 255, 255, 0.75)" : theme.colors.zinc[100]};

  backdrop-filter: ${({ $scrolled }) =>
    $scrolled ? "blur(8px)" : "none"};

  box-shadow: ${({ $scrolled }) =>
    $scrolled ? "0 4px 12px rgba(0, 0, 0, 0.08)" : "none"};

  transition: background-color 0.3s ease,
              box-shadow 0.3s ease,
              backdrop-filter 0.3s ease;
`;


export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
`;

export const Li = styled.li`
  color: ${({ theme }) => theme.colors.primary};
  list-style: none;
  font-size: 1.4rem;
  font-weight: 700;
`;

export const Logo = styled.figure`
  position: relative;
  width: 90px;
  height: 90px;
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
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;

  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.85;
  }
`;
