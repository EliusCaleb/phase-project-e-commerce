import React,{createContext , useState} from 'react'
export const RoomContext = createContext()
export function RoomProvider ({children}){
    const [saved ,setSaved]= useState([])
    const addCart =(obj)=>{
      setSaved((prevState)=>[...prevState,obj])
    }
    return(
        <RoomContext.Provider value={{saved, addCart, setSaved }}>
            {children}
        </RoomContext.Provider>
    )
}
export const RoomConsumer = RoomContext.Consumer