import React, { useState } from 'react'
import './login.css'
import { useForm } from "react-hook-form"
import logo from '../../assets/logo.svg'
import passwordHideIcon from '../../assets/passwordHideIcon.png'
import passwordShowIcon from '../../assets/passwordShowIcon.png'
import { useAutoAnimate } from '@formkit/auto-animate/react'

function Login() {

    const [parent, enableAnimations] = useAutoAnimate()
    const [showPassowrd, setShowPassowrd] = useState(false)
    const {register, handleSubmit, formState: { errors }} = useForm()
    

    const onSubmit = (data) => {
        console.log({
            email: data.email.trim(),
            password: data.password.trim()
        })
    }

    return (
    <>
        <section className='contenedorLogin'>
            <div className='contenedorFormLogin'>
                <img src={logo} alt="Logo Nutrivisión Iniciar Sesión" />
                <h1>Iniciar sesión</h1>
                <p>Ingresa tus datos para obtener acceso a la plataforma.</p>
                <form className='formLogin' onSubmit={handleSubmit(onSubmit)}>
                    <div className='inputLogin' ref={parent}>
                        <label htmlFor="email">Correo electrónico</label>
                        <input type="text" name='email' id='email' maxLength={100} {...register("email",
                            {
                                required: true 
                            }
                        )}/>
                        {
                            errors.email && errors.email.type === 'required' && <p className='invalidInput'>Campo requerido.</p>
                        }
                    </div>
                    <div className='inputLogin' ref={parent}>
                        <label htmlFor="password">Contraseña</label>
                        <div className='showPasswordLogin'>
                            <input type={showPassowrd ? 'text' : 'password'} name='password' id='password' maxLength={100} {...register("password",
                                {
                                    required: true 
                                }
                            )}/>
                            <button type='button' onClick={ () => { setShowPassowrd(!showPassowrd) } }>
                                <img src={showPassowrd ? passwordShowIcon : passwordHideIcon} alt="" />
                            </button>
                        </div>
                        {
                            errors.password && errors.password.type === 'required' && <p className='invalidInput'>Campo requerido.</p>
                        }
                    </div>
                    <div className='botonSubmitLogin'>
                        <button type="submit">Iniciar sesión</button>
                    </div>
                </form>
                <div className='otrosLinksLogin'>
                    <h2>¿Olvidaste tu contrase? <a href="/">Recuperar</a></h2>
                    <h2>¿Todavía no tienes una cuenta? <a href="/">Registrate gratis</a></h2>
                </div>
            </div>
        </section>
    </>
    )
}

export default Login
