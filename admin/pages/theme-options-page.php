<?php
require_once(dirname(__FILE__) . '/get-theme-options.php');

function theme_options_page()
{
    ?>
<div class="wrap">
  <h2>Theme options page</h2>
  <form method="post" action="options.php" enctype="multipart/form-data" encoding="multipart/form-data">
    <?php
      settings_fields('theme_options');
      //do_settings_sections('theme_options');
      $options = get_theme_options(); 
    ?>
    <p><input type="text" id="name" name="t_options[name]" placeholder="Name"
        value="<?php echo $options['name']; ?>">
    </p>
    <?php submit_button(); ?>
  </form>
</div>

<?php
}
