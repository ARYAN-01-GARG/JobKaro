import { Link } from "react-router-dom";
import Header from "../components/Header/Header";

const LandingPage = () => {
  return (
    <div>
        <Header/>
        <main className="my-4 mx-3">
            <Link to={'/auth/register'} className="bg-black text-white hover:opacity-80 rounded-lg p-2">Sign up</Link>
        </main>
        <footer>
            <p>Footer</p>
        </footer>
    </div>
  )
}

export default LandingPage