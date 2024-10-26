import React, { useCallback } from "react"

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
        <div className="font-semibold text-2xl ">
          JobKaro
        </div>
        <div className={`
          hover:opacity-70
          cursor-pointer
          ${showBackButton ? 'block' : 'hidden'}
        `}>
          Go Back
        </div>
      </div>
      <div className="p-1 flex flex-col mt-10 justify-center items-center">
        <div className="p-1 flex flex-col justify-center items-center gap-3">
          <h1 className="text-3xl font-semibold text-neutral-800">{title}</h1>
          <h3 className="text-md text-neutral-500 font-semibold ">{subTitle}</h3>
        </div>
        <div className="py-2 w-full flex flex-col justify-center items-center">
          <div>
            {body}
          </div>
          <div onClick={handleSubmit} className="bg-black text-white p-2 rounded-lg lg:w-[50%] w-[80%] text-center" >
            {actionLabel}
          </div>
        </div>
        <div className="my-2 py-2 relative border-t border-neutral-400 lg:w-[50%] w-[80%] text-center">
          {footer}
          <div className="absolute top-[-13px] bg-white text-neutral-400 px-[1px] left-[48%]">
            OR
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal