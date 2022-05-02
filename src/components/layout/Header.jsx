import React from "react";

export default function Header(){

    function effectBg(){
        const Header = document.querySelector('header');
        console.log(Header);
        Header.classList.add("bg-image-effect");
    }

    


    return (
        <header>
            <div className="ground">
                <img src="/images/img-main.png" alt="Foto de Alexandre Magno" title="Alexandre Magno" />
                <h1>ALEXANDRE MAGNO DIAS</h1>
            </div>
            {
                setTimeout(()=>{
                    effectBg();
                },100)
            }
        </header>
        )
}