import React from 'react'

const Loader = () => {
    return (
        <div className="fixed inset-0 flex z-[9999] items-center justify-center bg-black">
            <div className="h-12 w-12 rounded-full border-4 border-red-500 border-t-transparent animate-spin"></div>
        </div>
    )
}

export default Loader;