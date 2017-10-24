<?php

function load_scripts() {
	wp_enqueue_script( 'main-manifest', get_template_directory_uri() . '/dist/static/js/manifest.js', array(), '1.0.0', true );
	wp_enqueue_script( 'main-vendor', get_template_directory_uri() . '/dist/static/js/vendor.js', array(), '1.0.0', true );
	wp_enqueue_script( 'main-scripts', get_template_directory_uri() . '/dist/static/js/app.js', array(), '1.0.0', true );
	wp_enqueue_style('main-styles', get_template_directory_uri() . '/dist/static/css/app.css', array(), '1.0.0', 'all');
}
add_action('wp_enqueue_scripts', 'load_scripts');

function google_fonts() {
	$query_args = array(
		'family' => 'Roboto'
	);
	wp_enqueue_style( 'google_fonts', add_query_arg( $query_args, "//fonts.googleapis.com/css" ), array(), null );
}

add_action('wp_enqueue_scripts', 'google_fonts');

function get_menu() {
    # Change 'menu' to your own navigation slug.
    return wp_get_nav_menu_items('menu');
}

add_action( 'rest_api_init', function () {
        register_rest_route( 'api', '/menu', array(
        'methods' => 'GET',
        'callback' => 'get_menu',
    ) );
} );
