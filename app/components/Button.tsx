import React from 'react'
import { HiOutlineArrowSmRight } from 'react-icons/hi';

interface ButtonProps {
    title: string;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ title }) => {
  return (
    <div className='p-3 bg-secondary buttonContainer'>
        <button className='py-5 px-7 flex items-center gap-3 text-black font-medium'>
            {title}
            <span>
                <HiOutlineArrowSmRight />
            </span>
        </button>
    </div>
  )
}

export default Button;