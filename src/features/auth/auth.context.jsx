import { createContext,useState } from "react";


export const AuthContext = createContext()                                                               // creates a context object.


export const AuthProvider = ({ children }) => {                                                        //  AuthProvider  is a provider component that shares data to all nested components.
    const [user, setUser] = useState(null)                                                            // in initial the value of user will be null
    const [loading, setLoading] = useState(true)                                                   // For rehydrating the react application we have to true the loading
    return (
        <AuthContext.Provider value={{user,setUser,loading,setLoading}} >
            {children}                                                                               {/* In short: children = nested components/content inside the provider. */}
        </AuthContext.Provider>
    )

    
}

