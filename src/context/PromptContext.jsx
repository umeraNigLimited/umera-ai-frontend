import {createContext, useReducer } from "react";

export const PromptContext = createContext()

export const promptReducer = (state, action) => {
    switch(action) {
        case 'SET_PROMPT' : 
            return {
                promptInfo : action.payload
            }
        case 'CREATE_PROMPT' : 
            return {
                promptInfo : [action.payload, ...state.promptInfo]
            }
        default :
            return state
    }
}

export const PromptContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(promptReducer, {
        promptInfo : null
    })

    return (
        <PromptContext.Provider value={{...state, dispatch}}>
            {children}
        </PromptContext.Provider>
    )
}