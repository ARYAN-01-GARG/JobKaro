import React from "react";

interface InputProps{
    type? : string;
    label : string;
    value : string;
    onChange : (value : string) => void;
    disabled? : boolean;
    errors : string;
}



const Input:React.FC<InputProps> = ({
    type = 'text',
    label,
    value,
    onChange,
    disabled=false,
    errors
}) => {
  return (
    <div className="w-full relative">
        <input
            id={label}
            type={type}
            disabled={disabled}
            value={value}
            onChange={e => onChange(e.target.value)}
            placeholder=""
            className={`
                peer
                w-full
                p-3
                pt-4
                font-light
                bg-white
                border-2
                rounded-lg
                outline-none
                transition
                diasbled:opacity-70
                disabled:cursor-not-allowed
                ${errors ? 'border-red-500' : 'border-neutral-500'}
                ${errors ? 'focus:border-red-500' : 'focus:border-black'}
        `}
        />
        <label htmlFor={label} className={`
            absolute
            text-sm
            text-neutral-600
            duration-150
            transform
            -translate-y-7
            bg-white
            px-1
            top-4
            left-4
            z-10
            orgin-[0]
            peer-placeholder-shown:scale-110
            peer-placeholder-shown:translate-y-0
            peer-focus:-translate-y-7
            ${errors ? 'text-red-500' : 'text-zinc-500'}
            ${errors ? 'peer-focus:text-red-500' : 'peer-focus:text-black'}`}>
            {label}
        </label>
        <div>
            {errors && <span className="text-red-500 text-sm pl-2">{errors}</span>}
        </div>
    </div>
  )
}

export default Input