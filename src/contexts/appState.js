// Step 1 : 
import React, { createContext, useContext, useReducer } from 'react'
import { object, func } from 'prop-types'

const Context = createContext()

export function AppStateProvider({ reducer, initialState = {}, children }) {
    const value = useReducer(reducer, initialState)

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

// Step 2 :
AppStateProvider.propTypes = {
    reducer: func,
    initialState: object,
}

export function useAppState() {
    return useContext(Context)
}