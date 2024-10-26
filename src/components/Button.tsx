import React from 'react'
import { IconType } from 'react-icons';

interface ButtonProps{
    label : string;
    onClick : (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled? : boolean;
    small? : boolean;
    icon : IconType;
}

const Button:React.FC<ButtonProps> = ({
    label,
    onClick,
    disabled = false,
    icon: Icon,
    small = false
}) => {
  return (
    <button
        onClick={onClick}
        disabled={disabled}
        className={`
            mt-2
            relative
            disabled:opacity-70
            disabled:cursor-not-allowed
            rounded-lg
            hover:opacity-80
            transition
            w-full
            bg-white
            border-black
            text-black
            ${small ? 'py-1' : 'py-3'}
            ${small ? 'text-small' : 'text-md'}
            ${small ? 'font-light' : 'font-semibold'}
            ${small ? 'border-[1px]' : 'border-2'}
        `}>
            {Icon && (
                <Icon className="absolute left-4 top-3 " size={24} />
            )}
            {label}
    </button>
  )
}

export default Button