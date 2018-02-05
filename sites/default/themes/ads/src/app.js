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

  orden.user();
});
