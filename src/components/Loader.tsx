import React from 'react'

function Loader() {
    return (
        <div className='fixed  top-0 right-0 left-0  flex-col   w-full h-screen  z-[9999] text-center flex items-center justify-center overflow-hidden
        text-slate-700 bg-dark
        '>
            <img className="w-10/12 md:w-8/12 h-auto  motion-safe:animate-pulse" src="/logo.png" />
            {/* <p className='p-3 text-2xl   '>Loading...</p> */}
        </div>
    )
}

export default Loader