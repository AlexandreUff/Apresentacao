import React from "react";

export default function Header(){

    function effectBg(){
        const Header = document.querySelector('header');
        Header.classList.add("bg-image-effect");
    }

    setTimeout(()=>{
        effectBg();
    },1)


    return (
        <header>
            <img src="/images/img-main-pr.png" alt="Foto de Alexandre Magno" title="Alexandre Magno" />
            <div className="video-content">
                <video autoPlay muted loop id="video-background">
                    <source src="/video/ground_video.mp4" type="video/mp4" />
                </video>
            </div>
            <h1>ALEXANDRE MAGNO DIAS</h1>
        </header>
        )
}