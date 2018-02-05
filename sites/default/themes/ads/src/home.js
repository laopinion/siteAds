import $ from './jquery';

class Home {
  constructor() {
    this.name = 'John serrano';
  }
  // Desktop
  namesBanners(index) {
    if (index == 1) {
      return '1000x90PXL'
    } else if(index == 2) {
      return '1000x50PXL (Desplegable)'
    } else if (index == 3) {
      return '728x90PXL'
    } else if (index == 4) {
      return '300x250PXL'
    } else if (index == 5) {
      return 'barra flotante (fijo)'
    } else if (index == 6) {
      return 'Layer invasivo'
    } else if (index == 7) {
      return 'Toma de home (desplegable + laterales)'
    } else if (index == 8) {
      return '160x600PXL (lateral)'
    }
  }

  namesBannersMovil (index) {
    if (index == 1) {
      return '320x50PXL'
    } else if(index == 2) {
      return '320x100PXL'
    } else if (index == 3) {
      return '300x250PXL'
    } else if (index == 4) {
      return 'Barra fija'
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
        $('#home .right .info #nameBanner').html(`Banner ${name}`);
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
        $('#home .right .info #nameBanner').html(`Banner ${name}`);
      }else {
        $(this).removeClass('active');
      }
    });
    // console.log('limpiando...')
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
   });
  }

  clickLanding () {
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
    })
  }

  clickBoletin () {
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
    })
  }
  // Desktop
  encontrarName () {
    let name = '';
    $('#home .left #tipoBanner #listBannersDesktop li').each(function (index, element) {
      if ($(this).find('.flecha').hasClass('active')) {
        name = $(this).find('strong').text();
        name = name.toUpperCase();
        name = $.trim(name);
      }
    });
    return name;
  }

  encontrarNameMovil () {
    let name = '';
    $('#home .left #tipoBannerMovil #listBannersMovil li').each(function (index, element) {
      if ($(this).find('.flecha').hasClass('active')) {
        name = $(this).find('strong').text();
        name = name.toUpperCase();
        name = $.trim(name);
        name = `${name}L`;
      }
    });
    return name;
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
      $('#home .right .info #nameBanner').html(`Banner ${name}`);
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
      $('#home .right .info #nameBanner').html(`Banner ${name}`);
    });
  }
}

// module.exports = Home; 
export default Home; // Esto es otra forma de exportar modules
