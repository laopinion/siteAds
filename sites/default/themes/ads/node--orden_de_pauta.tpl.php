<section id="ordenPauta" class="container">
  <h3>Orden de pauta</h3>
  <div class="autor">
    <aside id="idUser" style="display: none;"><?php print render($content['field_autor']); ?></aside>
    <div class="picture"></div>
    <div class="name"></div>
    <div class="cargo"></div>
  </div>
  <ul>
    <li>
      <label>Número del contrato</label>
      <div class="valor"><?php print $title; ?></div>
    </li>
    <li>
      <label>Nombre de la empresa</label>
      <div class="valor">
        <?php print render($content['field_nombre_de_la_empresa']); ?>
      </div>
    </li>
    <li>
      <label>Código del vendedor</label>
      <div class="valor">
        <?php print render($content['field_codigo_del_vendedor']); ?>
      </div>
    </li>
    <li>
      <label>Canal</label>
      <div class="valor">
        <?php print render($content['field_canal']); ?>
      </div>
    </li>
    <!-- <li>
      <label>Personalidad de la marca</label>
      <div class="valor">
        <?php //print render($content['field_personalidad_de_la_marca']); ?>
      </div>
    </li> -->
    <li>
      <label>Tipo de publicidad</label>
      <div class="valor">
        <?php print render($content['field_tipo_de_publicidad_']); ?>
      </div>
    </li>
    <li>
      <label>Ubicación</label>
      <div class="valor">
        <?php print render($content['field_ubicacion']); ?>
      </div>
    </li>
    <li>
      <label>Segmentación</label>
      <div class="valor">
        <?php print render($content['field_segmentacion']); ?>
      </div>
    </li>
    <li>
      <label>Descripción del producto o servicio</label>
      <div class="valor">
        <?php print render($content['field_descripcion_del_producto']); ?>
      </div>
    </li>
    <!-- <li>
      <label>Target</label>
      <div class="valor">
        <?php //print render($content['field_target']); ?>
      </div>
    </li> -->
    <li>
      <label>Objetivo de la publicidad</label>
      <div class="valor">
        <?php print render($content['field_objetivo_de_la_publicidad']); ?>
      </div>
    </li>
    <li>
      <label>Temporalidad</label>
      <div class="valor">
        <?php print render($content['field_temporalidad']); ?>
      </div>
    </li>
    <li>
      <label>Enlace de destino</label>
      <div class="valor">
        <?php print render($content['field_timing']); ?>
      </div>
    </li>
    <li>
      <label>Valor agregado</label>
      <div class="valor">
        <?php print render($content['field_valor_agregado']); ?>
      </div>
    </li>
    <li>
      <label>Resultados esperados</label>
      <div class="valor">
        <?php print render($content['field_resultados_esperados']); ?>
      </div>
    </li>
    <li>
      <label>Presupuesto</label>
      <div class="valor">
        <?php print render($content['field_presupuesto']); ?>
      </div>
    </li>
    <li>
      <label>Archivos</label>
      <div class="valor">
        <?php print render($content['field_archivos']); ?>
      </div>
    </li>
    <li>
      <label>Galerías</label>
      <div class="valor">
        <?php print render($content['field_galeria']); ?>
      </div>
    </li>
    <li>
      <label>Pregunta encuesta</label>
      <div class="valor">
        <?php print render($content['field_encuesta']); ?>
      </div>
    </li>
    <li>
      <label>Imágenes encuesta</label>
      <div class="valor">
        <?php print render($content['field_imagenes']); ?>
      </div>
    </li>
    <li>
      <label>Estado</label>
      <div class="valor">
        <?php print render($content['field_estado']); ?>
      </div>
    </li>
  </ul>
</section>
