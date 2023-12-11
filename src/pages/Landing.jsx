import { Link } from "react-router-dom"

function Landing() {
  return (
    <section className="w-screen h-screen bg-white-smoke text-black flex flex-col justify-center items-center p-8 text-center">
      <h1 className="text-4xl p-4">
        The Curious<span className="font-bold">CAST</span>
      </h1>
      <p className="text-xl">
        Unlock your mind, Explore the world with The Curious <span>CAST</span> 
      </p>
      <div className="py-4 w-[70%] flex justify-between">
        <Link to={'/signup'} className="bg-platinum p-2 w-24 rounded-full active:animate-ping">Sign Up</Link>
        <Link to={'/signin'} className="bg-platinum p-2 w-24 rounded-full active:animate-ping">Sign In</Link>
      </div>
    </section>
  )
}

export default Landing
