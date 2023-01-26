import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    }

    function onChange(event) {
        setDepartment(event.target.value)
    }
    return (
        <>
            <HomeStyle>
                <img src={Logo} alt='Logo' className='logo max-h-[150px] min-h-[150px]'></img>
                <div className='container-home-form'>
                    <h1 className='text-[34px]	font-semibold'>DEPARTAMENTO</h1>
                    <input type='text' onChange={onChange} value={department}></input>
                    {department === '' 
                        ? <button>Iniciar</button> 
                        : <Link to='/rota'>
                            <button onClick={() => onStart(department)}>Iniciar</button>
                        </Link> 
                    }
                    
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
                </div>
            </HomeStyle>
        </>
    )
}

export default Home;