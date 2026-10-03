import React from 'react'
import "../App.css";
const Header = ({searchTerm,setSearchTerm,sortYear,setSortYear,darkMode,setDarkMode}) => {
  return (
   <header>
    <div className="logo">
        <h1>Movie Explorer</h1>
    </div>
    <div className="header-controls">
        <input type="text" placeholder="Search Movie..." value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
        <select value={sortYear || ""} onChange={(e)=>setSortYear(e.target.value)}>
            <option value="">Sort by year</option>
            <option value="asc">Year Ascending</option>
            <option value="desc">Year Descending</option>
        </select>
        <label>
            <input type="checkbox"  checked={darkMode} onClick={()=>setDarkMode(!darkMode)}/>
            DarkMode
        </label>
    </div>
   </header>
  )
}

export default Header
