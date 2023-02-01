import { createContext, useState } from "react";
import ShortUniqueId from 'short-unique-id';

export const DepartContext = createContext({})

export const DepartProvider = ({ children }) => {

    // https://egghead.io/lessons/react-redux-react-counter-example
    // https://egghead.io/courses/building-react-applications-with-idiomatic-redux

    // check those link above to learn how to use redux reducer
   
    const uid = new ShortUniqueId();
    
    // I will start with an empty array of object

    const [departList, setDepartList] = useState([
        /* {
            'name': 'Diaconato',
            'id': uid(),
            'status': status,
        }, {
            'name': 'Ancionato',
            'id': uid(),
            'status': status,
        },{
            'name': 'Louvor',
            'id': uid(),
            'status': status,
        },{
            'name': 'Ministério infantil',
            'id': uid(),
            'status': status,
        },{
            'name': 'Ministério pessoal',
            'id': uid(),
            'status': status,
        }, */
    ])

    const addItem = (department) => {
        setDepartList(prevDepart => [...prevDepart, {departName: department, id: uid()  }])
        console.log(departList)
    }
   


    return (
        <DepartContext.Provider value={{departList, addItem}}>{ children }</DepartContext.Provider>
    )
}
export default DepartProvider;