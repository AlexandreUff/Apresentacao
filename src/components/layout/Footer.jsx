import React, { useState } from "react";
import { IcoCV, IcoGHBs, IcoLIn, IcoPDF } from "../items/Icones";
import ReleaseYear from "../../Utils/ReleaseYear";
import Modal from "../items/Modal";

export default function Footer(){

    const [openModal, setOpenModal] = useState(false)

    return (
        <footer>
            <Modal isOpen={openModal} isClose={setOpenModal}>
                <div
                    style={
                        {
                            backgroundColor: '#6EBF8B',
                            border: '4px solid #151D3B',
                            borderRadius: '10px',
                            width: '412px',
                        }
                    }
                >
                    <div
                        style={
                            {
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#151D3B',
                                width: '100%',
                                height: '40px',
                                margin: '0px',
                                fontSize: '1.5rem',
                                fontWeight: 'bold'
                            }
                        }
                    >
                        Escolha o idioma do currículo
                    </div>
                    <div
                        style={
                            {
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: '#151D3B',
                                fontWeight: 'bold',
                                fontSize: '1.5rem',
                                padding: '20px'
                                }
                            }
                    >
                        <ul>
                            <li style={{marginBottom:'10px'}}>
                                <a
                                    href="https://drive.google.com/file/d/1mjRuG7yA4TX5dmp-JTLBlfp3jKBP9HlL/view?usp=drive_link"
                                    title="Currículo de Alexandre magno em português"
                                    target="blank"
                                    style={{
                                        color: '#151D3B'
                                    }}
                                >
                                    🇧🇷 Português Brasil (PDF)
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://drive.google.com/file/d/1qN8R-2V3dzccoUvGkv_TXMq7VZl5DWkD/view?usp=drive_link"
                                    title="Alexandre Magno resume in english"
                                    target="blank"
                                    style={{
                                        color: '#151D3B'
                                    }}
                                >
                                    🇺🇸 Inglês (PDF)
                                </a>
                            </li>
                        </ul>
                    </div>
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
                        <span title="Acesso ao currículo de Alexandre Magno" onClick={() => setOpenModal(true)} >
                            <IcoCV/>
                        </span>
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
