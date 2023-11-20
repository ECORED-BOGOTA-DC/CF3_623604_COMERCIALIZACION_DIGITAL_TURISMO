<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    
    .row.justify-content-center
      .col-12.d-xl-flex.d-none
        <br><br><br>
      .col-lg-10.aqws
        .row.justify-content-center.align-items-end
          .col-lg-2.col-4.img-01.px-xxl-4(data-aos="fade-right")
            img(src="@/assets/curso/1.png", alt="La síntesis resume los temas y subtemas abordados en este componente formativo y que son importantes y necesarios para alcanzar el resultado de aprendizaje como conocer los tipos, tendencias y fases de los eventos, al igual el majeo de herramientas de marketing digital.")
          .col-2.d-lg-flex.d-none
          .col-lg-10(data-aos="fade-left")
            .p-4
              h4 Organización de eventos
              p.mb-0 Los viajes que se producen en el mundo son realizados por diferentes motivaciones, necesidades e intereses; entre ellos se encuentra los eventos. Quienes viajan por este motivo, pagan por la temática y el contenido, pero además pagan por los servicios adicionales para disfrutar en su tiempo libre como transporte, actividades, visitas, compras, etc., y demás pagan por subsanar sus necesidades básicas de alimentación y alojamiento, así como las de diversión y esparcimiento donde buscan vivir experiencias inolvidables.  

    .row.justify-content-center.mt-5
      .col-lg-10.mb-5(data-aos="fade-right")
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Imagen decorativa")
      .col-auto(data-aos="fade-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

<style lang="sass"></style>
