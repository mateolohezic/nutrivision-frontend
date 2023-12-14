import React from 'react'
import './home.css'
import BarraDeNavegacion from '../../Components/BarraDeNavegacion/BarraDeNavegacion'
import TurnosHome from '../../Components/TurnosHome/TurnosHome'
import PacientesHome from '../../Components/PacientesHome/PacientesHome'
import HerramientasHome from '../../Components/HerramientasHome/HerramientasHome'

function Home() {

    const activePage = 'home'

    return (
    <>
        <BarraDeNavegacion activePage={activePage}/>
        <main className='contenedorMain'>
            <div className='contenedorHome'>
                <TurnosHome/>
                <PacientesHome/>
                <HerramientasHome/>
                <article className='contenedorPanel alertasHome'>
                    <h2>Novedades</h2>
                </article>
            </div>
        </main>
    </>
    )
}

export default Home
