import React, { Component } from 'react'
import './services.css'

export default class Services extends Component {
    render() {
        return (
            <div className='serviceStyle'>
                <div className="titleService">
                    <h2>Garantías de nuestro</h2> <h3>servicio</h3>
                </div>
                <div className="services">

                    <div>

                        <ul>

                            <li>
                            <i class="fas fa-tv"></i>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>
                            </li>
                            <li>
                            <i class="fab fa-creative-commons-by"></i>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>
                            </li>
                            <li>
                            <i class="fas fa-link"></i>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>
                            </li>

                        </ul>

                    </div>

                </div>
            </div>
        )
    }
}


