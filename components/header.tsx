import React, { useCallback, useEffect, useState }  from "react"
import useWindowDimensions from "../hooks/screen_dimensions"
import { BellIcon, SearchIcon } from '@heroicons/react/solid'

const HeaderNav: React.FC = ( ) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const width  = useWindowDimensions();

console.log(width);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
    return (
      <header className={`${isScrolled && 'bg-[#141414]'}`}>

  <div className="flex flex-col text-white">
  <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown font-bold font-nunito ">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gradient-to-r border-none border-transparent hover:border-transparent  from-green-400 to-blue-500  text-white rounded-box w-52 ...">
      <li tabIndex={0}>
          <a className="justify-between">
            Minerals
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 55.751 55.751"><path d="M31.836,43.006c0.282-0.281,0.518-0.59,0.725-0.912L54.17,20.485c2.107-2.109,2.109-5.528,0-7.638   c-2.109-2.107-5.527-2.109-7.638,0l-18.608,18.61L9.217,12.753c-2.109-2.108-5.527-2.109-7.637,0   C0.527,13.809-0.002,15.19,0,16.571c-0.002,1.382,0.527,2.764,1.582,3.816l21.703,21.706c0.207,0.323,0.445,0.631,0.729,0.913   c1.078,1.078,2.496,1.597,3.91,1.572C29.336,44.604,30.758,44.084,31.836,43.006z"/></svg>
          </a>
          <ul className="p-2 bg-gradient-to-r border-none border-transparent hover:border-transparent  from-green-400 to-blue-500  text-white ...">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li tabIndex={0}>
          <a className="justify-between">
            Rocks
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 55.751 55.751"><path d="M31.836,43.006c0.282-0.281,0.518-0.59,0.725-0.912L54.17,20.485c2.107-2.109,2.109-5.528,0-7.638   c-2.109-2.107-5.527-2.109-7.638,0l-18.608,18.61L9.217,12.753c-2.109-2.108-5.527-2.109-7.637,0   C0.527,13.809-0.002,15.19,0,16.571c-0.002,1.382,0.527,2.764,1.582,3.816l21.703,21.706c0.207,0.323,0.445,0.631,0.729,0.913   c1.078,1.078,2.496,1.597,3.91,1.572C29.336,44.604,30.758,44.084,31.836,43.006z"/></svg>
          </a>
          <ul className="p-2 bg-gradient-to-r border-none border-transparent hover:border-transparent  from-green-400 to-blue-500  text-white ...">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li tabIndex={0}>
          <a className="justify-between">
            Mine sites
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 55.751 55.751"><path d="M31.836,43.006c0.282-0.281,0.518-0.59,0.725-0.912L54.17,20.485c2.107-2.109,2.109-5.528,0-7.638   c-2.109-2.107-5.527-2.109-7.638,0l-18.608,18.61L9.217,12.753c-2.109-2.108-5.527-2.109-7.637,0   C0.527,13.809-0.002,15.19,0,16.571c-0.002,1.382,0.527,2.764,1.582,3.816l21.703,21.706c0.207,0.323,0.445,0.631,0.729,0.913   c1.078,1.078,2.496,1.597,3.91,1.572C29.336,44.604,30.758,44.084,31.836,43.006z"/></svg>
          </a>
          <ul className="p-2 bg-gradient-to-r border-none border-transparent hover:border-transparent  from-green-400 to-blue-500  text-white ...">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Videos</a></li>
        <li><a>Downloads</a></li>
      </ul>
    </div>
    <a className="normal-case text-transparent  bg-clip-text bg-gradient-to-r text-2xl xl:text-3xl font-bold font-pacifico from-[#21C9E0] to-[#F1F579] hover:from-pink-500 hover:to-yellow-500 ...">Mbijiwexihibition</a>
  

    </div>
  <div className={`navbar-center justify-center z-50 font-bold font-nunito text-white ${width >= 1024 ? 'flex': 'hidden'}`} >
    <ul className="menu menu-horizontal">
    <li tabIndex={0}>
          <a className="justify-between">
            Minerals
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 55.751 55.751"><path d="M31.836,43.006c0.282-0.281,0.518-0.59,0.725-0.912L54.17,20.485c2.107-2.109,2.109-5.528,0-7.638   c-2.109-2.107-5.527-2.109-7.638,0l-18.608,18.61L9.217,12.753c-2.109-2.108-5.527-2.109-7.637,0   C0.527,13.809-0.002,15.19,0,16.571c-0.002,1.382,0.527,2.764,1.582,3.816l21.703,21.706c0.207,0.323,0.445,0.631,0.729,0.913   c1.078,1.078,2.496,1.597,3.91,1.572C29.336,44.604,30.758,44.084,31.836,43.006z"/></svg>
          </a>
          <ul className="p-2 bg-gradient-to-r border-none border-transparent hover:border-transparent  from-green-400 to-blue-500  text-white ...">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li tabIndex={0}>
          <a className="justify-between">
            Rocks
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 55.751 55.751"><path d="M31.836,43.006c0.282-0.281,0.518-0.59,0.725-0.912L54.17,20.485c2.107-2.109,2.109-5.528,0-7.638   c-2.109-2.107-5.527-2.109-7.638,0l-18.608,18.61L9.217,12.753c-2.109-2.108-5.527-2.109-7.637,0   C0.527,13.809-0.002,15.19,0,16.571c-0.002,1.382,0.527,2.764,1.582,3.816l21.703,21.706c0.207,0.323,0.445,0.631,0.729,0.913   c1.078,1.078,2.496,1.597,3.91,1.572C29.336,44.604,30.758,44.084,31.836,43.006z"/></svg>
          </a>
          <ul className="p-2 bg-gradient-to-r border-none border-transparent hover:border-transparent  from-green-400 to-blue-500  text-white ...">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li tabIndex={0}>
          <a className="justify-between">
            Mine sites
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 55.751 55.751"><path d="M31.836,43.006c0.282-0.281,0.518-0.59,0.725-0.912L54.17,20.485c2.107-2.109,2.109-5.528,0-7.638   c-2.109-2.107-5.527-2.109-7.638,0l-18.608,18.61L9.217,12.753c-2.109-2.108-5.527-2.109-7.637,0   C0.527,13.809-0.002,15.19,0,16.571c-0.002,1.382,0.527,2.764,1.582,3.816l21.703,21.706c0.207,0.323,0.445,0.631,0.729,0.913   c1.078,1.078,2.496,1.597,3.91,1.572C29.336,44.604,30.758,44.084,31.836,43.006z"/></svg>
          </a>
          <ul className="p-2 bg-gradient-to-r border-none border-transparent hover:border-transparent  from-green-400 to-blue-500  text-white ...">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Videos</a></li>
        <li><a>Downloads</a></li>
    </ul>
  </div>
  
  <div className="navbar-end space-x-2 font-bold font-nunito">
  <SearchIcon className="hidden h-6 w-6 md:inline" />
  <a 
         className="btn bg-transparent hover:bg-transparent border-none border-transparent hover:border-transparent  ...">
            <p className="text-transparent">
                ...
                </p>
                Sign in
                <p 
                className="text-transparent">
                    ...
                    </p>
                    </a>
    <a className="btn bg-gradient-to-r border-none border-transparent hover:border-transparent  from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..."><p className="text-transparent">........</p>Donate<p className="text-transparent">........</p></a>
  </div>
</div>
</div>

</header>

)}

export default HeaderNav