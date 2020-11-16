<?php
require_once(dirname(__FILE__) . '/pages/theme-options-page.php');
require_once(dirname(__FILE__) . '/theme-options-validate.php');

add_action('admin_init', 'theme_options_init');
add_action('admin_menu', 'theme_options_add_page');

// 登録
function theme_options_init()
{
    register_setting('theme_options', 't_options', 'theme_options_validate');
}
 // ロード
function theme_options_add_page()
{
    add_theme_page('Theme Options', 'Theme Options', 'edit_theme_options', 'theme_options', 'theme_options_page');
}