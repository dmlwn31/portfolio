<script src="https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.js"></script>

var $grid = $('.all_wrap').imagesLoaded( function() {
  $grid.masonry({
      itemSelector: '.grid-item',
      fitwidth: true
  });
});
