import React, { useState } from 'react'

const Navbar = ({search , handleSearch}) => {

  const changehandle = (e)=>{
      handleSearch(e.target.value)
  }
  return (
    <div className='flex bg-blue-400/80 justify-between p-4 sticky top-0'>
      <div className='font-extrabold text-2xl font-serif'>Your Photos</div>
      <input className='bg-white rounded-3xl px-3 py-1' type="text" value={search} onChange={changehandle} placeholder='Search...'/></div>

  )
}

export default Navbar
