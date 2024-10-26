import { useState } from "react";
import Modal from "../../components/auth/Modal"
import Input from "../../components/Input"
import Button from "../../components/Button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const body = (
    <form className="flex flex-col gap-5">
      <Input label='Email' value={email} onChange={setEmail} type="email" errors=""/>
      <Input label='Password' value={password} onChange={setPassword} type="password" errors=""/>
    </form>
  )

  const footer = (
    <div>
        <Button label="Continue with Google" onClick={()=>{}} disabled={false} icon={FcGoogle}/>
        <Button label="Continue with Github" onClick={()=>{}} disabled={false} icon={FaGithub}/>
        <div className="text-center py-5">
          Don't Have an Account? <Link to={'/auth/register'} className="hover:tet-black hover:underline text-neutral-700">Sign Up</Link>
        </div>
    </div>
  )




  return (
    <div>
      <Modal
        title='Welcome Back'
        subTitle='Welcome back to Our website, Login to get started'
        body={body}
        footer ={footer}
        onSubmit={()=>{}}
        actionLabel="Login"
        disable={false}
        showBackButton
      />
    </div>
  )
}

export default LoginPage