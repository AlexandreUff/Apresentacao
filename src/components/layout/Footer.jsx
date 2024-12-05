import React, { useState } from "react";
import { IcoCV, IcoGHBs, IcoLIn } from "../items/Icones";
import ReleaseYear from "../../Utils/ReleaseYear";
import Modal from "../items/Modal";
import ResumeModalContent from "../items/ResumeModalContent";

export default function Footer(){

    const [openModal, setOpenModal] = useState(false)

    return (
        <footer>
            <Modal isOpen={openModal} isClose={setOpenModal}>
                <ResumeModalContent />
            </Modal>
            <nav className="media">
                <ul>
                    <li>
                        <a href="https://github.com/AlexandreUff" title="Access to Alexandre Magno GitHub" target="blank" >
                            <IcoGHBs/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/alexandre-magno-dias-pinto-3659b5225/" title="Access to Alexandre Magno LinkedIn" target="blank" >
                            <IcoLIn/>
                        </a>
                    </li>
                    <li>
                        <span className="resume" title="Access to Alexandre Magno resume" onClick={() => setOpenModal(true)} >
                            <IcoCV/>
                        </span>
                    </li>
                </ul>
                
                
            </nav>
            <div>
                <small>Images: Samuel Walker; Freepik; dDara.</small>
                <br />
                <small> <b>This page was created using ReactJs</b></small>
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
