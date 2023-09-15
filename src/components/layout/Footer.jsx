import React from "react";
import { IcoGHBs, IcoLIn, IcoPDF } from "../items/Icones";
import ReleaseYear from "../../Utils/ReleaseYear";

export default function Footer(){
    return (
        <footer>
            <nav className="media">
                <ul>
                    <li>
                        <a href="https://github.com/AlexandreUff" title="Acesso ao GitHub de Alexandre Magno" target="blank" >
                            <IcoGHBs/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/alexandre-magno-dias-pinto-3659b5225/" title="Acesso ao LinkedIn de Alexandre Magno" target="blank" >
                            <IcoLIn/>
                        </a>
                    </li>
                    <li>
                        <a href="https://drive.google.com/file/d/1VY_KJL4z3YhXYYhJx04lPM3FpGPX3Uot/view?usp=share_link" title="Acesso ao currículo de Alexandre Magno" target="blank" >
                            <IcoPDF/>
                        </a>
                    </li>
                </ul>
                
                
            </nav>
            <div>
                <small>Imagens: Samuel Walker; Freepik; dDara.</small>
                <br />
                <small> <b>Esta página foi criada em React Js</b></small>
            </div>
            <div>
                <small>
                &copy; {ReleaseYear("2022")} - Alexandre Magno Dias<br />
                alexandre_magno@id.uff.br
                </small>
            </div>
        </footer>
    )
}