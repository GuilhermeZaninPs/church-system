import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import Logo from '../images/logo.png'
import { HomeStyle } from '../Style'

const  Home = () => {
    const departList = [
        'Diaconato',
        'Ancionato',
        'Louvor',
        'Ministério infantil',
        'Ministério pessoal',
    ]
    const [department, setDepartment] = useState('');
    
    function onStart (departTerm) {
        setDepartment(departTerm)
        console.log(departTerm)
    }

    function onChange(event) {
        setDepartment(event.target.value)
    }
    return (
        <>
            <HomeStyle>
                <img src={Logo} alt='Logo'></img>
                <div>
                    <h1 className='text-[34px]	font-semibold'>DEPARTAMENTO</h1>
                    <input type='text' onChange={onChange} value={department}></input>
                    {/* <Link to='/rota'> */}
                        <button onClick={() => onStart(department)}>Iniciar</button>
                    {/* </Link> */}
                </div>
                <div className='dropdown'>
                    {departList
                    .filter(item => {
                        const departTerm = department.toLowerCase()
                        const departmentName = item.toLowerCase()

                        return departTerm && departmentName.startsWith(departTerm) && departmentName !== departTerm
                    })
                    .map((item) => <div onClick={() => onStart(item)} className='dropdown-row' key={item}>
                        {item}
                    </div>)}
                </div>
            </HomeStyle>
        </>
    )
}

export default Home;