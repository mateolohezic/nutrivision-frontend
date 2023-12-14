import React from 'react'
import './pacientes.css'
import BarraDeNavegacion from '../../Components/BarraDeNavegacion/BarraDeNavegacion'
import addIcon from '../../assets/addIcon.png'
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
            </div>
        </main>
    </>
    )
}

export default Pacientes
