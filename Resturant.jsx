import React, { useState } from 'react'
import '../Basics/Resturant.css'
import Menu from '../menuApi'
import MenuCard from './MenuCard'
import Navbar from '../Navbar'
const uniquelist = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category
    })
  ),
  'All'
]
const Resturant = () => {
  const [menudata, setdata] = useState(Menu)
  const [menulist, setmenulist] = useState(uniquelist)

  // Filter function to update the menu based on category
  const filteritem = (category) => {
    if (category === 'All') {
      setdata(Menu) // Show all items when "All" is selected
    } else {
      const updatedlist = Menu.filter((curElem) => curElem.category === category);
      setdata(updatedlist);
    }
  }

  return (
    <>
      <Navbar filteritem={filteritem} menulist={menulist} />
      <MenuCard menudata={menudata} />
    </>
  )
}

export default Resturant
