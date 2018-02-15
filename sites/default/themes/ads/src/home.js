import $ from './jquery';

class Home {
  constructor() {
    this.name = 'John serrano';
  }
  // Desktop
  namesBanners(index) {
    if (index == 1) {
      return {
        name: '1000x90 PX',
        description: '<p>En ocasiones se denomina "skyscraper horizontal grande" al igual que el 970x90. Este tamaño resulta ideal para mostrar contenido de alta definición, como fotos, animaciones y aplicaciones. </p> <p>Las imágenes de los banners pueden ser en formato .JPG, .JPEG y .PNG. El formato .JPEG y .JPG, son prácticamente lo mismo. Estos son especiales para imagenes con gran cantidad de colores, con una gama más amplia. </p><p>El formato .PNG se utiliza cuando la cantidad de colores es menor, como por ejemplo para dibujos, gráficos o ilustraciones.</p>'
      }
    } else if(index == 2) {
      return {
        name: '1000x50 PX (Desplegable)',
        description: '<p>Este formato de anuncio se amplía a 1000 x 250 cuando se usa como pauta desplegable "empujando" suavemente todos los elementos de página hacia abajo. La primera impresión de usuario inicia automáticamente el desplazamiento hacia abajo.</p><p>Las imágenes de los banners pueden ser en formato .JPG, .JPEG y .PNG. El formato .JPEG y .JPG, son prácticamente lo mismo. Estos son especiales para imagenes con gran cantidad de colores, con una gama más amplia. </p><p>El formato .PNG se utiliza cuando la cantidad de colores es menor, como por ejemplo para dibujos, gráficos o ilustraciones.</p>'
      }
    } else if (index == 3) {
      return {
        name: '728x90 PX',
        description: '<p>También denominado "leaderboard". Suele ofrecer un mayor inventario de anuncios de los anunciantes, lo que puede aumentar los ingresos si se habilitan tanto los anuncios de texto como los anuncios de imagen estáticos. </p><p>Tiene un buen rendimiento si se sitúa sobre el contenido principal. <p>Las imágenes de los banners pueden ser en formato .JPG, .JPEG y .PNG. El formato .JPEG y .JPG, son prácticamente lo mismo. Estos son especiales para imagenes con gran cantidad de colores, con una gama más amplia. </p><p>El formato .PNG se utiliza cuando la cantidad de colores es menor, como por ejemplo para dibujos, gráficos o ilustraciones.</p>'
      }
    } else if (index == 4) {
      return {
        name: '300x250 PX',
        description: '<p>También denominado "rectángulo mediano". </p> <p>Tiene un buen rendimiento cuando se inserta dentro del contenido de texto o al final de artículos. </p><p>Las imágenes de los banners pueden ser en formato .JPG, .JPEG y .PNG. El formato .JPEG y .JPG, son prácticamente lo mismo. Estos son especiales para imagenes con gran cantidad de colores, con una gama más amplia. </p><p>El formato .PNG se utiliza cuando la cantidad de colores es menor, como por ejemplo para dibujos, gráficos o ilustraciones.</p>'
      }
    } else if (index == 5) {
      return {
        name: 'Barra flotante (Fijo)',
        description: '<p>Este formato es del tamaño de 1000x50 pero no es desplegable, su comportamiento natural permite mantener la visualización del anuncio aun cuando el usuario hace scroll. </p><p>Las imágenes de los banners pueden ser en formato .JPG, .JPEG y .PNG. El formato .JPEG y .JPG, son prácticamente lo mismo. Estos son especiales para imagenes con gran cantidad de colores, con una gama más amplia. </p><p>El formato .PNG se utiliza cuando la cantidad de colores es menor, como por ejemplo para dibujos, gráficos o ilustraciones.</p>'
      }
    } else if (index == 6) {
      return {
        name: 'Layer invasivo',
        description: '<p>Tambien conocido como "interstitial" ocupa gran parte de la pantalla. </p><p>Por lo general, el interstitial solo aparece la primera vez que se visita una web o al cambiar de sección, pero depende de la configuración asignada. </p><p>Por lo general lleva un boton para cerrarlo en la parte superior derecha del anuncio y que, al hacer clic permite visualizar el contenido sin interrupciones. </p><p>Las imágenes de los banners pueden ser en formato .JPG, .JPEG y .PNG. El formato .JPEG y .JPG, son prácticamente lo mismo. Estos son especiales para imagenes con gran cantidad de colores, con una gama más amplia. </p><p>El formato .PNG se utiliza cuando la cantidad de colores es menor, como por ejemplo para dibujos, gráficos o ilustraciones.</p>'
      }
    } else if (index == 7) {
      return {
        name: 'Toma de home (Desplegable + Laterales)',
        description: '<p>La toma de home se compone de 3 piezas, 2 de 160x600 conocido como "skyscraper ancho" y 1 pieza de 100x50 (Despegable). </p><p>Las imágenes de los banners pueden ser en formato .JPG, .JPEG y .PNG. El formato .JPEG y .JPG, son prácticamente lo mismo. Estos son especiales para imagenes con gran cantidad de colores, con una gama más amplia. </p><p>El formato .PNG se utiliza cuando la cantidad de colores es menor, como por ejemplo para dibujos, gráficos o ilustraciones.</p>'
      }
    } else if (index == 8) {
      return {
        name: '160x600 PX (Lateral)',
        description: '<p>También denominado "skyscraper ancho". Suele haber un mayor inventario de anuncios de los anunciantes disponible en él, lo que puede aumentar los ingresos si se habilitan tanto los anuncios de texto como los anuncios de imagen estáticos. </p> <p>Tiene un mejor rendimiento si se utiliza en las barras laterales de las páginas web. </p> <p>Las imágenes de los banners pueden ser en formato .JPG, .JPEG y .PNG. El formato .JPEG y .JPG, son prácticamente lo mismo. Estos son especiales para imagenes con gran cantidad de colores, con una gama más amplia. </p><p>El formato .PNG se utiliza cuando la cantidad de colores es menor, como por ejemplo para dibujos, gráficos o ilustraciones.</p>'
      }
    } else if (index == 0) {
      return {
        name: '',
        description: ''
      }
    }
  }

  namesBannersMovil (index) {
    if (index == 1) {
      return {
        name: '320x50 PX',
        description: '<p>También denominado "leaderboard para móviles". Este formato es un banner optimizado para dispositivos móviles. </p><p>Se ha demostrado que estos anuncios funcionan bien como formato de anuncio para smartphones, especialmente cuando se colocan en la parte inferior de la página. </p><p>Las imágenes de los banners pueden ser en formato .JPG, .JPEG y .PNG. El formato .JPEG y .JPG, son prácticamente lo mismo. Estos son especiales para imagenes con gran cantidad de colores, con una gama más amplia. </p><p>El formato .PNG se utiliza cuando la cantidad de colores es menor, como por ejemplo para dibujos, gráficos o ilustraciones.</p>'
      }
    } else if(index == 2) {
      return {
        name: '320x100 PX',
        description: '<p>También denominado "banner para dispositivos móviles grande". Se puede usar como alternativa a los formatos 320 x 50 y 300 x 250. </p> <p>Estos anuncios tienen el doble de altura que el "leaderboard para dispositivos móviles" estándar. <p>Las imágenes de los banners pueden ser en formato .JPG, .JPEG y .PNG. El formato .JPEG y .JPG, son prácticamente lo mismo. Estos son especiales para imagenes con gran cantidad de colores, con una gama más amplia. </p><p>El formato .PNG se utiliza cuando la cantidad de colores es menor, como por ejemplo para dibujos, gráficos o ilustraciones.</p>'
      }
    } else if (index == 3) {
      return {
        name: '300x250 PX',
        description: '<p>También denominado "rectángulo mediano". </p> <p>Tiene un buen rendimiento cuando se inserta dentro del contenido de texto o al final de artículos. </p><p>Las imágenes de los banners pueden ser en formato .JPG, .JPEG y .PNG. El formato .JPEG y .JPG, son prácticamente lo mismo. Estos son especiales para imagenes con gran cantidad de colores, con una gama más amplia. </p><p>El formato .PNG se utiliza cuando la cantidad de colores es menor, como por ejemplo para dibujos, gráficos o ilustraciones.</p>'
      }
    } else if (index == 4) {
      return {
        name: 'Barra fija',
        description: '<p>Este formato es del tamaño de 320x50, su comportamiento natural permite mantener la visualización del anuncio aun cuando el usuario hace scroll. </p><p>Las imágenes de los banners pueden ser en formato .JPG, .JPEG y .PNG. El formato .JPEG y .JPG, son prácticamente lo mismo. Estos son especiales para imagenes con gran cantidad de colores, con una gama más amplia. </p><p>El formato .PNG se utiliza cuando la cantidad de colores es menor, como por ejemplo para dibujos, gráficos o ilustraciones.</p>'
      }
    } else if (index == 0) {
      return {
        name: '',
        description: ''
      }
    }
  }
  // Desktop
  limpiar(indexClick) {
    const _this = this;
    $('#home .left #tipoBanner #listBannersDesktop li').each(function (index, element) { 
      if (index === indexClick) {
        $(this).find('.flecha').addClass('active');
      }else {
        $(this).find('.flecha').removeClass('active');
      }
    });

    $('#home .right .deviceDesktop div').each(function (index, element) { 
      index++;
      if (index === indexClick) {
        $(this).addClass('active');
        const name = _this.namesBanners(index);
        $('#home .right .info #nameBanner').html(`Banner ${name.name}`);
        $('#home .right .info #infoBanner').html(`${name.description}`);
      }else {
        $(this).removeClass('active');
      }
    });
    // console.log('limpiando...')
  }

  limpiarMovil(indexClick) {
    const _this = this;
    $('#home .left #tipoBannerMovil #listBannersMovil li').each(function (index, element) { 
      if (index === indexClick) {
        $(this).find('.flecha').addClass('active');
      }else {
        $(this).find('.flecha').removeClass('active');
      }
    });

    $('#home .right .deviceMovil div').each(function (index, element) { 
      index++;
      if (index === indexClick) {
        $(this).addClass('active');
        const name = _this.namesBannersMovil(index);
        $('#home .right .info #nameBanner').html(`Banner ${name.name}`);
        $('#home .right .info #infoBanner').html(`${name.description}`);
      }else {
        $(this).removeClass('active');
      }
    });
    // console.log('limpiando...')
  }

  ocultarMenu () {
    $('#home #menu #nav-icon3').removeClass('open');
    $('#home .left').css('left', '-320px');
    $('#home #menu #nav-icon3').data('active', '0');
  }

  clickListDesktop () {
    const _this = this;
    $('#home .left #tipoBanner #listBannersDesktop strong').click( function () {
      const index = $(this).data('index');
      $('#home .right .deviceDesktop').show();
      $('#home .right .landing').hide();
      $('#home .right .boletin').hide();
      $('#home .left .landing').find('.flecha').removeClass('active');
      $('#home .left .boletin').find('.flecha').removeClass('active');
      _this.ocultarMenu();
      _this.limpiar(index);
   });
  }

  clickListMovil() {
    const _this = this;
    $('#home .left #tipoBannerMovil #listBannersMovil strong').click( function () {
      const index = $(this).data('index');
      $('#home .right .deviceMovil').show();
      $('#home .right .landing').hide();
      $('#home .right .boletin').hide();
      $('#home .left .landing').find('.flecha').removeClass('active');
      $('#home .left .boletin').find('.flecha').removeClass('active');
      _this.limpiarMovil(index);
      _this.ocultarMenu();
   });
  }

  clickLanding () {
    const _this = this;
    $('#home .left .landing').click(function () {
      $('#home .right .deviceDesktop').hide();
      $('#home .right .deviceMovil').hide();
      $('#home .right .boletin').hide();
      $('#home .left #tipoBanner #listBannersDesktop li').each(function (index, element) {
        $(this).find('.flecha').removeClass('active');
      });
      $('#home .left #tipoBannerMovil #listBannersMovil li').each(function (index, element) {
        $(this).find('.flecha').removeClass('active');
      });
      $('#home .right .landing').show();
      $('#home .left .boletin').find('.flecha').removeClass('active');
      $(this).find('.flecha').addClass('active');
      const name = 'Landing (página de aterrizaje)';
      $('#home .right .info #nameBanner').html(`Banner ${name}`);

      _this.ocultarMenu();
    });
  }

  clickBoletin () {
    const _this = this;
    $('#home .left .boletin').click(function () {
      $('#home .right .deviceDesktop').hide();
      $('#home .right .deviceMovil').hide();
      $('#home .right .landing').hide();
      $('#home .left #tipoBanner #listBannersDesktop li').each(function (index, element) {
        $(this).find('.flecha').removeClass('active');
      });
      $('#home .left #tipoBannerMovil #listBannersMovil li').each(function (index, element) {
        $(this).find('.flecha').removeClass('active');
      });
      $('#home .right .boletin').show();
      $('#home .left .landing').find('.flecha').removeClass('active');
      $(this).find('.flecha').addClass('active');
      const name = 'Boletin de noticias';
      $('#home .right .info #nameBanner').html(`Banner ${name}`);
      _this.ocultarMenu();
    })
  }
  // Desktop
  encontrarName () {
    let id = 0;
    $('#home .left #tipoBanner #listBannersDesktop li').each(function (index, element) {
      if ($(this).find('.flecha').hasClass('active')) {
        id = $(this).find('strong').data('index');
      }
    });
    return this.namesBanners(id)
  }

  encontrarNameMovil () {
    let id = 0;
    $('#home .left #tipoBannerMovil #listBannersMovil li').each(function (index, element) {
      if ($(this).find('.flecha').hasClass('active')) {
        id = $(this).find('strong').data('index'); 
      }
    });
    return this.namesBannersMovil(id);
  }

  changeDevices () {
    const _this = this;
    $('#home .left #devices .desktop').click(function () {
      $('#home .left #tipoBanner').show();
      $('#home .left #tipoBannerMovil').hide();
      $('#home .right .landing').hide();
      $('#home .right .boletin').hide();
      $('#home .left .landing').find('.flecha').removeClass('active');
      $('#home .left .boletin').find('.flecha').removeClass('active');
      $('#home .right .deviceDesktop').show();
      $('#home .right .deviceMovil').hide();
      let name = _this.encontrarName();
      $('#home .right .info #nameBanner').html(`Banner ${name.name}`);
      $('#home .right .info #infoBanner').html(`${name.description}`);
    });

    $('#home .left #devices .movil, #home .left #devices .tablet').click(function () {
      $('#home .left #tipoBanner').hide();
      $('#home .left #tipoBannerMovil').show();
      $('#home .right .deviceDesktop').hide();
      $('#home .right .landing').hide();
      $('#home .right .boletin').hide();
      $('#home .left .landing').find('.flecha').removeClass('active');
      $('#home .left .boletin').find('.flecha').removeClass('active');
      $('#home .right .deviceMovil').show();
      let name = _this.encontrarNameMovil();
      $('#home .right .info #nameBanner').html(`Banner ${name.name}`);
      $('#home .right .info #infoBanner').html(`${name.description}`);
    });
  }
}

// module.exports = Home; 
export default Home; // Esto es otra forma de exportar modules
