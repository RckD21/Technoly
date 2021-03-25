import React, { Component } from 'react'
import './articles.css'
import img1 from '../Image/img1.PNG'
import img2 from '../Image/img2.PNG'
import img3 from '../Image/img3.png'
import img4 from '../Image/img4.PNG'
import img5 from '../Image/img5.png'

export default class Articles extends Component {



    render() {
        return (
            <div className="articles">
                <div className="titleArticles">

                <h1>Algunos de nuestros</h1> <h2>artículos</h2>

                </div>

                <div className="carrouselArticles">

                    <div className="contentArticle">

                        <img src={img1} alt="Img"/>

                    </div>
                    <div className="contentArticle">

                        <img src={img2} alt="Img" />

                    </div>
                    <div className="contentArticle">

                        <img src={img3} alt="Img"/>

                    </div>
                    <div className="contentArticle">

                        <img src={img4} alt="Img"/>

                    </div>
                    <div className="contentArticle">

                        <img src={img5} alt="Img"/>

                    </div>
                </div>
            </div>
        )
    }
}
