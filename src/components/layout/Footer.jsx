import React from "react";
import { IcoGHBs } from "../items/Icones";

export default function Footer(){
    return (
        <footer>
            <div className="media">
                <a href="https://github.com/AlexandreUff" title="Acesso ao GitHub de Alexandre Magno" target="blank" >
                    <IcoGHBs/>
                </a>
            </div>
            <div>
                <small>Imagens: Samuel Walker; Freepik; dDara.</small>
                <br />
                <small> <b>Esta página foi criada em React Js</b></small>
            </div>
            <div>
                <small>
                &copy; 2022 - Alexandre Magno Dias.<br />
                alexandre_magno@id.uff.br
                </small>
            </div>
        </footer>
    )
}