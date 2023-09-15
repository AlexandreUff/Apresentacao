import { IcoGH } from "./Icones";

export default function Projeto(props){
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
            <p className="obs"><small>Obs: No Console do Navegador são exibidas informações mais detalhadas.</small></p>
        <hr />
            <div className="tecnologias">
                <p>Tecnologias usadas neste projeto:</p>
                <div>
                    {props.techs}
                </div>
            </div>
        <hr />
            <div className="github" >
                <a href={props.repos} target="blank" title={`Clique aqui para acessar o repositório de ${props.nome}.`} >
                    <IcoGH/><small>Clique aqui para acessar o repositório.</small>
                </a>
            </div>
        </section>
    )
}