import { useState } from 'react';
import { TextField, Autocomplete, Box, Typography } from '@mui/material';
import { Utiles, UtilesInfo } from '../content/Utiles';
import { Link } from 'react-router-dom'; 
import Star from '../components/icons/Star';
import Aos from 'aos';
import 'aos/dist/aos.css';




const AllSearch = () => {
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

  const [selectedUtil, setSelectedUtil] = useState<UtilesInfo | null>(null);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen max-h-full'> 
      <section className="bg-black w-full flex justify-center items-center py-20 min-h-72"> 
        <div className="bg-white p-4 rounded-md shadow-lg w-96">
          <Autocomplete
            options={Utiles}
            getOptionLabel={(option: UtilesInfo) => option.title}
            renderInput={(params) => (
              <TextField {...params} label="Buscar utiles..." variant="outlined" color="secondary" />
            )}
            onChange={(_, newValue) => {
              setSelectedUtil(newValue);
            }}
            className="w-full"
          />
  
          {selectedUtil && (  
            <Box mt={4} p={2} className="bg-gray-100 rounded-lg flex flex-col" >
              <Typography variant="h6" className='text-center text-xl font-texth1 uppercase'>{selectedUtil.title}</Typography>
              <img src={selectedUtil.img} alt={selectedUtil.title} className="w-40 h-50 rounded-lg flex justify-items-center m-auto" />
              <Typography variant="h6">Cantidad: <span className='font-texth1 text-[--var-color-text-blue] text-xl'>{selectedUtil.cantidad}</span></Typography>
              <Box mt={2}>
                <Link to={`/utiles/${encodeURIComponent(selectedUtil.title)}`} className='bg-black hover:bg-black/90 rounded-lg py-1 px-2 text-lg text-white font-texth1 flex justify-center align-middle'>Ver información</Link>
              </Box>
            </Box>
          )}
        </div>
      </section>
      
      <section className="md:h-full bg-[--var-bgcolor] flex flex-col items-center mt-4 px-4">
      <div className="md:h-full bg-[--var-bgcolor] flex flex-col items-center pt-4">
      <h1 className="flex text-center pt-24 md:pt-0 text-4xl font-texth1 text-black underline decoration-[--var-color-text-red] mb-10">
        Utiles <Star/>
      </h1>

      <div className="px-4 mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-5 m-8">
          {Utiles.map((Util, index) => {
            const { title, img, cantidad, disponible } = Util;

            return (
              <div
                key={index}
                className="p-4 border rounded-lg bg-[#F8F9FA] shadow-[18px_18px_34px_#d3d4d5,-18px_-18px_34px_#ffffff] hover:z-10 hover:scale-105"
                 data-aos="flip-down"
              >
                <article className="flex flex-col items-center md:flex-row ">
                  <img
                    src={`${img}`}
                    alt={title}
                    className="md:mr-5 mr-0  rounded-lg shadow-lg shadow-red-700 saturate-150 mb-6 md:mb-0 h-[128px] w-[192px]"
                    
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
                    <span className="text-xs">
                      <b className="animate-pulse"></b> Hay una cantidad total de: {cantidad}.
                    </span>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </div>
      </section>
      
    </div>
  );
};
Aos.init();
export default AllSearch;
