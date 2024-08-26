import React from 'react'

const Modal = ({ isOpen, setIsOpen, children }) => {
    return (
        <div onClick={(e) => {
            setIsOpen(false)
        }} className={`w-full custom_scroll flex items-center justify-center h-[100vh] backdrop-blur-[1px] bg-black fixed top-0 left-0 bottom-0 right-0 z-[100] bg-opacity-20 ${isOpen ? 'scale-100' : 'scale-0'} `}>
            <div onClick={(e) => {
                e.stopPropagation();
            }} >
                <div className='rounded '>
                    <div className=' h-[calc(100vh-100px)]'>

                        {
                            children
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Modal