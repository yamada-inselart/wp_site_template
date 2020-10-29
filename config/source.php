<?php
/**
 * CSS, JSファイルの設定ファイル
 */
add_action( 'wp_enqueue_scripts', 'add_files' );

function add_files() {
  
  // CSSファイル
  wp_enqueue_style( 'font-awesome',  get_template_directory_uri() . '/assets/fonts/font_awesome/font-awesome.min.css', '' , '');
	wp_enqueue_style( 'style',  get_template_directory_uri() . '/assets/css/style.css', '' , '');

	// JSファイル
	wp_enqueue_script( 'jquery' );
  wp_enqueue_script( 'jquery-anchorScroll',   get_template_directory_uri() . '/assets/js/jquery-anchorScroll.js', array( 'jquery' ) , '', true);
  wp_enqueue_script( 'common-js',   get_template_directory_uri() . '/assets/js/common.js', array( 'jquery' ) , '', true);
}