import $ from './jquery';

class Orden {
  // http://localhost/siteAds/api/views/vendedores/?display_id=services_1&id-user=3
  constructor() {
    this.name = 'John serrano';
    let ruta = window.location.origin;
    if (ruta != 'http://localhost') {
      ruta = `${ruta}/api/views/vendedores/?display_id=services_1`;
    } else {
      ruta = `${ruta}/siteAds/api/views/vendedores/?display_id=services_1`;
    }
    this.ruta = ruta;
  }

  user () {
    const ruta = this.ruta;
    const id = $('#ordenPauta .autor #idUser .field-item').text();
    
    $.get(`${ruta}&id-user=${id}`)
      .done((data) => {
        // console.log(data);
        try {
          $('#ordenPauta .autor .name').html(data[0].users_name)
          $('#ordenPauta .autor .picture').html(data[0].users_picture)
          $('#ordenPauta .autor .cargo').html(data[0].cargo)
        } catch (err) {
          // console.log(err);
        }
      })
      .fail(() => {
        console.log('Error....');
      })
  }
}

export default Orden;
