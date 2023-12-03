import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Flag} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
function NavBar() {
  const [showCategories, setShowCategories] = useState(false);
  const [showCountry, setShowCountry] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const[country,setcountry]=useState(" ");
  const handleCountryClick = () => {
    setShowCountry(!showCountry);
    setShowCategories(false);
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setShowCategories(!showCategories);
  };

  
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
           
           
            <li className='z-10' style={{ position: 'relative' }}>
        <Link
          onClick={handleCountryClick}
          to="/#"
          className="block py-8 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          {selectedCountry ? selectedCountry : 'Country'} &#9662;
        </Link>
        {showCountry && (
          <ul className="absolute mt-2 space-y-2 bg-white p-2 rounded-md shadow-md" style={{ top: '100%', left: selectedCountry ? 0 : '100%' }}>
            <li>
              <Link to="/au" onClick={() => {handleCountrySelect('Australia');setcountry("au")}} className="text-gray-800 hover:text-blue-700 flex"><Flag name='au'  />  Australia</Link>
            </li>
            <li>
              <Link to="/at" onClick={() =>{ handleCountrySelect('Austria');setcountry("at")}} className="text-gray-800 hover:text-blue-700 flex"><Flag name='at' /> Austria</Link>
            </li>
            <li>
              <Link to="/ae" onClick={() =>{ handleCountrySelect('Argentina');setcountry("ae")}} className="text-gray-800 hover:text-blue-700 flex"><Flag name='ae' /> Argentina</Link>
            </li>
            <li>
              <Link to="/in" onClick={() =>{ handleCountrySelect('India');setcountry("in")}} className="text-gray-800 hover:text-blue-700 flex"><Flag name='in' /> India</Link>
            </li>
            <li>
              <Link to="/bg" onClick={() =>{ handleCountrySelect('Bulgaria');setcountry("bg")}} className="text-gray-800 hover:text-blue-700 flex"><Flag name='bg' /> Bulgaria</Link>
            </li>
            {/* Add more countries as needed */}
          </ul>
        )}
        {showCategories && (
         <ul className="absolute mt-2 space-y-2 bg-white p-2 rounded-md shadow-md" style={{ top: '100%', left: '110%' }}>
         <li>
           <NavLink className={({ isActive }) => `${isActive ? 'text-orange-500' : 'text-gray-600'}`} to={`/${country}`}>
             General
           </NavLink>
         </li>
         <li>
           <NavLink className={({ isActive }) => `${isActive ? 'text-orange-500' : 'text-gray-600'}`} to={`/${country}/health`}>
             Health
           </NavLink>
         </li>
         <li>
           <NavLink className={({ isActive }) => `${isActive ? 'text-orange-500' : 'text-gray-600'}`} to={`/${country}/science`}>
             Science
           </NavLink>
         </li>
         <li>
           <NavLink className={({ isActive }) => `${isActive ? 'text-orange-500' : 'text-gray-600'}`} to={`/${country}/sports`}>
             Sports
           </NavLink>
         </li>
         <li>
           <NavLink className={({ isActive }) => `${isActive ? 'text-orange-500' : 'text-gray-600'}`} to={`/${country}/technology`}>
             Technology
           </NavLink>
         </li>
       </ul>
        )}
      </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
