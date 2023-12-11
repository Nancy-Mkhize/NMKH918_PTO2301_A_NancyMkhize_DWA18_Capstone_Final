import SignUpForm from "./components/SignUpForm"
import logo from "../assets/curious-signIn.png"

const SignUp = () => {
  return (
    <section className="w-screen h-screen bg-white bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col justify-center items-center">
      <img src={logo} alt="podlogo logo" className="w-[40%] m-8" />
      <SignUpForm />
    </section>
  )
}

export default SignUp;
