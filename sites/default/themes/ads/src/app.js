import $ from './jquery';
import Home from './home';
import Orden from './orden-pauta';

$(function() {
  // console.log('ok todo bien jquery');
  
  const home = new Home();
  const orden = new Orden();

  home.clickListDesktop();
  home.clickLanding();
  home.clickBoletin();
  home.changeDevices();
  home.clickListMovil();

  $('#menu #nav-icon3').click(function () {
    $(this).toggleClass('open');
    let active = $(this).data('active');
    // console.log(active)
    if (active == 0) {
      $('#home .left').css('left', '0');
      $(this).data('active', '1');
    } else {
      $('#home .left').css('left', '-320px');
      $(this).data('active', '0');
    }
  });

  orden.user();
});
