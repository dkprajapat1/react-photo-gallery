import React, { useState, useCallback } from 'react'
import Navbar from './components/Navbar'
import Gallery from './components/Gallery'
const App = () => {
  const [search, setSearch] = useState("")

  const handleSearch = useCallback((value) => {
    setSearch(value)
  }, [])
  return (
    <>
      <Navbar search={search} handleSearch={handleSearch} />
      <Gallery search={search} />
    </>
  )
}

export default App
