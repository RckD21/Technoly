import React, { Component } from 'react'
import './nav.css'


export default class Nav extends Component {

    render() {
        return (
            <div className="navStyle">
                
                <div className="logo">
                    Espacio para el logo
                    {/* <img /> */}

                </div>

                {/* Lista */}

                <ul className="menuToggle">

                    <li id='start'><h2>Ini</h2><h3>cio</h3></li>
                    <li id='articles'><h2>Artíc</h2><h3>ulos</h3></li>
                    <li id='service'><h2>Servic</h2><h3>ios</h3></li>
                    <li id='contact'><h2>Contác</h2><h3>tanos</h3></li>

                </ul>

                <div className='bars'>
                    <i class="fas fa-bars"></i>
                </div>


            </div>
        )
    }
}
window.addEventListener('load',()=>{

    let start = document.querySelector('#start');
    let articles = document.querySelector('#articles');
    let service = document.querySelector('#service');
    let contact = document.querySelector('#contact');


    let aboutUs = document.querySelector('.aboutUsStyle');
    let article = document.querySelector('.articles');
    let services = document.querySelector('.serviceStyle');
    let contacts = document.querySelector('.contactStyle');
    let bars = document.querySelector('.bars');
    let menu = document.querySelector('.menuToggle');
    let menuI = document.querySelectorAll('.menuToggle li');

    bars.addEventListener('click',()=>{

        menu.classList.toggle('show');

    });

    for(let i = 0; i < menuI.length; i++){

        menuI[i].addEventListener('click',()=>menu.classList.toggle('show'))

    }


    start.addEventListener('click',()=>aboutUs.scrollIntoView({behavior : "smooth", block : 'center'}));
    articles.addEventListener('click',()=>article.scrollIntoView({behavior : "smooth", block : 'center'}));
    service.addEventListener('click',()=>services.scrollIntoView({behavior : "smooth", block : 'center'}));
    contact.addEventListener('click',()=>contacts.scrollIntoView({behavior : "smooth", block : 'center'}));

});