<?php
/**
 * Theme Functions for Driven Outcomes
 * 
 * This file contains the theme setup, custom post types, and other functionality
 */

// Theme Setup
function driven_outcomes_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));

    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'driven-outcomes'),
    ));
}
add_action('after_setup_theme', 'driven_outcomes_setup');

// Register Custom Post Type: Workshops
function register_workshops_post_type() {
    $labels = array(
        'name'                  => _x('Workshops', 'Post Type General Name', 'driven-outcomes'),
        'singular_name'         => _x('Workshop', 'Post Type Singular Name', 'driven-outcomes'),
        'menu_name'             => __('Workshops', 'driven-outcomes'),
        'name_admin_bar'        => __('Workshop', 'driven-outcomes'),
        'archives'              => __('Workshop Archives', 'driven-outcomes'),
        'attributes'            => __('Workshop Attributes', 'driven-outcomes'),
        'parent_item_colon'     => __('Parent Workshop:', 'driven-outcomes'),
        'all_items'             => __('All Workshops', 'driven-outcomes'),
        'add_new_item'          => __('Add New Workshop', 'driven-outcomes'),
        'add_new'               => __('Add New', 'driven-outcomes'),
        'new_item'              => __('New Workshop', 'driven-outcomes'),
        'edit_item'             => __('Edit Workshop', 'driven-outcomes'),
        'update_item'           => __('Update Workshop', 'driven-outcomes'),
        'view_item'             => __('View Workshop', 'driven-outcomes'),
        'view_items'            => __('View Workshops', 'driven-outcomes'),
        'search_items'          => __('Search Workshop', 'driven-outcomes'),
        'not_found'             => __('Not found', 'driven-outcomes'),
        'not_found_in_trash'    => __('Not found in Trash', 'driven-outcomes'),
    );
    
    $args = array(
        'label'                 => __('Workshop', 'driven-outcomes'),
        'description'           => __('Workshops and training events', 'driven-outcomes'),
        'labels'                => $labels,
        'supports'              => array('title', 'editor', 'thumbnail', 'excerpt'),
        'hierarchical'          => false,
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'menu_position'         => 5,
        'menu_icon'             => 'dashicons-welcome-learn-more',
        'show_in_admin_bar'     => true,
        'show_in_nav_menus'     => true,
        'can_export'            => true,
        'has_archive'           => true,
        'exclude_from_search'   => false,
        'publicly_queryable'    => true,
        'capability_type'       => 'post',
        'show_in_rest'          => true, // Enable Gutenberg editor
    );
    
    register_post_type('workshop', $args);
}
add_action('init', 'register_workshops_post_type', 0);

// Register Custom Post Type: Promotions
function register_promotions_post_type() {
    $labels = array(
        'name'                  => _x('Promotions', 'Post Type General Name', 'driven-outcomes'),
        'singular_name'         => _x('Promotion', 'Post Type Singular Name', 'driven-outcomes'),
        'menu_name'             => __('Promotions', 'driven-outcomes'),
        'name_admin_bar'        => __('Promotion', 'driven-outcomes'),
        'archives'              => __('Promotion Archives', 'driven-outcomes'),
        'attributes'            => __('Promotion Attributes', 'driven-outcomes'),
        'parent_item_colon'     => __('Parent Promotion:', 'driven-outcomes'),
        'all_items'             => __('All Promotions', 'driven-outcomes'),
        'add_new_item'          => __('Add New Promotion', 'driven-outcomes'),
        'add_new'               => __('Add New', 'driven-outcomes'),
        'new_item'              => __('New Promotion', 'driven-outcomes'),
        'edit_item'             => __('Edit Promotion', 'driven-outcomes'),
        'update_item'           => __('Update Promotion', 'driven-outcomes'),
        'view_item'             => __('View Promotion', 'driven-outcomes'),
        'view_items'            => __('View Promotions', 'driven-outcomes'),
        'search_items'          => __('Search Promotion', 'driven-outcomes'),
        'not_found'             => __('Not found', 'driven-outcomes'),
        'not_found_in_trash'    => __('Not found in Trash', 'driven-outcomes'),
    );
    
    $args = array(
        'label'                 => __('Promotion', 'driven-outcomes'),
        'description'           => __('Special offers and promotions', 'driven-outcomes'),
        'labels'                => $labels,
        'supports'              => array('title', 'editor', 'thumbnail', 'excerpt'),
        'hierarchical'          => false,
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'menu_position'         => 6,
        'menu_icon'             => 'dashicons-megaphone',
        'show_in_admin_bar'     => true,
        'show_in_nav_menus'     => true,
        'can_export'            => true,
        'has_archive'           => true,
        'exclude_from_search'   => false,
        'publicly_queryable'    => true,
        'capability_type'       => 'post',
        'show_in_rest'          => true, // Enable Gutenberg editor
    );
    
    register_post_type('promotion', $args);
}
add_action('init', 'register_promotions_post_type', 0);

// Enqueue Styles and Scripts
function driven_outcomes_scripts() {
    wp_enqueue_style('driven-outcomes-style', get_stylesheet_uri(), array(), '1.0.0');
}
add_action('wp_enqueue_scripts', 'driven_outcomes_scripts');

// Custom excerpt length
function driven_outcomes_excerpt_length($length) {
    return 30;
}
add_filter('excerpt_length', 'driven_outcomes_excerpt_length', 999);

// Custom excerpt more
function driven_outcomes_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'driven_outcomes_excerpt_more');
