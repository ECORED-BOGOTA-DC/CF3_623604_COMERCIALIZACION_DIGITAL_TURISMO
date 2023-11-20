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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/623604_CF03_DU.pdf',
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
        'Andaluz, J. (2018). <em>Análisis de la percepción de la comunidad local del Carnaval Internacional de Guaranda</em>. Universidad de Especialidades Espíritu Santo. ',
      link:
        'https://1library.co/document/q5mxn77y-analisis-percepcion-comunidad-local-carnaval-internacional-guaranda.html ',
    },
    {
      referencia:
        'Cordero, L. (2016). <em>La organización de eventos como herramienta de comunicación interna: Avon Cosmetics España</em> [Trabajo fin de grado]. Universidad de Sevilla. ',
      link:
        'https://idus.us.es/bitstream/handle/11441/48294/CorderoLopez_Lucia_TFG_2016.pdf;jsessionid=ABFB63C6E2C28861D02F3DD09AF9E830?sequence=1 ',
    },

    {
      referencia:
        'González, F. y Morales, S. (2009). <em>Ciudades efímeras: transformando el turismo urbano a través de la producción de eventos</em>. Editorial UOC.',
    },
    {
      referencia:
        'Hazelton, J. (2020). <em>Marketing experiencial - 4 ejemplos de marcas que acertaron</em>. Eventtia. ',
      link:
        'https://www.eventtia.com/es/blog/marketing-experiencial-4-ejemplos-de-marcas-que-acertaron ',
    },
    {
      referencia:
        'Lojo, B. (2015). <em>Turismo de Eventos: Clasificación, Evolución y Características. Impacto en las ciudades de Cartagena y Murcia</em>. Universidad Politécnica de Cartagena. ',
      link:
        'https://repositorio.upct.es/bitstream/handle/10317/4916/tfm495.pdf?sequence=1&isAllowed=y ',
    },
    {
      referencia:
        'López, M. (2021). <em>Recursos para la organización de actos</em>. Protocolo.org. ',
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
        'Galmés, M. (2010). <em>La organización de eventos como herramienta de comunicación de marketing. Modelo integrado y experiencial</em> [Tesis doctoral]. Universidad de Málaga. ',
      tipo: 'Tesis doctoral',
      link:
        'https://libros.metabiblioteca.org/server/api/core/bitstreams/b1fca2ab-0902-4fa6-9ed8-d052df5cae4c/content',
    },
    {
      tema: 'Herramientas de innovación',
      referencia:
        'Borges, A. (2013). La innovación en la organización de eventos. <em>Compé, Revista Científica de Comunicación, Protocolo y Eventos</em>, (1), p. 46-60. ',
      tipo: 'Artículo',
      link:
        'https://silo.tips/download/la-innovacion-en-la-organizacion-de-eventos ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
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
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrector de estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura ',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Fabian Zarate',
          cargo: 'Diseño web',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura ',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Revisión guion ',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Sergio Mauricio Valencia Martinez',
          cargo: 'Desarrollo Front-End',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura ',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Producción audiovisual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura ',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez ',
          cargo: 'Validación audiovisual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura ',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura ',
        },
        {
          nombre: 'Estefani Daniela Gallo Cortés',
          cargo: 'Ilustración',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura ',
        },
        {
          nombre: 'Miguel Guerrero Gutiérrez ',
          cargo: 'Ilustración',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura ',
        },
        {
          nombre: 'Pedro Nel Calao Zabala',
          cargo: 'Producción audiovisual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura ',
        },
        {
          nombre: 'Yuli Marcela Gómez Tarazona ',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura ',
        },
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñador web',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo:
            'Validación de recursos educativos digitales y vinculación LMS',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Leyson Fabián Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
