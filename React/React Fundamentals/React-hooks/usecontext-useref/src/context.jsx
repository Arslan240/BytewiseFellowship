import { createContext, useContext, useState } from "react";

const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)

const AppContext = ({children}) => {
    const [users, setUsers] = useState([])

    return <GlobalContext.Provider value={{users, setUsers}}>
        {children}
    </GlobalContext.Provider>
}

export default AppContext;