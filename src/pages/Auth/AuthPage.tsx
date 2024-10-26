import { Outlet } from "react-router-dom"


const AuthPage = () => {
  return (
    <div className="min-h-screen px-5 py-2 lg:flex ">
        <div className="grow lg:max-w-[60vw]">
            <Outlet/>
        </div>
        <div className="hidden lg:block bg-amber-500 grow max-w-[40vw]">
            Images
        </div>
    </div>
)
}

export default AuthPage