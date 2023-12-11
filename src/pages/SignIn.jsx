import SignInForm from "../components/SignInForm"
import logo from '../assets/curious-signIn.png'

function SignIn() {
  return (
    <section className="w-screen h-screen bg-white bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col justify-center items-center">
      <img src={logo} alt="podlogo logo" className="w-[40%] m-8" />
      <SignInForm/>
    </section>
  )
}

export default SignIn