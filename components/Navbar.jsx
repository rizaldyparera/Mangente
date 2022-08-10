import  { useState, useEffect } from 'react';
import Link from 'next/link';

function Navbar () {
    const [ isOpen, setIsOpen ] = useState(false);
       
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }
    function changeLang() {
        document.getElementById("myDroplang").classList.toggle("show")
    }
    useEffect(() => {      
        window.onclick = function(event) {
            if (!event.target.matches('.dropbtn')) {
              var dropdowns = document.getElementsByClassName("dropdown-content");
              var i;
              for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                  openDropdown.classList.remove('show');
                }
              }
            }
          }
        window.onclick = function(event) {
            if (!event.target.matches('.droplang')) {
              var dropdownslang = document.getElementsByClassName("dropdown-lang");
              var i;
              for (i = 0; i < dropdownslang.length; i++) {
                var openDroplang = dropdownslang[i];
                if (openDroplang.classList.contains('show')) {
                  openDroplang.classList.remove('show');
                }
              }
            }
          }
    })
    
    return (
        
        <>
            <div className="xl:container-sm fixed w-full mt-5 z-50">
                <div className="bg-white-color md:bg-transparent rounded-lg mx-4 md:mx-0 md:mt-0">               
                    <div className="flex flex-col lg:flex-row">
                        <div className="flex px-4 py-4 lg:py-0 lg:items-center xl:px-0 pb-[20px] lg:pb-0">                       
                            <div className="w-full">                      
                                <h1 className="text-secondary-color font-bold font-inter">MANGENTE</h1>
                            </div>
                            <div>
                                    <button onClick={() => setIsOpen(!isOpen)} className="text-primary-color focus:outline-none block lg:hidden">
                                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path className={!isOpen ? 'block' : 'hidden'} fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
                                    <path className={isOpen ? 'block' : 'hidden'} fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                    </button>
                            </div>
                        </div>
                        <div className={`${ isOpen ? 'block' : 'hidden'} lg:flex flex-col lg:flex-row w-full items-center`}>
                            <div className="flex flex-col lg:flex-row justify-center w-full pb-4 lg:pb-0">
                                <Link href="/">
                                    <a className="block text-primary-color active:text-secondary-color hover:text-secondary-color font-inter font-medium xl:text-base py-2 lg:py-0 px-4">Home</a>
                                </Link>
                                <div className="relative inline-block">
                                    <button onClick={myFunction} className="dropbtn block text-primary-color active:text-secondary-color hover:text-secondary-color font-inter font-medium xl:text-base py-2 lg:py-0 px-4">Explore<i class='relative top-[2px] bx bx-chevron-down'></i></button>
                                                                                            
                                    <div id="myDropdown" className="dropdown-content hidden lg:absolute min-w-[160px]
                                    z-50 px-4">
                                    <Link href="/explore">
                                        <a className="py-3 px-4 lg:px-0 block text-primary-color hover:text-secondary-color font-medium">Destinations</a>
                                    </Link> 
                                    <Link href="/explore">
                                        <a className="py-3 px-4 block lg:px-0 text-primary-color hover:text-secondary-color font-medium">Culinary</a>
                                    </Link> 
                                    <Link href="/heritage">
                                        <a className="py-3 px-4 block lg:px-0 text-primary-color hover:text-secondary-color font-medium">Heritage</a>
                                    </Link> 
                                    </div>
                                </div>
                                <Link href="#">
                                    <a className="block text-primary-color active:text-secondary-color hover:text-secondary-color font-inter font-medium xl:text-base py-2 lg:py-0 px-4">About Us</a>
                                </Link>
                                <Link href="#">
                                    <a className="block text-primary-color active:text-secondary-color hover:text-secondary-color font-inter font-medium xl:text-base py-2 lg:py-0 px-4">Contact Us</a>
                                </Link>
                            </div>
                            <div className="flex items-center z-50">
                                <div className='flex lg:flex-row flex-col lg:items-center'>                                  
                                    <div className="relative inline-block">
                                    <a onClick={changeLang} className="droplang cursor-pointer flex text-primary-color active:text-secondary-color font-inter font-medium xl:text-base px-4 items-center"><img src="/Assets/uk.png" className="pr-2" alt="Bahasa" />ENG
                                    <i class='bx bx-chevron-down'></i>
                                    </a>                                                                              
                                        <div id="myDroplang" className="dropdown-lang hidden lg:absolute min-w-[160px]
                                        z-50 px-4">
                                            <a href="#" className="flex items-center text-primary-color hover:text-secondary-color font-medium"><img src="/Assets/indonesia.png" className="py-4 pr-2" alt="Bahasa" />IND</a>
                                        </div>
                                    </div>
                                    <div className='px-4 py-4 lg:py-0 z-50'>                             
                                        <a href='#' className="flex bg-primary-color px-6 py-3 rounded-[10px] items-center hover:bg-secondary-color">                              
                                            <i className='bx bx-log-in text-[20px] text-white-color'></i>
                                            <p className="text-white-color font-semibold font-inter text-base pl-[10px]">Login</p>
                                        </a>
                                    </div>
                                </div>                       
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar;