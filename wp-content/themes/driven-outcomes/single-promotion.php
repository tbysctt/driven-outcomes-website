<?php
/**
 * Template for displaying single promotions
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
                    <span class="inline-flex items-center rounded-full bg-amber-50 px-4 py-1.5 text-sm font-semibold text-amber-900 ring-1 ring-inset ring-amber-600/20">
                        <svg class="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"/>
                        </svg>
                        <?php _e('Special Promotion', 'driven-outcomes'); ?>
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
                <div class="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl p-8 ring-1 ring-amber-200">
                    <div class="text-center">
                        <p class="text-lg font-semibold text-zinc-950 mb-4">
                            <?php _e('Ready to take advantage of this offer?', 'driven-outcomes'); ?>
                        </p>
                        <a href="<?php echo home_url('/contact'); ?>" class="inline-flex rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800 transition">
                            <?php _e('Get Started', 'driven-outcomes'); ?>
                        </a>
                    </div>
                </div>
            </div>
        </article>
    <?php endwhile; ?>
</div>

<?php
get_footer();
