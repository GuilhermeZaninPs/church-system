import { createContext, useState } from "react";

export const DepartContext = createContext({})

export const DepartProvider = ({ children }) => {

    const [choose, setChoose] = useState(false)

    const departList = [{
            'name': 'Diaconato',
            'id': 0,
            'wasChoose': choose
        }, {
            'name': 'Ancionato',
            'id': 1,
            'wasChoose': choose
        },{
            'name': 'Louvor',
            'id': 2,
            'wasChoose': choose
        },{
            'name': 'Ministério infantil',
            'id': 3,
            'wasChoose': choose
        },{
            'name': 'Ministério pessoal',
            'id': 4,
            'wasChoose': choose
        },
    ]


    return (
        <DepartContext.Provider value={{departList, choose, setChoose}}>{ children }</DepartContext.Provider>
    )
}
export default DepartProvider;