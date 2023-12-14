import React, { createContext } from 'react'
export const Data = createContext();

function DataProvider({children}) {

    const number = 0
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         secondsNumber(number + 2)
    //     })
    //     console.log(number)
    // })
    // function increaseContextVal(){
    //   secondsNumber(number + 2)
    //   console.log(number)
    // }
  return (
    <Data.Provider value={number}>
        {children}
    </Data.Provider>
  )
}

export default DataProvider;