export default function Skill(props){
    
    /* setInterval(()=>{

        const element =  document.getElementById(props.name)
        console.log("Pos", element)
        
    },1000) */

    return (
        <>
            <div className="skill-content" id={props.name} title={props.title}>
                {props.icon}
            </div>
        </>
    )
}