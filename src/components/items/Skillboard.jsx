import { ICOCyp, ICOEC2, ICOGit, ICOJST, ICOSQL, ICOTSC, IcoAWS, IcoBS, IcoCSS, IcoDCK, IcoHTML, IcoJS, IcoMDB, IcoNJS, IcoNx, IcoRc, IcoSIO, IcoSS } from "./Icones";
import Skill from "./Skill";

export default function Skillboard(){

    const skillScroll = document.getElementsByClassName("skill-board");
    
    const moveSkillControll = (distance) => {

        let travelledDistance = 0

        const smooth = setInterval(() => {
            if(distance < 0){
                skillScroll[0].scrollLeft -= 4
                travelledDistance--
            }

            if(distance > 0){
                skillScroll[0].scrollLeft += 4
                travelledDistance++
            }

            if(travelledDistance >= 50 || travelledDistance <= -50){
                clearInterval(smooth)
            }

        }, 5)
        /* skillScroll[0].scrollLeft += distance */
    }

    return (
        <>
            <div className="my-skills">
                <div className="title-content">
                    <div className="title">
                        MINHAS SKILLS
                    </div>
                </div>

                <div onClick={() => moveSkillControll(-50)} className="click-btn" id="btn-scroll-left">{"<<"}</div>
                <div onClick={() => moveSkillControll(50)} className="click-btn" id="btn-scroll-right">{">>"}</div>

                <div className="skill-board">
                        <Skill name={"skill-ico-html"} icon={<IcoHTML/>}  />
                        <Skill name={"skill-ico-css"} icon={<IcoCSS/>}  />
                        <Skill name={"skill-ico-js"} icon={<IcoJS/>}  />
                        {/* <div className="skill-content">
                            <IcoHTML/>
                        </div>
                        <div className="skill-content">
                            <IcoCSS/>
                        </div>
                        <div className="skill-content">
                            <IcoJS/>
                        </div> */}
                        <div className="skill-content">
                        <ICOGit/>
                        </div>
                        <div className="skill-content">
                        <ICOTSC/>
                        </div>
                        <div className="skill-content">
                        <IcoBS/>
                        </div>
                        <div className="skill-content">
                        <IcoRc/>
                        </div>
                        <div className="skill-content">
                        <IcoNx/>
                        </div>
                        <div className="skill-content">
                        <IcoSS/>
                        </div>
                        <div className="skill-content">
                        <IcoNJS/>
                        </div>
                        <div className="skill-content">
                        <IcoMDB/>
                        </div>
                        <div className="skill-content">
                        <ICOSQL/>
                        </div>
                        <div className="skill-content">
                        <IcoDCK/>
                        </div>
                        <div className="skill-content">
                        <IcoSIO/>
                        </div>
                        <div className="skill-content">
                        <ICOEC2/>
                        </div>
                        <div className="skill-content">
                        <IcoAWS/>
                        </div>
                        <div className="skill-content">
                        <ICOJST/>
                        </div>
                        <div className="skill-content">
                        <ICOCyp/>
                        </div>
                </div>
            </div>
        </>
    )
}