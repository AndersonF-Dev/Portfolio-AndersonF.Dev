"use client";
import Image from "next/image";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

import {
  SobreContainer,
  Avata,
  ConteinerBreveDescricao,
  HeroDescription,
  FraseTitulo,
  UlRedesSociais,
  LiRedesSociais,
  SocialLink,
} from "@/components/Skills/StyleSkills";

interface SkillsProps {
  id?: string;
}

export default function Skills({ id }: SkillsProps) {
  return (
    <SobreContainer id={id}>
      <ConteinerBreveDescricao>
        <FraseTitulo>
          <Image
            src="/fraseTitulo.svg"
            alt="Logo AndersonF.Dev"
            fill
            priority
            style={{ objectFit: "contain" }}
          />
        </FraseTitulo>

        <HeroDescription>
          Desenvolvedor Frontend em início de carreira, focado em aprender,
          evoluir e criar interfaces modernas e funcionais.
        </HeroDescription>
        <UlRedesSociais>
          <LiRedesSociais>
            <SocialLink
              href="https://www.instagram.com/seu_usuario"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </SocialLink>
          </LiRedesSociais>

          <LiRedesSociais>
            <SocialLink
              href="https://github.com/seu_usuario"
              target="_blank"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </SocialLink>
          </LiRedesSociais>

          <LiRedesSociais>
            <SocialLink
              href="https://www.linkedin.com/in/seu_usuario"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </SocialLink>
          </LiRedesSociais>
        </UlRedesSociais>
      </ConteinerBreveDescricao>

      <Avata>
        <Image
          src="/Avata1.svg"
          alt="Logo AndersonF.Dev"
          fill
          priority
          style={{ objectFit: "contain" }}
        />
      </Avata>
    </SobreContainer>
  );
}
