import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='h-[3rem] bg-blue-300 flex justify-between p-2 items-center'>
            <div>
                <h1 className=' text-lg font-bold'><Link to={'/'}>Logo</Link></h1>
            </div>
            <div>
                <ul className='flex justify-between w-80'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/services'>Services</Link></li>
                    <li><Link to='/democard'>Card</Link></li>
                    <li><Link to='/products'>Products</Link></li>
                </ul>
            </div>
            <div className='flex justify-between gap-2'>
                <button className='border-2 border-black border-solid rounded-md pr-2 pl-2'>
                    <Link to={'/login'}>Login</Link>
                </button>
                <button className='border-2 border-black border-solid rounded-md pr-2 pl-2'>
                    <Link to={'/register'}>Register</Link>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
