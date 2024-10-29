export interface UtilesInfo {
    title: string;
    img: string;
    cantidad: number;
    disponible: boolean,
  }

  export const Utiles: UtilesInfo[] = [
    {
        title: "Mapa global",
        img: "/mapa.jpg",
        cantidad: 55,
        disponible: true,
      },
      {
        title: "Globo terraqueo",
        img: "/globo.jpg",
        cantidad: 2,
        disponible: false,
      },
      {
        title: "Escuadra",
        img: "/escuadra.jpg",
        cantidad: 25,
        disponible: true,
      },
      {
        title: "Regla de 30cm",
        img: "/regla.webp",
        cantidad: 35,
        disponible: true,
        
      },

];