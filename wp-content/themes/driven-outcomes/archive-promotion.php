<?php
/**
 * Template for displaying promotion archives
 * 
 * @package DrivenOutcomes
 */

get_header();
?>

<div class="container mx-auto space-y-24 lg:space-y-32">
    <header class="mb-8">
        <h1 class="text-5xl font-medium tracking-tight text-zinc-950 sm:text-6xl mb-4">
            <?php _e('Special Promotions', 'driven-outcomes'); ?>
        </h1>
        <?php if (get_the_archive_description()): ?>
            <div class="text-lg text-zinc-600 max-w-3xl">
                <?php the_archive_description(); ?>
            </div>
        <?php endif; ?>
    </header>

    <?php if (have_posts()): ?>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <?php while (have_posts()): the_post(); ?>
                <article id="post-<?php the_ID(); ?>" <?php post_class('group relative flex flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-50 to-white shadow-sm ring-1 ring-zinc-100 hover:shadow-md transition-shadow'); ?>>
                    <?php if (has_post_thumbnail()): ?>
                        <div class="relative aspect-[16/9] bg-zinc-100 overflow-hidden">
                            <a href="<?php the_permalink(); ?>" class="block h-full">
                                <?php the_post_thumbnail('large', ['class' => 'h-full w-full object-cover transition-transform duration-300 group-hover:scale-105']); ?>
                            </a>
                            <div class="absolute top-4 right-4">
                                <span class="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-900 ring-1 ring-inset ring-amber-600/20">
                                    <?php _e('Promotion', 'driven-outcomes'); ?>
                                </span>
                            </div>
                        </div>
                    <?php endif; ?>
                    
                    <div class="flex flex-col flex-1 p-6">
                        <time datetime="<?php echo get_the_date('c'); ?>" class="text-sm text-zinc-500 mb-2">
                            <?php echo get_the_date(); ?>
                        </time>
                        
                        <h2 class="text-xl font-semibold text-zinc-950 mb-3 line-clamp-2">
                            <a href="<?php the_permalink(); ?>" class="!no-underline hover:text-zinc-600 transition-colors">
                                <?php the_title(); ?>
                            </a>
                        </h2>
                        
                        <div class="text-base text-zinc-600 mb-4 line-clamp-3 flex-1">
                            <?php the_excerpt(); ?>
                        </div>
                        
                        <a href="<?php the_permalink(); ?>" class="inline-flex items-center text-sm font-semibold text-zinc-950 hover:text-zinc-600 transition-colors">
                            <?php _e('View promotion', 'driven-outcomes'); ?>
                            <svg class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </article>
            <?php endwhile; ?>
        </div>

        <div class="mt-12">
            <?php TailPress\Pagination::render(); ?>
        </div>
    <?php else: ?>
        <div class="text-center py-12">
            <p class="text-lg text-zinc-600"><?php _e('No promotions available at this time.', 'driven-outcomes'); ?></p>
        </div>
    <?php endif; ?>
</div>

<?php
get_footer();
