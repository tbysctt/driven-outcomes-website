<?php

if (is_file(__DIR__.'/vendor/autoload_packages.php')) {
    require_once __DIR__.'/vendor/autoload_packages.php';
}

function tailpress(): TailPress\Framework\Theme
{
    return TailPress\Framework\Theme::instance()
        ->assets(fn($manager) => $manager
            ->withCompiler(new TailPress\Framework\Assets\ViteCompiler, fn($compiler) => $compiler
                ->registerAsset('resources/css/app.css')
                ->registerAsset('resources/js/app.js')
                ->editorStyleFile('resources/css/editor-style.css')
            )
            ->enqueueAssets()
        )
        ->features(fn($manager) => $manager->add(TailPress\Framework\Features\MenuOptions::class))
        ->menus(fn($manager) => $manager->add('primary', __( 'Primary Menu', 'tailpress')))
        ->themeSupport(fn($manager) => $manager->add([
            'title-tag',
            'custom-logo',
            'post-thumbnails',
            'align-wide',
            'wp-block-styles',
            'responsive-embeds',
            'html5' => [
                'search-form',
                'comment-form',
                'comment-list',
                'gallery',
                'caption',
            ]
        ]));
}

tailpress();

// Register Custom Post Type: Workshops
function driven_outcomes_register_workshops() {
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
        'show_in_rest'          => true,
    );
    
    register_post_type('workshop', $args);
}
add_action('init', 'driven_outcomes_register_workshops', 0);

// Register Custom Post Type: Promotions
function driven_outcomes_register_promotions() {
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
        'show_in_rest'          => true,
    );
    
    register_post_type('promotion', $args);
}
add_action('init', 'driven_outcomes_register_promotions', 0);
