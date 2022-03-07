import React from "react";
import { IcoBS, IcoCSS, IcoHTML, IcoJS, IcoRc, IcoSS } from "../items/Icones";
import Projeto from "../items/Projeto";

export default function Main(){
    return (
        <main>
            <div className="card-show">
                <p><b>Olá!</b></p>
                <p><b>Seja bem-vindo(a) à minha página de apresentação de projetos.</b></p>
              <br />
                <p className="devDesc">Sou Alexandre Magno, tenho 28 anos e sou formado em Tecnologia da Computação pela universidade Federal Fluminense (UFF). Tenho conhecimentos de HTML, CSS, Javascript, Bootstrap, SASS/SCSS, Next/React, um básico de Figma e de Typescript e, atualmente, estou estudando VueJS.
                Logo abaixo, segue meu portfólio disponível que também está disponível em minha conta no GitHub. Este portfólio é construído de forma diversificada com relação às tecnologias de meu conhecimento visando sempre respeitar a responsividade, a semântica, as regras de SEO, as boas práticas, a acessibilidade, o desempenho e entre outros quesitos mínimos funcionais e necessários de uma página.
                </p>
                <details>
                    <summary>Clique aqui para saber um pouco mais sobre mim</summary>
                    <p>Sou Alexandre Magno, tenho 28 anos e sou formado em Tecnologia da Computação pela universidade Federal Fluminense (UFF). Tenho conhecimentos de HTML, CSS, Javascript, Bootstrap, SASS/SCSS, Next/React, um básico de Figma e de Typescript e, atualmente, estou estudando VueJS.
                        Logo abaixo, segue meu portfólio disponível que também está disponível em minha conta no GitHub. Este portfólio é construído de forma diversificada com relação às tecnologias de meu conhecimento visando sempre respeitar a responsividade, a semântica, as regras de SEO, as boas práticas, a acessibilidade, o desempenho e entre outros quesitos mínimos funcionais e necessários de uma página.
                    </p>
                </details>
            </div>

            <Projeto nome="Jogo da Velha" img="p1" desc="O bom e velho Jogo da Velha agora no navegador. Trata-se de uma aplicação simples feita com as tecnologias basilares do front-end onde há opção de escolha do(s) usuário(s) pelo ícone a ser usado para iniciar o jogo (X ou O) com pequenos efeitos de animação para cada ação dentro do jogo." link="https://vigilant-hodgkin-413cce.netlify.app/" repos="https://github.com/AlexandreUff/JogoDaVelha">
                <IcoHTML/><IcoCSS/><IcoJS/>
            </Projeto>

            <Projeto nome="Master Churras" img="p2" desc="Aqui temos uma simulação de uma Landing Page de cadastro de e-mail que oferece, semanalmente, um conteúdo ao usuário. A página possui apenas um singelo bloqueio para impedir que o usuário dê 'submit' com os campos vazios exibindo uma mensagem de alerta no(s) respectivos campos não preenchido(s) e uma confirmação de envio caso esteja tudo preenchido corretamente." link="https://youthful-pike-7c1ddd.netlify.app/" repos="https://github.com/AlexandreUff/MasterChurras">
                <IcoHTML/><IcoCSS/><IcoJS/>
            </Projeto>

            <Projeto nome="Hiper Eletro" img="p3" desc="Um dos projetos que mais gostei de fazer. Trata-se de uma simulação de página de e-commerce feita com Bootstrap e que possui a funcionalidade de adicionar um ou mais produtos ao carrinho e, se quiser, removê-lo(s). Nesta página, os produtos não estão presentes inicialmente na DOM, eles são renderizados a partir da leitura de um array (Javascript) e jogados, então, na tela em cards. O fato dos produtos estarem em um array e fora da DOM se dá para que torne mais fácil o envio das informações dos produtos selecionados ao back-end sem precisar puxar qualquer dado diretamente da DOM." link="https://compassionate-lovelace-e68863.netlify.app/" repos="https://github.com/AlexandreUff/HiperEletro">
                <IcoHTML/><IcoCSS/><IcoJS/><IcoBS/>
            </Projeto>

            <Projeto nome="Jornal Jornal" img="p4" desc="Aqui, meu primeiro projeto em React. Uma simulação de uma página de notícias com uma pegada de humor com base em memes e outras coisas semelhantes da cultura pop. O layout, as notícias, os botões, os links... todos são separados dentro do projeto como componentes. No repositório, há uma pasta que contém a versão de desenvolvimento onde é possível ver com mais clareza essa 'arquitetura componentizada' de projeto." link="https://boring-hypatia-ee1b01.netlify.app/" repos="https://github.com/AlexandreUff/JornalJornal">
                <IcoHTML/><IcoCSS/><IcoJS/><IcoRc/>
            </Projeto>

            <Projeto nome="SummerHouse Hotel" img="p5" desc="Simulação de uma página de login de um hotel com a opção de registrar-se. A página utiliza os recursos de layout do Bootstrap para uma melhor organização e, também, na página de registro, um formulário organizado em um 'slider' que possui um bloqueio um pouco mais rígido que o da Landing Page do Master Churras acima, bloqueando o registro para menore de 18 anos até a data presente do acesso e, também, senhas inválidas. " link="https://dazzling-agnesi-eae7f9.netlify.app/" repos="https://github.com/AlexandreUff/SummerHouse">
                <IcoHTML/><IcoCSS/><IcoJS/><IcoBS/><IcoSS/>
            </Projeto>
        </main>
    )
}