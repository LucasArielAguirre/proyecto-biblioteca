import { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Libros as initialLibros } from '../content/Libros';
import { Utiles as initialUtiles } from '../content/Utiles';
import NavbarAdmin from '../components/NavbarAdmin';
import { motion } from 'framer-motion';

const Estados = () => {
  // Estados para Libros y Utiles
  const [libros, setLibros] = useState(initialLibros);
  const [utiles, setUtiles] = useState(initialUtiles);

  // Función para renderizar disponibilidad en ambas tablas
  const renderAvailability = (rowData: { disponible: boolean }) => {
    const disponible = rowData.disponible;
    return (
      <div className='flex flex-row'>
        <h2 className={`rounded py-2 px-4 text-sm ${disponible ? 'bg-green-300 text-black' : 'bg-red-300 text-black'}`}>
          {disponible ? 'Disponible' : 'Reservado'}
        </h2>
        <div className='relative flex h-3 w-3 -left-1 -top-1'>
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className={`relative inline-flex rounded-full h-3 w-3 ${disponible ? 'bg-green-500' : 'bg-red-500'}`}></span>
        </div>
      </div>
    );
  };

  // Renderizador de imagen para ambas tablas
  const renderImage = (rowData: { img: string }) => {
    return <img src={rowData.img} style={{ width: '70px' }} />;
  };

  // Funciones para cambiar la disponibilidad de Libros y Utiles
  const handleChangeAvailabilityLibros = (rowData: { title: string }) => {
    setLibros(prevLibros =>
      prevLibros.map(libro =>
        libro.title === rowData.title ? { ...libro, disponible: !libro.disponible } : libro
      )
    );
  };

  const handleChangeAvailabilityUtiles = (rowData: { title: string }) => {
    setUtiles(prevUtiles =>
      prevUtiles.map(util =>
        util.title === rowData.title ? { ...util, disponible: !util.disponible } : util
      )
    );
  };


  const renderChangeButtonLibros = (rowData: { title: string }) => {
    return (
      <motion.button
        whileTap={{
          scale: 0.9,
          backgroundColor:'#e3c5fd', 
        }}
        onClick={() => handleChangeAvailabilityLibros(rowData)}
        className='bg-blue-300 text-black px-4 py-2 rounded'
      >
        Cambiar disponibilidad
      </motion.button>
    );
  };

  const renderChangeButtonUtiles = (rowData: { title: string }) => {
    return (
      <motion.button
        whileTap={{
          scale: 0.9,
          backgroundColor:'#e3c5fd', 
        }}
        onClick={() => handleChangeAvailabilityUtiles(rowData)}
        className='bg-blue-300 text-black px-4 py-2 rounded'
      >
        Cambiar disponibilidad
      </motion.button>
    );
  };

 
  const handleCantidadChange = (rowData: { title: string }, delta: number) => {
    setUtiles(prevUtiles =>
      prevUtiles.map(util =>
        util.title === rowData.title ? { ...util, cantidad: util.cantidad + delta } : util
      )
    );
  };


  const renderCantidadButtons = (rowData: { title: string }) => {
    return (
      <div className='flex gap-2'>
        <motion.button
          whileTap={{
            scale: 0.9,
            backgroundColor: '#d1d5db',
          }}
          onClick={() => handleCantidadChange(rowData, 1)}
          className='bg-green-300 text-black px-2 py-1 rounded'
        >
          +
        </motion.button>
        <motion.button
          whileTap={{
            scale: 0.9,
            backgroundColor: '#d1d5db',
          }}
          onClick={() => handleCantidadChange(rowData, -1)}
          className='bg-red-300 text-black px-2 py-1 rounded'
        >
          -
        </motion.button>
      </div>
    );
  };

  return (
    <main className='w-full h-screen bg-black flex flex-col items-center justify-start'>
      <div className='w-full top-0'>
        <NavbarAdmin />
      </div>

      <section className='w-full bg-black mt-20 b-0'> 
        <div className='text-white font-texth1'>
          <h1 className='text-4xl uppercase underline decoration-fuchsia-900 text-center m-7'>Disponibilidad de Libros</h1>
        </div>
        <div className='items-center justify-center md:mx-40 mx-4'>
          <DataTable value={libros} tableStyle={{  minWidth: '60rem', minHeight: '500px'  }} className='bg-black border text-fuchsia-500'>
            <Column field="title" header="TÍTULO" className='border-b border-t border-white mb-4 text-white uppercase'></Column>
            <Column header="IMAGEN" body={renderImage} className='border-b border-t border-white mb-4'></Column>
            <Column header="DISPONIBLIDAD" body={renderAvailability} className='border-b border-t border-white mb-4'></Column>
            <Column header="CAMBIAR DISPONIBLIDAD" body={renderChangeButtonLibros} className='border-b border-t mb-4'></Column>
          </DataTable>
        </div>
      </section>

      <section className='w-full bg-black'>
        <div className='text-white font-texth1'>
          <h1 className='text-4xl uppercase underline decoration-fuchsia-900 text-center m-7'>Disponibilidad de Útiles</h1>
        </div>
        <div className='items-center justify-center md:mx-40 mx-4'>
          <DataTable value={utiles} tableStyle={{ minWidth: '60rem', minHeight: '500px'}} className='bg-black border text-fuchsia-500'>
            <Column field="title" header="NOMBRE" className='border-b border-t border-white mb-4 text-white uppercase'></Column>
            <Column header="IMAGEN" body={renderImage} className='border-b border-t border-white mb-4'></Column>
            <Column field="cantidad" header="CANTIDAD" className='border-b border-t border-white mb-4 text-white text-center'></Column>
            <Column header="DISPONIBILIDAD" body={renderAvailability} className='border-b border-t border-white mb-4'></Column>
            <Column header="CAMBIAR DISPONIBILIDAD" body={renderChangeButtonUtiles} className='border-b border-t mb-4'></Column>
            <Column header="MODIFICAR CANTIDAD" body={renderCantidadButtons} className='border-b border-t mb-4'></Column>
          </DataTable>
        </div>
      </section>
    </main>
  );
};

export default Estados;
