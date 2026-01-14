<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <header class="mx-auto flex max-w-5xl flex-col text-center">
        <?php if(! is_page()): ?>
            <time datetime="<?php echo get_the_date( 'c' ); ?>" itemprop="datePublished" class="text-sm font-bold uppercase tracking-wider text-secondary"><?php echo get_the_date(); ?></time>
        <?php endif; ?>
        
        <h1 class="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight [text-wrap:balance] text-dark"><?php the_title(); ?></h1>

        <?php if(! is_page()): ?>
            <div class="mt-6 flex items-center justify-center gap-3">
                <div class="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary p-0.5">
                    <?php
                        echo get_avatar(get_the_author_meta( 'ID' ), 48, '', esc_attr(sprintf(__('Avatar for %s', 'tailpress'), get_the_author())), [
                            'class' => 'w-full h-full object-cover rounded-full',
                            'style' => 'color: transparent;'
                        ]);
                    ?>
                </div>
                <p class="text-sm font-bold text-dark">by <span class="text-primary"><?php the_author(); ?></span></p>
            </div>
        <?php endif; ?>
    </header>

    <?php if(has_post_thumbnail()): ?>
        <div class="mt-10 sm:mt-16 mx-auto max-w-4xl rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
            <?php the_post_thumbnail('large', ['class' => 'aspect-16/10 w-full object-cover']); ?>
        </div>
    <?php endif; ?>

    <div class="entry-content mx-auto max-w-3xl mt-10 sm:mt-16">
        <?php the_content(); ?>
    </div>
</article>
