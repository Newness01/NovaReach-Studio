import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    //show hide button functionality

    useEffect(()=>{
        const toggleVisibilty =()=>{
            if(window.scrollY > 300) setIsVisible(true);
            else setIsVisible(false)
        };

        window.addEventListener('scroll', toggleVisibilty);
        return()=> window.removeEventListener('scroll', toggleVisibilty);
    }, [])

    //scroll to top functionality
    const ScrollToTop = () => {
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    }
  return (
    <div className='fixed bottom-4 animate-pulse right-4'>
        
        {isVisible && (
            <button onClick={ScrollToTop} className='bg-[#0c3a80] cursor-pointer text-white rounded-full w-12 h-12 flex items-center
        justify-center focus:outline-none'>
             <FaArrowUp/>
        </button>
        )}
       
    </div>
  )
}

export default ScrollToTop