import $ from './jquery';
import Home from './home';

$(function() {
  console.log('ok todo bien jquery');
  
  const home = new Home();
  home.clickListDesktop();
  home.clickLanding();
  home.clickBoletin();
  home.changeDevices();
  home.clickListMovil();
});
