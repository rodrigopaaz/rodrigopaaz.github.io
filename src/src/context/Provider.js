import React, { useMemo, useState } from 'react'
import AppContext from './Context'

export default function AppProvider({children}) {
    const [toggleMenu, setToggleMenu] = useState(true);
    const data = useMemo(
        () => ({ toggleMenu, setToggleMenu }),
        [toggleMenu, setToggleMenu],
      );
  return (
    <AppContext.Provider value={ data }>
      {children}
    </AppContext.Provider>
  )
}
