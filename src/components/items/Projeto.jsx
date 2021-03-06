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
            <p className="obs"><small>Obs: No Console do Navegador são exibidas informações mais detalhadas.</small></p>
        <hr />
            <div className="tecnologias">
                <p>Tecnologias usadas neste projeto:</p>
                <div>
                    {props.techs}
                </div>
            </div>
        <hr />
            <div className="github" title={`Clique aqui para acessar o repositório de ${props.nome}.`}>
                <a href={props.repos} target="blank" >
                    <IcoGH/><small>Clique aqui para acessar o repositório.</small>
                </a>
            </div>
        </section>
    )
}