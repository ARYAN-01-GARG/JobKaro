import React, { useCallback } from "react"
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

interface ModalProps{
  onSubmit: () => void;
  showBackButton : boolean;
  title : string;
  subTitle : string;
  body : React.ReactElement;
  footer : React.ReactElement;
  actionLabel : string;
  disable : boolean;


}


const Modal:React.FC<ModalProps> = ({
  showBackButton,
  onSubmit,
  title,
  subTitle,
  body,
  footer,
  actionLabel,
  disable
}) => {


  const handleSubmit = useCallback(() => {
    if(disable){
      return;
    }
    onSubmit();
  },[onSubmit, disable]);

  return (
    <div className="p-1 flex flex-col justify-start">
      <div className="p-2 flex justify-between items-center">
        <div className="font-semibold text-xl flex items-center">
          <span className="px-3 text-3xl font-bold">JK</span>JobKaro
        </div>
        <Link to={'/'} className={`
          flex
          justify-center
          items-center
          gap-1
          hover:opacity-70
          font-semibold
          cursor-pointer
          ${showBackButton ? 'block' : 'hidden'}
        `}>
          <BiArrowBack size={15}/>Go Back
        </Link>
      </div>
      <div className="p-1 flex flex-col mt-10 justify-center items-center">
        <div className="p-1 flex flex-col justify-center items-center gap-1 pb-3 mb-2 w-[60%]">
          <h1 className="text-3xl font-semibold text-neutral-800">{title}</h1>
          <h3 className="text-md text-neutral-500 ">{subTitle}</h3>
        </div>
        <div className="py-2 w-full flex flex-col justify-center items-center">
          <div className="
            lg:w-[70%]
            w-[80%]
          ">
            {body}
          </div>
          <button
            onClick={handleSubmit}
            disabled={disable}
            className={`
                my-5
              bg-black
              text-white
                p-3
                text-lg
                rounded-lg
                lg:w-[70%]
                w-[80%]
                text-center
                ${disable ? 'cursor-not-allowed' : 'cursor-pointer'}
                hover:opacity-80
              `} >
            {actionLabel}
          </button>
        </div>
        <div className="py-4 relative border-t border-neutral-400 lg:w-[70%] w-[80%] text-center">
          {footer}
          <div className="absolute top-[-15px] bg-white text-neutral-400 px-[1px] left-[48%]">
            or
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal