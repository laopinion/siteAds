import $ from './jquery';

class Home {
  constructor() {
    this.name = 'John serrano';
  }

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
    console.log('limpiando...')
  }

  clickListDesktop () {
    const _this = this;
    $('#home .left #tipoBanner #listBannersDesktop strong').click( function () {
      const index = $(this).data('index');
      _this.limpiar(index);
   });
  }
}

// module.exports = Home; 
export default Home; // Esto es otra forma de exportar modules
