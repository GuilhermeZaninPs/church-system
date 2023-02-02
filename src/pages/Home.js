import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { DepartContext } from '../context/DepartContext';
import Logo from '../images/logo.png'
import { HomeStyle } from '../Style'


const  Home = () => {
    const {departList, setDepartList} = useContext(DepartContext)
    
    const [department, setDepartment] = useState('');

    
    function onSelectItem ( departTerm ) {
        setDepartment(departTerm)
    }        
    function onClickSelected () {
        console.log(departList)
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
                        : <Link to='/'>
                            <button onClick={() => onClickSelected()}>Iniciar</button>
                        </Link> 
                    }
                    
                    <div className='dropdown'>
                        {departList
                        .filter((item) => {
                            const departTerm = department?.toLowerCase();
                            const departmentName = item.name?.toString().toLowerCase()
                    
                            return departmentName?.startsWith(departTerm) && departTerm && departmentName !== departTerm
                        })
                        .map((item, index) => (
                            <div onClick={() => {
                                // setDepartList((prevItem) => [...prevItem, {name: item.name, id: item.id, status: !item.status}])
                                if(item === index) {
                                    return !item.status
                                }
                                onSelectItem(item.name)
                                }} className='dropdown-row' key={item.id} style={{cursor: "pointer"}}>
                                    {item.name}
                            </div>
                            
                        ))}
                        
                    </div>
                </div>
            </HomeStyle>
        </>
    )
}

export default Home;