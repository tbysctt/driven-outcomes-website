<?php
/**
 * Template for displaying single workshops
 * 
 * @package DrivenOutcomes
 */

get_header();
?>

<div class="container mx-auto">
    <?php while (have_posts()): the_post(); ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <header class="mx-auto flex max-w-5xl flex-col text-center mb-10">
                <div class="inline-flex items-center justify-center mb-4">
                    <span class="inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-900 ring-1 ring-inset ring-blue-600/20">
                        <svg class="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                        </svg>
                        <?php _e('Workshop', 'driven-outcomes'); ?>
                    </span>
                </div>
                
                <h1 class="mt-6 text-5xl font-medium tracking-tight [text-wrap:balance] text-zinc-950 sm:text-6xl">
                    <?php the_title(); ?>
                </h1>

                <time datetime="<?php echo get_the_date('c'); ?>" itemprop="datePublished" class="order-first text-sm text-zinc-600 mt-4">
                    <?php echo get_the_date(); ?>
                </time>
            </header>

            <?php if (has_post_thumbnail()): ?>
                <div class="mt-10 sm:mt-20 mx-auto max-w-4xl rounded-4xl bg-light overflow-hidden shadow-lg">
                    <?php the_post_thumbnail('large', ['class' => 'aspect-16/10 w-full object-cover']); ?>
                </div>
            <?php endif; ?>

            <div class="entry-content mx-auto max-w-3xl mt-10 sm:mt-20 prose prose-lg prose-zinc">
                <?php the_content(); ?>
            </div>

            <div class="mx-auto max-w-3xl mt-10 pt-10 border-t border-zinc-200">
                <div class="flex items-center justify-between">
                    <div class="text-sm text-zinc-600">
                        <?php _e('Interested in this workshop?', 'driven-outcomes'); ?>
                    </div>
                    <a href="<?php echo home_url('/contact'); ?>" class="inline-flex rounded-full bg-zinc-950 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800 transition">
                        <?php _e('Contact Us', 'driven-outcomes'); ?>
                    </a>
                </div>
            </div>
        </article>
    <?php endwhile; ?>
</div>

<?php
get_footer();
