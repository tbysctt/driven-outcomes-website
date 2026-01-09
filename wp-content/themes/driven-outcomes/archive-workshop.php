<?php
/**
 * Template for displaying workshop archives
 */

get_header();
?>

<div class="content-area">
    <header class="page-header">
        <h1 class="page-title">Workshops</h1>
    </header>
    
    <?php
    if (have_posts()) :
        ?>
        <div class="post-grid">
        <?php
        while (have_posts()) :
            the_post();
            ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class('post-card'); ?>>
                <?php if (has_post_thumbnail()) : ?>
                    <div class="post-thumbnail">
                        <?php the_post_thumbnail('medium'); ?>
                    </div>
                <?php endif; ?>
                
                <h3>
                    <a href="<?php the_permalink(); ?>">
                        <?php the_title(); ?>
                    </a>
                </h3>
                
                <div class="post-meta">
                    <?php echo get_the_date(); ?>
                </div>
                
                <div class="excerpt">
                    <?php the_excerpt(); ?>
                </div>
                
                <a href="<?php the_permalink(); ?>" class="read-more">
                    Learn More
                </a>
            </article>
            <?php
        endwhile;
        ?>
        </div>
        <?php
        the_posts_navigation();
    else :
        ?>
        <p>No workshops found. Check back soon!</p>
        <?php
    endif;
    ?>
</div>

<?php
get_footer();
