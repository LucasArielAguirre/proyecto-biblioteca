export interface BookInfo {
    title: string;
    author: string;
    img: string;
    readTime: number;
    disponible: boolean,
    description: string;
    resume: string;
    buy: {
      argentina: string;
      usa: string;
    };
  }
  
  export const Libros: BookInfo[] = [
    {
      title: "Coche negro",
      author: "Javier Cervantes",
      img: "/coche-negro.jpg",
      readTime: 275,
      disponible: true,
      description: "Valeria es seguida por un misterioso coche negro, revelando secretos escalofriantes en una ciudad marcada por desapariciones inquietantes.",
      resume:"Es una inquietante novela que sigue la vida de Valeria, una periodista que se muda a una ciudad aparentemente tranquila, pero donde las sombras parecen tener vida propia. Después de una serie de incidentes extraños, Valeria comienza a notar un misterioso coche negro que la sigue a todas partes. Mientras investiga la historia de la ciudad, descubre que el vehículo está vinculado a una serie de desapariciones nunca resueltas. Cada noche, las pesadillas se intensifican, revelando visiones de personas que han desaparecido y un oscuro secreto que conecta a todos los involucrados. Con el tiempo corriendo en su contra y la amenaza del coche acechando su vida, Valeria se enfrenta a un horror inimaginable. 'Coche Negro' es un viaje aterrador a través de la paranoia y el misterio, donde cada giro revela que la verdad puede ser más escalofriante que cualquier ficción.",
      buy: {
        argentina: "https://www.amazon.com/-/es/Plutarch/dp/1505387515/ref=sr_1_6?...",
        usa: "https://www.amazon.com/-/es/Plutarch/dp/1505387515/ref=sr_1_6?..."
      }
    },
    {
      title: "Vidas paralelas",
      author: "Catalina Sanchez",
      img: "/paralelas.jpg",
      readTime: 254,
      disponible: false,
      description: "Biografías de líderes y héroes, comparando sus virtudes y defectos, revelando lecciones morales y éticas profundas.",
      resume:"'Vidas Paralelas' es una aterradora novela de terror y suspenso que narra la historia de dos personajes cuyas vidas, aunque aparentemente separadas, están intrínsecamente conectadas por un oscuro secreto. La trama sigue a Elena, una joven artista que se muda a una antigua casa en un pueblo con un pasado escalofriante. Al mismo tiempo, conocemos a Tomás, un investigador especializado en lo paranormal que regresa al lugar tras una serie de misteriosas desapariciones.Mientras Elena comienza a experimentar fenómenos inexplicables, Tomás descubre pistas que apuntan a una fuerza siniestra que ha estado acechando a la comunidad durante décadas. A medida que ambos se adentran en sus respectivas búsquedas, se dan cuenta de que sus destinos están entrelazados de formas inesperadas. La tensión aumenta cuando revelan que el pasado de la casa guarda secretos aterradores que no solo amenazan sus vidas, sino que también podrían desatar un horror inimaginable. ¿Podrán descubrir la verdad antes de que sea demasiado tarde?",
      buy: {
        argentina: "https://www.amazon.com/-/es/Plutarch/dp/1505387515/ref=sr_1_6?...",
        usa: "https://www.amazon.com/-/es/Plutarch/dp/1505387515/ref=sr_1_6?..."
      }
    },
    {
      title: "Venganza",
      author: "Sergio Rosales",
      img: "/venganza.jpg",
      readTime: 304,
      disponible: true,
      description: "Martín busca justicia por la muerte de su esposa, pero su sed de venganza lo lleva a un camino oscuro y peligroso.",
      resume:"'Venganza' es un intenso thriller psicológico que sigue la historia de Martín, un hombre que ha pasado años buscando justicia tras la trágica muerte de su esposa. Consumido por la culpa y el odio, decide tomar la justicia por su propia mano. Mientras rastrea a los responsables, Martín se adentra en un mundo oscuro y peligroso, donde se encuentra con personajes siniestros que juegan con la vida y la muerte. A medida que su búsqueda se convierte en una espiral de violencia, comienza a cuestionar su propia moralidad. Sin embargo, una figura misteriosa, que parece conocer todos sus pasos, lo acecha desde las sombras, desvelando secretos que lo llevarán a enfrentar su propio pasado. En una carrera contra el tiempo, 'Venganza' desata un horror psicológico que desafía los límites de la justicia y revela las consecuencias desgarradoras de la sed de venganza.",
      buy: {
        argentina: "https://www.amazon.com/-/es/Plutarch/dp/1505387515/ref=sr_1_6?...",
        usa: "https://www.amazon.com/-/es/Plutarch/dp/1505387515/ref=sr_1_6?..."
      }
    },
    {
        title: "Cruce de demonios",
        author: "Kevin J. Anderson",
        img: "/cruce-de-demonios.jpg",
        readTime: 124,
        disponible: true,
        description: "Clara despierta fuerzas malignas en un pueblo antiguo, enfrentándose a un ritual oscuro que amenaza con consumir su alma.",
        resume:"'Cruce de Demonios' Es una escalofriante novela que sumerge al lector en un mundo donde las fronteras entre la realidad y el infierno se desdibujan. La historia sigue a Clara, una joven que se muda a un pequeño pueblo rodeado por un bosque siniestro, conocido por sus extrañas desapariciones. Al investigar los rumores sobre un antiguo ritual que promete otorgar poder a quien lo complete, Clara despierta fuerzas malignas que habían permanecido dormidas durante siglos. A medida que la oscuridad se cierne sobre el pueblo, sus habitantes comienzan a ser acechados por visiones aterradoras y sombras que parecen cobrar vida. Clara deberá enfrentarse a sus propios demonios internos y descubrir la verdad detrás de la leyenda antes de que el mal consuma no solo su alma, sino también la de aquellos que ama.Con cada giro. Esta historia te mantendrá al borde del asiento, revelando que a veces, el verdadero horror se encuentra en lo desconocido.",
        buy: {
          argentina: "https://www.amazon.com/-/es/Plutarch/dp/1505387515/ref=sr_1_6?__mk_es_US=ÅMÅŽÕÑ&crid=HUXM8C3RLKKB&dib=eyJ2IjoiMSJ9.Gs8YIa54uQ4sZpgV327jvBgIvBmFycRul9RLxLQdLYdPJgoxgQ7_t_nCqniwVt4Py2ZsbNsbTr_XT8TESpi-tKcozwUiiHbXYjoKhAnRP3mOzCsrYF3qzXPQZf7GJ6CqzemyfH8-ge8V97GYgpQQ36K_r0CBSUNX9ZxCs-LSHkc8w8agppPwSckxFC-bXzxs8BZ6m0XMztTXhOgxcHpyuBLIGl8O8V5loQl6Pb6W6Is.9yCZ88cuTMkz4zHwl5S4Z_VtJt3SxQRBbwmXSuCPL08&dib_tag=se&keywords=vidas+paralelas&qid=1726693410&sprefix=vidas+paralel%2Caps%2C379&sr=8-6",
          usa: "https://www.amazon.com/-/es/Plutarch/dp/1505387515/ref=sr_1_6?__mk_es_US=ÅMÅŽÕÑ&crid=HUXM8C3RLKKB&dib=eyJ2IjoiMSJ9.Gs8YIa54uQ4sZpgV327jvBgIvBmFycRul9RLxLQdLYdPJgoxgQ7_t_nCqniwVt4Py2ZsbNsbTr_XT8TESpi-tKcozwUiiHbXYjoKhAnRP3mOzCsrYF3qzXPQZf7GJ6CqzemyfH8-ge8V97GYgpQQ36K_r0CBSUNX9ZxCs-LSHkc8w8agppPwSckxFC-bXzxs8BZ6m0XMztTXhOgxcHpyuBLIGl8O8V5loQl6Pb6W6Is.9yCZ88cuTMkz4zHwl5S4Z_VtJt3SxQRBbwmXSuCPL08&dib_tag=se&keywords=vidas+paralelas&qid=1726693410&sprefix=vidas+paralel%2Caps%2C379&sr=8-6 "
        }
      },
      
  ];
  