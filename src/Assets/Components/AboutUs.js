import React, { Component } from 'react'
import './AboutUs.css'
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Autoplay } from 'swiper';

// Images

import img1 from '../Image/img1.PNG'
import img2 from '../Image/img2.PNG'
import img3 from '../Image/img3.png'
import img4 from '../Image/img4.PNG'
import img5 from '../Image/img5.png'


export default class AboutUs extends Component {
    render() {
        return (
            <div className="aboutUsStyle">
                <div className="information-aboutUs">

                    <div className="title-aboutUs">
                        <h2>Sobre</h2> 
                        <h3>nosotros</h3>
                    </div>
                    <div className="description-aboutUs">

                        <p>Lorem ipsum ipsum dolor sit amet, consectetur adia minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!Lorem ipsum ipsum dolor sit amet, consectetur adia minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>
                        <p>Lorem ipsum ipsum dolor sit amet, consectetur adia minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>
                        
                    </div>

                </div>
                <div className="slider-aboutUs">

                {/*  */}
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src={img2} alt="Img" /></div>
                    <div class="swiper-slide"><img src={img3} alt="Img" /></div>
                    <div class="swiper-slide"><img src={img4} alt="Img" /></div>
                    <div class="swiper-slide"><img src={img5} alt="Img" /></div>
                    <div class="swiper-slide"><img src={img1} alt="Img" /></div>
                    </div>
                </div>

                {/*  */}
                    

                </div>
            </div>
        )
    }
}


// libreria Swiper code

window.addEventListener('load', ()=>{

    
    SwiperCore.use([Autoplay])
    new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    

});
