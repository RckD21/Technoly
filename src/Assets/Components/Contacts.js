import React, { Component } from 'react'
import './contacts.css'

export default class Contacts extends Component {
    render() {
        return (
            <div className="contactStyle">
                <div className="contactTitle">

                    <h2>Formas de</h2> <h3>contactarnos:</h3>

                </div>
                <div className="formasContacto">

                    <ul>

                        <li id='facebook'>
                        <i class="fab fa-facebook-f"></i>
                        <h3>Face</h3><h2>book</h2>
                        </li>
                        <li id='wathsapp'>
                        <i class="fab fa-whatsapp"></i>
                        <h3>Waths</h3><h2>app</h2>
                        </li>
                        <li id='instagram'>
                        <i class="fab fa-instagram"></i>
                        <h3>Insta</h3><h2>gram</h2>
                        </li>
                      
                    </ul>

                </div>
            </div>
        )
    }
}
window.addEventListener('load', ()=>{

    let facebook = document.querySelector('#facebook');
    let wathsapp = document.querySelector('#wathsapp');
    let instagram = document.querySelector('#instagram');

    facebook.addEventListener('click',()=>{

        window.open('https://facebook.com');

    });
    wathsapp.addEventListener('click',()=>{

        window.open('https://web.whatsapp.com/');

    });
    instagram.addEventListener('click',()=>{

        window.open('https://instagram.com');

    });
});