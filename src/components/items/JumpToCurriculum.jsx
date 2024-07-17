import { IcoCV } from "./Icones";

export default function JumpToCV(props){
    return <>
        <div className="jump-to-CV" onClick={props.click}>
            <p>Obter currículo</p>
            <IcoCV />
            <p>Get his resume</p>
        </div>
    </>
    
}