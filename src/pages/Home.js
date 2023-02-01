import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { DepartContext } from '../context/DepartContext';
import Logo from '../images/logo.png'
import { HomeStyle } from '../Style'




const  Home = () => {
    const {addItem, departList } = useContext(DepartContext)
    
    const [department, setDepartment] = useState('');
    
 
    const addItemClick = (department) => {
        addItem(department)
        console.log(departList)
    }
   /* function onSelectItem ( departTerm ) {
        setDepartment(departTerm)
    }   */
   
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
                            <button onClick={() => addItemClick(department)}>Iniciar</button>
                        </Link> 
                    }
                    
                    {/* remove auto complete form for now. Later I will try again */}
                    {/* <div className='dropdown'>
                        {departList
                        .filter((item) => {
                            const departTerm = department?.toLowerCase();
                            const departmentName = item.name?.toString().toLowerCase()
                    
                            return departmentName?.startsWith(departTerm) && departTerm && departmentName !== departTerm
                        })
                        .map((item) => (
                            <div onClick={() => {
                                setDepartList((prevItem) => [...prevItem, {name: item.name, id: item.id, status: !item.status}])
                                onSelectItem(item.name)
                                }} className='dropdown-row' key={item.id} style={{cursor: "pointer"}}>
                                    {item.name}
                            </div>
                            
                        ))}
                        
                    </div> */}
                </div>
            </HomeStyle>
        </>
    )
}

export default Home;