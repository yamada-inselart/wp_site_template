<?php
  get_header();
  mv();
?>

<!-- Main -->
<section class="main">

  <!-- Section01 -->
  <section class="topSec topSec-01">
    <div class="topSec_inner">
    <?php get_template_part('/template/loop', 'main'); ?>
    </div>
  </section>
  <!-- Section01 END -->

</section>
<!-- Main End -->

<?php
  get_footer();
