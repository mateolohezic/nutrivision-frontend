import React from 'react'
import { useForm } from "react-hook-form";
import './buscadorPacientes.css'

function BuscadorPacientes(props) {
    

    const { register, handleSubmit } = useForm({ mode: "onSubmit" });

    return (
    <section>
        <form className='inputBuscadorPacientes' onSubmit={handleSubmit(props.onSubmit)}>
            <label htmlFor="search">Buscar un paciente</label>
            <div>
                <input type="search" name="search" id="search" aria-label="Search" placeholder='Buscar...' maxLength={40} {...register("search", { required: true })}/>
                <button type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 19 19" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.435 4.364C13.3877 6.31662 13.3877 9.48245 11.435 11.4351C9.48241 13.3877 6.31658 13.3877 4.36396 11.4351C2.41134 9.48245 2.41134 6.31662 4.36396 4.364C6.31658 2.41138 9.48241 2.41138 11.435 4.364ZM13.5062 12.0921C15.5618 9.35023 15.3428 5.44338 12.8492 2.94979C10.1156 0.216119 5.68342 0.216119 2.94975 2.94979C0.216077 5.68346 0.216077 10.1156 2.94975 12.8493C5.44334 15.3429 9.35019 15.5619 12.092 13.5063L16.7383 18.1526L18.1525 16.7384L13.5062 12.0921Z" fill="#A8A8A8"/>
                    </svg>  
                </button>
            </div>
        </form>
    </section>
    )
}

export default BuscadorPacientes
