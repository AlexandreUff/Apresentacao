import React, { useState } from "react";
import { IcoGHBs, IcoLIn, IcoPDF } from "../items/Icones";
import ReleaseYear from "../../Utils/ReleaseYear";
import Modal from "../items/Modal";

export default function Footer(){

    const [openModal, setOpenModal] = useState(false)

    return (
        <footer>
            <Modal isOpen={openModal} isClose={setOpenModal}>
                <div style={{backgroundColor: 'red', width: '50px', height: '50px'}}>
                    Teste
                </div>
            </Modal>
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
                        <a
                            /* href="https://drive.google.com/file/d/1mjRuG7yA4TX5dmp-JTLBlfp3jKBP9HlL/view?usp=drive_link" */
                            title="Acesso ao currículo de Alexandre Magno"
                            target="blank"
                            onClick={() => setOpenModal(true)}
                        >
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
                alexandre.magno.wrk@gmail.com
                </small>
            </div>
        </footer>
    )
}
