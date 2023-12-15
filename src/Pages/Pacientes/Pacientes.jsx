import React from 'react'
import './pacientes.css'
import BarraDeNavegacion from '../../Components/BarraDeNavegacion/BarraDeNavegacion'
import addIcon from '../../assets/addIcon.png'
import pacienteDefecto from '../../assets/pacienteDefecto.jpeg'
import turnoIcon from '../../assets/turnoIcon.png'
import BuscadorPacientes from '../../Components/BuscadorPacientes/BuscadorPacientes'

function Pacientes() {

    const activePage = 'pacientes'

    const onSearch = (data) => {
        console.log(data);
    }

    return (
    <>
        <BarraDeNavegacion activePage={activePage}/>
        <main className='contenedorMain'>
            <div className='contenedorPrincipalPacientes'>
                <section className='headerPacientes'>
                    <h1>Pacientes</h1>
                    <a href="/">
                        <button type="button">
                            <img src={addIcon} alt="Cargar un nuevo paciente" />
                            <span>
                                Nuevo paciente
                            </span>
                        </button>
                    </a>
                </section>
                <BuscadorPacientes onSubmit={onSearch}/>
                <section className='contenedorCardsPacientes'>
                    <article className='cardPaciente'>
                        <div className='imagenCardPaciente'>
                            <img src={pacienteDefecto} alt="Paciente" />
                        </div>
                        <div className='detallesCardPaciente'>
                            <div className='tituloCardPaciente'>
                                <h2>Mateo Bernabé Lohezic</h2>
                                <h3>Peso actual: 300 kg</h3>
                            </div>
                            <div className='turnoCardPaciente'>
                                <img src={turnoIcon} alt="Proximo turno" />
                                <div>
                                    <h2>Proximo turno</ h2>
                                    <h3>Martes 13 de agoto</h3>
                                </div>
                            </div>
                            <div className='verCardPaciente'>
                                <a href="/">
                                    <button type="button">Ver planilla</button>
                                </a>
                            </div>
                        </div>
                    </article>
                    <article className='cardPaciente'>
                        <div className='imagenCardPaciente'>
                            <img src={pacienteDefecto} alt="Paciente" />
                        </div>
                        <div className='detallesCardPaciente'>
                            <div className='tituloCardPaciente'>
                                <h2>Mateo Bernabé Lohezic</h2>
                                <h3>Peso actual: 300 kg</h3>
                            </div>
                            <div className='turnoCardPaciente'>
                                <img src={turnoIcon} alt="Proximo turno" />
                                <div>
                                    <h2>Proximo turno</ h2>
                                    <h3>Martes 13 de agoto</h3>
                                </div>
                            </div>
                            <div className='verCardPaciente'>
                                <a href="/">
                                    <button type="button">Ver planilla</button>
                                </a>
                            </div>
                        </div>
                    </article>
                    <article className='cardPaciente'>
                        <div className='imagenCardPaciente'>
                            <img src={pacienteDefecto} alt="Paciente" />
                        </div>
                        <div className='detallesCardPaciente'>
                            <div className='tituloCardPaciente'>
                                <h2>Mateo Bernabé Lohezic</h2>
                                <h3>Peso actual: 300 kg</h3>
                            </div>
                            <div className='turnoCardPaciente'>
                                <img src={turnoIcon} alt="Proximo turno" />
                                <div>
                                    <h2>Proximo turno</ h2>
                                    <h3>Martes 13 de agoto</h3>
                                </div>
                            </div>
                            <div className='verCardPaciente'>
                                <a href="/">
                                    <button type="button">Ver planilla</button>
                                </a>
                            </div>
                        </div>
                    </article>
                    <article className='cardPaciente'>
                        <div className='imagenCardPaciente'>
                            <img src={pacienteDefecto} alt="Paciente" />
                        </div>
                        <div className='detallesCardPaciente'>
                            <div className='tituloCardPaciente'>
                                <h2>Mateo Bernabé Lohezic</h2>
                                <h3>Peso actual: 300 kg</h3>
                            </div>
                            <div className='turnoCardPaciente'>
                                <img src={turnoIcon} alt="Proximo turno" />
                                <div>
                                    <h2>Proximo turno</ h2>
                                    <h3>Martes 13 de agoto</h3>
                                </div>
                            </div>
                            <div className='verCardPaciente'>
                                <a href="/">
                                    <button type="button">Ver planilla</button>
                                </a>
                            </div>
                        </div>
                    </article>
                    <article className='cardPaciente'>
                        <div className='imagenCardPaciente'>
                            <img src={pacienteDefecto} alt="Paciente" />
                        </div>
                        <div className='detallesCardPaciente'>
                            <div className='tituloCardPaciente'>
                                <h2>Mateo Bernabé Lohezic</h2>
                                <h3>Peso actual: 300 kg</h3>
                            </div>
                            <div className='turnoCardPaciente'>
                                <img src={turnoIcon} alt="Proximo turno" />
                                <div>
                                    <h2>Proximo turno</ h2>
                                    <h3>Martes 13 de agoto</h3>
                                </div>
                            </div>
                            <div className='verCardPaciente'>
                                <a href="/">
                                    <button type="button">Ver planilla</button>
                                </a>
                            </div>
                        </div>
                    </article>
                    <article className='cardPaciente'>
                        <div className='imagenCardPaciente'>
                            <img src={pacienteDefecto} alt="Paciente" />
                        </div>
                        <div className='detallesCardPaciente'>
                            <div className='tituloCardPaciente'>
                                <h2>Mateo Bernabé Lohezic</h2>
                                <h3>Peso actual: 300 kg</h3>
                            </div>
                            <div className='turnoCardPaciente'>
                                <img src={turnoIcon} alt="Proximo turno" />
                                <div>
                                    <h2>Proximo turno</ h2>
                                    <h3>Martes 13 de agoto</h3>
                                </div>
                            </div>
                            <div className='verCardPaciente'>
                                <a href="/">
                                    <button type="button">Ver planilla</button>
                                </a>
                            </div>
                        </div>
                    </article>
                    <article className='cardPaciente'>
                        <div className='imagenCardPaciente'>
                            <img src={pacienteDefecto} alt="Paciente" />
                        </div>
                        <div className='detallesCardPaciente'>
                            <div className='tituloCardPaciente'>
                                <h2>Mateo Bernabé Lohezic</h2>
                                <h3>Peso actual: 300 kg</h3>
                            </div>
                            <div className='turnoCardPaciente'>
                                <img src={turnoIcon} alt="Proximo turno" />
                                <div>
                                    <h2>Proximo turno</ h2>
                                    <h3>Martes 13 de agoto</h3>
                                </div>
                            </div>
                            <div className='verCardPaciente'>
                                <a href="/">
                                    <button type="button">Ver planilla</button>
                                </a>
                            </div>
                        </div>
                    </article>
                    <article className='cardPaciente'>
                        <div className='imagenCardPaciente'>
                            <img src={pacienteDefecto} alt="Paciente" />
                        </div>
                        <div className='detallesCardPaciente'>
                            <div className='tituloCardPaciente'>
                                <h2>Mateo Bernabé Lohezic</h2>
                                <h3>Peso actual: 300 kg</h3>
                            </div>
                            <div className='turnoCardPaciente'>
                                <img src={turnoIcon} alt="Proximo turno" />
                                <div>
                                    <h2>Proximo turno</ h2>
                                    <h3>Martes 13 de agoto</h3>
                                </div>
                            </div>
                            <div className='verCardPaciente'>
                                <a href="/">
                                    <button type="button">Ver planilla</button>
                                </a>
                            </div>
                        </div>
                    </article>
                    <article className='cardPaciente'>
                        <div className='imagenCardPaciente'>
                            <img src={pacienteDefecto} alt="Paciente" />
                        </div>
                        <div className='detallesCardPaciente'>
                            <div className='tituloCardPaciente'>
                                <h2>Mateo Bernabé Lohezic</h2>
                                <h3>Peso actual: 300 kg</h3>
                            </div>
                            <div className='turnoCardPaciente'>
                                <img src={turnoIcon} alt="Proximo turno" />
                                <div>
                                    <h2>Proximo turno</ h2>
                                    <h3>Martes 13 de agoto</h3>
                                </div>
                            </div>
                            <div className='verCardPaciente'>
                                <a href="/">
                                    <button type="button">Ver planilla</button>
                                </a>
                            </div>
                        </div>
                    </article>
                </section>
            </div>
        </main>
    </>
    )
}

export default Pacientes
