import React from 'react'
import './herramientasHome.css'
import calculadoraIcon from '../../assets/calculadoraIcon.png'

function HerramientasHome() {
    return (
    <>
        <section className='contenedorPanel herramientasHome'>
            <h2>Herramientas</h2>
            <div className='contenedorHerramientasHome'>
                <a href="/" className='cardHerramientaHome'>
                    <article>
                        <div>
                            <img src={calculadoraIcon} alt="Calculadora de IMC" />
                            <h3>Calculadora de IMC</h3>
                        </div>
                    </article>
                </a>
                <a href="/" className='cardHerramientaHome'>
                    <article>
                        <div>
                            <img src={calculadoraIcon} alt="Calculadora de IMC" />
                            <h3>Calculadora de IMC</h3>
                        </div>
                    </article>
                </a>
                <a href="/" className='cardHerramientaHome'>
                    <article>
                        <div>
                            <img src={calculadoraIcon} alt="Calculadora de IMC" />
                            <h3>Calculadora de IMC</h3>
                        </div>
                    </article>
                </a>
                <a href="/" className='cardHerramientaHome'>
                    <article>
                        <div>
                            <img src={calculadoraIcon} alt="Calculadora de IMC" />
                            <h3>Calculadora de IMC</h3>
                        </div>
                    </article>
                </a>
                <a href="/" className='cardHerramientaHome'>
                    <article>
                        <div>
                            <img src={calculadoraIcon} alt="Calculadora de IMC" />
                            <h3>Calculadora de IMC</h3>
                        </div>
                    </article>
                </a>
                <a href="/" className='cardHerramientaHome'>
                    <article>
                        <div>
                            <img src={calculadoraIcon} alt="Calculadora de IMC" />
                            <h3>Calculadora de IMC</h3>
                        </div>
                    </article>
                </a>
            </div>
        </section>
    </>
    )
}

export default HerramientasHome
