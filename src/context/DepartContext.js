import { createContext, useState } from "react";

export const DepartContext = createContext({})

export const DepartProvider = ({ children }) => {

    // https://egghead.io/lessons/react-redux-react-counter-example
    // https://egghead.io/courses/building-react-applications-with-idiomatic-redux

    // check those link above to learn how to use redux reducer
    const status = false;
 
    const [departList, setDepartList] = useState([
        {
            'name': 'Diaconato',
            'id': 0,
            'status': status,
        }, {
            'name': 'Ancionato',
            'id': 1,
            'status': status,
        },{
            'name': 'Louvor',
            'id': 2,
            'status': status,
        },{
            'name': 'Ministério infantil',
            'id': 3,
            'status': status,
        },{
            'name': 'Ministério pessoal',
            'id': 4,
            'status': status,
        },
    ])
   


    return (
        <DepartContext.Provider value={{departList, setDepartList}}>{ children }</DepartContext.Provider>
    )
}
export default DepartProvider;