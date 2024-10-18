import { motion } from "framer-motion"


const Bienvenida = () => {


  return (
    <section className="bg-[--var-bgcolor] pt-20 md:pt-0 flex flex-col items-center justify-center h-screen md:h-screen px-4 md:px-0">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-screen-lg">
     
      <div className="spangsap flex flex-col items-center justify-center text-center md:text-left p-4">
        <motion.h1 
        initial={{ opacity: 0.2, x: -70 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease:"easeIn"  , duration: 0.5 }}
        className="text-4xl md:text-7xl font-texth1 text-[--var-color-text] first-letter:text-[--var-color-text-red] first-letter:text-8xl ">
          Bienvenido A 
          <span className="block md:inline text-2xl md:text-3xl font-texth1 ml-2 text-[--var-color-text] let">
            la biblioteca </span>
            <span className="spangsap text-lg md:text-xl underline decoration-[--var-color-text-red] animate-pulse ">IES N°9-012
          </span>
        </motion.h1>
      </div>

      <motion.div 
      initial={{ rotate: -60, opacity: 0 }}
      animate={{ rotate: 12, opacity: 1 }}
      transition={{ ease:"easeIn"  , duration: 0.5 }}
      
      className="flex flex-col items-center justify-center" data-aos="fade-up-left">
        <img src="/biblioteca.png" alt="Book" className="w-2/3 md:w-full max-w-sm  shadow-lg shadow-red-700 saturate-150 " />
      </motion.div>
    </div>
  </section>
  )
}

export default Bienvenida