import Modal from "../../components/Header/auth/Modal"

const RegisterPage = () => {
  return (
    <div>
      <Modal
        title='Register'
        body={(
          <>
            hello
          </>
        )}
        footer ={
          <>Footer</>
        }
        onSubmit={()=>{}}
        actionLabel="continue"
        disable={false}
        showBackButton
      />
    </div>
  )
}

export default RegisterPage