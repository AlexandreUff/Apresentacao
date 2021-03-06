import React from "react";
import { IcoBS, IcoCSS, IcoHTML, IcoJS, IcoNx, IcoRc, IcoSS } from "../items/Icones";
import Projeto from "../items/Projeto";

export default function Main(){
    return (
        <main>
            <div className="card-show">
                <p><b>Olá!</b></p>
                <p><b>Seja bem-vindo(a) à minha página de apresentação de projetos.</b></p>
              <br />
                <p className="devDesc">Sou Alexandre Magno, tenho 28 anos e sou formado em Tecnologia da Computação pela universidade Federal Fluminense (UFF). Tenho conhecimentos de HTML, CSS, Javascript, Bootstrap, SASS/SCSS, Next/React, um básico de Figma e de Typescript e, atualmente, estou estudando VueJS.
                Logo abaixo, segue meu portfólio que também está disponível em minha conta no GitHub. Este portfólio é construído de forma diversificada com relação às tecnologias de meu conhecimento visando sempre respeitar a responsividade, a semântica, as regras de SEO, as boas práticas, a acessibilidade, o desempenho e entre outros requesitos mínimos funcionais e necessários de uma página.
                </p>
                <details>
                    <summary>Clique aqui para saber um pouco mais sobre mim</summary>
                    <p>Sou Alexandre Magno, tenho 28 anos e sou formado em Tecnologia da Computação pela universidade Federal Fluminense (UFF). Tenho conhecimentos de HTML, CSS, Javascript, Bootstrap, SASS/SCSS, Next/React, um básico de Figma e de Typescript e, atualmente, estou estudando VueJS.
                        Logo abaixo, segue meu portfólio que também está disponível em minha conta no GitHub. Este portfólio é construído de forma diversificada com relação às tecnologias de meu conhecimento visando sempre respeitar a responsividade, a semântica, as regras de SEO, as boas práticas, a acessibilidade, o desempenho e entre outros requesitos mínimos funcionais e necessários de uma página.
                    </p>
                </details>
            </div>

            <Projeto nome="Jogo da Velha" techs={[<IcoHTML/>,<IcoCSS/>,<IcoJS/>]} img="p1" link="https://o-jogo-da-velha.netlify.app/" repos="https://github.com/AlexandreUff/JogoDaVelha">
            O bom e velho Jogo da Velha agora no navegador. Trata-se de uma aplicação simples 
            feita com as tecnologias basilares do front-end onde há opção de escolha do(s) 
            usuário(s) pelo ícone a ser usado para iniciar o jogo (X ou O) com pequenos 
            efeitos de animação para cada ação dentro do jogo."
            </Projeto>

            
            <Projeto nome="Master Churras" techs={[<IcoHTML/>,<IcoCSS/>,<IcoJS/>]} img="p2" link="https://masterchurras-dicas.netlify.app/" repos="https://github.com/AlexandreUff/MasterChurras">
            Aqui temos uma simulação de uma Landing Page de cadastro de e-mail que oferece, 
            semanalmente, um conteúdo ao usuário. A página possui apenas um singelo bloqueio 
            para impedir que o usuário dê 'submit' com os campos vazios exibindo uma mensagem 
            de alerta no(s) respectivos campos não preenchido(s) e uma confirmação de envio 
            caso esteja tudo preenchido corretamente.
            </Projeto>

            <Projeto nome="Hiper Eletro" techs={[<IcoHTML/>,<IcoCSS/>,<IcoJS/>,<IcoBS/>]} img="p3" link="https://hipereletro.netlify.app/" repos="https://github.com/AlexandreUff/HiperEletro">
            Um dos projetos que mais gostei de fazer. Trata-se de uma simulação de página de 
            e-commerce feita com Bootstrap e que possui a funcionalidade de adicionar um ou mais 
            produtos ao carrinho e, se quiser, removê-lo(s). Nesta página, os produtos não estão 
            presentes inicialmente na DOM, eles são renderizados a partir da leitura de um 
            array (Javascript) e jogados, então, na tela em cards. O fato dos produtos estarem 
            em um array e fora da DOM se dá para que torne mais fácil o envio das informações 
            dos produtos selecionados ao back-end sem precisar puxar qualquer dado diretamente da DOM.
            </Projeto>

            <Projeto nome="Jornal Jornal" techs={[<IcoHTML/>,<IcoCSS/>,<IcoJS/>,<IcoRc/>]} img="p4" link="https://jornaljornal.netlify.app/" repos="https://github.com/AlexandreUff/JornalJornal">
            Aqui, meu primeiro projeto em React. Uma simulação de uma página de notícias com uma 
            pegada de humor com base em memes e outras coisas semelhantes da cultura pop. O 
            layout, as notícias, os botões, os links... todos são separados dentro do projeto 
            como componentes. No repositório, há uma pasta que contém a versão de desenvolvimento 
            onde é possível ver com mais clareza essa 'arquitetura componentizada' de projeto.
            </Projeto>

            <Projeto nome="SummerHouse Hotel" techs={[<IcoHTML/>,<IcoCSS/>,<IcoJS/>,<IcoBS/>,<IcoSS/>]} img="p5" link="https://summerhousehotel.netlify.app/" repos="https://github.com/AlexandreUff/SummerHouse">
            Simulação de uma página de login de um hotel com a opção de registrar-se. A página 
            utiliza os recursos de layout do Bootstrap para uma melhor organização e, também, 
            na página de registro, um formulário organizado em um 'slider' que possui um 
            bloqueio um pouco mais rígido que o da Landing Page do Master Churras acima, 
            bloqueando o registro para menores de 18 anos até a data presente do acesso e, 
            também, senhas inválidas.
            </Projeto>

            <Projeto nome="Ultra Eletro" techs={[<IcoHTML/>,<IcoCSS/>,<IcoJS/>,<IcoRc/>,<IcoNx/>]} img="p6" link="https://ultra-eletro.vercel.app/" repos="https://github.com/AlexandreUff/UltraEletro">
            A Hiper Eletro agora tem um concorrente! Meu primeiro projeto em NextJs e 
            também, agora, com uma pequena API. Trata-se de uma página de simulação de um 
            e-commerce onde, dessa vez, você pode clicar nos produtos e ver os detalhes e 
            outras informações adicionais. Os 'cards' que exibem os produtos são rederizados 
            com base em dados obtidos a partir de uma requisição ao back-end e, quando o 'card' 
            é clicado, os mesmos dados são transferidos pela barra de endereços usando o 
            useRouter e depois renderizados na página de compra.   
            </Projeto>
        </main>
    )
}