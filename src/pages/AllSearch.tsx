import { useState } from 'react';
import { TextField, Autocomplete, Box, Typography } from '@mui/material';
import { Libros, BookInfo } from '../content/Libros';
import { Link } from 'react-router-dom'; 
import Popular from '../components/Popular'; 

     

const AllSearch = () => {
  const [selectedBook, setSelectedBook] = useState<BookInfo | null>(null);
 

  return (
    <div className='flex flex-col items-center justify-center min-h-screen max-h-full'> 
      <section className="bg-black w-full flex justify-center items-center py-20 min-h-72"> 
        <div className="bg-white p-4 rounded-md shadow-lg w-96">
          <Autocomplete
            options={Libros}
            getOptionLabel={(option: BookInfo) => option.title}
            renderInput={(params) => (
              <TextField {...params} label="Buscar libros..." variant="outlined" color="secondary" />
            )}
            onChange={(_, newValue) => {
              setSelectedBook(newValue);
            }}
            className="w-full"
          />
  
          {selectedBook && (
            <Box mt={4} p={2} className="bg-gray-100 rounded-lg flex flex-col" >
              <Typography variant="h6" className='text-center text-xl font-texth1 uppercase'>{selectedBook.title}</Typography>
              <img src={selectedBook.img} alt={selectedBook.title} className="w-40 h-50 rounded-lg flex justify-items-center m-auto" />
              <Typography variant="subtitle1"> <span className='font-texth1 text-[--var-color-text-blue] underline'>Autor</span>: {selectedBook.author}</Typography>
              <Typography variant="body2" className='text-gray-800 ' ><span className='font-texth1 text-[--var-color-text-blue] underline'>Descripción</span>: {selectedBook.description}</Typography>
              <Typography variant="body2">⏳ Tiempo de lectura <span className='text-[--var-color-text-red]'>{selectedBook.readTime} minutos</span></Typography>
              <Box mt={2}>
                <Link to={`/libro/${encodeURIComponent(selectedBook.title)}`} className='bg-black hover:bg-black/90 rounded-lg py-1 px-2 text-lg text-white font-texth1 flex justify-center align-middle'>Ver información</Link>
              </Box>
            </Box>
          )}
        </div>
      </section>
      
      <section className="md:h-full bg-[--var-bgcolor] flex flex-col items-center mt-4 px-4">
        <Popular />
      </section>
      
    </div>
  );
};

export default AllSearch;
