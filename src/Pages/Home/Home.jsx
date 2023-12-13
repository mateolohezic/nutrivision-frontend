import React from 'react'
import './home.css'
import BarraDeNavegacion from '../../Components/BarraDeNavegacion/BarraDeNavegacion'
import nuevoTurnoIcon from '../../assets/nuevoTurnoIcon.png'

function Home() {
    return (
    <>
        <BarraDeNavegacion />
        <main className='contenedorMain'>
            <section className='contenedorHome'>
                <article className='contenedorPanel turnosHome'>
                    <div className='w-100 d-flex justify-content-between align-items-center'>
                        <h2>Proximos turnos</h2>
                        <a href="/" className='nuevoTurnoHome'>
                            <button type='button'>
                                <img src={nuevoTurnoIcon} alt="Programar nuevo turno" />
                            </button>
                        </a>
                    </div>
                    <div className='contenedorTurnosHome'>
                        <article className='cardTurnoHome'>
                            <div className='datosPacienteTurnoHome'>
                                <h3>Martes 15 de Agosto</h3>
                                <h4>Mateo Bernabé Lohezic</h4>
                            </div>
                            <div className='opcionesTurnoHome'>
                                <button type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                                        <path d="M13.5 6.5l4 4" />
                                    </svg>
                                </button>
                                <button type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M4 7h16" />
                                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                        <path d="M10 12l4 4m0 -4l-4 4" />
                                    </svg>
                                </button>
                            </div>
                        </article>
                        <article className='cardTurnoHome'>
                            <div className='datosPacienteTurnoHome'>
                                <h3>Martes 15 de Agosto</h3>
                                <h4>Mateo Bernabé Lohezic</h4>
                            </div>
                            <div className='opcionesTurnoHome'>
                                <button type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                                        <path d="M13.5 6.5l4 4" />
                                    </svg>
                                </button>
                                <button type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M4 7h16" />
                                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                        <path d="M10 12l4 4m0 -4l-4 4" />
                                    </svg>
                                </button>
                            </div>
                        </article>
                        <article className='cardTurnoHome'>
                            <div className='datosPacienteTurnoHome'>
                                <h3>Martes 15 de Agosto</h3>
                                <h4>Mateo Bernabé Lohezic</h4>
                            </div>
                            <div className='opcionesTurnoHome'>
                                <button type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                                        <path d="M13.5 6.5l4 4" />
                                    </svg>
                                </button>
                                <button type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M4 7h16" />
                                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                        <path d="M10 12l4 4m0 -4l-4 4" />
                                    </svg>
                                </button>
                            </div>
                        </article>
                        <article className='cardTurnoHome'>
                            <div className='datosPacienteTurnoHome'>
                                <h3>Martes 15 de Agosto</h3>
                                <h4>Mateo Bernabé Lohezic</h4>
                            </div>
                            <div className='opcionesTurnoHome'>
                                <button type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                                        <path d="M13.5 6.5l4 4" />
                                    </svg>
                                </button>
                                <button type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M4 7h16" />
                                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                        <path d="M10 12l4 4m0 -4l-4 4" />
                                    </svg>
                                </button>
                            </div>
                        </article>
                        <article className='cardTurnoHome'>
                            <div className='datosPacienteTurnoHome'>
                                <h3>Martes 15 de Agosto</h3>
                                <h4>Mateo Bernabé Lohezic</h4>
                            </div>
                            <div className='opcionesTurnoHome'>
                                <button type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                                        <path d="M13.5 6.5l4 4" />
                                    </svg>
                                </button>
                                <button type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M4 7h16" />
                                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                        <path d="M10 12l4 4m0 -4l-4 4" />
                                    </svg>
                                </button>
                            </div>
                        </article>
                        <article className='cardTurnoHome'>
                            <div className='datosPacienteTurnoHome'>
                                <h3>Martes 15 de Agosto</h3>
                                <h4>Mateo Bernabé Lohezic</h4>
                            </div>
                            <div className='opcionesTurnoHome'>
                                <button type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                                        <path d="M13.5 6.5l4 4" />
                                    </svg>
                                </button>
                                <button type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M4 7h16" />
                                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                        <path d="M10 12l4 4m0 -4l-4 4" />
                                    </svg>
                                </button>
                            </div>
                        </article>
                        <article className='cardTurnoHome'>
                            <div className='datosPacienteTurnoHome'>
                                <h3>Martes 15 de Agosto</h3>
                                <h4>Mateo Bernabé Lohezic</h4>
                            </div>
                            <div className='opcionesTurnoHome'>
                                <button type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                                        <path d="M13.5 6.5l4 4" />
                                    </svg>
                                </button>
                                <button type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M4 7h16" />
                                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                        <path d="M10 12l4 4m0 -4l-4 4" />
                                    </svg>
                                </button>
                            </div>
                        </article>
                        <article className='cardTurnoHome'>
                            <div className='datosPacienteTurnoHome'>
                                <h3>Martes 15 de Agosto</h3>
                                <h4>Mateo Bernabé Lohezic</h4>
                            </div>
                            <div className='opcionesTurnoHome'>
                                <button type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                                        <path d="M13.5 6.5l4 4" />
                                    </svg>
                                </button>
                                <button type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M4 7h16" />
                                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                        <path d="M10 12l4 4m0 -4l-4 4" />
                                    </svg>
                                </button>
                            </div>
                        </article>
                    </div>
                </article>
                <article className='contenedorPanel pacientesHome'>
                    <h2>Pacientes</h2>
                </article>
                <article className='contenedorPanel atajosHome'>
                    <h2>Herramientas</h2>
                </article>
                <article className='contenedorPanel alertasHome'>
                    <h2>Novedades</h2>
                </article>
            </section>
        </main>
    </>
    )
}

export default Home
