<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade")
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.c1 2
      h1 Experiencias en eventos
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-5

        p <strong> Los eventos deben ser herramientas para generar emociones en torno a un servicio o producto, que impacten positivamente a los asistentes. El objetivo es generar recuerdos que perduren en la memoria de los clientes, logrando que se identifiquen y conecten con la marca. </strong>
    
    p.mt-4 Para lograr lo anterior, se debe hacer uso de creatividad e innovación que conlleven el desarrollo de eventos únicos, acercando a la marca con su público objetivo.
    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1.	Claves para lograr experiencias únicas en los asistentes a los eventos
    p Según el Blog Fosbury (2021), se deben tener presentes las siguientes claves en el momento de generar sensaciones y ofrecer la mejor experiencia a los clientes; le invitamos a reconocer algunas de ellas a través del siguiente recurso:
    TabsC.color-primario
      .py-3.py-md-4(titulo="Clave 1")
        .row
          .col-md-5.mb-4.mb-md-0
            p <strong>Se debe definir el sentimiento que se desea estimular.</strong>

            p.mt-4 Las emociones positivas no solamente hacen sentir al usuario, estudios de investigación indican que cuando las personas sienten como mínimo tres veces más emociones positivas que negativas se sienten bien y desean volver a repetir esa experiencia

          .col-md-7
            figure
              img(src='@/assets/curso/tema2/img2.png', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="Clave 2")
        .row
          .col-md-5.mb-4.mb-md-0
            p <strong>Se deben originar experiencias que inciten el sistema sensorial de los asistentes.</strong>
            p.mt-4 Con la vista, por ejemplo, se debe sorprender al asistente mostrando un producto de manera excepcional y emotiva. El sentido del gusto se puede activar incitando a los usuarios a probar algún producto dentro del evento. El oído también puede participar a través de los sonidos en la música; el olfato debe estimular a través de olores; y el sentido del tacto se debe incorporar haciendo sentir al asistente todo lo que se genera alrededor del evento.
          .col-md-7
            figure
              img(src='@/assets/curso/tema2/img3.png', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="Clave 3")
        .row
          .col-md-5.mb-4.mb-md-0
            p <strong>Un evento debe crear sorpresa, intriga o provocación</strong>
            p.mt-4 Al utilizar la creatividad para llamar la atención de las personas, estas relacionarán el producto o servicio con algo positivo en la forma en que resuelve sus problemas.

          .col-md-7
            figure
              img(src='@/assets/curso/tema2/img4.png', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="Clave 4")
        .row
          .col-md-5.mb-4.mb-md-0
            p <strong>Se deben generar experiencias físicas, interacciones y estilos de vida</strong>
            p.mt-4 Un evento puede ampliar el horizonte de los asistentes a través de actividades que generen interacciones de carácter físico, enseñando formas nuevas de realizar una acción e interactuando con la marca.
          .col-md-7
            figure
              img(src='@/assets/curso/tema2/img5.png', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="Clave 5")
        .row
          .col-md-5.mb-4.mb-md-0
            p <strong>Se deben utilizar espacios, tiempos y actividades innovadoras y diferentes. </strong>
            p.mt-4 Ante esto, las nuevas tecnologías aplicadas a los eventos son un ejemplo claro de las posibilidades de creatividad e innovación que tiene esta herramienta para generar notoriedad.

          .col-md-7
            figure
              img(src='@/assets/curso/tema2/img6.png', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="Clave 6")
        .row
          .col-md-5.mb-4.mb-md-0
            p <strong>Cuando el evento termine, también se debe continuar creando experiencia.</strong>
            p.mt-4 Se puede hacer uso de video-resúmenes o de regalos pequeños que sean útiles y que sirvan para recordar la experiencia, como cuadernos y bolígrafos con la identidad corporativa del evento.
            p.mt-4 Las experiencias vividas siempre quedarán en la mente del consumidor, ya que se le incitó a participar del evento de manera activa, con emoción y energía.
          .col-md-7
            figure
              img(src='@/assets/curso/tema2/img7.png', alt='Texto que describa la imagen')
    p.mt-4 Adicionalmente, cuando el evento termine, también se debe continuar creando experiencia; se puede hacer uso de video-resúmenes o de regalos pequeños que sean útiles y que sirvan para recordar la experiencia, como cuadernos y bolígrafos con la identidad corporativa del evento. Las experiencias vividas siempre quedarán en la mente del consumidor, ya que se le incitó a participar del evento de manera activa, con emoción y energía.
    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2.	Ejemplos de experiencias en eventos
    p Sin duda, hay muchos eventos que aún tenemos en la memoria por el lugar en el que se llevaron a cabo, por las acciones o actividades que se realizaron durante el evento, por los temas abordados o por todos los elementos en conjunto. Es por ello que, a continuación, podrá encontrar algunos ejemplos de eventos que han dejado huella a través de las experiencias que han propiciado a sus asistentes:
    .row
      .col-lg-6
        img(src='@/assets/curso/tema2/img8.svg', alt='Texto que describa la imagen')
      .col-lg-6.mt-2
        .tarjeta.tarjeta--azul.p-4.mb-5.qaw.sombra
          SlyderA.pp.flecha-blanca(tipo="b")
            .row
              .col-md-12.mb-4.mb-md-0
                .row.justify-content-center
                  .col-lg-5
                    img.baqw(src='@/assets/curso/tema2/ico1.svg', alt='Texto que describa la imagen')

                p.mt-4.text-center Red Bull ha logrado posicionar su marca a través de eventos deportivos de acción, se encarga de generar emociones fuertes y hacer que los asistentes identifiquen la marca con fuerza, adrenalina y aventura. Con sus eventos, la compañía no solo tiene el poder de atraer a quienes disfrutan de su producto, sino a los que no lo hacen pero definen los shows como algo memorable. 
            .row
              .col-md-12.mb-4.mb-md-0
                .row.justify-content-center
                  .col-lg-4
                    img.baqw(src='@/assets/curso/tema2/ico2.svg', alt='Texto que describa la imagen')

                p.mt-4.text-center Airbnb Experiences es una plataforma en la que los usuarios experimentan nuevos aspectos de los destinos. Le brinda la posibilidad al usuario de participar de tours, vivir como locales y, en el 2018, lanzó Airbnb Concerts, donde se puede acceder a diversos espectáculos en vivo, originados desde cualquier posición en nuestro planeta.
            .row
              .col-md-12.mb-4.mb-md-0
                .row.justify-content-center
                  .col-lg-4
                    img.baqw(src='@/assets/curso/tema2/ico3.svg', alt='Texto que describa la imagen')

                p.mt-4.text-center Gestiona sus clientes a partir de la información que reposa en sus bases de datos, creando experiencias personalizadas transmitidas en los eventos. Dentro de las experiencias destacables, se encuentra el lanzamiento de nuevos servicios para los tarjetahabientes; Amex se incorpora al Festival de música y artes Coachella, donde sus clientes disfrutan de todo tipo de privilegios VIP, generando lealtad y fidelización en sus consumidores.
            .row
              .col-md-12.mb-4.mb-md-0
                .row.justify-content-center
                  .col-lg-4
                    img.baqw(src='@/assets/curso/tema2/ico4.svg', alt='Texto que describa la imagen')

                p.mt-4.text-center “Durante este 2019, LG Electronics se asoció con Pantone Color Institute para traer a NY un café pop-up para exhibir cómo el nuevo producto de televisión de LG enfatiza el poder del color y los sentidos humanos a través del gusto, vista y tacto. Los clientes cenaron deliciosas especialidades mientras baristas locales servían lattes saborizados y postres inspirados en los cuatro colores del reporte Fashion Color Summer 2019 de Pantone” (Hazelton, 2020). 
    separador
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3.	 Pasos para crear experiencias en eventos
    p Un evento debe ser la oportunidad para hacer que los clientes se sientan especiales, pero también es la ocasión de construir relaciones de negocio duraderas. La pregunta es: ¿cómo lograrlo? Pues bien, entre otros, se requiere identificar bien al público objetivo, a fin de crearles experiencias memorables, pues es el momento de conectar al participante con el servicio, la marca o producto que se ofrece. A continuación, podrá identificar los pasos para crear experiencias en eventos:
    .tarjeta.tarjeta--gris.p-4.ba1
      PasosB.color-primario

        .row.justify-content-center(titulo="")
          .col-md-5.mb-4.mb-md-0
            p <strong>1. Conocer al público objetivo</strong>
            p.mt-4 Las buenas experiencias no están dirigidas a todos los turistas por igual. Tenga presente que los visitantes se clasifican según nivel educacional, edad, nacionalidad o grupo de viaje, o también puede segmentarlos de acuerdo con sus intereses.
            p.mt-4 Estas preguntas le servirán de base: ¿cómo son sus turistas? ¿Tienen ingresos altos, medios o bajos? ¿Qué les interesa hacer, qué actividades prefieren? ¿Son colombianos o extranjeros?
          .col-md-6
            figure
              img(src='@/assets/curso/tema2/img9.png', alt='Texto que describa la imagen')


        .row.justify-content-center(titulo="")
          .col-md-11.mb-4.mb-md-0
            p <strong>2. Conocer su entorno</strong>
            p.mt-4 El destino donde se desarrollará el evento también es importante. No solo cuenta mostrar las características de un producto o un servicio dentro del evento; tampoco es solo necesario generar un tema en una conferencia y ya; la idea también es poder darle a conocer algo de la localidad al turista. Cada organizador de eventos podrá definir de qué manera incluir estos aspectos en la agenda del día:

            figure
              img(src='@/assets/curso/tema2/img10.svg', alt='Texto que describa la imagen')
        .row.justify-content-center(titulo="")
          .col-md-5.mb-4.mb-md-0
            p <strong>3. Conocer la competencia</strong>
            p.mt-4 En esta sección, se averigua sobre experiencias en eventos similares a la suya, que se ofrezcan tanto en municipios o regiones cercanas, como en otros países. 

            p.mt-4 La idea con este proceso es identificar sus elementos más distintivos: actividades, temáticas y estilos de la competencia, para identificar sus fortalezas y verificar lo que no esté cubriendo o lo que considere que podría mejorar con un estilo propio.

          .col-md-6
            figure
              img(src='@/assets/curso/tema2/img11.png', alt='Texto que describa la imagen')
        .row.justify-content-center(titulo="")
          .col-md-11.mb-4.mb-md-0
            p <strong>4. Definir las bases de la experiencia</strong>

            figure
              img(src='@/assets/curso/tema2/img12.svg', alt='Texto que describa la imagen')   
        .row.justify-content-center(titulo="")
          .col-md-5.mb-4.mb-md-0
            p <strong>5. Definir acciones y roles para cada episodio</strong>
            ul.lista-ul.mt-4
              li 
                i.fas.fa-check.c2
                | A partir de sus definiciones anteriores, diseñe los detalles de cada episodio.
              li 
                i.fas.fa-check.c2
                | Decida qué tan pausadas serán las acciones y relatos de la experiencia. 
              li 
                i.fas.fa-check.c2
                | Puede entregar solo indicaciones generales, dejando un margen amplio para que, según el guía y/o las decisiones de los propios visitantes, cada uno de ellos complete su experiencia mientras la vive.
          .col-md-6
            figure
              img(src='@/assets/curso/tema2/img13.png', alt='Texto que describa la imagen')           
        .row.justify-content-center(titulo="")
          .col-md-11.mb-4.mb-md-0
            p <strong>6. Diferenciar la naturaleza e identidad de cada episodio</strong>
            p.mt-4 Si se parecen demasiado entre sí, la atención de sus visitantes puede decaer. En lo posible, evite repeticiones mecánicas de actividades. 
            .row.justify-content-center
              .col-lg-9
                figure
                  img(src='@/assets/curso/tema2/img14.svg', alt='Texto que describa la imagen')         
        .row.justify-content-center(titulo="")
          .col-md-11.mb-4.mb-md-0
            p <strong>7. Diseñar lugares, relatos y demás elementos</strong>
            figure
              img(src='@/assets/curso/tema2/img15.svg', alt='Texto que describa la imagen')         
        .row.justify-content-center(titulo="")
          .col-md-11.mb-4.mb-md-0
            p <strong>8. Implementar su experiencia</strong>
            .row.justify-content-center
              .col-lg-9
                figure
                  img(src='@/assets/curso/tema2/img16.svg', alt='Texto que describa la imagen')           
        .row.justify-content-center(titulo="")
          .col-md-5.mb-4.mb-md-0
            p <strong>9. Implementar su plan de promoción</strong>
            p.mt-4 A partir de sus definiciones anteriores, diseñe los detalles de cada episodio.

            p.mt-4 Decida qué tan pausadas serán las acciones y relatos de la experiencia. 
            p.mt-4 Puede entregar solo indicaciones generales, dejando un margen amplio para que, según el guía y/o a las decisiones de los propios visitantes, cada uno de ellos complete su experiencia mientras la vive.
          .col-md-6
            figure
              img(src='@/assets/curso/tema2/img17.png', alt='Texto que describa la imagen')
        .row.justify-content-center(titulo="")
          .col-md-5.mb-4.mb-md-0
            p <strong>10. Evaluar y corregir</strong>
            p.mt-4 Considere especialmente la evaluación de sus visitantes, ya que son ellos quienes viven la experiencia. Recoja sus opiniones a través de una pequeña encuesta de satisfacción y también mediante el seguimiento minucioso de los comentarios de los visitantes en las redes sociales de viajes. 


            p.mt-4 Sus correcciones pueden incluir cambios en el guion, en el lugar, en el rol del guía o en el diseño de los elementos.
 
            p.mt-4 Asegúrese de involucrar lo mejor posible a sus guías y demás mediadores, tanto en el diseño como en la implementación de las mejoras.

          .col-md-6
            figure
              img(src='@/assets/curso/tema2/img18.png', alt='Texto que describa la imagen')
    separador
    #t_2_4.titulo-segundo.color-acento-contenido
      h2 2.4.	 Sistemas de medición para los eventos
    p.mb-0 Los resultados de un evento pueden ser medidos para determinar su éxito y las posibles mejoras que se deben realizar a futuro. Dicha medición se puede lograr de diferentes maneras: 
    p Por una parte, a través de los <strong>elementos cuantitativos</strong>, mediante los cuales se debe realizar un balance entre los ingresos y gastos resultantes una vez realizado el cierre del evento. Por ejemplo, un buen indicador que se puede tener en cuenta en este punto es la cantidad de registros o entradas vendidas, para ello es importante:
    .titulo-sexto.color-acento-contenido
      h5 Figura 5.
      span   Elementos importantes para la medición de impacto de los eventos.
    .row.justify-content-center
      .col-lg-8
        img(src='@/assets/curso/tema2/img19.svg', alt='Texto que describa la imagen')
    p.mt-5 En el mismo proceso de sistematización de la medición de impacto de los eventos, se tiene la percepción de asistentes: apreciación subjetiva de los participantes; esta se puede hacer tomando en cuenta varios indicadores, como se presenta a continuación:
    TabsA.color-acento-botones.mb-5
      .tarjeta.color-acento-botones.p-4(titulo="Promoción e impacto en redes sociales")
        .row.justify-content-center
          .col-lg-11
            h5 Promoción e impacto en redes sociales
            p Cada una de las plataformas sociales que existen en la <i>web</i> tiene, de manera individual, su sistema que mide alcance y cobertura de una actividad. Así, Facebook registra “me gusta”; Twitter registra <i>tweets</i>, etc.
            p Estas métricas, en plataformas como Hootsuite y Buffer, se generan de manera automatizada. 
      .tarjeta.color-acento-botones.p-4(titulo="Satisfacción con el evento")
        .row.justify-content-center
          .col-lg-11
            h5 Satisfacción con el evento
            p Establecer si los objetivos planeados se concretaron de manera adecuada y medir la satisfacción del usuario de manera ágil y directa se puede lograr a través del correo electrónico. En él, se envía un cuestionario, estructurando preguntas pertinentes, el cual puede ser diseñado a través de diversas herramientas <i>web</i> como Google forms, Typeform, entre otras.

            p Se deben evaluar temas como: calidad de los ponentes, adecuación de las salas, horarios, disposición del personal del evento, instalaciones, tecnología, etc. Se puede hacer uso de una <i>app</i> específicamente para el evento, que pondere la calidad de la información y calidad de expositores, incrementando el índice de respuestas. Una sugerencia puede ser Meetmaps, que es un completo <i>software</i> que le permite al organizador de eventos comunicar, gamificar y seducir a los asistentes a través de una gran experiencia, antes, durante y después. 
      .tarjeta.color-acento-botones.p-4(titulo="<i>Engagement</i> y participación de los asistentes")
        .row.justify-content-center
          .col-lg-11
            h5 <i>Engagement</i> y participación de los asistentes
            p El evento debe estar activo <i>online</i> antes, durante y después de su desarrollo. Si se creó un <i>hashtag</i> en especial para el evento, se puede medir contando cuántas veces fue usado por los usuarios; también puede medir <i>posts</i> o interacciones en redes sociales con respecto al evento, y adicionalmente, es importante escuchar las conversaciones que se crean alrededor del mismo para conocer la reputación <i>online</i> del evento.
    separador
    #t_2_5.titulo-segundo.color-acento-contenido
      h2 2.5.	 Herramientas de innovación
    p Son instrumentos válidos para que la organización identifique, por ejemplo, cuáles son las debilidades, amenazas, fortalezas y oportunidades, y potenciar la importancia del aspecto humano del cliente, para que, a la hora de diseñar el evento, este sea innovador.
    .titulo-sexto.color-acento-contenido.mt-5
      h5.text-small Tabla 3
      span.text-small  Proceso de innovación
    .tabla-b.color-acento-contenido.mb-0
      .tabla-b__header
        h4.mb-0 <i>Design Thinking</i>
      table
        tr.bgta
          td Asiste al usuario en la creación e innovación de propuestas a partir del conocimiento del cliente y sus necesidades a satisfacer. Plantea soluciones a partir del problema a resolver, colabora con el diseño y desarrollo de productos y/o servicios. <i>Design thinking</i> utiliza la sensibilidad del diseñador y se fundamenta en la lógica, la imaginación, la intuición y el razonamiento sistémico explorando los posibles resultados que beneficiarían al usuario final.
    .tabla-b.color-acento-contenido.mb-0
      .tabla-b__header
        h4.mb-0 ¿Quiénes lo usan?
      table
        tr.bgta
          td Al ser un gran generador de innovación, su uso aplica a cualquier organización. Empresas que desarrollen productos o servicios, hasta aquellas que desean establecer mejoras a sus procesos o requieren definir el modelo de negocio.
    .tabla-b.color-acento-contenido.mb-0
      .tabla-b__header
        h4.mb-0 ¿Cómo se desarrolla?
      table
        tr.bgta
          td <strong>Paso 1.</strong> Empatizar: el profundizar en las necesidades de los usuarios potenciales requiere interacción con ellos. Se pueden usar técnicas como las entrevistas en profundidad, la observación, la grabación de video, grupos focales, entre otras, para conocer sus problemas, necesidades y deseos.
        tr.bgta
          td <strong>Paso 2.</strong>  Definición: se toma lo importante de la anterior fase y se definen puntualmente los problemas en los cuales estarán enfocadas las soluciones del equipo de trabajo.
        tr.bgta
          td <strong>Paso 3. </strong>  Ideación: es la etapa donde se generan las ideas. Se deben generar varias e incluir hasta las más “locas”; de allí es de donde resultan las mejores soluciones. 
        tr.bgta
          td <strong> Paso 4.  </strong> Prototipado: las ideas se convierten en realidad. Se pueden construir prototipos de productos, o redactar, tal cual, el servicio que se va a desarrollar. Esto ayuda a mejorar, refinar o cambiar antes de llegar al resultado final.
        tr.bgta
          td <strong> Paso 5.  </strong>  Testeo: En esta fase, se pone a prueba lo anteriormente creado con respecto a los usuarios finales. La idea evoluciona hasta convertirla en la solución que se esperaba. 
                                       

</template>

<script>
export default {
  name: 'Tema2',
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
.flecha-blanca .slyder-a__btn--sigt, .flecha-blanca .slyder-a__btn--atrs
  background-image: url("../assets/curso/fondos/arrow.svg") !important
.flecha-blanca .slyder-a__tipo-b .slyder-a__btn--sigt
    transform: rotate(0deg)!important
.flecha-blanca .slyder-a__tipo-b .slyder-a__btn--atrs
    transform: rotate(180deg)!important
</style>
