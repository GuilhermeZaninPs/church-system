import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { DepartContext } from '../context/DepartContext';
import Logo from '../images/logo.png'
import { HomeStyle } from '../Style'


const  Home = () => {
    const {departList, setChoose} = useContext(DepartContext)
    
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
                    <input type='text' onChange={onChange} value={department} ></input>
                    {department === '' 
                        ? <button>Iniciar</button> 
                        : <Link to='/rota'>
                            <button onClick={() => onStart(department)}>Iniciar</button>
                        </Link> 
                    }
                    
                    <div className='dropdown'>
                        {departList
                        .filter((item) => {
                            const departTerm = department.toLowerCase();
                            const departmentName = item.name.toString().toLowerCase()
                    
                            return departTerm && departmentName.startsWith(departTerm) && departmentName !== departTerm
                        })
                        .map((item) => {
                            <div onClick={() => onStart(item.name)} className='dropdown-row' key={item.id} style={{cursor: "pointer"}}>
                                {item.name}
                            </div>
                            
                        })}
                        
                    </div>
                </div>
            </HomeStyle>
        </>
    )
}

export default Home;