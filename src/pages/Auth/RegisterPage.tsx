import { useState } from "react";
import Modal from "../../components/auth/Modal"
import Input from "../../components/Input"
import Button from "../../components/Button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const RegisterPage = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const body = (
    <form className="flex flex-col gap-5">
      <Input label='Name' value={name} onChange={setName} errors='' />
      <Input label='Email' value={email} onChange={setEmail} type="email" errors=""/>
      <Input label='Password' value={password} onChange={setPassword} type="password" errors=""/>
    </form>
  )

  const footer = (
    <div>
        <Button label="Continue with Google" onClick={()=>{}} disabled={false} icon={FcGoogle}/>
        <Button label="Continue with Github" onClick={()=>{}} disabled={false} icon={FaGithub}/>
        <div className="text-center py-5">
          Already have an account? <Link to={'/auth/login'} className="hover:tet-black hover:underline text-neutral-700"> Login</Link>
        </div>
    </div>
  )




  return (
    <div>
      <Modal
        title='Create an account'
        subTitle='Welcome to Our website, Create an account to get started'
        body={body}
        footer ={footer}
        onSubmit={()=>{}}
        actionLabel="Create account"
        disable={false}
        showBackButton
      />
    </div>
  )
}

export default RegisterPage;