<?php
/**
 * Main template file for displaying posts.
 *
 * @package TailPress
 */

get_header();
?>

<div class="container mx-auto py-12 space-y-16 lg:space-y-24">
    <?php if (!is_singular()): ?>
        <header class="mb-8">
            <?php if (is_archive()): ?>
                <h1 class="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-dark">
                    <?php the_archive_title(); ?>
                </h1>
            <?php elseif (is_category()): ?>
                <h1 class="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-dark">
                    <?php single_cat_title(); ?>
                </h1>
            <?php elseif (is_tag()): ?>
                <h1 class="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-dark">
                    <?php single_tag_title(); ?>
                </h1>
            <?php elseif (is_author()): ?>
                <h1 class="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-dark">
                    <?php printf(__('Posts by %s', 'tailpress'), get_the_author()); ?>
                </h1>
            <?php elseif (is_day()): ?>
                <h1 class="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-dark">
                    <?php printf(__('Daily Archives: %s', 'tailpress'), get_the_date()); ?>
                </h1>
            <?php elseif (is_month()): ?>
                <h1 class="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-dark">
                    <?php printf(__('Monthly Archives: %s', 'tailpress'), get_the_date('F Y')); ?>
                </h1>
            <?php elseif (is_year()): ?>
                <h1 class="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-dark">
                    <?php printf(__('Yearly Archives: %s', 'tailpress'), get_the_date('Y')); ?>
                </h1>
            <?php elseif (is_search()): ?>
                <h1 class="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-dark">
                    <?php printf(__('Search results for: %s', 'tailpress'), get_search_query()); ?>
                </h1>
            <?php elseif (is_404()): ?>
                <h1 class="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-dark">
                    <?php _e('Page Not Found', 'tailpress'); ?>
                </h1>
            <?php endif; ?>
            <div class="mt-4 h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
        </header>
    <?php endif; ?>

    <?php if (have_posts()): ?>
        <?php while (have_posts()): the_post(); ?>
            <?php get_template_part('template-parts/content', is_singular() ? 'single' : ''); ?>
        <?php endwhile; ?>

        <?php TailPress\Pagination::render(); ?>
    <?php endif; ?>
</div>

<?php
get_footer();
