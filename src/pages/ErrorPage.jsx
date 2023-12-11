import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <section className="bg-gradient-to-r from-rich-black to-dark-gray w-screen h-screen overflow-y-hidden flex flex-col justify-center items-center text-white">
      <div className="w-[80%] aspect-square
      bg-[url('https://pixabay.com/get/gc114bd017c50581aa5ccc083069928282655fe51d5058ae66da76bdcff26c94d44610b89601d4a89c2351f1dd2ca22b4501abf92b28c880adaec3738c8f3127f_1280.png')] bg-cover border-solid border-2 border-mint-cream ">
      </div>
      <h1 className="text-[3rem] px-4">Oh no!</h1>
      <p className="px-4">It looks like you are alone here. The page you are looking for may have been moved or deleted.</p>
      <button className="border-solid border-2 border-black">Go to Home</button>
    </section>
  )
  }