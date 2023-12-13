<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Turismo de negocios y eventos

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Tema1/1.png')})`}" data-aos="fade-right" alt="Imagen decorativa"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Desde el siglo XX, la OMT reconoce que: “el turismo también puede abarcar los tiempos de trabajo de personas que tienen que realizar actividades fuera de su entorno habitual y usan los servicios turísticos. A este tipo de turismo se le llama turismo de negocios, que se diferencia del turismo masivo de ocio”.
          br
          br
          | El turismo de negocios y eventos incluye la gestión en organización, promoción, venta y distribución de reuniones y eventos, según la Organización Mundial del Turismo; integra también este tipo de turismo, entre otros, a congresos, seminarios, conferencias, ferias, convenciones y reuniones de carácter gubernamental, empresarial o social. 
    
    .row.justify-content-center.mb-5
      .col-lg-8
        .bg1.p-4(data-aos="flip-up")
          h3.text-center Turismo de negocios y eventos
          .row.justify-content-center
            .col-lg-6
              h5 Término anglosajón
              p <i>MICE: Meetings, Incentives, Conferences, Exhibitions</i>
            .col-lg-1.d-lg-flex.d-none
            .col-lg-4.mb-4
              h5 Términos en español
              ul.lista-ul--color
                li 
                  i.lista-ul__vineta
                  | Turismo de negocios
                li 
                  i.lista-ul__vineta
                  | Turismo de eventos
                li 
                  i.lista-ul__vineta
                  | Turismo de congresos, etc.
    
    p.mb-5(data-aos="fade-right") González y Morales (2009) brindan una definición que resume lo que muchos autores conceptuaron a partir de los años 90. Toda acción que busca el desarrollo turístico de un destino a través de la organización de eventos es englobada en esta clasificación de turismo, el cual regularmente es realizado por empresarios, ejecutivos, comerciales y otros profesionales de alto poder adquisitivo, para cerrar negocios, conseguir clientes, asistir a eventos importantes o prestar sus servicios. En este sentido, se podrían hacer ciertas distinciones: 
    
    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Figura 1.
      span  Turismo de negocios, MICE y formación
    
    .row.justify-content-center.mb-5
      .col-xxl-4.col-xl-5.col-lg-6.col-md-8.col-sm-10.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img.sizeimg(src='@/assets/curso/Tema1/img91.svg', alt="Imagen decorativa")
          .tarjeta.BGIMG01.h-100.px-5.py-5(alt="1. Turismo de negocios corporativo")
            p.text-center.mt-4.mb-5 Es el que se realiza cuando el viajero se desplaza con objetivos comerciales, para consolidar vínculos económicos, establecer contactos entre empresas y entablar relaciones entre empresas y posibles socios de negocios.
            br.d-xxl-none.d-flex
      .col-xxl-4.col-xl-5.col-lg-6.col-md-8.col-sm-10.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta-avatar
          img.sizeimg(src='@/assets/curso/Tema1/img91.svg', alt="Imagen decorativa")
          .tarjeta.BGIMG02.h-100.px-5.py-5(alt="2. MICE (Meetings, Incentives, Conferences and Exhibitions)")
            p.text-center.mt-4.mb-5 Es el que se ocupa de los viajes y desplazamientos para asistir a congresos, reuniones o convenciones, pero también engloba el turismo de incentivos y el de ferias comerciales y profesionales.
            br.d-xxl-none.d-flex
      .col-xxl-4.col-xl-5.col-lg-6.col-md-8.col-sm-10.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar
          img.sizeimg(src='@/assets/curso/Tema1/img91.svg', alt="Imagen decorativa")
          .tarjeta.BGIMG03.h-100.px-5.py-5(alt="3. Turismo de formación")
            p.text-center.mt-4.mb-5 Viajes que se realizan para asistir a cursos de formación, es el turismo #[em training / outdoor].
            br
            br.d-xxl-none.d-flex
    
    p.mb-5(data-aos="fade-right") Al hablar de turismo de negocios, es importante definir algunas de las características propias de este tipo de actividad, pues esta clasificación del turismo facilita, por tanto, el desarrollo turístico de un destino, ya que lo destaca en el mapa turístico, contribuyendo a la generación de empleo, desarrollo empresarial, permite la creación y mejora de la infraestructura vial, realza los valores culturales y patrimoniales y se convierte en motor de desarrollo para otros renglones de la economía.
    
    .row.justify-content-center.bg5.pt-4.mb-4
      .col-lg-9
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Figura 2. 
          span  Características turismo de negocios
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/Tema1/3.svg', alt="Características turismo de negocios, la descripción de la imagen está debajo de esta.")
    
    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1	Eventos 
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Tema1/4.png')})`}" data-aos="fade-right" alt="Imagen decorativa"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 El término evento tiene su origen en la expresión latina “#[em eventus]”, cuyo significado es acontecimiento, suceso o eventualidad. Un evento es una actividad especial que se realiza fuera de la rutina regular para celebrar un acontecimiento, el cual conlleva la generación de una planeación de espacios, su capacidad y disponibilidad, entre otros, y que se clasifica según su naturaleza.
          br
          br
          | El <i>marketing</i>, el relacionamiento público y estrategas comunicadores consideran los eventos como una herramienta de divulgación dirigida a clientes potenciales, canales de comunicación y, en general, a toda la sociedad.
    
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2	Historia de los eventos  
    
    p.mb-5(data-aos="fade-right") Un evento es un acontecimiento que se organiza de manera previa, con el propósito de convocar un grupo de personas para un propósito en común, ya sea de orden social, político, religioso, de negocios, entre otros. Conozca un poco acerca de cómo surgen los eventos a través de la historia:
    
    .tarjeta.tarjeta--azul.p-4.mb-5.fon1(data-aos="zoom-in")   
      SlyderA.mt-5.fon1.aq(tipo="b")
        .row.justify-content-center.px-2
          .col-lg-5.order-lg-1.order-2
            h4 1. Grecia 3000 a. C.
            ul.lista-ul.mt-5
              li 
                i.fas.fa-check.c2
                | Cuna cultural de la humanidad.
              li.mt-4 
                i.fas.fa-check.c2
                | Festividades religiosas y artísticas las convirtieron en grandes eventos.
              li.mt-4  
                i.fas.fa-check.c2
                | El teatro de Dioniso, el más famoso.
              li.mt-4 
                i.fas.fa-check.c2
                | En Olimpia, nacen los Juegos en homenaje a Zeus.
              li.mt-4  
                i.fas.fa-check.c2
                | Dioniso, dios de las viñas y del teatro, inicialmente se rezaba en su honor alrededor del altar del templo y los espectadores se sentaban a los lados.       
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/Tema1/5.png', alt="Imagen decorativa")
        .row.justify-content-center.px-2
          .col-lg-5.order-lg-1.order-2
            h4 2. Antigua Grecia
            p.mt-5.mb-0 <strong>Olimpia</strong>
            p La historia la define como el lugar que dio origen a los Juegos Olímpicos.
            p.mt-4.mb-0 <strong>Juegos Olímpicos</strong>
            p Fueron una serie de competiciones atléticas disputadas por representantes de diversas ciudades Estado de la Antigua Grecia.
            p.mt-4 Había menos eventos y solo los hombres solteros que hablaban griego podían competir.
            p.mt-4 Coronas de laurel, ramas de palmera, cintas de lana e incluso, a veces, alimentos para toda la vida eran premios.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/Tema1/6.png', alt="Imagen decorativa")
        .row.justify-content-center.px-2
          .col-lg-5.order-lg-1.order-2
            h4 3. Roma 3000 a. C. 
            ul.lista-ul.mt-5
              li 
                i.fas.fa-check.c2
                | Religión y recreación = tributo a los dioses. 
              li.mt-4 
                i.fas.fa-check.c2
                | Festines en homenaje a los dioses. 
              li.mt-4  
                i.fas.fa-check.c2
                | Se organizan diversiones con entrada libre (atenciones según las clases sociales).
              li.mt-4 
                i.fas.fa-check.c2
                | Aparecen las carreras de carros (Celtas) en el Circo Máximo.
              li.mt-4  
                i.fas.fa-check.c2
                | Luchas de gladiadores (Coliseo Romano).
              li.mt-4  
                i.fas.fa-check.c2
                | Excelentes organizadores. Construyen baños públicos (lujo- comodidad-piscina – masajes- cuartos de aire caliente = saunas). 
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/Tema1/7.png', alt="Imagen decorativa")
        .row.justify-content-center.px-2
          .col-lg-5.order-lg-1.order-2
            h4 4. Las cruzadas (1096 - 1221)
            ul.lista-ul.mt-5
              li 
                i.fas.fa-check.c2
                | En las cruzadas, hubo varias guerras entre dos religiones: la católica y la musulmana, y los dos bloques religiosos trataban de conquistar Jerusalén (la Tierra Santa). 
              li
                i.fas.fa-check.c2
                | En total, fueron ocho cruzadas y se llevaron a cabo entre los siglos XI y XIII. 
              li 
                i.fas.fa-check.c2
                | Generan gran movilización de soldados, peregrinos y mercaderes.
              li 
                i.fas.fa-check.c2
                | Nacen las primeras ferias comerciales (en Venecia, la más célebre).
              li
                i.fas.fa-check.c2
                | Se construyen posadas y albergues.
              li 
                i.fas.fa-check.c2
                | Se fomenta un comercio entre musulmanes y cristianos.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/Tema1/8.png', alt="Imagen decorativa")
        .row.justify-content-center.px-2
          .col-lg-5.order-lg-1.order-2
            h4 5. Revolución industrial fines del siglo XVIII y principios del XIX
            ul.lista-ul.mt-5
              li 
                i.fas.fa-check.c2
                | Nueva era para la humanidad.
              li.mt-4 
                i.fas.fa-check.c2
                | En Inglaterra, se inicia un gran revolcón económico y social con sus fábricas de textiles.
              li.mt-4  
                i.fas.fa-check.c2
                | La economía basada en el trabajo manual fue reemplazada por las máquinas.
              li.mt-4 
                i.fas.fa-check.c2
                | Se crea el ferrocarril.
              li.mt-4 
                i.fas.fa-check.c2
                | Genera cultura del tiempo libre y se inician los períodos vacacionales.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/Tema1/9.png', alt="Imagen decorativa")
        .row.justify-content-center.px-2
          .col-lg-5.order-lg-1.order-2
            h4 6. Copa mundial de la FIFA
            ul.lista-ul.mt-5
              li 
                i.fas.fa-check.c2
                | Se realiza cada cuatro años desde 1930.
              li.mt-4 
                i.fas.fa-check.c2
                | Son convocadas cerca de 200 selecciones nacionales y clasifican 32 equipos. 
              li.mt-4  
                i.fas.fa-check.c2
                | La fase final del torneo es el evento deportivo de una sola disciplina más importante del mundo. La final de 2006 fue vista por más de 1.500 millones de personas. 
              li.mt-4 
                i.fas.fa-check.c2
                | Este evento es el de mayor impacto sociocultural de la humanidad, superando las Olimpiadas.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/Tema1/100.png', alt="Imagen decorativa")
        .row.justify-content-center.px-2
          .col-lg-5.order-lg-1.order-2
            h4 7. Juegos Olímpicos
            ul.lista-ul.mt-5
              li 
                i.fas.fa-check.c2
                | Grecia, cuna de los Juegos Olímpicos de la antigüedad, en 2004 vuelve a ser su sede.
              li.mt-4 
                i.fas.fa-check.c2
                | Se llega al récord de 201 países participantes, con un total de 11.000 deportistas. 
              li.mt-4  
                i.fas.fa-check.c2
                | La popularidad de los Juegos genera 3.900 millones de telespectadores.
              li.mt-4 
                i.fas.fa-check.c2
                | Las imágenes fueron transmitidas por 300 canales a 220 países, con una cobertura de 35.000 horas.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/Tema1/111.png', alt="Imagen decorativa")
    
    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3	Clasificación de los eventos
    
    p(data-aos="fade-right") Existen diferentes clases de eventos, entre ellos, se encuentran eventos académicos, cuya finalidad es compartir y divulgar información sobre un tema de interés en un área específica; eventos sociales, reuniones para compartir o celebrar algún acontecimiento específico (celebraciones, negocios…); y eventos de promoción comercial, cuyo objetivo es promocionar a las empresas de cualquier sector. Hacen parte de la actividad empresarial de las organizaciones y, por tanto, de las estrategias de mercadeo. 
    p.mb-5(data-aos="fade-right") Dentro de la clasificación de eventos, se tienen los eventos de tipo social, que son los eventos más comunes y frecuentes a lo largo de la historia de la humanidad. Le invitamos a ver el siguiente recurso, donde conocerá en detalle diferentes elementos de estos eventos: 
    
    .tarjeta.tarjeta--azul.p-4.mb-5.fon2(data-aos="zoom-in")  
      SlyderA.mt-5.fon2.aq(tipo="b")
        .row.justify-content-center.px-2
          .col-lg-5.order-lg-1.order-2
            h4 Eventos sociales
            p.mt-5 Cuando el evento se desarrolla dentro de alguna instalación, como hoteles, clubes sociales u otros recintos que lo permitan. Se encuentran:
            p.mb-0.mt-4 1. Coctel
            p.mb-0 2. Desayuno, almuerzo o cena de trabajo
            p.mb-0 3. Fiesta
            p.mb-0 4. Festival
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/Tema1/122.png', alt="Imagen decorativa")
        .row.justify-content-center.px-2
          .col-lg-5.order-lg-1.order-2
            h4 1. Coctel
            ul.lista-ul.mt-5
              li 
                i.fas.fa-check.c2
                | Recepción social que puede ser de inauguración o de clausura de un evento o certamen. 
              li 
                i.fas.fa-check.c2
                | Tiempo limitado  (de 2 a 3  horas en promedio).
              li  
                i.fas.fa-check.c2
                | Asistencia controlada y seleccionada.
              li.mt-4 
                i.fas.fa-check.c2
                | Se tiene la oportunidad para dirigir algunas palabras o hacer una presentación. 
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/Tema1/123.png', alt="Imagen decorativa")
        .row.justify-content-center.px-2
          .col-lg-5.order-lg-1.order-2
            h4 Características de un coctel
            ul.lista-ul.mt-5
              li 
                i.fas.fa-check.c2
                | Se realiza, por lo general, en la tarde o noche.
              li 
                i.fas.fa-check.c2
                | Evento que permite reunir una gran cantidad de personas, con un bajo costo de operación (en promedio).
              li  
                i.fas.fa-check.c2
                | Los alimentos están presentados como canapés, fríos y calientes, de tamaño pequeño, que puedan ser tomados con las manos, pues lo fundamental del coctel es que es un evento a pie.
              li 
                i.fas.fa-check.c2
                | Bebidas alcohólicas y sin alcohol.
              li 
                i.fas.fa-check.c2
                | Decoración acorde con el evento.
              li 
                i.fas.fa-check.c2
                | Servicio de meseros.
              li
                i.fas.fa-check.c2
                | Mesas adornadas, tipo islas, para proveer de alimentos y bebidas a los invitados.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/Tema1/133.png', alt="Imagen decorativa")
        .row.justify-content-center.px-2
          .col-lg-5.order-lg-1.order-2
            h4 2. Desayuno, almuerzo o cena de trabajo
            ul.lista-ul.mt-5
              li 
                i.fas.fa-check.c2
                | Sesión de trabajo donde se espera un producto o resultado final y que se hace al ritmo del consumo de los alimentos.
              li 
                i.fas.fa-check.c2
                | Tiene lugar dentro de la empresa o en un hotel.
              li  
                i.fas.fa-check.c2
                | Duración de 2 horas aproximadamente.
              li 
                i.fas.fa-check.c2
                | Asistencia controlada y seleccionada.
              li 
                i.fas.fa-check.c2
                p Puede ser tipo  <i>buffet</i>  o servidos a la mesa.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/Tema1/06.png', alt="Imagen decorativa")
        .row.justify-content-center.px-2
          .col-lg-5.order-lg-1.order-2
            h4 3. Fiesta
            ul.lista-ul.mt-5
              li 
                i.fas.fa-check.c2
                p Rito social, compartido entre un grupo de personas, donde se marca un cierto acontecimiento a modo de celebración.  Se integra con una presentación artística, baile, <i>shows</i>, etc.
              li 
                i.fas.fa-check.c2
                | Alto costo para su ejecución.
              li  
                i.fas.fa-check.c2
                | Asistencia controlada.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/Tema1/144.png', alt="Imagen decorativa")
        .row.justify-content-center.px-2
          .col-lg-5.order-lg-1.order-2
            h4 4. Festival
            ul.lista-ul.mt-5
              li 
                i.fas.fa-check.c2
                | Eventos que se caracterizan por contar con numerosos actos y que pueden durar varios días. 
              li 
                i.fas.fa-check.c2
                | En un día, el evento puede empezar por la mañana y terminar a medianoche.
              li  
                i.fas.fa-check.c2
                | Tiene el poder de congregar a mucha más gente, ya que la variedad de los actos y la publicidad que se le da al festival en sí son mucho mayores.
              li  
                i.fas.fa-check.c2
                | Generalmente, los festivales son de arte, música y danza.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/Tema1/16.png', alt="Imagen decorativa")
    
    p.mb-5(data-aos="fade-right") Continuando con esta clasificación, se tienen los eventos académicos, que son aquellas reuniones de orden formal, en las que se discuten o abordan temas de interés profesional. En el siguiente recurso, podrá reconocer los diferentes tipos de eventos que hacen parte de esta tipología: 
    
    .row.justify-content-center.mb-5
      .col-lg-4.ba1(data-aos="fade-right")
        .row.justify-content-center
          .col-lg-3.col-6
            img.tamimg(src='@/assets/curso/Tema1/ico4.svg', alt="Imagen decorativa")
          .col-lg-8.mt-4
            h4 Nacional
        .row.justify-content-center
          .col-lg-11
            p Requieren la vinculación de asistentes y ponentes de más de 2 ciudades de un país.
      .col-lg-4.ba2(data-aos="fade-left")
        .row.justify-content-center
          .col-lg-3.col-6
            img.tamimg(src='@/assets/curso/Tema1/ico4.svg', alt="Imagen decorativa")
          .col-lg-8.mt-4
            h4 Internacional
        .row.justify-content-center
          .col-lg-11
            p Que asistan por lo menos 50 participantes extranjeros.

    ImagenInfograficaB.color-acento-contenido.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/Tema1/img1.svg', alt="Imagen decorativa")

      div(x="35%" y="19%" tooltip="Conferencia" )
        .row.justify-content-center.px-2
          .col-lg-7.order-lg-1.order-2
            p.mb-0.mt-4 Es una reunión en la cual se invita, por lo general, a ponentes destacados en una especialidad. 
            p.mb-0 Se usan herramientas visuales, como gráficos estadísticos, fotografías, videos, etc.
            p.mb-0 El objetivo de una conferencia es convencer al auditorio sobre un determinado tema. 
            p En una exposición, por el contrario, solo se entrega información sobre un tema.
            p.mb-0 <strong>Características de una conferencia</strong>
            p Se distingue por no ser espontánea, sino responder a una planificación:
            ul.lista-ul
              li 
                i.fas.fa-check.c2
                | Proyectar el número de conferencistas.
              li 
                i.fas.fa-check.c2
                | La cantidad de asistentes.
              li  
                i.fas.fa-check.c2
                | El día y hora en que se realizará.
              li  
                i.fas.fa-check.c2
                |El sitio donde se llevará a cabo y los temas que se tratarán.
            p.mb-0 El conferencista también deberá estructurar su discurso.
            p.mb-0 Por lo general, se abre una ronda de preguntas por parte del público.
            p.mb-0 Una conferencia no deberá sobrepasar los 30 o los 45 minutos, a lo sumo, una hora.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/Tema1/37.png', alt="Imagen decorativa")
      div(x="32%" y="47%" tooltip="Simposio" )
        .row.justify-content-center.px-2
          .col-lg-7.order-lg-1.order-2
            p.mt-4 Reunión de expertos, se expone y desarrolla un tema en forma completa y más detallada que en una conferencia.
            p Los especialistas exponen durante 15 a 20 minutos. 
            p Duración mínima de 6 horas (dura más que una conferencia).
            p Mínimo 20 participantes y de 3 a 6 expertos.
            p Un coordinador resume las ideas principales.
            p El auditorio formula preguntas y dudas que los expertos aclaran y responden.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/Tema1/188.png', alt="Imagen decorativa")
      div(x="38%" y="80%" tooltip="Cumbre" )
        .row.justify-content-center.px-2
          .col-lg-7.order-lg-1.order-2
            p.mt-4 Reuniones donde participan personas muy importantes (presidentes, ministros, secretarios generales, directores, etc.) que ocupan cargos de gran responsabilidad y visibilidad de diversos Estados u organismos internacionales, donde se toman decisiones importantes.
            p Duración: mínimo un día, máximo 3. 
            p Los participantes son los representantes de naciones u organizaciones internacionales importantes. 
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/Tema1/19.png', alt="Imagen decorativa")
      div(x="66%" y="19%" tooltip="Congreso" )
        .row.justify-content-center.px-2
          .col-lg-7.order-lg-1.order-2
            p.mt-4 Reunión generalmente periódica, donde se exponen y debaten múltiples ponencias. Asisten personas con un alto nivel profesional, intereses comunes.
            p Presentaciones de nuevos avances o descubrimientos en determinadas materias.
            p Debe al menos durar de 3 a 5 días, para poder llamarle congreso.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/Tema1/200.png', alt="Imagen decorativa")
      div(x="69%" y="47%" tooltip="Foro" )
        .row.justify-content-center.px-2
          .col-lg-7.order-lg-1.order-2
            p.mt-4 Es una reunión enfocada a propiciar el intercambio de opiniones y conceptos por parte los integrantes del evento.
            p Se discute o responde a temas específicos de sus ponencias con el auditorio participante.
            p Un moderador controla y guía las preguntas realizadas por el público hacia los ponentes. Se utiliza un <strong>lenguaje informal y coloquial</strong>, distribuyendo de forma igualitaria el uso de la palabra.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/Tema1/211.png', alt="Imagen decorativa")
      div(x="66%" y="80%" tooltip="Debate" )
        .row.justify-content-center.px-2
          .col-lg-7.order-lg-1.order-2
            p.mt-4 El debate comienza con una pregunta concreta referida a un tema de interés, donde cada persona puede participar de forma espontánea, imprevisible y heterogénea.
            p Discusión de dos grupos de personas con posiciones contrapuestas, que se reúnen para llegar a una solución de algo. 
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/Tema1/07.png', alt="Imagen decorativa")
    
    p.mb-5(data-aos="fade-right") Se cierra esta clasificación con los eventos comerciales o de promoción, que son reuniones organizadas por empresarios o instituciones con la finalidad de dar a conocer sus marcas, productos o servicios. Para conocer los tipos de eventos que hacen parte de esta tipología, le invitamos a ver el siguiente recurso:
    
    TabsC.color-primario.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Eventos de promoción comercial")
        .row.justify-content-center.px-2
          .col-lg-6.order-lg-1.order-2
            p Se realizan con la intención de que las empresas promuevan sus servicios o productos entre un gran número de personas interesadas, en un período muy corto de tiempo.
            p Normalmente, los eventos de promoción comercial pueden ser:
            ul.lista-ul
              li 
                i.fas.fa-check.c2
                p <strong>Ferias comerciales:</strong> ocurren en un solo lugar y solo duran unos pocos días.
              li 
                i.fas.fa-check.c2
                p <strong>Lanzamientos de productos en un evento «cerrado»:</strong> duran aproximadamente 2 horas.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/Tema1/08.png', alt="Imagen decorativa")
      .py-3.py-md-4(titulo="Ferias comerciales")
        .row.justify-content-center.px-2
          .col-lg-6.order-lg-1.order-2
            ul.lista-ul
              li 
                i.fas.fa-check.c2
                p Se utilizan <i>stands</i> para mostrar los productos.
              li 
                i.fas.fa-check.c2
                p En los <i>stands</i>, se pueden ubicar pantallas desplegables para crear un ambiente agradable.
              li 
                i.fas.fa-check.c2
                | Las empresas pueden aspirar a generar clientes potenciales para ventas futuras o incluso realizar las ventas durante la celebración del evento.
              li 
                i.fas.fa-check.c2
                | La publicidad realizada antes del inicio de la feria es determinante. 
              li 
                i.fas.fa-check.c2
                | Es importante que el personal contratado para representar a la marca en un evento conozca bien el producto, por lo que es habitual que sea personal propio de la empresa o debidamente capacitado para la ocasión. 
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/Tema1/09.png', alt="Imagen decorativa")
      .py-3.py-md-4(titulo="Lanzamiento de un producto o servicio")
        .row.justify-content-center.px-2
          .col-lg-6.order-lg-1.order-2
            p El objetivo es que el producto perdure en la mente del público durante y después del evento.
            p Estos eventos deben tener:
          .col-lg-6.d-lg-flex.d-none.order-2
            img(src='@/assets/curso/Tema1/i2.svg', alt="Eventos: 1. Es indispensable que contengan un breve discurso de apertura sobre la empresa a cargo de un alto directivo de la misma.2. Dar una explicación sobre el producto: características, colores, sabores, beneficios, etc.3. En caso de ser comida o bebida, se debe invitar a degustar el producto.4. En caso de ser otro tipo de producto o servicio, realizar una demostración.5. Como cierre, se debe convocar al almuerzo o a un coctel, según corresponda.6. Regalo para los asistentes.")
          .col-12.d-lg-none.d-flex.order-1.mb-4
            img(src='@/assets/curso/Tema1/i2a.svg', alt="Eventos: 1. Es indispensable que contengan un breve discurso de apertura sobre la empresa a cargo de un alto directivo de la misma.2. Dar una explicación sobre el producto: características, colores, sabores, beneficios, etc.3. En caso de ser comida o bebida, se debe invitar a degustar el producto.4. En caso de ser otro tipo de producto o servicio, realizar una demostración.5. Como cierre, se debe convocar al almuerzo o a un coctel, según corresponda.6. Regalo para los asistentes.")
    
    p.mb-5(data-aos="fade-right") En resumen, existen diferentes tipologías de eventos y cada uno de ellos, al tener un propósito específico, es importante definir cuál es el objetivo que se quiere lograr, determinando la población objetivo y, de esta manera, diseñar tanto el ambiente como el mensaje que se pretende transmitir a través de estos.
    
    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
      h5 Tabla 1.
      span  Resumen de la tipología de los eventos
    
    .tabla-a.color-acento-contenido.mb-4
      table(alt="Describe la tipología, la definición. tipo de evento y su entidad promotora para cada uno de los eventos existentes.")
        caption.text-center Nota. <span style="font-weight: 400">Tomado de Andaluz (2018).</span>
        thead
          tr(data-aos="fade-right")
            th TIPOLOGÍA
            th TIPO DE EVENTO
            th DEFINICIÓN
            th ENTIDAD PROMOTORA
        tbody
          tr(data-aos="fade-right")
            td Celebraciones culturales
            td 
              ul.lista-ul
                li 
                  i.fas.fa-check.c2
                  | Festivales.
                li 
                  i.fas.fa-check.c2
                  | Carnavales.
                li 
                  i.fas.fa-check.c2
                  | Conmemoraciones históricas.
                li 
                  i.fas.fa-check.c2
                  | Desfiles.
            td Son eventos que tienen un significado cultural y se diferencian de los eventos de entretenimiento precisamente por el valor cultural que expresan.
            td Instituciones públicas o privadas.
          tr(data-aos="fade-right")
            td Eventos religiosos
            td 
              ul.lista-ul
                li 
                  i.fas.fa-check.c2
                  | Ceremonias religiosas.
                li 
                  i.fas.fa-check.c2
                  | Procesiones.
            td Rituales solemnes, considerados sagrados en el contexto de una religión determinada, y que refuerzan la identidad cultural y religiosa de una comunidad o destino.
            td Instituciones religiosas y asociaciones de culto.
          tr(data-aos="fade-right")
            td Eventos públicos (estatales y políticos)
            td 
              ul.lista-ul
                li 
                  i.fas.fa-check.c2
                  | Elecciones y mítines políticos.
                li 
                  i.fas.fa-check.c2
                  | Cumbres internacionales.
                li 
                  i.fas.fa-check.c2
                  | Actos reales.
            td Eventos organizados por organismos públicos o partidos políticos.
            td Instituciones públicas.
          tr(data-aos="fade-right")
            td Arte y entretenimiento
            td 
              ul.lista-ul
                li 
                  i.fas.fa-check.c2
                  | Artes escénicas /interpretativas.
                li 
                  i.fas.fa-check.c2
                  | Literatura.
            td Son eventos donde el entretenimiento es pasivo, se experimenta por un placer, sin tener un vínculo con la cultura del evento.
            td Instituciones privadas.
          tr(data-aos="fade-right")
            td Eventos corporativos y comerciales
            td 
              ul.lista-ul
                li 
                  i.fas.fa-check.c2
                  | Convenciones y reuniones.
                li 
                  i.fas.fa-check.c2
                  | Ferias y exposiciones.
                li 
                  i.fas.fa-check.c2
                  | Exposiciones mundiales.
                li 
                  i.fas.fa-check.c2
                  | Presentación de productos.
                li 
                  i.fas.fa-check.c2
                  | Convención de ventas.
                li 
                  i.fas.fa-check.c2
                  | <i>Outdoor training</i>.
                li 
                  i.fas.fa-check.c2
                  | <i>Team building</i>.
                li 
                  i.fas.fa-check.c2
                  | Viaje de incentivos.
                li 
                  i.fas.fa-check.c2
                  | <i>Road shows</i>.
            td Eventos relacionados con el mundo empresarial que tienen el objetivo principal de promover, comercializar o vender, o bien están relacionados con alguna esfera de la gestión empresarial.
            td Instituciones privadas (empresas).
          tr(data-aos="fade-right")
            td Eventos educativos y científicos
            td 
              ul.lista-ul
                li 
                  i.fas.fa-check.c2
                  | Congresos y conferencias.
            td Eventos centrados en crear y compartir conocimiento.
            td Instituciones públicas o privadas.
          tr(data-aos="fade-right")
            td Competiciones deportivas
            td 
              ul.lista-ul
                li 
                  i.fas.fa-check.c2
                  | Eventos deportivos.
            td Eventos relacionados con la competición y práctica deportiva.
            td Instituciones públicas o privadas.
          tr(data-aos="fade-right")
            td Recreación
            td 
              ul.lista-ul
                li 
                  i.fas.fa-check.c2
                  | Ferias.
                li 
                  i.fas.fa-check.c2
                  | Arte visual /performances.
                li 
                  i.fas.fa-check.c2
                  | Espectáculos en la calle.
            td Por su naturaleza, suelen estar basados en la diversión y el juego.
            td Instituciones públicas o privadas
          tr(data-aos="fade-right")
            td Eventos sociales
            td 
              ul.lista-ul
                li 
                  i.fas.fa-check.c2
                  | Recaudación de fondos.
                li 
                  i.fas.fa-check.c2
                  | Campañas de sensibilización o educación.
            td Eventos con un alto componente de sensibilización y educación ciudadana.
            td Organizaciones sin afán de lucro.
          tr(data-aos="fade-right")
            td Eventos privados
            td 
              ul.lista-ul
                li 
                  i.fas.fa-check.c2
                  | Fiestas.
                li 
                  i.fas.fa-check.c2
                  | Bodas.
            td Organizados principalmente para celebraciones sociales.
            td Particulares.
    
    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4	Eventos internacionales y nacionales más reconocidos
    
    p.mb-5(data-aos="fade-right") Sin duda, los eventos hacen parte de la historia misma de la humanidad, con ellos se conmemoran fechas y momentos especiales, y muchos de ellos, por el motivo o la majestuosidad del evento, se hacen inolvidables, marcando hitos en la historia. Le invitamos a ver, en el siguiente recurso, algunos de los eventos internacionales más reconocidos:
    
    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/EZAvgGZhUnk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="flip-up")
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img.tam1(src="@/assets/curso/Tema1/ico5.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p <strong>Estimado aprendiz, de igual manera, le invitamos a ver el siguiente enlace, en el que podrá conocer los eventos nacionales más reconocidos:</strong> Aviatur, cronograma de eventos nacionales.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="('https://www.aviatur.com/blog/experiencias/ferias-y-fiestas-de-colombia')" target="_blank")
                    span Ver
                    i.fas.fa-link

    separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5	Fases de los eventos

    p.mb-5(data-aos="fade-right") La duración de cada fase variará según el alcance y la naturaleza del evento, pero todo comienza con una idea para satisfacer una necesidad o deseo, que se exprese en un plan estratégico. Los factores que dan forma al evento se incorporan luego en un plan de proyecto que proporciona la hoja de ruta hacia el éxito. Los recursos necesarios se adquieren y sincronizan en un plan de acción para producir el evento. 
        
    .row.justify-content-center.mb-5
      .col-lg-7
        .titulo-sexto.color-acento-contenido.mt-4(data-aos="fade-right")
          h5 Figura 3. 
          span  Fases: pre-evento, evento y pos-evento
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/Tema1/i3.svg", alt="Las fases son: • Pre - evento: compuesta poro Investigación o Planeación o Organización • Evento: o Dirección• Post eventoo Evaluación")
    
    p(data-aos="fade-right") En la primera fase, que se conoce como pre-evento, se desarrollan las acciones que ayudan a posicionar una imagen única del evento en la mente y el corazón del público objetivo, por ello, es importante crear tácticas consistentes, que respalden la estrategia de comunicación de este. Esta primera fase tiene dos fases, que son la planeación y la organización del evento.
    p.mb-5(data-aos="fade-right") La planeación es la base del evento, esta fase consiste en formular planes que servirán de guía para el accionar del evento; esto implica establecer objetivos y acciones para alcanzar dichos objetivos. En el siguiente recurso, podrá encontrar todos los elementos que hacen parte de la fase de planeación:
          
    .row.align-items-end.mb-5(data-aos="fade-right")
      .col.img-02
        img(src='@/assets/curso/fondos/icono.svg')
      .col-auto.BG01
        h3.ps-5.mb-0 Fase de planeación
    
    p.mb-5(data-aos="fade-right") Las actividades que se ejecutan en esta fase son: 
    
    .row.bg6.mb-5
      SlyderF.mb-5(columnas="col-lg-6 col-xl-4" data-aos="zoom-in")
        .tarjeta.color-acento-botones.p-4.sombra.h-100.mt-3.mb-3
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/Tema1/n1.svg', alt="Imagen decorativa")
          p.text-center.mb-0 Nombre del evento.
        .tarjeta.color-acento-botones.p-4.sombra.h-100.mt-3.mb-3
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/Tema1/n2.svg', alt="Imagen decorativa")
          p.text-center.mb-0 Temática.
        .tarjeta.color-acento-botones.p-4.sombra.h-100.mt-3.mb-3
          .row.justify-content-center.mb-2
            .col-7
              img(src='@/assets/curso/Tema1/n3.svg', alt="Imagen decorativa")
          p.text-center.mb-0.mb-0 Definir el público objetivo y el tipo de expositores.
        .tarjeta.color-acento-botones.p-4.sombra.h-100.mt-3.mb-3
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/Tema1/n4.svg', alt="Imagen decorativa")
          p.text-center.mb-0 Seleccionar las fechas.
        .tarjeta.color-acento-botones.p-4.sombra.h-100.mt-3.mb-3
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/Tema1/n5.svg', alt="Imagen decorativa")
          p.text-center.mb-0 Seleccionar el lugar.
        .tarjeta.color-acento-botones.p-4.sombra.h-100.mt-3.mb-3
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/Tema1/n6.svg', alt="Imagen decorativa")
          p.text-center.mb-0 Describir las actividades.
        .tarjeta.color-acento-botones.p-4.sombra.h-100.mt-3.mb-3
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/Tema1/n7.svg', alt="Imagen decorativa")
          p.text-center.mb-0 Definir el programa.
        .tarjeta.color-acento-botones.p-4.sombra.h-100.mt-3.mb-3
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/Tema1/n8.svg', alt="Imagen decorativa")
          p.text-center.mb-0 Definir los recursos.
        .tarjeta.color-acento-botones.p-4.sombra.h-100.mt-3.mb-3
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/Tema1/n9.svg', alt="Imagen decorativa")
          p.text-center.mb-0 Diseñar el plano del montaje.
        .tarjeta.color-acento-botones.p-4.sombra.h-100.mt-3.mb-3
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/Tema1/n10.svg', alt="Imagen decorativa")
          p.text-center.mb-0 Realizar cotización.
        .tarjeta.color-acento-botones.p-4.sombra.h-100.mt-3.mb-3
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/Tema1/n11.svg', alt="Imagen decorativa")
          p.text-center.mb-0 Determinar fuentes de financiación.
      
      .tarjeta.tarjeta--azul.p-4.mb-5.fon3(data-aos="zoom-in")
        SlyderA.aq2.largos(tipo="b")
          .row.justify-content-center.px-2
            .col-lg-6.order-lg-1.order-2
              h4 Temática, nombre y actividades
              p.mt-5 Se elige la temática, el nombre y las actividades.
              ul.lista-ul.mt-5
                li 
                  i.fas.fa-check.c2
                  | El tema:<br>Se genera a partir del interés o necesidad de quien crea el evento. <br>Ejemplo:<br>Temática académica, deportiva, social, etc.
                li 
                  i.fas.fa-check.c2
                  | El nombre:<br>Se genera a partir del tipo de evento, bien sea congreso, seminario, simposio, evento social u otro. <br>Debe ser corto y llamativo.
                li 
                  i.fas.fa-check.c2
                  | Las actividades:<br>Se diseñan según el tipo de público y la temática del evento.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/Tema1/img20.png', alt="Imagen decorativa")
          .row.justify-content-center.px-2
            .col-lg-6.order-lg-1.order-2
              h4 Fecha y lugar
              p.mt-5 Para la selección de la fecha:
              ul.lista-ul
                li 
                  i.fas.fa-check.c2
                  | Tener suficiente margen de tiempo para la organización requerida.
                li 
                  i.fas.fa-check.c2
                  | Evitar que coincida con la fecha de una actividad similar o dirigida al mismo tipo de público.
              .row.mt-5
                .col-lg-12
                  .tarjeta-avatar-b.mb-5
                    .tarjeta-avatar-b__img
                      img(src='@/assets/curso/Tema1/icono1.svg', alt="Imagen decorativa")
                    .tarjeta.tarjeta--azul.c22
                      .p-4
                        h4 Recuerda
                        p Pensar si es mejor en semana o fin de semana. 
                        p Tener en cuenta los festivos y las temporadas de viajes (diciembre, enero, junio, octubre) puesto que muchas personas se van de vacaciones.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/Tema1/img21.png', alt="Imagen decorativa")
          .row.justify-content-center.px-2
            .col-lg-6.order-lg-1.order-2
              h4 Para el lugar
              p.mt-5 En principios se debe elegir la Ciudad Sede y luego se seleccionarán las instalaciones específicas donde se realizará el evento, tomando en cuenta si cumplen con exigencias como: 
              ul.lista-ul
                li.mb-0
                  i.fas.fa-check.c2
                  | Capacidad
                li.mb-0 
                  i.fas.fa-check.c2
                  | Comodidad
                li.mb-0 
                  i.fas.fa-check.c2
                  | Iluminación
                li.mb-0 
                  i.fas.fa-check.c2
                  | Equipos
                li.mb-0 
                  i.fas.fa-check.c2
                  | Acceso
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/Tema1/img22.png', alt="Imagen decorativa")
          .row.justify-content-center.px-2
            .col-lg-6.order-lg-1.order-2
              h4 El programa
              ul.lista-ul.mt-5
                li
                  i.fas.fa-check.c2
                  | Se crea para los eventos académicos y los de promoción comercial.
                li
                  i.fas.fa-check.c2
                  | En este programa se incluyen los actos en los que figuran todas las personas que van a tomar la palabra y el tiempo de intervención de cada una. 
                li 
                  i.fas.fa-check.c2
                  | Es importante seguir al detalle este tiempo por el orden. También es conveniente que la duración de las intervenciones sea igual para todos los ponentes, así se evitan conflictos. 
                li 
                  i.fas.fa-check.c2
                  | Es aconsejable que las intervenciones no excedan la hora de duración porque sino se perderá la atención del público.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/Tema1/img23.png', alt="- Himno nacional - Se brindan las palabras de apertura del evento, se da la bienvenida por parte del anfitrión. - Se describen las actividades a desarrollar con cada uno de sus tiempos. - Se deben determinar los tiempos de “break” o descanso si es el caso. - Se brindan las palabras de agradecimiento y despedida. La seriedad o el estilo relajado del evento definen el programa. - Todo esto puede variar según el tipo de evento ya que los tiempos cambian, las actividades son diferentes, el protocolo en unos eventos puede ser más serio que en otros.")
          .row.justify-content-center.px-2
            .col-lg-6.order-lg-1.order-2
              h4 Estimar los recursos
              p.mt-5 Se eligen los recursos humanos, materiales, tecnológicos.
              ul.lista-ul
                li
                  i.fas.fa-check.c2
                  p <strong>Recurso humano</strong> <br>Técnicos sonido y video, agentes de seguridad, logística, etc.
                li
                  i.fas.fa-check.c2
                  p <strong>Recursos Técnicos</strong><br>Equipos de sonido, grabación, apoyo audiovisual (pantallas, televisores, proyectores para diapositivas, video Beam)
                li
                  i.fas.fa-check.c2
                  p <strong>Recursos Materiales</strong><br>Se refieren a los implementos necesarios y las instalaciones a utilizar como lápices, carpetas, libretas, mesas, sillas, etc.              
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/Tema1/img24.png', alt="Imagen decorativa")
          .row.justify-content-center.px-2
            .col-lg-6.order-lg-1.order-2
              h4 Diseñar el plano del montaje
              p.mt-5 Uno de los elementos más importantes del diseño y montaje del evento, es el formato de colocación de mesas y escenarios. Se deben tener en cuenta los siguientes parámetros:
              ul.lista-ul
                li.mb-0
                  i.fas.fa-check.c2
                  p.mb-0 Número de invitados, las superficies deben tener la capacidad de alojar a todos tus asistentes de forma cómoda.
                li.mb-0
                  i.fas.fa-check.c2
                  p.mb-0 Decoración, si tienes en mente tener algún evento temático, piensa en que el espacio sea suficiente para poner tus adornos e iluminación.
                li.mb-0
                  i.fas.fa-check.c2
                  p.mb-0 Proyección, si pretendes realizar alguna presentación visual, verifica que el salón cuenta con el equipo y el espacio para proyectar.
                li.mb-0
                  i.fas.fa-check.c2
                  p.mb-0 Para la planeación del montaje debes considerar que el salón sea suficientemente grande para montar un servicio de coffee break y que cuente con: salidas de evacuación, pasillos para moverse libremente y espacios adecuados para personas con discapacidad.
                li.mb-0
                  i.fas.fa-check.c2
                  p.mb-0 Los eventos al aire libre, instalaciones deportivas, monumentos históricos requieren permisos especiales de las alcaldías locales, o de la institución gubernamental que gestione ese espacio.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/Tema1/img25.png', alt="Imagen decorativa")
          .row.justify-content-center.px-2
            .col-lg-6.order-lg-1.order-2
              h4 Elaborar presupuesto y solicitar cotizaciones
              ul.lista-ul.mt-5
                li
                  i.fas.fa-check.c2
                  p Tomar como base el inventario de los recursos a utilizar.
                li
                  i.fas.fa-check.c2
                  p Realizar solicitudes de cotizaciones a las diferentes empresas o personas que puedan proveer servicios y recursos. 
                li
                  i.fas.fa-check.c2
                  p Obtener el cálculo total de gastos y costos. 
                li
                  i.fas.fa-check.c2
                  p Frecuentemente, se le asigna un 10% de la suma total del presupuesto para cubrir los imprevistos.
                .row.justify-content-center
                  .col-lg-8
                    h4.text-center Cotización
                    .tabla-a.color-primario.mb-5 
                      table.tema1-5
                        thead
                          tr
                            th.text-white Material 
                            th.text-white Cantidad 
                            th.text-white Valor unidad
                            th.text-white Valor total
                        tbody
                          tr.tabla1
                            td 
                            td 
                            td 
                            td 
                          tr.tabla2
                            td 
                            td 
                            td 
                            td 
                          tr.tabla1
                            td 
                            td 
                            td 
                            td 
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/Tema1/img27.png', alt="Imagen decorativa")
          .row.justify-content-center.px-2
            h4 Ejemplo evento promoción comercial
            img(src='@/assets/curso/Tema1/img28.svg', alt="Su estructura consiste en: Fondo con la proyección de cada presentación.Ponente.Directivos.Asistentes.")
          .row.justify-content-center.px-2
            h4 Ejemplo evento promoción comercial
            img(src='@/assets/curso/Tema1/img29.svg', alt="Asistentes")
          .row.justify-content-center.px-2
            h4 Fuentes de financiación
            ul.lista-ul.mb-4
              li
                i.fas.fa-check.c2
                p Si el tipo de evento lo permite, se pueden buscar patrocinadores relacionados con la temática y poder negociar con ellos ciertos aspectos a cambio de su participación en el evento:
            .col-lg-8
              img(src='@/assets/curso/Tema1/img30.svg', alt="- Refrigerios - Noticias en un periódico gratuitamente - Apoyo financiero del evento - Puesto de tinto y aromática gratuito")
    
    p.mb-5(data-aos="fade-right") Una vez se planifica, se procede a  la fase de organización. Este es el proceso de división de labores en el equipo, el cual debe estar interconectado y trabajar de forma conjunta. Esta parte del evento está íntimamente ligada a las habilidades de cada colaborador y los recursos con los que se cuenta para el evento.
    
    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 4.
          span Actividades de la fase organización
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/Tema1/img31.svg', alt="Actividades de la fase Organización. Información descrita debajo de la imagen.")
    
    p.mb-5(data-aos="fade-right") Conozca más de esta fase en el siguiente recurso:
    
    .row.align-items-end.mb-5(data-aos="fade-right")
      .col.img-02
        img(src='@/assets/curso/fondos/icono.svg')
      .col-auto.BG01
        h3.ps-5.mb-0 Fase de organización 
    
    .row.fon35  
      .row.justify-content-center.mb-5
        .col-lg-4.col-8.mt-2(data-aos="fade-right")
          img(src='@/assets/curso/Tema1/img33.png', alt="Imagen decorativa")
        .col-lg-8(data-aos="fade-left")
          .row.mt-4
            .col-lg-2.col-4
              img.aa(src='@/assets/curso/Tema1/ico6.svg', alt="Imagen decorativa")
            .col-lg-9.mt-2
              h4.mt-2 Definición de comités de trabajo
              p Los comités son conjuntos de personas encargadas de un asunto, en especial del evento.
          .row.mb-5
            .col-lg-3.col-sm-6.mb-lg-0.mb-4(data-aos="fade-right")
              .tarjeta--boton.color-primario.h-100.p-4.sombra
                .row.justify-content-center.mb-3
                  .col-7
                    figure
                      img.baqw(src='@/assets/curso/Tema1/ico7.svg', alt="Imagen decorativa")
                p.text-center.mb-0 Roles del equipo organizador
            .col-lg-3.col-sm-6.mb-lg-0.mb-4(data-aos="flip-right")
              .tarjeta--boton.color-primario.h-100.p-4.sombra
                .row.justify-content-center.mb-3
                  .col-7
                    figure
                      img.baqw(src='@/assets/curso/Tema1/ico8.svg', alt="Imagen decorativa")
                p.text-center.mb-0 Promoción / <i>Marketing</i> del evento
            .col-lg-3.col-sm-6.mb-lg-0.mb-4(data-aos="flip-left")
              .tarjeta--boton.color-primario.h-100.p-4.sombra
                .row.justify-content-center.mb-3
                  .col-7
                    figure
                      img.baqw(src='@/assets/curso/Tema1/ico9.svg', alt="Imagen decorativa")
                p.text-center.mb-0 Contratación de servicios
            .col-lg-3.col-sm-6.mb-lg-0.mb-4(data-aos="fade-left")
              .tarjeta--boton.color-primario.h-100.p-4.sombra
                .row.justify-content-center.mb-3
                  .col-7
                    figure
                      img.baqw(src='@/assets/curso/Tema1/ico10.svg', alt="Imagen decorativa")
                p.text-center.mb-0 Acomodación según número de asistentes
      
      .row.mb-5(data-aos="fade-right")
        .col-auto.tta.px-5.py-2
          p.text-center.mb-0 <strong>Roles del equipo organizador</strong>

      .row.justify-content-center.mb-5
        .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
          LineaTiempoD.color-acento-botones
            div.px-2(numero="1" titulo="Organizador")               
              ul.lista-ul
                li
                  i.fas.fa-check.c2
                  p.mb-0 Escoger temas a tratar y las actividades a realizar.
                li
                  i.fas.fa-check.c2
                  p.mb-0 Seleccionar a los conferencistas y/o ponentes.
                li
                  i.fas.fa-check.c2
                  p.mb-0 Establecer los mecanismos para la preselección y hacer la selección final de los trabajadores del evento.
                li
                  i.fas.fa-check.c2
                  p.mb-0 Organizar ponencias y trabajos días antes al evento.
                li
                  i.fas.fa-check.c2
                  p.mb-0 Fijar fechas de reuniones periódicas con el fin de revisar las actividades ejecutadas y programar acciones pendientes.
                li
                  i.fas.fa-check.c2
                  p.mb-0 Definir beneficios económicos para ponentes e invitados (tiquetes aéreos, <i>tours</i> por la ciudad, alojamiento).
            div.px-2(numero="2" titulo="Logística") Reservación del espacio:
              ul.lista-ul
                li
                  i.fas.fa-check.c2
                  p.mb-0 Montaje de los salones: ellos mismos o definir con qué empresa se hará este servicio.
                li
                  i.fas.fa-check.c2
                  p.mb-0 Alquiler de equipos de sonido y audiovisuales.
                li
                  i.fas.fa-check.c2
                  p.mb-0 Reproducción de diapositivas, videos, sonido durante el evento.
            div.px-2(numero="3" titulo="Finanzas") Elaborar el presupuesto:
              ul.lista-ul
                li
                  i.fas.fa-check.c2
                  p.mb-0 Buscar recursos económicos necesarios.
                li
                  i.fas.fa-check.c2
                  p.mb-0 Abrir cuentas bancarias. 
                li
                  i.fas.fa-check.c2
                  p.mb-0 Mantener reuniones periódicas con el comité organizador.
                li
                  i.fas.fa-check.c2
                  p.mb-0 Establecer las prioridades de gastos.
                li
                  i.fas.fa-check.c2
                  p.mb-0 Efectuar los pagos.
                li
                  i.fas.fa-check.c2
                  p.mb-0 Llevar el balance detallado de los gastos efectuados. 
            div.px-2(numero="4" titulo="Comunicación") Definir y llevar a cabo el plan de medios o plan de <i>marketing</i> del evento según el presupuesto asignado.
            div.px-2(numero="5" titulo="Seguridad") 
              ul.lista-ul
                li
                  i.fas.fa-check.c2
                  p.mb-0 En caso de que los ponentes o invitados sean muy importantes (presidentes, políticos, famosos, cantantes, actrices…).
                li
                  i.fas.fa-check.c2
                  p.mb-0 Coordina todas las actividades de seguridad: contacto con policía, transporte de ponentes o invitados, seguridad privada.
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/Tema1/img34.png', alt="Imagen decorativa")

    .row.mb-5(data-aos="fade-right")
      .col-auto.tta.px-5.py-2
        p.text-center.mb-0  <strong>Promoción / <i>Marketing</i> del evento</strong>              
    
    .row.fon33.mb-5  
      .row.justify-content-center.mb-4
        .col-lg-8(data-aos="zoom-in")
          img(src='@/assets/curso/Tema1/img35.svg', alt="• Medios de comunicación: o Radio, televisión o Correo directo • Publicidad impresa: o Periódicos")
      
      p.tte.mb-5(data-aos="fade-right") <strong>Diseño y elaboración de invitaciones</strong>
      
      .row.justify-content-center.mb-5
        .col-lg-6.order-lg-1.order-2
          p(data-aos="fade-right") Tener en cuenta:
          ul.lista-ul
            li.mb-0(data-aos="fade-right")
              i.fas.fa-check.c2
              p.mb-2 Colores
            li.mb-0(data-aos="fade-right")
              i.fas.fa-check.c2
              p.mb-2 Temática
            li.mb-0(data-aos="fade-right")
              i.fas.fa-check.c2
              p.mb-2 Forma  y tamaño: cuadrado, circular, alargada, grande, mediana, pequeña
            li.mb-0(data-aos="fade-right")
              i.fas.fa-check.c2
              p.mb-2 Información:  nombre del evento, breve descripción, fecha, lugar, hora. De ser necesario indicar el tipo de vestuario 
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/Tema1/img36.png', alt="Publicidad de un congreso, con fecha, lugar, nombre del evento y paginas oficiales.")
      
      p.mb-0.tte.mb-5(data-aos="fade-right") <strong>Diseño de la plantilla de asistencia</strong>

      .row.justify-content-center.mb-5
        .col-lg-7(data-aos="zoom-in")
          img(src='@/assets/curso/Tema1/img37.png', alt="Imagen que ilustra una plantilla de registro de asistencia a un evento donde debe contener:<br>fecha del evento<br>lugar del evento<br>Responsable del evento<br>Facilitador<br>Hora<br>Registro de asistentes")
    
      .row.mb-5(data-aos="fade-right")
        .col-auto.tta.px-5.py-2
          p.text-center.mb-0 <strong>Contratación de servicios</strong>
    
    .row.justify-content-center.bg7.mb-5(data-aos="zoom-in")
      .col-lg-10
        img(src='@/assets/curso/Tema1/img38.svg', alt="01. Sede del evento 02. Tiquetes aéreos (en caso de que el evento cubra el transporte del ponente). 03. Alojamiento de ponentes y/o invitados especiales. 04. Medios audiovisuales. 05. Servicios de protocolo, logística e inscripción. 06. Traducción simultánea. 07. Organización de alimentos y bebidas. 08. Transporte. 09. Tours en la ciudad para ponentes o invitados especiales. 10. Mesones, manteles, tarimas…")
    
    .row.mb-5(data-aos="fade-right")
      .col-auto.tta.px-5.py-2
        p.text-center.mb-0 <strong>Definición de acomodación según número de asistentes</strong>
    
    SlyderF.mb-5(columnas="col-lg-6" data-aos="zoom-in")
      .tarjeta.color-primario1.p-4.h-100
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/Tema1/ico11.svg', alt="Imagen decorativa")
        h4.text-center.mt-4 Auditorio o teatro
        p.text-center.mb-0 Las sillas se disponen todas juntas como en un teatro, este puede ser rectangular o semicircular.
      .tarjeta.color-primario1.p-4.h-100
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/Tema1/ico12.svg', alt="Imagen decorativa")
        h4.text-center.mt-4 Banquete 
        p.text-center.mb-0 Las sillas se disponen en torno a las mesas redondas de 8, 10 o 12 personas.
      .tarjeta.color-primario1.p-4.h-100
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/Tema1/ico13.svg', alt="Imagen decorativa")
        h4.text-center.mt-4 Aula o escuela
        p.text-center.mb-0 Las sillas se acomodan en filas con tablones rectangulares o medios tablones al frente para poder escribir. El estrado puede quedar al frente o al lado de las mesas.
      .tarjeta.color-primario1.p-4.h-100
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/Tema1/ico14.svg', alt="Imagen decorativa")
        h4.text-center.mt-4 Herradura
        p.text-center.mb-0 Los tablones se acomodan en forma de U, permitiendo que todos los asistentes queden mirándose entre sí.
      .tarjeta.color-primario1.p-4.h-100
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/Tema1/ico15.svg', alt="Imagen decorativa")
        h4.text-center.mt-4 Cóctel
        p.text-center.mb-0 Generalmente, el espacio no lleva sillas, ni mesas, solo algunas mesas de apoyo para descargar copas, platos, entre otros.
    
    p.mb-5(data-aos="fade-right") Ya abordada la fase de pre-evento, junto con las dos fases que la conforman, es importante detallar lo que ocurre en las fases de evento y pos-evento. Teniendo en cuenta que en el evento es donde se van a ejecutar todas las actividades que se planificaron durante el pre-evento. 
    
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Tema1/img39.png')})`}" data-aos="fade-right" alt="Imagen decorativa"
      )
      .bloque-texto-g__texto.p-5(data-aos="fade-left")
        p.mb-0 Va a consistir en la reunión de todas las personas involucradas en el mismo, en el lugar y hora estimada, guiadas por la programación que el comité organizador preparó como evento. En este sentido, se aconseja realizar un ensayo de todo el evento, al menos con 24 horas de anticipación, para asegurar que todo está en orden y, en caso de que algo falle, poder corregirlo.
    
    .row.justify-content-center.mb-5
      .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
        p Una vez finaliza el evento, inicia la fase de pos-evento, que se basa en dos momentos importantes, el primero, que apunta a la recopilación y sistematización de la información pertinente para el evento, y la evaluación del mismo.
        .cajon.color-primario.p-4
          p Recopilar y sistematizar la información es una tarea que inicia justo al culminar el evento, para ello, las comisiones deberán entregar un informe de sus actividades. Dicha información deberá guardarse en forma ordenada para facilitar futuras consultas. Con lo anterior, se procede a realizar la evaluación del evento, acción que consiste en medir si lo planificado se cumplió en el momento oportuno. Se recomienda que se envíe a los asistentes una encuesta de opiniones para saber cómo les ha resultado el evento y si se ha conseguido el objetivo del mismo. 
          p.mb-0 Dicha evaluación también se debe consignar en el informe.
      .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/Tema1/img40.png', alt="Imagen decorativa")
    
    p(data-aos="fade-right") Es importante cerrar el evento con los respectivos agradecimientos; es decir, se deben enviar cartas o un correo electrónico de agradecimiento a todas aquellas personas que hicieron posible que el evento se desarrollara conforme con lo previsto (patrocinadores, ponentes, etc.).
    
    separador
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.6 Montajes de los eventos

    p.mb-5(data-aos="fade-right") Se reconoce como montaje del evento al proceso que se utiliza para diseñar los planos y secuencias de un <strong>evento</strong> o actividad, de forma que los asistentes perciban la integración armónica de todo lo que haga parte del mismo. Para entender mejor este tema, le invitamos a ver el siguiente recurso sobre los tipos de montajes de eventos: 
    
    .tarjeta.tarjeta--azul.p-4.mb-5.fon22(data-aos="zoom-in") 
      SlyderA.aq3(tipo="b")
        .row.justify-content-center.px-2
          .col-lg-6.order-lg-1.order-2
            h4 Tipo escuela
            p.mt-4 Utilizado para realizar actividades de tipo académico,  pero con pocas personas.
            p.mt-4.mb-0 <strong>Su escenografía</strong>
            p Una tarima con mesa principal y, frente a esta, mesas rectangulares con capacidad para alrededor de cuatro a seis personas; se dejan espacios entre cada mesa para que las personas puedan caminar sin problema.
            p.mt-4.mb-0 <strong>Beneficio</strong>
            ul.lista-ul.mb-0.ms-4
              li.mb-0
                i.fas.fa-check.c2
                p.mb-0 Las personas pueden colocar material de apoyo o aparatos tecnológicos en la mesa para tomar notas. 
              li.mb-0
                i.fas.fa-check.c2
                p Facilita a los participantes ver claramente lo que se proyecte en la pantalla o lo que exponga el ponente.
            p.mb-0 <strong>Requerimientos</strong>
            p.mb-0 Salón grande y un número de participantes pequeño.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/Tema1/img41.png', alt="Imagen decorativa")
        .row.justify-content-center.px-2
          .col-lg-6.order-lg-1.order-2
            h4 Tipo auditorio
            p.mt-4 Se usa cuando se tienen actividades académicas con audiencias muy grandes, como, por ejemplo, asambleas, reuniones de funcionarios, asociaciones, entre otros. 
            p.mt-4.mb-0 <strong>Su escenografía</strong>
            p Tiene filas rectas de asientos con un pasillo en el centro o dos pasillos laterales. Los asientos miran hacia el área del ponente. 
            p.mt-4.mb-0 <strong>Beneficio</strong>
            ul.lista-ul.mb-0.ms-4
              li.mb-0
                i.fas.fa-check.c2
                p.mb-0 Es el montaje más fácil de hacer por el personal encargado y es el más común de los estilos de montaje.
              li.mb-0
                i.fas.fa-check.c2
                p El expositor no tiene problemas para ver a los miembros del auditorio. 
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/Tema1/img42.png', alt="Imagen decorativa")
        .row.justify-content-center.px-2
          .col-lg-6.order-lg-1.order-2
            h4 Tipo "U"
            p.mt-4 Se utiliza para realizar actividades académicas o sociales para pocas personas (16 personas o menos). Si el grupo es mayor de 20 personas, es preferible buscar otro estilo de disposición del salón.
            p.mt-4.mb-0 <strong>Su escenografía</strong>
            p Incluye mesas y asientos colocados en tres lados del salón con un cuadrado vacío en el centro. 
            p.mt-4.mb-0 <strong>Beneficio</strong>
            p Todos pueden ver al dictante y también interactuar entre ellos. Facilita la discusión y promueve tanto la comunicación interpersonal como la no verbal. 
            p.mt-4.mb-0 <strong>Recomendación</strong>
            p Se recomienda para ruedas de prensa o eventos donde asistirán medios de comunicación.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/Tema1/img43.png', alt="Imagen decorativa")
        .row.justify-content-center.px-2
          .col-lg-6.order-lg-1.order-2
            h4 Tipo mesa imperial
            ul.lista-ul.mb-0.mt-4.ms-4
              li.mb-0
                i.fas.fa-check.c2
                p.mb-0 Se usa, sobre todo, para celebraciones protocolarias, almuerzos o cenas de negocios, pues la integran gran cantidad de comensales, a partir de 50 personas, generalmente. 
              li.mb-0
                i.fas.fa-check.c2
                p Este montaje es usual emplearlo en palacios o en ciertas instituciones del Estado.
              li.mb-0
                i.fas.fa-check.c2
                p No hay ponencias, se usa para celebrar, más que todo.
            p.mt-4.mb-0 <strong>Su escenografía</strong>
            p Mesa cuadrada, sin hueco en el centro.<br>Se utiliza en eventos formales.
            p.mt-4.mb-0 <strong>Beneficio</strong>
            p Mayor interacción entre los participantes.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/Tema1/img44.png', alt="Imagen decorativa")
        .row.justify-content-center.px-2
          .col-lg-6.order-lg-1.order-2
            h4 Tipo banquete
            p Aunque su nombre es de banquete, no quiere decir que usted tiene que servir comida para disponer un salón de conferencias de esta manera. <br>Este tipo de estilo promueve trabajo en equipo y discusión en grupo. Pueden ser eventos sociales como desayunos, almuerzos o cenas, bodas, quince años, aniversarios, entre otros, o también pueden ser reuniones de trabajo.
            .h5 Su escenografía
            ul.lista-ul.ms-4
              li
                i.fas.fa-check.c2
                | Mesas redondas o rectangulares  montadas para 6 a 10 personas.
              li
                i.fas.fa-check.c2
                | Se pueden iluminar para generar decoración.
            .h5 Desventajas
            ul.lista-ul.ms-4
              li
                i.fas.fa-check.c2
                | La mitad de los participantes tendrán que girar sus asientos en la dirección opuesta para ver al ponente, novios, o quinceañera, según sea el caso.
              li
                i.fas.fa-check.c2
                | También será dificultoso para algunos en el auditorio poder ver adecuadamente las ayudas visuales. 
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/Tema1/img45.png', alt="Imagen decorativa")
        .row.justify-content-center.px-2
          .col-lg-6.order-lg-1.order-2
            h4 Tipo coctel
            p.mt-4 Es uno de los montajes más prácticos cuando se ofrece una alimentación ligera, precisamente para los cocteles, refrigerios, entre otros. 
            p.mt-4 Su uso favorece cuando hay muchos comensales y no se cuenta con un espacio amplio para atenderlos a todos; el montaje tipo coctel viene a resolver esta situación.
            p.mt-4  La ventaja es que ahorra espacio; sin embargo, se debe recordar que es para actividades que no duren más de una hora, debido a que los invitados estarán de pie.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/Tema1/img46.png', alt="Imagen decorativa")
        .row.justify-content-center.px-2
          .col-lg-6.order-lg-1.order-2
            h4 Tipo #[em lounge]
            p.mt-4 Hoy en día, se utiliza mucho para eventos sociales con un ambiente relajado. Se usa para actividades de celebración. Usted podrá sentarse a beber algo, conversar y escuchar música. 
            .h5 Su escenografía
            ul.lista-ul.ms-4
              li.mb-0
                i.fas.fa-check.c2
                p.mb-0 Se caracteriza por emplear cómodos sillones para dos personas o individuales, #[em puffs] y mesas iluminadas, etc. Todo con un estilo original y, en muchos casos, minimalista.
              li.mb-0
                i.fas.fa-check.c2
                p.mb-0 Uso de luces y velas como parte de la decoración.
            .h5 Beneficios
            ul.lista-ul.ms-4
              li.mb-0
                i.fas.fa-check.c2
                | El ambiente relajado y de esparcimiento que se genera.
              li.mb-0
                i.fas.fa-check.c2
                | Mucha interacción entre participantes.
            .h5 Desventajas
            p No es recomendable para eventos académicos.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/Tema1/img47.png', alt="Imagen decorativa")
        .row.justify-content-center.px-2
          .col-lg-6.order-lg-1.order-2
            h4 Tipo feria
            ul.lista-ul.mb-0.mt-4.ms-4
              li
                i.fas.fa-check.c2
                p Este montaje se usa para la exposición de cualquier tipo de mercancías en ferias y eventos.
              li
                i.fas.fa-check.c2
                p Los toldos dan un toque de alegría e identidad cultural. 
              li
                i.fas.fa-check.c2
                p Se pueden usar presentaciones modernas, pero sin perder su tradicionalismo.
              li
                i.fas.fa-check.c2
                p Se usan en diferentes colores y telas impermeables.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/Tema1/img48.png', alt="Imagen decorativa")
   
    separador
    #t_1_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.7	Recursos para la organización de eventos 

    p.mb-5(data-aos="fade-right") A la hora de iniciar la organización de un evento, sin duda, uno de los factores más importantes son los recursos con los se puede contar para la organización del mismo. Siendo consecuente con ello, en la siguiente tabla encontrará algunos recursos humanos, materiales y físicos con los que se debe contar:
    
    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
      h5 Tabla 2.
      span Recursos para la organización de eventos

    .tabla-a.color-acento-contenido.mb-5 
      table(alt="Se describe en esta tabla todos los recursos que se requieren tanto humanos, como físicos y materiales para un evento.")
        caption.text-center Nota. <span style="font-weight: 400">Tomada de López (2021).</span>
        thead
          tr(data-aos="fade-right")
            th(style="width: 50%") Recursos humanos
            th(style="width: 25%") Recursos materiales
            th(style="width: 25%") Recursos físicos
        tbody
          tr(data-aos="fade-right")
            td 
              p Asigne responsabilidades y establezca necesidades.
              ul.lista-ul
                li 
                  i.fas.fa-check.c2
                  | Organizador general de la actividad.
                li 
                  i.fas.fa-check.c2
                  | Moderador: conductor del acto.
                li 
                  i.fas.fa-check.c2
                  | Recibo de invitados y conferencistas.
                li.mt-4
                  i.fas.fa-check.c2
                  | Sonidista.
                li.mt-4
                  i.fas.fa-check.c2
                  | Monitores o personal de logística (apoyo en actividades de logística y en el recibo, atención y despedida de invitados).
                li.mt-4
                  i.fas.fa-check.c2
                  | Seguridad<br>1. Brigada de emergencia.<br>2. Vigilancia.
                li.mt-4
                  i.fas.fa-check.c2
                  | Divulgación del evento en medios de comunicación tradicionales, como prensa, radio y televisión, y difusión en social media.
                li.mt-4
                  i.fas.fa-check.c2
                  | Auditorios: adecuación meticulosa del auditorio en Iluminación, proyección; verificación de equipos audiovisuales, observancia del cumplimiento de las normas de seguridad dentro del recinto, apoyo personal de evento en logística para el ingreso de asistentes al auditorio, etc.
                li.mt-4
                  i.fas.fa-check.c2
                  | Mantenimiento: traslado e instalación de equipos, apoyo alistamiento de espacios definidos para el evento, etc.
                li.mt-4
                  i.fas.fa-check.c2
                  | Servicios generales: espacios limpios, cafetería, etc.
                li.mt-4
                  i.fas.fa-check.c2
                  | Conductores: transporte de asistentes y personal del evento.
                li.mt-4
                  i.fas.fa-check.c2
                  | Acto social: colaboradores servicio de alimentos y bebidas.
            td 
              ul.lista-ul
                li 
                  i.fas.fa-check.c2
                  | Insignias
                li 
                  i.fas.fa-check.c2
                  |  Astas para auditorio.
                li 
                  i.fas.fa-check.c2
                  | Atril para auditorio.
                li 
                  i.fas.fa-check.c2
                  | Emblemas institucionales.
                li 
                  i.fas.fa-check.c2
                  | Estandartes.
                li 
                  i.fas.fa-check.c2
                  | <i>Counters</i>.
                li 
                  i.fas.fa-check.c2
                  | Mobiliario.
                li 
                  i.fas.fa-check.c2
                  | Video institucional.
                li 
                  i.fas.fa-check.c2
                  | Himnos.
                li 
                  i.fas.fa-check.c2
                  | Mantelería.
                li 
                  i.fas.fa-check.c2
                  | Escarapelas.
                li 
                  i.fas.fa-check.c2
                  | Arreglos florales.
                li 
                  i.fas.fa-check.c2
                  | Menaje de eventos.
                li 
                  i.fas.fa-check.c2
                  | Papelería de eventos.
                li 
                  i.fas.fa-check.c2
                  | Paraguas.
                li 
                  i.fas.fa-check.c2
                  | Toldos.
                li 
                  i.fas.fa-check.c2
                  | Cámara de video y fotográfica.
            td 
              ul.lista-ul
                li.mt-4
                  i.fas.fa-check.c2
                  | El lugar seleccionado debe ser acorde con las necesidades del evento programado y estar en concordancia con el número de asistentes.
                li.mt-4 
                  i.fas.fa-check.c2
                  | Delimitación de espacios para llevar a cabo actividades conexas dentro del evento, como: registro de asistentes, reuniones alternas, actos sociales, salas VIP, etc.
                li.mt-4 
                  i.fas.fa-check.c2
                  | Servicio de parqueaderos.
                li.mt-4 
                  i.fas.fa-check.c2
                  | Bodega.
                li.mt-4 
                  i.fas.fa-check.c2
                  | Servicio de baños públicos.

    separador
    #t_1_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.8	Espacios para la realización de eventos

    p.mb-5(data-aos="fade-right") El espacio en el que se lleva a cabo un evento juega un papel importante, pues es el plano en el que los asistentes del mismo viven la experiencia, que es el principal objetivo de este tipo de organizaciones. Conozca algunos de estos espacios: 
    
    .tarjeta.tarjeta--azul.p-4.mb-5.fon11(data-aos="zoom-in")   
      SlyderA.aq2(tipo="b")
        .row.justify-content-center.px-2
          .col-lg-5.order-lg-1.order-2
            h4 Elección de un espacio
            p.mt-5 Elegir un espacio para realizar un evento no es tarea fácil, más aún porque la sociedad pide personalización, innovación y entretenimiento. Es por ello que en los últimos años han proliferado los espacios para eventos diferentes, adaptados a las peticiones de los visitantes. 
            p Muchos propietarios de estos espacios “diferentes” los alquilan para eventos, rodajes o sesiones de fotos. Ya no es necesario caer en el clásico concepto de hotel o sala de conferencias: 
            p.text-center <strong>Hacer que la mezcla entre el espacio y el objetivo del evento sean acordes.</strong>
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/Tema1/img51.png', alt="Imagen decorativa" )
        .row.justify-content-center.px-2
          .col-lg-5.order-lg-1.order-2
            h4 Espacios para eventos rurales y naturales
            p.mt-5 Casas rurales o rodeadas de naturaleza tienen una gran demanda para realizar todo tipo de eventos; desde bodas u otros eventos sociales hasta eventos corporativos, está muy de moda celebrar cualquier acontecimiento en lugares donde la naturaleza es el marco protagonista.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/Tema1/img52.png', alt="Imagen decorativa" )
        .row.justify-content-center.px-2
          .col-lg-5.order-lg-1.order-2
            h4 Palacios y casas con historia en los centros de la ciudad
            p.mt-4 Los propietarios de este tipo de espacios cuidan mucho los detalles y mantienen la grandiosidad de otras épocas: decoraciones barrocas, estilos neoclásicos, espacios de carácter victoriano.
            p Desde eventos corporativos hasta sociales, pasarelas, <i>showrooms</i>. Este tipo de espacios tienen un encanto especial que puede ser muy adecuado en algunos tipos de acontecimientos en concreto.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/Tema1/img53.png', alt="Imagen decorativa") 
        .row.justify-content-center.px-2
          .col-lg-5.order-lg-1.order-2
            h4 Almacenes, fábricas y bodegas industriales
            p.mt-4 La decoración de estilo industrial está de moda. Ambientes creados en naves industriales, fábricas, almacenes… o simplemente en salas con este tipo de decoración son un éxito asegurado.
            p Los beneficios de este tipo de espacios están principalmente relacionados con el tamaño: capacidad para muchos visitantes y muchos elementos. 
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/Tema1/img54.png', alt="Imagen decorativa")
        .row.justify-content-center.px-2
          .col-lg-5.order-lg-1.order-2
            h4 <i>Lofts</i>, áticos y azoteas privadas
            p.mt-4 Si necesita un espacio moderno, en el centro de la ciudad y para celebrar un evento con cierto aire desenfadado, debería añadir a la lista las azoteas, terrazas, áticos y <i>lofts</i> privados. 
            p Son ideales para acontecimientos en los que el número de asistentes no es muy grande. Si además el espacio tiene buenas vistas, el evento estará a la altura de todos.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/Tema1/img55.png', alt="Imagen decorativa")
        .row.justify-content-center.px-2
          .col-lg-5.order-lg-1.order-2
            h4 Espacios flexibles para <i>branding</i>
            p.mt-4 Desde hace unos años, y probablemente debido a la crisis, muchos negocios <strong>han optado por usar locales, calles, casas, etc., durante un tiempo limitado para promocionarlo, vender sus productos o servicios.</strong> Y la experiencia es siempre positiva.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/Tema1/img56.png', alt="Imagen decorativa" )
        .row.justify-content-center.px-2
          .col-lg-5.order-lg-1.order-2
            h4 Gastroespacios
            p.mt-4 En <strong>espacios académicos - sociales:</strong>
            p Con una cocina altamente equipada, suelen incluir también amplios comedores para recibir a invitados y realizar eventos, y también disponer de mesas de trabajo para grupos donde realizar talleres, catas, celebraciones.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/Tema1/img57.png', alt="Imagen decorativa" )
        .row.justify-content-center.px-2
          .col-lg-5.order-lg-1.order-2
            h4 En restaurante - bar
            p.mt-4 Establecimiento comercial donde se combina la gastronomía con los eventos.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/Tema1/img58.png', alt="Imagen decorativa" )

    separador
    #t_1_9.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.9	Tendencias en eventos

    p(data-aos="fade-right") La demanda actual en el segmento turístico de eventos exige evolución constante de la oferta. Las empresas MICE se reinventan permanentemente, ajustando sus propuestas a estas nuevas exigencias en el mercado de eventos, creando experiencias únicas que motivan al visitante a explorar el destino más allá del evento. 
    p.mb-5(data-aos="fade-right") Observe el siguiente recurso, donde se presentan algunas tendencias que se presentan hoy día:
    
    .row.justify-content-center.mb-4
      .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
        LineaTiempoD.color-acento-botones
          p(numero="1" titulo="Eventos digitales") Es similar a un evento tradicional; marca la diferencia al ser un evento en línea y los asistentes se reúnen desde lugares diversos, a través de una plataforma. Las plataformas más usadas en eventos digitales son: Zoom, Meet, Webex, etc. Presenta algunas ventajas, como, por ejemplo: al organizador del evento le proporciona la alternativa de ampliar el número de participantes y ponentes que pueden estar ubicados en diferentes partes del mundo o que presentan incompatibilidad de horario. Desde la perspectiva del invitado, el formato de evento <i>online</i> le brinda la oportunidad de pagar un valor más reducido, estar en cualquier parte del mundo y, en ocasiones, ver el evento en horarios distintos al estipulado originalmente por la empresa (esto cuando se deja grabado).
          p(numero="2" titulo="Eventos híbridos") Su característica principal se encuentra en la interacción y participación incrementada al combinar acciones físicas o materiales con la virtualidad. Se realiza con presencia física de los actores en diferentes sedes que están, a su vez, enlazadas vía <i>streaming</i>, posibilitando a los asistentes una retransmisión en vivo, entregando experiencias reales sincrónicas. En el espacio físico, normalmente asiste un reducido número de asistentes, y en la parte virtual, se usan plataformas audiovisuales y tecnológicas (videoconferencias en <i>streaming, chats,</i> etc.) a través de las cuales los asistentes pueden participar en el evento desde sus casas o ciudades de origen.<br>Cuenta con varias ventajas: ahorro en tiempo y gastos que se derivan de los traslados de asistentes y ponentes; la audiencia puede ser más grande; mejora el impacto en redes sociales y también posibilita el establecimiento de indicadores de medición de la trascendencia del evento y satisfacción de los asistentes.
          p(numero="3" titulo="Eventos en escenarios 3D con la personificación de avatares") Se usa una réplica de las fisonomías del rostro de la persona transformada a un avatar en 3D, es digital, se convierte en una figura digital capaz de interactuar de manera inmersiva en escenarios virtuales.
          p(numero="4" titulo="Eventos sostenibles") Acciones amigables con el medio ambiente es la consigna mundial hoy, razón por la cual, muchas empresas se enfocan en eventos que minimicen la afectación al ecosistema, promocionando la producción del lugar y la conexión con la naturaleza. Algunas medidas que se vienen utilizando son: ofrecimiento de medios de transporte menos contaminantes, el ajuste de las cantidades de alimentos sobrantes en comidas y cenas, etc. 
          p(numero="5" titulo="<i>Small meeting</i>") Consiste en organizar pequeños espacios y grupos de trabajo observando los protocolos de bioseguridad. Sus usuarios valoran el trabajo en equipo y refuerzan vínculos personales y profesionales con clientes, proveedores y colaboradores.          
      .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/Tema1/img60.png', alt="Imagen decorativa")
    
    separador
    #t_1_10.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.10 Formatos de eventos <i>online</i>
      
    p.mb-5(data-aos="fade-right") Los formatos <i>online</i> son muy flexibles y permiten la adaptación de un formato de evento presencial como concierto, conferencia, congreso, feria, espectáculos y demás para su realización. Le invitamos a ver el siguiente recurso, en el que se explican algunos de ellos: 
    
    .row.justify-content-center.mb-5
      .col-lg-6.col-10.mb-lg-10.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/Tema1/img61.png', alt="Imagen decorativa")
      .col-lg-6(data-aos="fade-left")
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul1")
          div(titulo="Cumbre virtual")
            p.mb-0 El formato está diseñado en función del <i>marketing</i>; los ponentes presentan información específica tendiente a varios objetivos: captación de clientes, fidelización de los mismos, construcción de imagen y marca, etc., generando nuevos contenidos para su audiencia. El promedio de oradores es de 30 y su duración varía entre 3 y 10 días.
          div(titulo="Conferencias <i>online</i>")
            p.mb-0 Sus oradores y temáticas son variadas, se realiza en vivo y cuenta con áreas virtuales de relajación, áreas para la práctica de <i>networking</i> y áreas de entretenimiento.
          div(titulo="<i>Webinar</i>")
            p.mb-0 Conferencia, taller o seminario virtual con contenido educativo; su principal diferencia radica en el nivel de participación de los asistentes, ya que, en este tipo de evento, los participantes y el conferenciante tienen un nivel de interactividad mayor que en los otros eventos académicos.
          div(titulo="Talleres <i>online</i>")
            p.mb-0 Se brinda entrenamiento práctico a los empleados de una organización. Pueden durar entre 30 minutos y 3 horas; se requiere una duración corta y eliminar barreras de acceso para las personas que están trabajando.
          div(titulo="Festivales <i>online</i>")
            p.mb-0 Combina contenido con experiencias, es decir, existe un programa con una sección académica que puede contener notas claves, talleres, conferencias, etc., y una sección social, con experiencias que lleven a los participantes al disfrute mientras interactúan con otros asistentes. Este tipo de eventos usualmente integran el entretenimiento y la interacción desde la experiencia, esto puede incluir sesiones de baile, de yoga, meditaciones, discusiones grupales, etc.

    .row.justify-content-center.mb-5
      .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul1")
          div(titulo="<i>Chats online fireside</i> (“caseros”)")
            p.mb-0 Formato caracterizado por facilitar la cercanía entre asistentes y orador en sesiones privadas y que es considerado como un evento. También puede tener su origen como sesión complementaria en una cumbre o conferencia virtual. 
          div(titulo="Ferias y exposiciones comerciales virtuales")
            p.mb-0 Formato de gran escala en el cual se exponen productos y servicios directamente, con el objetivo de sensibilizar a futuros clientes y fidelizar a los existentes. 
          div(titulo="<i>Happy hour</i> virtual o <i>afterwork</i>")
            p.mb-0 Son eventos cortos, que se pueden realizar en la mañana, tarde o noche, fomentando la interacción entre los participantes en un ambiente más tranquilo. La idea con estos eventos es que el organizador envíe previamente, a la casa de sus invitados, un desayuno, una bebida, o algún tipo de merienda para que pueda ser compartida de manera online con los otros participantes; propicia el relacionamiento y denota afecto y atención en el bienestar entre oferente e invitados.
          div(titulo="<i>Tour virtual</i>")
            p.mb-0 Es una visita simulada, la cual se construye previamente tomando las imágenes del sitio en 360 grados, facilitando el desplazamiento de una ubicación a otra. Suele ser aplicado para mostrar una sala de exposiciones de un recinto de eventos, hoteles, espacios icónicos de un destino turístico, un restaurante, un museo, sitios arqueológicos, etc. Se crean a partir de la tecnología de realidad virtual, que permite la construcción de lugares artificiales para generar experiencias inmersivas para los usuarios. Cada participante puede desplazarse e interactuar con elementos o mobiliario del lugar que se está mostrando. El <i>tour</i> puede ser un recorrido programado o no; y puede tener libre desplazamiento.
      .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/Tema1/img62.png', alt="Imagen decorativa")
    
    p.mb-5(data-aos="fade-right") Estimado aprendiz, para complementar este tema, en el siguiente enlace, encontrará un ejemplo de un <i>tour</i> virtual sobre: “La historia del museo y el museo en la historia”:
    
    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="flip-up")
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img.tam1(src="@/assets/curso/Tema1/ico5.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5 ¡Importante!
                  p Ver ejemplo de un <i>tour</i> virtual: “La historia del museo y el museo en la historia”.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="('https://museonacional.gov.co/noticias/Paginas/Recorrido_virtual_sala1.aspx')" target="_blank")
                    span Ver
                    i.fas.fa-link
    
    separador
    #t_1_11.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.11 Plataformas para desarrollar eventos virtuales

    p.mb-5(data-aos="fade-right") Así como existen eventos presenciales, gracias a la globalización, que ha permitido la llegada de las tecnologías de la información y las comunicaciones – TIC, hoy por hoy existen varias plataformas que se han especializado en ofrecer un servicio de acuerdo con la demanda de un evento de este tipo. Le invitamos a ver el siguiente recurso, donde se presentan las diferentes plataformas empleadas para desarrollar eventos virtuales:
    
    .row.justify-content-center.mb-4
      .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/Tema1/img71.png', alt="Imagen decorativa")
      .col-lg-6
        .tarjeta.tarjeta--azul.p-4.qaw.sombra
          SlyderA.pp.flecha-blanca(tipo="b")
            .row.justify-content-center
              .col-lg-5.col-10
                img.baqw(src='@/assets/curso/Tema1/z1.svg', alt="Imagen decorativa")
              p.mt-4 Plataforma intuitiva y fácil de usar. Transmite reuniones, conferencias y seminarios web con video, audio y mensajería instantánea. Dispone de versión <i>premium</i>, que posibilita el tener hasta 1.000 participantes y 10.000 espectadores, con herramientas interactivas.
            .row.justify-content-center
              .col-lg-3.col-6
                img.baqw(src='@/assets/curso/Tema1/z2.svg', alt="Imagen decorativa")
              p.mt-4 <i>App</i> de videoconferencias desarrollada por la compañía Google Inc, se accede desde buscadores web y dispositivos móviles; las empresas y organizaciones son sus principales usuarios, ya que fue ideada para dinamizar el entorno laboral. Cuenta con una interfaz sencilla, y para poder crear las reuniones, se debe tener activa una cuenta en Google.
            .row.justify-content-center
              .col-lg-3.col-6
                img.baqw(src='@/assets/curso/Tema1/z3.svg', alt="Imagen decorativa")
              p.mt-4 Es un espacio de trabajo diseñado para mejorar la comunicación y colaboración de los equipos de trabajo de las organizaciones, reforzando las funciones colaborativas de la plataforma en la nube de Microsoft. Cuenta con <i>chats</i> individuales y grupales, conversaciones de equipo, videoconferencias, notas, acceso a contenido compartido, Office Online, Planner, entre otras. 
            .row.justify-content-center
              .col-lg-8
                img.baqw(src='@/assets/curso/Tema1/z4.svg', alt="Imagen decorativa")
              p.mt-4 Permite tener hasta 6 expositores en vivo, compartir pantalla, y difundir el <i>streaming</i> por medio de Facebook, YouTube y LinkedIn para tener mayor alcance. Videoconferencias, notas, acceso a contenido compartido, Office Online, Planner, entre otras. 
            .row.justify-content-center
              .col-lg-4.col-8
                img.baqw(src='@/assets/curso/Tema1/z5.svg', alt="Imagen decorativa")
              p.mt-4 Se pueden hacer videoconferencias y congresos <i>online</i>. Cuenta con funciones para preguntas y respuestas.
            .row.justify-content-center
              .col-lg-6.col-10
                img.baqw(src='@/assets/curso/Tema1/z6.svg', alt="Imagen decorativa")
              p.mt-4 Puede crear videos en tiempo real, tanto para pequeños negocios como para grandes empresas. Puede usar esta herramienta para realizar demostraciones de productos, reuniones, seminarios, cursos <i>online</i>, capacitaciones o cualquier evento que necesite.

    separador
    #t_1_12.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.12 Mercadeo <i>online</i> para eventos

    p.mb-5(data-aos="fade-right") Los eventos virtuales, al igual que los presenciales, deben despertar emociones en los asistentes. Organizadores de eventos, fiestas, conciertos, etc., con muchos años de experiencia, han comenzado a migrar sus servicios al mundo online, y para ello, ha sido esencial contar con una planificación y estrategias de mercadeo que logren afianzar sus relaciones con los clientes y conectarlos con los valores de la marca. 
    
    .row.justify-content-center.mb-5
      .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/Tema1/img70.png', alt="Imagen decorativa")
      .col-lg-6(data-aos="fade-left")
        .cajon.color-acento-botones.p-4.mb-4.sombra
          p.mb-0 <strong>Desarrollar estrategias de mercadeo digital para la promoción de eventos no solo es importante en el antes, sino también en el durante y en el después de dichos eventos. Hoy en día, todo suceso pasa por Internet, que es un medio ideal para cualquier tipo de proceso; websites, plataformas digitales, apps han abierto un panorama inmenso al conseguir un mayor impacto y visibilidad para las organizaciones que comprenden que el consumidor moderno es autónomo, gestiona él mismo la información, es decir, es un cibernauta.</strong>
        p.mb-0 Dicho esto, queda claro que los medios digitales representan una oportunidad para la formulación de estrategias de marca en las organizaciones. El mercadeo en este campo realiza métricas de <i>marketing</i> sincrónicas, interactuando con los consumidores y ajustando la estrategia a partir de los resultados. Esta flexibilidad y dinámica propia del <i>marketing</i> digital resulta, en términos económicos, más viable al comparar con los medios tradicionales de difusión, como radio, televisión o prensa. 
  
    .row.align-items-end.mb-5(data-aos="fade-right")
      .col.img-02
        img(src='@/assets/curso/fondos/icono2.svg')
      .col-auto.BG01
        h3.ps-5.mb-0 Herramientas de <i>marketing</i> digital
    
    p.mb-5(data-aos="fade-right") El <i>marketing</i> digital se refiere al conjunto de estrategias que se emplean para promocionar, en este caso, los eventos, ya sean presenciales o a través de alguna plataforma digital; a diferencia del <i>marketing</i> tradicional, este se hace a través de canales y métodos que permiten el análisis de los resultados en tiempo real, tal como lo podrá observar en el siguiente recurso, en el que encontrará detalles de la manera como los eventos son socializados a través de las redes sociales:
    
    TabsC.color-primario.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="<i>Landing page</i>")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            p Son páginas web personalizadas cuya finalidad es atraer visitantes y convertirlos en clientes potenciales presentando información de productos y/o servicios específicos. Se llega a ellas cuando el visitante a un sitio web accede a un hipervínculo de los que regularmente se encuentran allí. Para el caso de los eventos, el internauta accede a través de un banner en la red, que lo lleva a conocer rápidamente la información del evento como tal. El objetivo de estas <i>landing pages</i> es capturar la atención del visitante en pocos segundos, por lo tanto, no son sitios donde se compartan grandes detalles del evento, pero sí son un abre bocas al mismo, convirtiéndose en el primer acercamiento de la oferta al prospecto.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/Tema1/img80.png', alt="Imagen decorativa")
      .py-3.py-md-4(titulo="Campaña en redes sociales")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            p Las redes sociales se han convertido  desde hace varios años en  la vía más rápida y sencilla para la difusión de todo tipo de información; cada una de ellas impulsa de forma diferenciada, bien sea a través de publicidad, <i>lives</i>, videos o mensajes directos.  
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            .row.justify-content-center
              .col-lg-3.col-6.px-1.mb-lg-0.mb-4
                .colorq.h-100.p-3
                  .row.justify-content-center.mb-4
                    .col-6
                      img(src='@/assets/curso/fondos/1.png', alt="Imagen decorativa")
                  .h4.text-center Facebook
                  p.mb-1 Los usuarios buscan entretenerse.
                  p.mb-1 En esta red se incluye:
                  p.mb-1 -Información breve
                  p.mb-1 -Contenido multimedia
                  p.mb-1 -#[em Lives] durante el evento
                  p.mb-0 -Compartir contenido de terceros
              .col-lg-3.col-6.px-1.mb-lg-0.mb-4
                .colorq.h-100.p-3
                  .row.justify-content-center.mb-4
                    .col-6
                      img(src='@/assets/curso/fondos/2.png', alt="Imagen decorativa")
                  .h5.text-center Twitter conocida ahora como X 
                  p.mb-1 Los usuarios buscan información. 
                  p.mb-1 Se debe publicar: 
                  p.mb-1 -Contenido actual y original 
                  p.mb-1 -Usar #[em Hashtags] 
                  p.mb-0 -Utilizar imágenes y #[em gifs]
              .col-lg-3.col-6.px-1.mb-lg-0.mb-4
                .colorq.h-100.p-3
                  .row.justify-content-center.mb-4
                    .col-6
                      img(src='@/assets/curso/fondos/3.png', alt="Imagen decorativa")
                  .h5.text-center Instagram
                  p.mb-1 Los usuarios buscan imágenes impactantes.
                  p.mb-1 Se debe publicar:
                  p.mb-1 -Visuales de calidad
                  p.mb-1 -Aspectos que no se ven del evento como el montaje o el cierre.
                  p.mb-1 -Contenido de terceros
                  p.mb-0 -#[em Stories]
              .col-lg-3.col-6.px-1.mb-lg-0.mb-4
                .colorq.h-100.p-3
                  .row.justify-content-center.mb-4
                    .col-6
                      img(src='@/assets/curso/fondos/4.png', alt="Imagen decorativa")
                  .h5.text-center Linkedin
                  p.mb-1 Los usuarios buscan consejos y actualizaciones profesionales.
                  p.mb-1 Se debe ofrecer:
                  p.mb-1 -Contenido que hable de la marca.
                  p.mb-1 -Utilizar un tono formal
                  p.mb-1 -Mostrarse profesional
                  p.mb-0 -Compartir noticias
      .py-3.py-md-4(titulo="<i>Email marketing</i>")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            p Correo electrónico diseñado de tal manera que motiva su lectura, redactado en términos sencillos y cuyo objetivo es cautivar al receptor y propiciar su participación en un evento. En la operación del <i>email marketing</i> es importante segmentar la demanda potencial; tener bases de datos clasificadas y organizadas es clave para obtener los logros planteados. 
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/Tema1/img82.png', alt="Imagen decorativa")
      .py-3.py-md-4(titulo="Distribución de contenidos")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            p Los contenidos digitales deben tener la facultad de atraer y retener el interés de los visitantes; se constituyen en una herramienta de promoción y venta de productos o servicios al ser integrados al desarrollo de un evento virtual. Existe una gran variedad de formatos para desarrollar los contenidos digitales en torno a la realización de un evento; entre ellos están: <i>blogs</i>, revistas, correos electrónicos, videos, <i>e-books</i>, etc.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/Tema1/img83.png', alt="Imagen decorativa")
      .py-3.py-md-4(titulo="<i>Streaming</i> del evento")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            p Es difundir un evento en vivo, con audio y video en directo, a interesados en cualquier lugar del planeta, quienes acceden a través de una plataforma digital. Presenta características inmejorables, que contribuyen al buen relacionamiento con clientes, empleados, proveedores y con la comunidad en general; de igual manera, asegura que las personas que no pudieron asistir, queden antojadas para una próxima oportunidad. Para esta estrategia, es necesario tener un equipo técnico de grabación robusto y expertos audiovisuales que generen la transmisión.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/Tema1/img84.png', alt="Imagen decorativa")
      .py-3.py-md-4(titulo="<i>Influencers</i>")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            p Es una técnica que está siendo empleada por muchas organizaciones, donde se escoge una persona que tenga reconocimiento en el medio y que esté relacionada con la temática del evento. La idea es que esta persona hable en sus redes sociales sobre la actividad que se está organizando y, de esta manera, impacte favorablemente a la audiencia objetivo.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/Tema1/img85.png', alt="Imagen decorativa")

    .row.align-items-end.mb-5(data-aos="fade-right")
      .col.img-02
        img(src='@/assets/curso/fondos/icono2.svg')
      .col-auto.BG01
        h3.ps-5.mb-0 Pasos que conducen a la formulación de una adecuada estrategia de <i>marketing</i> digital en eventos
        
    p.mb-5(data-aos="fade-right") En el <i>marketing</i> digital, hay muchas opciones de plataformas, de tipos de contenidos, etc.; sin embargo, al ser un elemento casi intangible, la incertidumbre de aplicarla y de saber si se está empleando de manera apropiada es la constante en los organizadores de eventos. Hay quienes le apuntan al <i>inbound marketing</i> y, en él, al <i>marketing</i> de contenidos, pero, sin duda, se hace necesario establecer un procedimiento organizado y pensado en el consumidor, que permita el éxito de la estrategia. Sabiendo esto, le invitamos a ver el siguiente recurso, donde se presentan los pasos que conducen a la formulación de una adecuada estrategia de <i>marketing</i> digital en eventos:
    
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        ImagenInfografica.color-acento-contenido
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/Tema1/img86.svg', alt="Imagen decorativa")

          .tarjeta.color-acento-botones.p-3.bgcolor.sombra(x="32%" y="75%" numero="+")
            .titulo-sexto.color-primario.mb-0
            p.mt-4 Se deben responder preguntas como: ¿qué se quiere obtener? ¿Cuál es el público objetivo? ¿Qué actividades realizarán los convocados durante y después del evento? Algunos ejemplos pueden ser: aumentar la interacción con la comunidad, ampliar la red de contactos, aumentar ventas, etc.
          .tarjeta.color-acento-botones.p-3.bgcolor.sombra(x="27%" y="50%" numero="+")
            .titulo-sexto.color-primario.mb-0
            p.mt-4 Se debe definir el tipo de evento a realizar, bien sea conferencia, taller, exposición, etc., y luego proceder a escoger la plataforma. 
          .tarjeta.color-acento-botones.p-3.bgcolor.sombra(x="32%" y="24%" numero="+")
            .titulo-sexto.color-primario.mb-0
            p.mt-4 Para definir el nombre ideal para el evento, se deben tener claros los valores de marca y lo que se desea resaltar y comunicar. Este debe ser sencillo, concordante con la materia del evento y que genere recordación.
          .tarjeta.color-acento-botones.p-3.bgcolor.sombra(x="42%" y="9%" numero="+")
            .titulo-sexto.color-primario.mb-0
            p.mt-4 La información a transmitir debe ser diáfana y puntual, así como el desarrollo de la parte visual y estética.
          .tarjeta.color-acento-botones.p-3.bgcolor.sombra(x="67%" y="24%" numero="+")
            .titulo-sexto.color-primario.mb-0
            p.mt-4 Teniendo claro el tipo de público que se desea atraer y lo que se pretende que ese tipo de público haga (compre, comparta, suscriba, etc.), elija las estrategias de comunicación. Por ejemplo, el diseño de las campañas de expectativa, donde, días antes del evento, se difunden piezas publicitarias que incrementan el interés e ilusión por su realización; otra estrategia también puede ser la vista anteriormente: <i>landing page</i>, donde irá la información relevante del evento. 
          .tarjeta.color-acento-botones.p-3.bgcolor.sombra(x="72%" y="52%" numero="+")
            .titulo-sexto.color-primario.mb-0
            p.mt-4 El proceso de registro debe ser simple, solicitud de información básica del asistente y datos de contacto.
          .tarjeta.color-acento-botones.p-3.bgcolor.sombra(x="67%" y="77%" numero="+")
            .titulo-sexto.color-primario.mb-0
            p.mt-4 Se debe asignar un presupuesto para los recursos materiales, tecnológicos y humanos. La idea también es definir los roles y las funciones de todo el personal dentro del evento.  
    
    separador
    #t_1_13.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.13	Costos en un evento

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Tema1/img87.png')})`}" data-aos="fade-right" alt="Imagen decorativa"
      )
      .bloque-texto-g__texto.p-5(data-aos="fade-left")
        p.mb-0 Tener claridad sobre los costos asociados a la realización de un evento es fundamental; por ello, estructurar adecuadamente el presupuesto registrando los valores económicos causados permite anticipar el cumplimiento de los compromisos financieros.
    
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="flip-up")
        .cajon.color-primario.p-4
          p.mb-0.text-center Una vez se conoce el objetivo del evento, se valoran las necesidades a suplir para su realización. Se tienen dos opciones de estructura de presupuestos:
          .row.justify-content-center.mt-4
            .col-lg-3.fonb.sombra.p-2.mt-2
              ul.lista-ul.mb-0
                li.p-0.mb-0
                  i.fas.fa-check.c2
                  | Presupuesto adaptado al evento (mayor libertad)       
            .col-lg-1.col-sm-2.col-3.mt-2
              img.imgp(src='@/assets/curso/Tema1/flecha.svg', alt="Imagen decorativa")
            .col-lg-3.fonb.sombra.p-2.mt-2
              ul.lista-ul.mb-0
                li.p-0.mb-0 
                  i.fas.fa-check.c2
                  | Evento adaptado al presupuesto (limitados)       
    
    p.mb-5(data-aos="fade-right") Cuando este punto está claro, se deben definir los costos asociados a la planificación del evento. Según Cordero (2016), existen dos tipos de costos que se deben estipular en el momento de crear un evento: los fijos y los variables, a saber:
    
    .row.justify-content-center.mb-5
      .col-lg-6.order-lg-1.order-2
        .h5.tte(data-aos="fade-right") Costos fijos  
        p(data-aos="fade-right") Independientemente del éxito del evento, constituyen los costos fijos aquellos valores que hay que cancelar, esto es:
        ul.lista-ul
          li(data-aos="fade-right") 
            i.fas.fa-check.c2
            | El sitio elegido para realizar el evento es, en su orden, el mayor desembolso en que se incurrirá.
          li(data-aos="fade-right") 
            i.fas.fa-check.c2
            | Mercadeo, publicidad y promoción del evento.
          li(data-aos="fade-right") 
            i.fas.fa-check.c2
            | Equipamiento tecnológico para la producción del evento.
          li(data-aos="fade-right") 
            i.fas.fa-check.c2
            | Gastos de desplazamiento para personajes especiales.
          li(data-aos="fade-right") 
            i.fas.fa-check.c2
            | Gastos de personal. 
          li(data-aos="fade-right") 
            i.fas.fa-check.c2
            | Traductores, si fuera necesario.
          li(data-aos="fade-right") 
            i.fas.fa-check.c2
            | Actos protocolares de apertura y cierre del evento.
          li(data-aos="fade-right") 
            i.fas.fa-check.c2
            | Sistema de inscripción y acreditación. 
          li(data-aos="fade-right") 
            i.fas.fa-check.c2
            | Actividades de esparcimiento contratadas extra al evento. 
          li(data-aos="fade-right") 
            i.fas.fa-check.c2
            | Seguros. 
          li(data-aos="fade-right") 
            i.fas.fa-check.c2
            | Honorarios. 
          li(data-aos="fade-right") 
            i.fas.fa-check.c2
            | Logística de transporte, montaje y desarmado de estructuras.                
      .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/Tema1/img90.png', alt="Imagen decorativa")

    .h5.tte.mb-5(data-aos="fade-right") Costos variables

    p.mb-5(data-aos="fade-right") Son aquellos que varían en relación con la cantidad de personas que deciden asistir a un evento; se tiene:

    .row.justify-content-center.mb-4
      .col-lg-8.bg1.pt-4
        h3.text-center.mb-0(data-aos="fade-right") Costos variables de un evento
        .row.justify-content-center
          .col-lg-8
            ul.lista-ul--color
              li.mb-0(data-aos="fade-right")
                i.fas.fa-circle
                p.mb-0 Material de acreditación: credenciales, folletos, <i> souvenirs</i>, diplomas, etc.
              li.mb-0(data-aos="fade-right") 
                i.fas.fa-circle
                p.mb-0 Servicio de <i>catering</i>, <i> coffee break</i>, almuerzos, cenas.
              li.mb-0(data-aos="fade-right") 
                i.fas.fa-circle
                | Personal temporal.
              li.mb-0(data-aos="fade-right") 
                i.fas.fa-circle
                | Estacionamientos.
              li.mb-0(data-aos="fade-right") 
                i.fas.fa-circle
                | Computadores y mobiliario en general.
              li.mb-0(data-aos="fade-right") 
                i.fas.fa-circle
                | Gastos bancarios.
              li.mb-0(data-aos="fade-right") 
                i.fas.fa-circle
                | Personal de seguridad y servicios generales.
    
    p(data-aos="fade-right") Adicional a lo anterior, se debe tener presente un rubro de imprevistos: tomar medidas contables asignando recursos para cubrir un suceso inesperado.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.tarjeta-avatar > img
  top: 22px!important
.tabs-c.color-primario .tabs-c__tab--active
  font-weight: bold!important
.tarjeta.color-primario
  background-color: #FCC52E
.cajon.color-acento-botones
  background-color: #D5EFFF
.tabla-a.color-primario thead
  background-color: #FA732B!important
.tabla-a.color-primario thead
  border-color: #FA732B
.tarjeta--boton
  background-color: #FFFFFF
.lista-ul--color li > i:first-of-type
  font-size: 10px
  top: 7px
.flecha-blanca .slyder-a__btn--sigt, .flecha-blanca .slyder-a__btn--atrs
  background-image: url("../assets/curso/fondos/arrow.svg") !important
.flecha-blanca .slyder-a__tipo-b .slyder-a__btn--sigt
    transform: rotate(0deg)!important
.flecha-blanca .slyder-a__tipo-b .slyder-a__btn--atrs
    transform: rotate(180deg)!important
</style>
