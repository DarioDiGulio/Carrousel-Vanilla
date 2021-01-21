<main>
  <div id="carrousel">
    <img
      src="img/prev.png"
      id="prev"
      alt="prev"
      class="action-arrow non-selectable"
    />
      <?php
      include "ejecutables/cargarProductos.php";

      foreach ($todosLosArticulos as $articulo) {
          echo var_dump($articulo);
          ?>
          
          <div class="carrousel-item prev">
            <div class="card01">
              <h1 class="card-title">
                <?php
                  echo $articulo['NOMBRE'];
                ?>
              </h1>
              <div class="product-section">
                <img
                  src="img/01imagen.jpg"
                  alt="
                    <?php
                      echo $articulo['NOMBRE'];
                    ?>
                  "
                  width="185"
                  class="imagen"
                />
              </div>
              <div class="container">
                <h2 class="card-code">
                  CÓDIGO:
                  <?php
                    echo $articulo['CODIGO'];
                  ?>
                </h2>
                <p class="card-description">
                  Descripción:
                  <?php
                    echo $articulo['DESCRIPCION']
                  ?>
                </p>
                <button
                  class="card-action"
                  onclick="window.location.href='/pages/more.html'"
                >
                  Ver más
                </button>
              </div>
            </div>
          </div>
      <?php       
        }
      ?>
    <img
      src="img/next.png"
      id="next"
      alt="next"
      class="action-arrow non-selectable"
    />
  </div>
</main>
