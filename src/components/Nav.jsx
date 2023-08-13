import React from 'react'
import '../styles/tw.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
  {/* component */}
  <header className="header sticky top-0 bg-white flex items-center justify-between px-8 py-02">
    {/* logo */}
    <h1 className="w-3/12">
      <Link to="/" className='font-black text-xl'>
        Concise.
      </Link>
    </h1>
    {/* navigation */}
    <nav className="nav font-medium text-lg">
      <ul className="flex items-center">
        <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 cursor-pointer active">
          <Link to="/summarize">Summarize</Link>
        </li>
        <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 cursor-pointer">
          <Link to="/how-it-works">How it works</Link>
        </li>
      </ul>
    </nav>
  </header>
</>
  )
}

export default Nav