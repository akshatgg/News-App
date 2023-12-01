import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Flag} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
function NavBar() {
  const [showCategories, setShowCategories] = useState(false);
  const [showCountry, setShowCountry] = useState(false);


  
  return (
    <div>
      <nav className="bg-gray-300 border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">FeedNews</span>
          </a>
          <button
            onClick={() => setShowCategories(!showCategories)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-gray-300 text-xl dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</Link>
              </li>
              <li>
                <Link
                  onClick={() => setShowCategories(!showCategories)}
                  to="/#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Categories &#9662;
                </Link>
                {showCategories && (
                  <ul className="absolute mt-2 space-y-2 bg-white p-2 rounded-md shadow-md">
                    <li>
                    <NavLink className={({ isActive }) => `${isActive ? 'text-orange-500' : 'text-gray-600'}`}
  >
                      <Link to="/" className="text-gray-800 hover:text-blue-700">General</Link>
                      </NavLink>
                    </li>
                    <li>
                    <NavLink className={({ isActive }) => `${isActive ? 'text-orange-500' : 'text-gray-600'}`}
  >
                     
                      <Link to="/health" className="text-gray-800 hover:text-blue-700">Health</Link>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink className={({ isActive }) => `${isActive ? 'text-orange-500' : 'text-gray-600'}`}
  >
                      <Link to="/science" className="text-gray-800 hover:text-blue-700">Science</Link>
                    </NavLink>
                    </li>
                    <li>
                      <Link to="/sports" className="text-gray-800 hover:text-blue-700">Sports</Link>
                    </li>
                    <li>
                      <Link to="/technology" className="text-gray-800 hover:text-blue-700">Technology</Link>
                    </li>
                  </ul>
                )}
              </li>



              <li className='z-10'>
                <Link
                  onClick={() => setShowCountry(!showCountry)}
                  to="/#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Country &#9662;
                </Link>
                {showCountry && (
                  
                  <ul className="absolute mt-2 space-y-2 bg-white p-2 rounded-md shadow-md">
                    
                    <li>
                    
                      <Link to="/au" className="text-gray-800 hover:text-blue-700"> <Flag name='au'/> Australia </Link>
                    </li>
                    <li>
                      <Link to="/at" className="text-gray-800 hover:text-blue-700">  <Flag name='at'/> Austria </Link>
                    </li>
                    <li>
                      <Link to="/ae" className="text-gray-800 hover:text-blue-700"><Flag name='ae'/> Argentina </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-gray-800 hover:text-blue-700"><Flag name='in'/> India </Link>
                    </li>
                    <li>
                      <Link to="/bg" className="text-gray-800 hover:text-blue-700"><Flag name='bg'/> Bulgaria </Link>
                    </li>
                  </ul>
                 
                )}
              </li>
              
              <li>
              <NavLink to="./service.js" className={({ isActive }) => `${isActive ? 'text-blue-600' : 'text-gray-900'}`}>
                {/* <Link to="./service.js" className=" {({ isActive }) => `${isActive ? 'text-orange-500' : 'text-gray-600'}`} block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</Link> */}
              Services
              </NavLink>
              </li>
              <li>
              <NavLink to="./service.js" className={({ isActive }) => `${isActive ? 'text-blue-600' : 'text-gray-900'}`}>
  {/* <Link to="/#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</Link> */}
                   Pricing
             </NavLink>
              </li>
              <li>
              <NavLink to="./service.js" className={({ isActive }) => `${isActive ? 'text-blue-600' : 'text-gray-900'}`}>
Contact
                {/* <Link to="/#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link> */}
             </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
