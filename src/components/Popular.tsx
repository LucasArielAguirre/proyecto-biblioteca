
import React from 'react';
import Star from './icons/Star';
import { Link } from 'react-router-dom'; 
import { Libros } from '../content/Libros';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Books: React.FC = () => {

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

  return (
    <section className="md:h-full bg-[--var-bgcolor] flex flex-col items-center pt-4">
      <h1 className="flex text-center pt-24 md:pt-0 text-4xl font-texth1 text-black underline decoration-[--var-color-text-red] mb-10">
        Libros <Star />
      </h1>

      <div className="px-4 mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-5 m-8">
          {Libros.map((book, index) => {
            const { title, img, readTime, description, disponible } = book;

            return (
              <Link
                key={index}
                to={`/libro/${title}`}
                className="p-4 border rounded-lg bg-[#F8F9FA] shadow-[18px_18px_34px_#d3d4d5,-18px_-18px_34px_#ffffff] hover:z-10 hover:scale-105"
                 data-aos="flip-down"
              >
                <article className="flex flex-col items-center md:flex-row ">
                  <img
                    src={`${img}`}
                    alt={title}
                    className="md:mr-5 mr-0 w-48 rounded-lg shadow-lg shadow-red-700 saturate-150 mb-6 md:mb-0"
                    
                  />
                  <div className="flex flex-col justify-center ml-2">
                    <div className='flex flex-row gap'>
                      <h2 className="mb-2  text-xl font-texth1 text-[--var-color-text] leading-tight hover:underline">
                        {title}
                      </h2>
                      <div className="ml-2">
                        {renderAvailability(disponible)}
                      </div>
                    </div>
                    <p className="mb-4 text-gray-700 max-w-xs text-xs md:text-base">
                      {description}
                    </p>
                    <span className="text-xs">
                      <b className="animate-pulse">⏳</b> Lectura en {readTime} minutos.
                    </span>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
Aos.init();
export default Books;
