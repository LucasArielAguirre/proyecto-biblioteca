
import { Libros } from '../content/Libros';
import Star from './icons/Star';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Others = () => {
  return (
    <section className="h-screen bg-[#0c0c0c] flex flex-col items-center pt-4 mt-20">
    <h1
      className="flex text-center text-4xl font-texth1 text-white underline decoration-[--var-color-text-red] my-4"
      data-aos="zoom-in-up"
    >
      OTROS LIBROS <Star/>
    </h1>

    <div className="w-[70%] mx-auto h-full">
      <div className="grid grid-cols-4 grid-rows-4 gap-4 auto-rows-[minmax(100px,_1fr)] h-full">
        {Libros.map((book, index) => {
          const { title, img, readTime } = book;

          const cardSizeClass =
            index % 5 === 0
              ? 'col-span-2 row-span-2'
              : index % 3 === 0
              ? 'col-span-2 row-span-1'
              : 'col-span-1 row-span-1';

          return (
            <a
              key={index}
              href={`/libro/${encodeURIComponent(title)}`}
              className={`group rounded-xl overflow-hidden transition-transform hover:z-10 hover:scale-105 shadow-lg ${cardSizeClass}`}
              data-aos="zoom-in"
            >
              <article className="relative w-full h-full">
                <img
                  src={`${img}`}
                  alt={title}
                  className="object-cover w-full h-full transition-opacity duration-300 saturate-150 group-hover:opacity-75 bg-cover bg-center"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h2 className="md:text-xl text-xs font-bold text-white text-center uppercase">{title}</h2>
                  <h2 className="md:text-xs text-xs font-bold text-[--var-color-text-blue] text-center">
                    ⏳ Lectura en {readTime} minutos.
                  </h2>
                </div>
              </article>
            </a>
          );
        })}
      </div>
    </div>
  </section>
  
  )
}
AOS.init();
export default Others