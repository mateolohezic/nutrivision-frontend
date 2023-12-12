import React from 'react'
import './barraDeNavegacion.css'
import logo from '../../assets/logo.svg'

function BarraDeNavegacion() {
    return (
    <>
        <div className='contenedorNavbarPrincipal'>
            <nav className='navbarPrincipal'>
                <div className='logoNavbarPrincipal'>
                    <img src={logo} alt="Logo Nutrivision" />
                </div>
                <div className='contenedorBotonesNavbar'>
                    <ul>
                        <a href="/" className='linkNavbar linkNavbarActive'>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                    <path d="M6.1 14C6.26569 14 6.4 13.8657 6.4 13.7V9.35882C6.4 9.19314 6.53431 9.05882 6.7 9.05882H9.3C9.46569 9.05882 9.6 9.19314 9.6 9.35882V13.7C9.6 13.8657 9.73431 14 9.9 14H13.3C13.4657 14 13.6 13.8657 13.6 13.7V7.71176C13.6 7.54608 13.7343 7.41176 13.9 7.41176H15.2348C15.5076 7.41176 15.6388 7.07711 15.4387 6.8917L8.20389 0.188895C8.08885 0.0823194 7.91115 0.0823198 7.79611 0.188895L0.561344 6.8917C0.36121 7.07711 0.492406 7.41176 0.765231 7.41176H2.1C2.26569 7.41176 2.4 7.54608 2.4 7.71176V13.7C2.4 13.8657 2.53431 14 2.7 14H6.1Z"/>
                                </svg>
                                <span>Inicio</span>
                            </li>
                        </a>
                        <a href="/" className='linkNavbar'>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1268 8.83701C12.3194 7.94141 13.0908 6.51534 13.0908 4.90909C13.0908 2.19787 10.8929 0 8.1817 0C5.47048 0 3.27261 2.19787 3.27261 4.90909C3.27261 6.51538 4.04408 7.94148 5.23672 8.83708C2.17322 10.2559 0 13.8234 0 18V18H16.3636V18C16.3636 13.8233 14.1903 10.2558 11.1268 8.83701Z"/>
                                </svg>
                                <span>Pacientes</span>
                            </li>
                        </a>
                        <a href="/" className='linkNavbar'>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 18" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1C0 0.447716 0.447715 0 1 0H14.0001C14.5524 0 15.0001 0.447715 15.0001 1V17.0001C15.0001 17.5524 14.5524 18.0001 14.0001 18.0001H1C0.447715 18.0001 0 17.5524 0 17.0001V1ZM2.99993 2.99994H12V4.49995H2.99993V2.99994ZM12 6H2.99993V7.50001H12V6ZM2.99993 9H12V10.5H2.99993V9ZM9.0001 12H6.00007V13.5H9.0001V12Z"/>
                                </svg>
                                <span>Turnos</span>
                            </li>
                        </a>
                        <a href="/" className='linkNavbar'>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1268 8.83701C12.3194 7.94141 13.0908 6.51534 13.0908 4.90909C13.0908 2.19787 10.8929 0 8.1817 0C5.47048 0 3.27261 2.19787 3.27261 4.90909C3.27261 6.51538 4.04408 7.94148 5.23672 8.83708C2.17322 10.2559 0 13.8234 0 18V18H16.3636V18C16.3636 13.8233 14.1903 10.2558 11.1268 8.83701Z"/>
                                </svg>
                                <span>Perfil</span>
                            </li>
                        </a>
                    </ul>
                </div>
            </nav>
        </div>
    </>
    )
}

export default BarraDeNavegacion
