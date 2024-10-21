import { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Libros as initialLibros } from '../content/Libros';
import NavbarAdmin from '../components/NavbarAdmin';

const Estados = () => {
  const [libros, setLibros] = useState(initialLibros);

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

  const renderImage = (rowData: { img: string }) => {
    return <img src={rowData.img} style={{ width: '70px' }} />;
  };


  const handleChangeAvailability = (rowData: { title: string }) => {
    setLibros(prevLibros =>
      prevLibros.map(libro =>
        libro.title === rowData.title ? { ...libro, disponible: !libro.disponible } : libro
      )
    );
  };
  const renderChangeButton = (rowData: { title: string }) => {
    return (
      <button
        onClick={() => handleChangeAvailability(rowData)}
        className='bg-blue-300 text-black px-4 py-2 rounded'
      >
        Cambiar
      </button>
    );
  };

  return (
 <main className='w-full h-screen bg-black flex flex-col items-center justify-center'>
  <div className='w-full top-0'>
     <NavbarAdmin/>
  </div>
    <section className='w-full h-screen bg-black mt-14'>
      <div className='text-white font-texth1'>
         <h1 className='text-4xl uppercase underline decoration-fuchsia-900 text-center m-7'>Tabla de disponibilidad</h1>
      </div>
     
      <div className=' items-center justify-center flex'>        
        <DataTable value={libros} tableStyle={{ minWidth: '60rem' }} className='bg-black border text-fuchsia-500'>
          <Column field="title" header="TÍTULO" className='border-b border-t border-white mb-4 '></Column>
          <Column header="IMAGEN" body={renderImage} className='border-b border-t border-white mb-4'></Column>
          <Column header="DISPONIBLIDAD" body={renderAvailability} className='border-b border-t border-white mb-4'></Column>
          <Column header="CAMBIAR DISPONIBLIDAD" body={renderChangeButton} className='border-b border-t mb-4'></Column>
        </DataTable>
      </div>
    </section>
    </main>
  );
};

export default Estados;