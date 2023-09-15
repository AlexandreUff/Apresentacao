import React from "react";
import { IcoAWS, IcoBS, IcoCSS, IcoDCK, IcoHTML, IcoJS, IcoMDB, IcoNJS, IcoNx, IcoRc, IcoSIO, IcoSS } from "../items/Icones";
import Projeto from "../items/Projeto";
import ClientYear from "../../Utils/ClientYear";

export default function Main(){
    return (
        <main>
            <div className="card-show">
                <p><b>Olá!</b></p>
                <p><b>Seja bem-vindo(a) à minha página de apresentação de projetos.</b></p>
              <br />
                <p className="devDesc">
                    Sou Alexandre Magno, tenho {ClientYear("1993/11/16")} anos e sou formado em Tecnologia da Computação pela
                    Universidade Federal Fluminense (UFF) com mais de um ano de experiência como
                    desenvolvedor de sistemas. Tenho conhecimentos de HTML; CSS; Javascript; Bootstrap;
                    SASS/SCSS; Next/ReactJs; React Native; APIs e seus padrões arquiteturais usando
                    NodeJs, Express, MongoDB, Testes com Jest, Websocket com Socket.IO, Docker e um
                    breve contato com serviços AWS;
                    tenho também um básico de Figma, MySQL e de Typescript e, atualmente, estou me
                    aprofundando ainda mais em tecnologias Back-End.
                    Logo abaixo, segue meu portfólio que também está disponível em minha conta no GitHub.
                    Este portfólio é construído de forma diversificada com relação às tecnologias de
                    meu conhecimento visando sempre respeitar a responsividade, a semântica, as regras
                    de SEO, as boas práticas, a acessibilidade, o desempenho e entre outros requisitos
                    mínimos funcionais e necessários de uma página.
                </p>
                <p className="devDesc">Também está disponível no final desta página um link para meu LinkedIn e também um para meu currículo com mais detalhes.</p>
                <details>
                    <summary>Clique aqui para saber um pouco mais sobre mim</summary>
                    <p>
                        Sou Alexandre Magno, tenho 29 anos e sou formado em Tecnologia da Computação pela Universidade Federal Fluminense (UFF) com mais de um ano de experiência como desenvolvedor de sistemas. Tenho conhecimentos de HTML; CSS; Javascript; Bootstrap; SASS/SCSS; Next/ReactJs; React Native; APIs e seus padrões arquiteturais usando NodeJs, Express, MongoDB, Testes com Jest e Docker; tenho também um básico de Figma, MySQL e de Typescript e, atualmente, estou me aprofundando ainda mais em tecnologias Back-End.
                        Logo abaixo, segue meu portfólio com projetos dos mais recentes aos mais antigos que também está disponível em minha conta no GitHub. Este portfólio é construído de forma diversificada com relação às tecnologias de meu conhecimento visando sempre respeitar a responsividade, a semântica, as regras de SEO, as boas práticas, a acessibilidade, o desempenho e entre outros requisitos mínimos funcionais e necessários de uma página.
                    </p>
                    <p>Também está disponível no final desta página um link para meu LinkedIn e também um para meu currículo com mais detalhes.</p>
                </details>
            </div>

            <Projeto nome="The Kardz" techs={[<IcoHTML/>,<IcoCSS/>,<IcoJS/>,<IcoRc/>,<IcoSS/>,<IcoNJS/>,<IcoMDB/>,<IcoDCK/>,<IcoSIO/>,<IcoAWS/>]} img="p8" link="http://54.207.135.42:3000/" repos="https://github.com/AlexandreUff/TheKardz-fe">
            Finalmente, meu primeiro projeto Full-Stack (Front-End e Back-End)! E não apenas isso, trata-se
            de um dos projetos mais criativos e originais que já criei embarcado com uma série de tecnologias.
            Trata-se de um jogo online com cartas similar a um jokenpô que funciona em qualquer dispositivo,
            mobile ou desktop, pelo navegador. O jogo permite que você crie uma sala para jogar com os seus
            amigos ou entrar em uma e disponibiliza, também, um chat para que vocês comuniquem entre si.
            </Projeto>

            <Projeto nome="My ToDo List" techs={[<IcoHTML/>,<IcoCSS/>,<IcoJS/>,<IcoRc/>,<IcoSS/>]} img="p7" link="https://this-is-my-todolist.netlify.app/" repos="https://github.com/AlexandreUff/MyToDoList">
            Eis um dos projetos que ficou com um dos layouts mais simples, bonitos e agradáveis que fiz.
            O clássico ToDo List, mas de um jeito bem diferente! Este explora uma maneira diferenciada
            de organização que é um tanto incomum com relação à maioria dos ToDo Lists que existem por aí.
            Aqui você cria um conjunto de listas onde você separa cada tarefa por contexto de modo
            facilitado para sua organização e pode marcar suas tarefas como concluídas e, se preferir,
            editá-las e/ou apagá-las. Seus dados e informações ficam gravadas na SessionStorage
            do dispositivo.
            </Projeto>

            <Projeto nome="Ultra Eletro" hasConsoleDatas techs={[<IcoHTML/>,<IcoCSS/>,<IcoJS/>,<IcoRc/>,<IcoNx/>]} img="p6" link="https://ultra-eletro.vercel.app/" repos="https://github.com/AlexandreUff/UltraEletro">
            A Hiper Eletro agora tem um concorrente! Meu primeiro projeto em NextJs e 
            também, agora, com uma pequena API. Trata-se de uma página de simulação de um 
            e-commerce onde, dessa vez, você pode clicar nos produtos e ver os detalhes e 
            outras informações adicionais. Os 'cards' que exibem os produtos são rederizados 
            com base em dados obtidos a partir de uma requisição ao back-end e, quando o 'card' 
            é clicado, os mesmos dados são transferidos pela barra de endereços usando o 
            useRouter e depois renderizados na página de compra.   
            </Projeto>

            <Projeto nome="SummerHouse Hotel" hasConsoleDatas techs={[<IcoHTML/>,<IcoCSS/>,<IcoJS/>,<IcoBS/>,<IcoSS/>]} img="p5" link="https://summerhousehotel.netlify.app/" repos="https://github.com/AlexandreUff/SummerHouse">
            Simulação de uma página de login de um hotel com a opção de registrar-se. A página 
            utiliza os recursos de layout do Bootstrap para uma melhor organização e, também, 
            na página de registro, um formulário organizado em um 'slider' que possui um 
            bloqueio um pouco mais rígido que o da Landing Page do Master Churras acima, 
            bloqueando o registro para menores de 18 anos até a data presente do acesso e, 
            também, senhas inválidas.
            </Projeto>

            <Projeto nome="Jornal Jornal" hasConsoleDatas techs={[<IcoHTML/>,<IcoCSS/>,<IcoJS/>,<IcoRc/>]} img="p4" link="https://jornaljornal.netlify.app/" repos="https://github.com/AlexandreUff/JornalJornal">
            Aqui, meu primeiro projeto em React. Uma simulação de uma página de notícias com uma 
            pegada de humor com base em memes e outras coisas semelhantes da cultura pop. O 
            layout, as notícias, os botões, os links... todos são separados dentro do projeto 
            como componentes. No repositório, há uma pasta que contém a versão de desenvolvimento 
            onde é possível ver com mais clareza essa 'arquitetura componentizada' de projeto.
            </Projeto>

            <Projeto nome="Hiper Eletro" hasConsoleDatas techs={[<IcoHTML/>,<IcoCSS/>,<IcoJS/>,<IcoBS/>]} img="p3" link="https://hipereletro.netlify.app/" repos="https://github.com/AlexandreUff/HiperEletro">
            Um dos projetos que mais gostei de fazer. Trata-se de uma simulação de página de 
            e-commerce feita com Bootstrap e que possui a funcionalidade de adicionar um ou mais 
            produtos ao carrinho e, se quiser, removê-lo(s). Nesta página, os produtos não estão 
            presentes inicialmente na DOM, eles são renderizados a partir da leitura de um 
            array (Javascript) e jogados, então, na tela em cards. O fato dos produtos estarem 
            em um array e fora da DOM se dá para que torne mais fácil o envio das informações 
            dos produtos selecionados ao back-end sem precisar puxar qualquer dado diretamente da DOM.
            </Projeto>

            <Projeto nome="Master Churras" hasConsoleDatas techs={[<IcoHTML/>,<IcoCSS/>,<IcoJS/>]} img="p2" link="https://masterchurras-dicas.netlify.app/" repos="https://github.com/AlexandreUff/MasterChurras">
            Aqui temos uma simulação de uma Landing Page de cadastro de e-mail que oferece, 
            semanalmente, um conteúdo ao usuário. A página possui apenas um singelo bloqueio 
            para impedir que o usuário dê 'submit' com os campos vazios exibindo uma mensagem 
            de alerta no(s) respectivos campos não preenchido(s) e uma confirmação de envio 
            caso esteja tudo preenchido corretamente.
            </Projeto>

            <Projeto nome="Jogo da Velha" hasConsoleDatas techs={[<IcoHTML/>,<IcoCSS/>,<IcoJS/>]} img="p1" link="https://o-jogo-da-velha.netlify.app/" repos="https://github.com/AlexandreUff/JogoDaVelha">
            O bom e velho Jogo da Velha agora no navegador. Trata-se de uma aplicação simples 
            feita com as tecnologias basilares do front-end onde há opção de escolha do(s) 
            usuário(s) pelo ícone a ser usado para iniciar o jogo (X ou O) com pequenos 
            efeitos de animação para cada ação dentro do jogo."
            </Projeto>           

        </main>
    )
}