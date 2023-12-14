import React from 'react'
import './pacientesHome.css'
import nuevoPacienteIcon from '../../assets/nuevoPacienteIcon.png'
import pacienteInfoIcon from '../../assets/pacienteInfoIcon.png'

function PacientesHome() {
    return (
    <>
        <section className='contenedorPanel pacientesHome'>
            <div className='w-100 d-flex justify-content-between align-items-center'>
                <h2>Pacientes</h2>
                <a href="/" className='nuevoTurnoHome'>
                    <button type='button'>
                        <img src={nuevoPacienteIcon} alt="Programar nuevo turno" />
                    </button>
                </a>
            </div>
            <div className='contenedorPacientesHome'>
                <article className='cardPacienteHome'>
                    <div className='infoCardPacienteHome'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" strokeWidth="3" stroke="#656565" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                            </svg>
                            <h3>Nombre Paciente</h3>
                        </div>
                        <h4>Próximo turno: Martes 15 de agosto</h4>
                    </div>
                    <div className='botonCardPacienteHome'>
                        <a href="/">
                            <button type='button'>
                                <img src={pacienteInfoIcon} alt="Ver información de paciente" />
                            </button>
                        </a>
                    </div>
                </article>
                <article className='cardPacienteHome'>
                    <div className='infoCardPacienteHome'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" strokeWidth="3" stroke="#656565" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                            </svg>
                            <h3>Nombre Paciente</h3>
                        </div>
                        <h4>Próximo turno: Martes 15 de agosto</h4>
                    </div>
                    <div className='botonCardPacienteHome'>
                        <a href="/">
                            <button type='button'>
                                <img src={pacienteInfoIcon} alt="Ver información de paciente" />
                            </button>
                        </a>
                    </div>
                </article>
                <article className='cardPacienteHome'>
                    <div className='infoCardPacienteHome'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" strokeWidth="3" stroke="#656565" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                            </svg>
                            <h3>Nombre Paciente</h3>
                        </div>
                        <h4>Próximo turno: Martes 15 de agosto</h4>
                    </div>
                    <div className='botonCardPacienteHome'>
                        <a href="/">
                            <button type='button'>
                                <img src={pacienteInfoIcon} alt="Ver información de paciente" />
                            </button>
                        </a>
                    </div>
                </article>
                <article className='cardPacienteHome'>
                    <div className='infoCardPacienteHome'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" strokeWidth="3" stroke="#656565" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                            </svg>
                            <h3>Nombre Paciente</h3>
                        </div>
                        <h4>Próximo turno: Martes 15 de agosto</h4>
                    </div>
                    <div className='botonCardPacienteHome'>
                        <a href="/">
                            <button type='button'>
                                <img src={pacienteInfoIcon} alt="Ver información de paciente" />
                            </button>
                        </a>
                    </div>
                </article>
                <article className='cardPacienteHome'>
                    <div className='infoCardPacienteHome'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" strokeWidth="3" stroke="#656565" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                            </svg>
                            <h3>Nombre Paciente</h3>
                        </div>
                        <h4>Próximo turno: Martes 15 de agosto</h4>
                    </div>
                    <div className='botonCardPacienteHome'>
                        <a href="/">
                            <button type='button'>
                                <img src={pacienteInfoIcon} alt="Ver información de paciente" />
                            </button>
                        </a>
                    </div>
                </article>
                <article className='cardPacienteHome'>
                    <div className='infoCardPacienteHome'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" strokeWidth="3" stroke="#656565" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                            </svg>
                            <h3>Nombre Paciente</h3>
                        </div>
                        <h4>Próximo turno: Martes 15 de agosto</h4>
                    </div>
                    <div className='botonCardPacienteHome'>
                        <a href="/">
                            <button type='button'>
                                <img src={pacienteInfoIcon} alt="Ver información de paciente" />
                            </button>
                        </a>
                    </div>
                </article>
                <article className='cardPacienteHome'>
                    <div className='infoCardPacienteHome'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" strokeWidth="3" stroke="#656565" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                            </svg>
                            <h3>Nombre Paciente</h3>
                        </div>
                        <h4>Próximo turno: Martes 15 de agosto</h4>
                    </div>
                    <div className='botonCardPacienteHome'>
                        <a href="/">
                            <button type='button'>
                                <img src={pacienteInfoIcon} alt="Ver información de paciente" />
                            </button>
                        </a>
                    </div>
                </article>
                <article className='cardPacienteHome'>
                    <div className='infoCardPacienteHome'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" strokeWidth="3" stroke="#656565" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                            </svg>
                            <h3>Nombre Paciente</h3>
                        </div>
                        <h4>Próximo turno: Martes 15 de agosto</h4>
                    </div>
                    <div className='botonCardPacienteHome'>
                        <a href="/">
                            <button type='button'>
                                <img src={pacienteInfoIcon} alt="Ver información de paciente" />
                            </button>
                        </a>
                    </div>
                </article>
                <article className='cardPacienteHome'>
                    <div className='infoCardPacienteHome'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" strokeWidth="3" stroke="#656565" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                            </svg>
                            <h3>Nombre Paciente</h3>
                        </div>
                        <h4>Próximo turno: Martes 15 de agosto</h4>
                    </div>
                    <div className='botonCardPacienteHome'>
                        <a href="/">
                            <button type='button'>
                                <img src={pacienteInfoIcon} alt="Ver información de paciente" />
                            </button>
                        </a>
                    </div>
                </article>
            </div>
        </section>
    </>
    )
}

export default PacientesHome
