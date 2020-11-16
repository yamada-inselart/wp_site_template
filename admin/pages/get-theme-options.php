<?php
function get_theme_options()
{
    $theme_default_options = array(
        'name'=> 'Makishima',
    );
    return shortcode_atts($theme_default_options, get_option('t_options', array()));
}