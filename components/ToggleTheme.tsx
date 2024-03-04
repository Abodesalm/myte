'use client'
import { useState , useEffect } from "react"
import { FaMoon } from "react-icons/fa"
import { BsSunFill } from "react-icons/bs"

const ToggleTheme = () => {
  const [darkMode, setDarkMode] = useState(true)
  useEffect(()=> {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') setDarkMode(true)
    else if (theme === 'light') setDarkMode(false)
  } , [])
  useEffect(()=>{
    if (darkMode){
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme','dark')
    }else{
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme','light')
    }
  },[darkMode])


  return (
    <div className="
    relative w-16 h-8 flex items-center cursor-pointer rounded-full p-1 
    dark:bg-black bg-main border border-dark
    md:mr-[2rem]
    " onClick={() => setDarkMode(!darkMode)}>
        <FaMoon className="text-white " size={18} />
        <div className="absolute bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300" style={darkMode ? {right:'2px'}:{left:'2px'}}></div>
        <BsSunFill className="mr-auto text-yellow-400" size={18}/>
    </div>
  )
}

export default ToggleTheme