import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Libros } from '../content/Libros';
import { motion } from "framer-motion"
import LineMdArrowSmallLeft from './icons/ArrowLeft'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const BookDetailsAdmin: React.FC = () => {
  const navigate = useNavigate();
  useGSAP(()=>{
    gsap.from('#imgbook', { opacity: 0, z:520, borderRadius:80, duration: 1.5 , ease: "power1.inOut" });
    gsap.from('#time', { opacity:0, x:120, ease: "power1.inOut", duration: 0.7 });
    gsap.from('#stragger', { opacity: 0, ease: "power1.inOut", duration: 0.7, stagger:0.1})
    
  },[])

  const { id } = useParams<{ id: string }>(); 
  const book = Libros.find(book => book.title === id); 
  
 
  const [isAvailable, setIsAvailable] = useState(book ? book.disponible : false); 

  if (!book) {
    return <h2 className="text-red-500 text-xl">Libro no encontrado</h2>;
  }


  const renderAvailability = (disponible: boolean) => {
    return (
      <div className='flex flex-row'>
        <h2 className={`rounded py-1 px-2 text-sm ${disponible ? 'bg-green-200' : 'bg-red-200'}`}>
          {disponible ? 'Disponible' : 'Reservado'}
        </h2>
        <div className='relative flex h-3 w-3 -left-1 -top-1'>
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className={`relative inline-flex rounded-full h-3 w-3 ${disponible ? 'bg-green-500' : 'bg-red-500'}`}></span>
        </div>
      </div>
    );
  };

  const handleReserve = () => {
    setIsAvailable(false); 
  };


  const handleReturn = () => {
    setIsAvailable(true); 
  };

  const handleGoBack = () => {
    navigate('/user/allsearchuser'); 
  };
  return (
    <div className="h-full bg-[--var-bgcolor] flex flex-col items-center pt-20 px-4"> 
    <button onClick={handleGoBack}>
    <span 
    className='text-sm items-center mb-3 flex flex-row px-2 py-1 transparent rounded-md border border-slate-300 hover:bg-slate-400'> 
        <LineMdArrowSmallLeft/>
        Volver
      </span></button>
      <div id="stragger" className='flex flex-col md:flex-row items-center md:items-start max-w-3xl mx-auto mb-6'>
        <img id='imgbook'
          src={`${book.img}`} 
          alt={book.title} 
          className="w-52 h-80 rounded-lg shadow-lg shadow-red-700 saturate-150 mr-4 mb-5 md:mb-0" 
        /> 
      
        <div className='flex flex-col justify-between'> {}
          <div>
            <div className='flex flex-row mb-2'>
              <h2 className="text-2xl font-texth1 text-[--var-color-text] leading-tight hover:underline mx-2 md:mx-0">{book.title}</h2>
              <div className="ml-2">
                {renderAvailability(isAvailable)}
              </div>
            </div>
            <p className="text-gray-700 text-sm max-w-md mx-2 md:mx-0">{book.resume}</p>
            <p id='time' className="text-gray-500 text-sm mt-2 mx-2 md:mx-0"> <b className="animate-pulse">⏳</b> Lectura en {book.readTime} minutos.</p>          
          </div>

        
          <div className="flex space-x-4 mt-4 items-center justify-center md:justify-start md:items-start">
            <motion.button 
              whileTap={{ scale: 2 }}
              onClick={handleReserve} 
              transition={{transition:"easeIn", duration: 0.5}}
              className={`bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-300 ${!isAvailable ? 'opacity-50 cursor-not-allowed' : ''}`} 
              disabled={!isAvailable} 
            >
              Reservar
            </motion.button >
          
            <motion.button 
            whileTap={{ scale: 2 }}
              onClick={handleReturn}
              className={`bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition duration-300 ${isAvailable ? 'opacity-50 cursor-not-allowed' : ''}`} 
              disabled={isAvailable}
            >
              Devolver
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsAdmin;
