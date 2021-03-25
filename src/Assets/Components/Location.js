import React, { Component } from 'react'
import './location.css'

export default class Location extends Component {
    render() {
        return (
            <div>
                <div className="locationIcon">
                    <i class="fas fa-map-marker-alt"></i>
                </div>

                <div className="googleMaps">
                    <div className="titleLocation"><h1><span>¿</span>Donde encontrarnos<span>?</span></h1></div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15067.610991376489!2d-70.51459374999999!3d19.24306975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sdo!4v1616638627263!5m2!1ses-419!2sdo" width="100%" height="400vh" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        )
    }
}
window.addEventListener('load',()=>{

    let map = document.querySelector('.googleMaps');
    let iconMap = document.querySelector('.locationIcon');

    iconMap.addEventListener('click',()=> map.classList.toggle('visible'));
    map.addEventListener('mouseleave',()=>map.classList.remove('visible'));
    
    



});







                