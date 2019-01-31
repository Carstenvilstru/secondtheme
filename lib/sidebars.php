<?php
function secondtheme_sidebar_widgets() {
	register_sidebar( array(
		'id' => 'primary-sidebar',
		'name' => esc_html__('Primary Sidebar', 'secondtheme')
	));
}

add_action('widgets_init','secondtheme_sidebar_widgets');