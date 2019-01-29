<?php 

function secondtheme_assets() {
	wp_enqueue_style( 'secondtheme-stylesheet', get_template_directory_uri() . '/dist/assets/css/bundle.css', array(), time(), 'all' );

	wp_enqueue_script( 'secondtheme-scripts', get_template_directory_uri() . '/dist/assets/js/bundle.js', array('jquery'), time(), true);
}

add_action('wp_enqueue_scripts','secondtheme_assets');


function secondtheme_admin_assets() {
	wp_enqueue_style( 'secondtheme-admin-stylesheet', get_template_directory_uri() . '/dist/assets/css/admin.css', array(), time(), 'all' );

	wp_enqueue_script( 'secondtheme-admin-scripts', get_template_directory_uri() . '/dist/assets/js/admin.js', array(), time(), true);
}

add_action('admin_enqueue_scripts','secondtheme_admin_assets');