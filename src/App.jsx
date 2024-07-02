import { useState } from "react"

import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"


function App() {
  const [cartCount, setCartCount] = useState(4)
  
  return (
    <>
      <NavBar cartCount={cartCount} title="C.A.C Refrigeracion"/>
      <ItemListContainer greetings="Somos C .A .C la mejor tienda de Refrigeracion." />

    </>
  )
}

export default App