'use client';

import { Conteiner } from '@/styles/home.styles';
import Header from '@/components/Header';
import Sobre from '@/components/Sobre/Sobre';
import Skills from '@/components/Skills';
import { Main } from '@/styles/layout';

export default function Home() {
  return (
    <Main>
         <>
      <Conteiner>
        <Header />
        <Sobre id="sobre" />
        <Skills id="habilidades" />
        
        
        <section id="habilidades">
          <h2>Habilidades</h2>
        </section>
        <section id="projetos">
          <h2>Projetos</h2>
        </section>
        <section id="contato">
          <h2>Contate-me</h2>
        </section>
      </Conteiner>
    </>
    </Main>
  );
}
