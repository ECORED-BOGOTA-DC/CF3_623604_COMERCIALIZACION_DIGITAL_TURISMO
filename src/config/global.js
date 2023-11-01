export default {
  global: {
    componenteFormativo: 'Organización de eventos',
    descripcionCurso:
      'Motivaciones, necesidades o intereses varían al emprender un viaje; uno de ellos son los eventos. Quienes viajan a eventos pagan por temáticas y contenidos, pero también desean experiencias adicionales para su tiempo libre, como tours, compras, buena alimentación, alojamiento, diversión y esparcimiento, donde buscan experiencias inolvidables; es así como los eventos son un eje fundamental para el desarrollo socioeconómico.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/banner-principal-decorativo-4.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Turismo de negocios y eventos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Eventos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Historia de los eventos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Clasificación de los eventos',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Eventos internacionales y nacionales más reconocidos',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Fases de los eventos',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Montajes de los eventos',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Recursos para la organización de eventos',
            hash: 't_1_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo: 'Espacios para la realización de eventos',
            hash: 't_1_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.9',
            titulo: 'Tendencias en eventos',
            hash: 't_1_9',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.10',
            titulo: 'Formatos de eventos <i>online</i>',
            hash: 't_1_10',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.11',
            titulo: 'Plataformas para desarrollar eventos virtuales',
            hash: 't_1_11',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.12',
            titulo: 'Mercadeo <i>online</i> para eventos',
            hash: 't_1_12',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.13',
            titulo: 'Costos en un evento',
            hash: 't_1_13',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Experiencias en eventos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Claves para lograr experiencias únicas en los asistentes a los eventos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Ejemplos de experiencias en eventos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Pasos para crear experiencias en eventos',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Sistemas de medición para los eventos',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Herramientas de innovación',
            hash: 't_2_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Andaluz, J. (2018). Análisis de la percepción de la comunidad local del Carnaval Internacional de Guaranda. Universidad de Especialidades Espíritu Santo. ',
      link:
        'https://1library.co/document/q5mxn77y-analisis-percepcion-comunidad-local-carnaval-internacional-guaranda.html ',
    },
    {
      referencia:
        'Blog Fosbury. (2021). El <i>marketing</i> de eventos o cómo crear experiencias memorables. Fosbury Café. ',
      link:
        'https://eventosempresa.fosburycafe.es/ideasyconsejos/el-marketing-de-eventos-o-como-crear-experiencias-memorables/ ',
    },
    {
      referencia:
        'Cordero, L. (2016). La organización de eventos como herramienta de comunicación interna: Avon Cosmetics España [Trabajo fin de grado]. Universidad de Sevilla. ',
      link:
        'https://idus.us.es/bitstream/handle/11441/48294/CorderoLopez_Lucia_TFG_2016.pdf;jsessionid=ABFB63C6E2C28861D02F3DD09AF9E830?sequence=1 ',
    },

    {
      referencia:
        'González, F. y Morales, S. (2009). Ciudades efímeras: transformando el turismo urbano a través de la producción de eventos. Editorial UOC.',
    },
    {
      referencia:
        'Hazelton, J. (2020). <i>Marketing</i> experiencial – 4 ejemplos de marcas que acertaron. Eventtia. ',
      link:
        'https://www.eventtia.com/es/blog/marketing-experiencial-4-ejemplos-de-marcas-que-acertaron ',
    },
    {
      referencia:
        'Lojo, B. (2015). Turismo de Eventos: Clasificación, Evolución y Características. Impacto en las ciudades de Cartagena y Murcia. Universidad Politécnica de Cartagena. ',
      link:
        'https://repositorio.upct.es/bitstream/handle/10317/4916/tfm495.pdf?sequence=1&isAllowed=y ',
    },
    {
      referencia:
        'López, M. (2021). Recursos para la organización de actos. Protocolo.org. ',
      link:
        'https://www.protocolo.org/ceremonial/eventos/recursos-para-la-organizacion-de-actos.html',
    },
  ],
  glosario: [
    {
      termino: 'Maestro de ceremonias',
      significado:
        'es la persona que efectúa las presentaciones, da la bienvenida y despide las sesiones plenarias en un evento.',
    },
    {
      termino: 'Recinto ferial',
      significado:
        'edificio especializado en la celebración de ferias y exposiciones, con facilidades adicionales para celebrar reuniones de negocios relativas al evento ferial o a la exposición.',
    },
    {
      termino: '<i>Stand</i>',
      significado:
        'espacio de exhibición en una feria o exposición que consta de una superficie determinada de piso de exposición y mamparas que lo separan de otros stands, además de un rótulo de identificación. ',
    },
    {
      termino: '<i>Venues</i>',
      significado:
        'espacios no tradicionales en los cuales se pueden realizar eventos y certámenes.',
    },
  ],
  complementario: [
    {
      tema: 'Herramientas de <i>marketing</i> digital  ',
      referencia:
        'Galmés, M. (2010). La organización de eventos como herramienta de comunicación de <i>marketing</i>. Modelo integrado y experiencial [Tesis doctoral]. Universidad de Málaga. ',
      tipo: 'Tesis doctoral. ',
      link:
        'https://dspace-libros.metabiblioteca.com.co/jspui/bitstream/001/356/5/978-84-9747-609-6.pdf ',
    },
    {
      tema: 'Herramientas de innovación',
      referencia:
        'Borges, A. (2013). La innovación en la organización de eventos. Compé, Revista Científica de Comunicación, Protocolo y Eventos, (1), p. 46-60. ',
      tipo: 'Artículo',
      link:
        'https://silo.tips/download/la-innovacion-en-la-organizacion-de-eventos ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Fabio Alberto Ramírez',
        cargo: 'Experto temático',
        centro: 'Regional Tolima - Centro Comercio y Servicios',
      },
      {
        nombre: 'Gloria Alexandra Orejarena Barrios',
        cargo: 'Diseñadora instruccional',
        centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Asesor metodológico',
        centro: 'Regional Distrito Capital – Centro de Diseño y Metrología',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrector de estilo',
        centro: 'Regional Distrito Capital – Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Fabian Zarate'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión guion ',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Sergio Mauricio Valencia Martinez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollador Fullstack',
        centro:
          'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
      },
      {
        nombre: ['Wilson Andrés Arenales Cáceres'],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez ',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Estefani Daniela Gallo Cortés',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Miguel Guerrero Gutiérrez ',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Pedro Nel Calao Zabala',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona ',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
