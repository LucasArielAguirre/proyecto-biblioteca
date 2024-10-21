import Spline from '@splinetool/react-spline';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleLogin = () => {
  
      if (username === 'admin' && password === 'admin123') {
        localStorage.setItem('user', JSON.stringify({ role: 'admin' }));
        navigate('/admin');
      } else if (username === 'user' && password === 'user123') {
        localStorage.setItem('user', JSON.stringify({ role: 'user' }));
        navigate('/user');
      } else {
        alert('Credenciales inválidas');
      }
    };

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
                    <input 
                    type='text' 
                    placeholder='Nombre de usuario' 
                    value={username}  
                    onChange={(e) => setUsername(e.target.value)} 
                    className='rounded-lg border border-gray-300 p-2 w-full' />
                   
                    <input 
                    type='password' 
                    placeholder='Contraseña'
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    className='rounded-lg border border-gray-300 p-2 w-full' />

                    <button onClick={handleLogin} className='rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-700 transition-all duration-300'>
                        Iniciar Sesión
                    </button>
                    
                </form>
            </div>
            </div>
    </section>


  );
}
