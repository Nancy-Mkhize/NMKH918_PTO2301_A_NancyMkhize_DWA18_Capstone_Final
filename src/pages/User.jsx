import NavBar from './components/Navbar'
import Hero from './components/Hero'

export default function User() {
  const handleSignOut = () =>{
//Handle Log Out
  }
  return (
    <>
      <NavBar />
      <Hero />
      <button onClick={handleSignOut}
      className='bg-dark-gray text-light-gray'>Sign Out</button>
    </>
    )
  }