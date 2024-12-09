import React, { useState } from "react";
import { ICOTSC, IcoAWS, IcoBS, IcoCSS, IcoDCK, IcoHTML, IcoJS, IcoMDB, IcoNJS, IcoNx, IcoRc, IcoSIO, IcoSS, IcoVUE } from "../items/Icones";
import Projeto from "../items/Projeto";
// import ClientYear from "../../Utils/ClientYear"; Talvez volte
import Skillboard from "../items/Skillboard";
import JumpToCV from "../items/JumpToCurriculum";
import Modal from "../items/Modal";
import ResumeModalContent from "../items/ResumeModalContent";

export default function Main(){

    const [openModal, setOpenModal] = useState(false)

    return (
        <main>
            <Modal isOpen={openModal} isClose={setOpenModal}>
                <ResumeModalContent />
            </Modal>
            <JumpToCV click={() => { setOpenModal(true) }} />
            <div className="card-show">
                <div>
                <p><b>Hi!</b></p>
                <p><b>Welcome to my portfolio page!</b></p>
                <br />
                <p className="devDesc">
                    I am Alexandre Magno, and I graduated in Information Technology from Universidade Federal Fluminense (UFF) in Brazil with more than
                    five years of experience as a software developer.
                    I have a diversified portfolio with simple projects such as landing pages and larger projects like a game. These projects are built
                    using a variety of technologies I know always aiming to maintain the responsiveness, semantics, SEO rules, good development
                    practices, accessibility, performance and others minimal functional requirements and necessary for a good application.

                    Below, you can find my projects that are available in my GitHub account.
                </p>
                <p className="devDesc">At the end of this page, you will find a link for my LinkedIn profile and another to my resume in PDF format with more details and for on reach me.</p>
                </div>
            </div>

            <Skillboard />

            {/* <div className="my-skills">
                <div className="title-content">
                    <div className="title">
                        MINHAS SKILLS
                    </div>
                </div>
                <div className="skill-content">
                    
                </div>
            </div> */}

            <Projeto nome="Country Finder" techs={[<IcoHTML/>,<IcoCSS/>,<IcoJS/>,<IcoVUE/>,<ICOTSC />]} img="p10" link="https://my-country-finder.vercel.app/"  repos="https://github.com/AlexandreUff/Harpia-Desafo">
            This is my first project using Vue.js framework. It is an application where you can search for
            a country (typing in English) and that returns its geography position on the map with a marker
            and some information like name, capital, currency, languages, continent and the graphic flag
            representation when it is being clicked on the marker.You can add your own markers by clicking
            on any point on the map and, when you click on them, get the latitude and longitude of that.
            For the map rendering, an integration was created with the Google Maps API through the Google
            Cloud and the countries information come from another specific API for country data: REST
            Countries. And to add a unique touch, I set it up to run with Docker Compose.
            </Projeto>

            <Projeto nome="Curso de Latim" techs={[<IcoHTML/>,<IcoCSS/>,<IcoJS/>,<IcoRc/>,<ICOTSC />,<IcoNx />]} img="p9" link="https://www.cursodelatim.com.br">
            This is my first job as a freelancer. This, unlike the other works posted here, isn't merely a
            portfolio, but a job that I did for my brother who is a Latin teacher. It is about a landing page
            to promote his online course. It is also my second project using Next.js and my first using 
            Typescript. In it there is an animation when the page loads that giving it a bealtiful and
            professional aspect that is really worth checking out. There is no doubt this is one of the bests
            layouts (if not the best) I have ever created.
            </Projeto>

            <Projeto nome="The Kardz" techs={[<IcoHTML/>,<IcoCSS/>,<IcoJS/>,<IcoRc/>,<IcoSS/>,<IcoNJS/>,<IcoMDB/>,<IcoDCK/>,<IcoSIO/>,<IcoAWS/>]} img="p8" link="http://54.207.135.42:3000/" repos="https://github.com/AlexandreUff/TheKardz-fe">
            Finally, my first full-stack project (frontend and backend)! And not only that, it's also one of
            my most creative projects and original I have ever been created built with a variet of
            technologies. It is about an online game with cards that is similar to rock-paper-scissors that
            works in any device, mobile or desktop, through browser. The game allows you to create a room to
            play with your friends or join one and it also provides a chat for you to communicate with each
            other.
            </Projeto>

            <Projeto nome="My ToDo List" techs={[<IcoHTML/>,<IcoCSS/>,<IcoJS/>,<IcoRc/>,<IcoSS/>]} img="p7" link="https://this-is-my-todolist.netlify.app/" repos="https://github.com/AlexandreUff/MyToDoList">
            Here is one of projects that features the more simplest, most beautiful and most pleasant layouts
            I've ever created. The classic ToDo List, but with a twist! This explores a unique approach to
            organization that sets it aprt from most other To-Do Lists that exist. Here, you can create a set
            of lists that separates each task by context, making it easy to organize them and you can mark
            your tasks as completed and, if you wish, edit them and/or delete them. Your data and infomation
            are storaged in the SessionStorage of your device.
            </Projeto>

            <Projeto nome="Ultra Eletro" hasConsoleDatas techs={[<IcoHTML/>,<IcoCSS/>,<IcoJS/>,<IcoRc/>,<IcoNx/>]} img="p6" link="https://ultra-eletro.vercel.app/" repos="https://github.com/AlexandreUff/UltraEletro">
            The Hiper Eletro now has competitor. My first project using Next.js and, now, with a small API as
            well. It's a page simulating an e-commerce site where you click on the products and see their details
            and additional information. The "cards" that show the products are rendered based in data obtained
            from a back-end request and when the card is clicked, the same data is tranferred through the address
            bar of your browser using the useRouter and then they are rendering on purchase page.
            </Projeto>

            <Projeto nome="SummerHouse Hotel" hasConsoleDatas techs={[<IcoHTML/>,<IcoCSS/>,<IcoJS/>,<IcoBS/>,<IcoSS/>]} img="p5" link="https://summerhousehotel.netlify.app/" repos="https://github.com/AlexandreUff/SummerHouse">
            It is a simulation of a hotal login page with the option to register. This page uses layout components
            from Bootstrap for better organization and, on the registration page, there is a form organized in a
            slider that has a strickter block than the one on Master Churras below, preventing registration for under
            18 years old as of current date of access and for invalid passwords as well.
            </Projeto>

            <Projeto nome="Jornal Jornal" hasConsoleDatas techs={[<IcoHTML/>,<IcoCSS/>,<IcoJS/>,<IcoRc/>]} img="p4" link="https://jornaljornal.netlify.app/" repos="https://github.com/AlexandreUff/JornalJornal">
            Here is my first project using React.js. It's a simulation of a news page with a humorous twist based
            on Brazillian memes and other similar culture references. The layout, the news, the buttons and the
            links...  are all separated within the project as components. In the repository, there is a folder
            that contains the development version where you can see this "componentized archtecture" of the project
            more clearly.
            </Projeto>

            <Projeto nome="Hiper Eletro" hasConsoleDatas techs={[<IcoHTML/>,<IcoCSS/>,<IcoJS/>,<IcoBS/>]} img="p3" link="https://hipereletro.netlify.app/" repos="https://github.com/AlexandreUff/HiperEletro">
            This is one of my projects I liked creating. It's a simulation of an e-commerce page created with
            Bootstrap that has a functionality to add one or more products in the cart and, if you wish, remove them.
            On this page, the products that don't initially exist in the DOM, they are rendered from array reading
            (Javascript) and then displayed on the screen as cards. The reason to the products are in an array and
            not in the DOM is to make it easier to send the selected data product to the back-end without to pull
            any data directly from the DOM.
            </Projeto>

            <Projeto nome="Master Churras" hasConsoleDatas techs={[<IcoHTML/>,<IcoCSS/>,<IcoJS/>]} img="p2" link="https://masterchurras-dicas.netlify.app/" repos="https://github.com/AlexandreUff/MasterChurras">
            Here is a simulation of landing page for e-mail registion that offers weekly content for the user. The
            page has a simple restriction to prevent users from submitting with empty fields showing an alert
            message under respective empty fields and a confirmation message if the form is filled out correctly.
            </Projeto>

            <Projeto nome="Jogo da Velha" hasConsoleDatas techs={[<IcoHTML/>,<IcoCSS/>,<IcoJS/>]} img="p1" link="https://o-jogo-da-velha.netlify.app/" repos="https://github.com/AlexandreUff/JogoDaVelha">
            The good and old Tic Tac Toe (known as "Jogo da Velha" in Brazilian portuguese) now in your browser.
            It's about a simple application made with basic front-end technologies where users can choose an icon
            starts the game as "X" or "O" with small animation effects for each interaction in the game.
            </Projeto>           

        </main>
    )
}