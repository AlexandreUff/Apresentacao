import { IcoGHBs, IcoLCK } from "./Icones";

export default function Projeto(props){

    /* const addAndRemoveClassAnimation = (myTechs) => {
        let i = 0

        setInterval(()=>{
            myTechs[i].classList.toggle("top-me")

            if(i+1 > myTechs.length){
                i=0
            } else {
                i++
            }
        },1000)
    } */
    
    setTimeout(()=>{
        const myTechs = document.getElementsByClassName(`tech-content-of-${props.img}`)

        let i = 0

        setInterval(()=>{
            myTechs[i].classList.toggle("top-me")

            /* if(i === myTechs.length-1){
                i = 0
            } else {
                i++
            } */

            i = i === myTechs.length-1 ? 0 : i+1
        },100)
    },1000)

    return (
    <section className="projeto">
        <a href={props.link} title={props.nome} target="blank" >
            <h2>{props.nome}</h2>
            <div className="imagens">
                <img className="img1" src={`/images/${props.img}-dk.png`} alt={`Imagem desktop de ${props.nome}`} />
                <img className="img2" src={`/images/${props.img}-re.png`} alt={`Imagem reponsiva de ${props.nome}`} />
            </div>
        </a>
            <p className="desc">
                {props.children}
            </p>
            <p className="link">
                <strong>Link para acessar o projeto: <br />
                    <a href={props.link} title={`Link para acessar o ${props.nome}.`}>{props.link}</a>
                </strong>
            </p>
            {
                props.hasConsoleDatas && (
                    <p className="obs"><small>Obs: No Console do Navegador são exibidas informações mais detalhadas.</small></p>
                )
            }
        <hr />
            <div className="tecnologias">
                <p>Tecnologias usadas neste projeto:</p>
                <div>
                    {props.techs.map(tech => {
                        return (
                            <div className={`tech-content-of-${props.img}`}>
                                {tech}
                            </div>
                        )
                    })}
                </div>
            </div>
        <hr />
            <div className="github" >
                {props.repos ? (
                    <a href={props.repos} target="blank" title={`Clique aqui para acessar o repositório de ${props.nome}.`} >
                        <IcoGHBs/><small>Clique aqui para acessar o repositório.</small>
                    </a>
                ) : (
                    <div title={`O repositório de ${props.nome} não é público.`} >
                        <IcoLCK/><small>Este repositório é privado.</small>
                    </div>
                )}
            </div>
        </section>
    )
}