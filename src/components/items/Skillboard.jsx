import { ICOCyp, ICOEC2, ICOGit, ICOJST, ICORN, ICOSQL, ICOTSC, IcoAWS, IcoBS, IcoCSS, IcoDCK, IcoHTML, IcoJS, IcoMDB, IcoMUI, IcoNJS, IcoNST, IcoNx, IcoRc, IcoSIO, IcoSS, IcoVUE } from "./Icones";
import Skill from "./Skill";

export default function Skillboard(){

    const skillScroll = document.getElementsByClassName("skill-board");
    
    const moveSkillControll = (distance) => {

        let travelledDistance = 0

        const smooth = setInterval(() => {
            if(distance < 0){
                skillScroll[0].scrollLeft -= 5
                travelledDistance--
            }

            if(distance > 0){
                skillScroll[0].scrollLeft += 5
                travelledDistance++
            }

            if(travelledDistance >= 50 || travelledDistance <= -50){
                clearInterval(smooth)
            }

        }, 5)
    }

    return (
        <>
            <div className="my-skills">
                <div className="title-content">
                    <div className="title">
                        MINHAS SKILLS
                    </div>
                </div>

                <div onClick={() => moveSkillControll(-50)} title="Voltar" className="click-btn" id="btn-scroll-left">{"<<"}</div>
                <div onClick={() => moveSkillControll(50)} title="Avançar" className="click-btn" id="btn-scroll-right">{">>"}</div>

                <div className="skill-board">
                        <Skill name={"skill-ico-html"} title={"HTML"} icon={<IcoHTML/>}  />
                        <Skill name={"skill-ico-css"} title={"CSS"} icon={<IcoCSS/>}  />
                        <Skill name={"skill-ico-js"} title={"Javascript"} icon={<IcoJS/>}  />

                        <Skill name={"skill-ico-git"} title={"Git"} icon={<ICOGit/>}  />
                        <Skill name={"skill-ico-ts"} title={"Typescript"} icon={<ICOTSC/>}  />
                        <Skill name={"skill-ico-bs"} title={"Bootstrap"} icon={<IcoBS/>}  />
                        <Skill name={"skill-ico-rc"} title={"React.Js"} icon={<IcoRc/>}  />
                        <Skill name={"skill-ico-rn"} title={"React Native"} icon={<ICORN/>}  />
                        <Skill name={"skill-ico-vue"} title={"Vue.Js"} icon={<IcoVUE/>}  />
                        <Skill name={"skill-ico-nx"} title={"Next.Js"} icon={<IcoNx/>}  />
                        <Skill name={"skill-ico-ss"} title={"SASS/SCSS"} icon={<IcoSS/>}  />
                        <Skill name={"skill-ico-mui"} title={"Material UI"} icon={<IcoMUI />} />
                        <Skill name={"skill-ico-njs"} title={"Node.Js"} icon={<IcoNJS/>}  />
                        <Skill name={"skill-ico-nest"} title={"Nest.Js"} icon={<IcoNST />} />
                        <Skill name={"skill-ico-mdb"} title={"MongoDB"} icon={<IcoMDB/>}  />
                        <Skill name={"skill-ico-sql"} title={"MySQL"} icon={<ICOSQL/>}  />
                        <Skill name={"skill-ico-dck"} title={"Docker"} icon={<IcoDCK/>}  />
                        <Skill name={"skill-ico-sio"} title={"Socket.io"} icon={<IcoSIO/>}  />
                        <Skill name={"skill-ico-ec2"} title={"EC2"} icon={<ICOEC2/>}  />
                        <Skill name={"skill-ico-aws"} title={"AWS"} icon={<IcoAWS/>}  />
                        <Skill name={"skill-ico-jst"} title={"Jest"} icon={<ICOJST/>}  />
                        <Skill name={"skill-ico-cyp"} title={"Cypress"} icon={<ICOCyp/>}  />
                </div>
            </div>
        </>
    )
}