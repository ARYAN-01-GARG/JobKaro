import React, { useCallback } from "react"

interface ModalProps{
  onSubmit: () => void;
  showBackButton : boolean;
  title : string;
  body : React.ReactElement;
  footer : React.ReactElement;
  actionLabel : string;
  disable : boolean;


}


const Modal:React.FC<ModalProps> = ({
  showBackButton,
  onSubmit,
  title,
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
    <div className="p-1 ">
      <div>
        <div>
          Logo
        </div>
        <div className={showBackButton ? 'block' : 'hidden' }>
          Button
        </div>
      </div>
      <div>
        <div>
          {title}
        </div>
        <div>
          <div>
            {body}
          </div>
          <div onClick={handleSubmit}>
            {actionLabel}
          </div>
        </div>
        <div>
          {footer}
        </div>
      </div>
    </div>
  )
}

export default Modal