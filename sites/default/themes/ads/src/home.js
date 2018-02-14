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
        description: '1000x90 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, obcaecati labore dignissimos soluta pariatur est. Illum repellat minus, et eum praesentium, officia eaque obcaecati harum numquam molestiae quo ullam? Perferendis!'
      }
    } else if(index == 2) {
      return {
        name: '1000x50 PX (Desplegable)',
        description: '1000x50 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, obcaecati labore dignissimos soluta pariatur est. Illum repellat minus, et eum praesentium, officia eaque obcaecati harum numquam molestiae quo ullam? Perferendis!'
      }
    } else if (index == 3) {
      return {
        name: '728x90 PX',
        description: 'También denominado "leaderboard". Suele ofrecer un mayor inventario de anuncios de los anunciantes, lo que puede aumentar los ingresos si se habilitan tanto los anuncios de texto como los anuncios de imagen estáticos. <br> <br> Tiene un buen rendimiento si se sitúa sobre el contenido principal y en foros.'
      }
    } else if (index == 4) {
      return {
        name: '300x250 PX',
        description: 'También denominado "rectángulo mediano". Suele ofrecer un mayor inventario de anuncios de los anunciantes, lo que puede aumentar los ingresos si se habilitan tanto los anuncios de texto como los anuncios de imagen estáticos. <br> <br> Tiene un buen rendimiento cuando se inserta dentro del contenido de texto o al final de artículos.'
      }
    } else if (index == 5) {
      return {
        name: 'Barra flotante (Fijo)',
        description: 'barra flotante Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, obcaecati labore dignissimos soluta pariatur est. Illum repellat minus, et eum praesentium, officia eaque obcaecati harum numquam molestiae quo ullam? Perferendis!'
      }
    } else if (index == 6) {
      return {
        name: 'Layer invasivo',
        description: 'Layer invasivo Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, obcaecati labore dignissimos soluta pariatur est. Illum repellat minus, et eum praesentium, officia eaque obcaecati harum numquam molestiae quo ullam? Perferendis!'
      }
    } else if (index == 7) {
      return {
        name: 'Toma de home (Desplegable + Laterales)',
        description: 'Toma de home Layer invasivo Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, obcaecati labore dignissimos soluta pariatur est. Illum repellat minus, et eum praesentium, officia eaque obcaecati harum numquam molestiae quo ullam? Perferendis!'
      }
    } else if (index == 8) {
      return {
        name: '160x600 PX (Lateral)',
        description: 'También denominado "skyscraper ancho". Suele haber un mayor inventario de anuncios de los anunciantes disponible en él, lo que puede aumentar los ingresos si se habilitan tanto los anuncios de texto como los anuncios de imagen estáticos. <br> <br> Tiene un mejor rendimiento si se utiliza en las barras laterales de las páginas web.'
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
        description: 'También denominado "leaderboard para móviles". Este formato es un banner optimizado para dispositivos móviles. <br> <br> Se ha demostrado que estos anuncios funcionan bien como formato de anuncio para smartphones, especialmente cuando se colocan en la parte inferior de la página.'
      }
    } else if(index == 2) {
      return {
        name: '320x100 PX',
        description: 'También denominado "banner para dispositivos móviles grande". Se puede usar como alternativa a los formatos 320 x 50 y 300 x 250. <br> <br> Estos anuncios tienen el doble de altura que el "leaderboard para dispositivos móviles" estándar. <strong>Imagenes: </strong> Tipos de archivo compatibles .gif, .jpg, .png que no superen los 300KB.'
      }
    } else if (index == 3) {
      return {
        name: '300x250 PX',
        description: 'También denominado "rectángulo mediano". Suele ofrecer un mayor inventario de anuncios de los anunciantes, lo que puede aumentar los ingresos si se habilitan tanto los anuncios de texto como los anuncios de imagen estáticos. <br> <br> Tiene un buen rendimiento cuando se inserta dentro del contenido de texto o al final de artículos.'
      }
    } else if (index == 4) {
      return {
        name: 'Barra fija',
        description: ' Barra fija ...'
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
