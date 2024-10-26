import Modal from "../../components/Header/auth/Modal"

const RegisterPage = () => {

  const body = ( <div>
    hello
  </div>)




  return (
    <div>
      <Modal
        title='Create account'
        subTitle='Welcome to Our website'
        body={body}
        footer ={
          <>Footer</>
        }
        onSubmit={()=>{}}
        actionLabel="Create acount"
        disable={false}
        showBackButton
      />
    </div>
  )
}

export default RegisterPage