"use client";
import Image from "next/image";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import { useEffect, useState } from "react";
import {
  HeaderContainer,
  Logo,
  Nav,
  Ul,
  Li,
  ButtonDownload,
} from "@/components/Header/StyleHeader";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HeaderContainer $scrolled={scrolled}>
      <Logo>
        <Image
          src="/logo.png"
          alt="Logo AndersonF.Dev"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      </Logo>
      <Nav>
        <Ul>
          <Li>
            <Link href="#sobre">Sobre mim</Link>
          </Li>
          <Li>
            <Link href="#habilidades">Habilidades</Link>
          </Li>
          <Li>
            <Link href="#projetos">Projetos</Link>
          </Li>
          <Li>
            <Link href="#contato">Contate-me</Link>
          </Li>
        </Ul>
      </Nav>
      <ButtonDownload
        href="#"
        download
        target="_blank"
        rel="noopener noreferrer"
      >
        Baixar currículo
        <FiDownload size={18} />
      </ButtonDownload>
    </HeaderContainer>
  );
}
