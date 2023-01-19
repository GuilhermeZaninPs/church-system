import React, { useState } from 'react';
import Logo from '../images/logo.png'
import { HomeStyle } from '../Style'

const  Home = () => {
    const [department, setDepartment] = useState('');

    function BtnStart(e) {
        e.preventDefault();
        console.log('you clicked')
        console.log(department)
    }
    function departmentValue(event) {
        setDepartment(event.target.value)
    }
    return (
        <>
            <HomeStyle>
                <img src={Logo} alt='Logo'></img>
                <div>
                    <h1>DEPARTAMENTO</h1>
                    <input type='text' onChange={departmentValue}></input>
                    <button onClick={BtnStart}>Iniciar</button>
                </div>
            </HomeStyle>
        </>
    )
}

export default Home;