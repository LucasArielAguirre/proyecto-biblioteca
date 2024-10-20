import Spline from '@splinetool/react-spline';
import { Link } from "react-router-dom";


export default function App() {
  return (

    <section className='w-screen h-screen overflow-hidden'>
        <div className='abosolute w-full h-[400px] md:w-full md:h-screen justify-center items-center'>
         <Spline scene="https://prod.spline.design/kbY37OsTMo3GuavB/scene.splinecode" />
        </div>
 
        <div className='flex absolute w-full h-[300px] bottom-0 right-0 m-auto md:right-0 md:w-[440px] md:h-screen bg-[--var-bgcolor] items-center justify-center overflow-hidden'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-4xl font-texth1 text-black underline decoration-[--var-color-text-red] mb-10'>
                    Iniciar Sesión
                </h1>
                <form className='flex flex-col gap-4 w-full'>
                    <input type='text' placeholder='Usuario' className='rounded-lg border border-gray-300 p-2 w-full' />
                    <input type='password' placeholder='Contraseña' className='rounded-lg border border-gray-300 p-2 w-full' />
                    <Link to="/" className='flex justify-center items-center'>
                    <button className='rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-700 transition-all duration-300'>
                        Iniciar Sesión
                    </button>
                    </Link>
                </form>
            </div>
            </div>
    </section>


  );
}
