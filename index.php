<?php get_header(); ?>

<?php if(have_posts()) { ?>
    <?php while(have_posts()) { ?>
        <?php the_post(); ?>
        <h2>
            <a href="<?php the_permalink() ?>" title="<?php the_title_attribute(); ?>"><?php the_title() ?>
            </a>
        </h2>
        <div>
            <?php secondtheme_post_meta(); ?>
        </div>
        <div>
            <?php the_excerpt(); ?>
        </diV>
            <?php secondtheme_readmore_link(); ?> 
    <?php } ?>
    <?php the_posts_pagination( ); ?>
<?php } else { ?>
    <p><?php esc_html_e('Sorry, no posts matched your criteria.', 'secondtheme'); ?></p>
<?php } ?>    

<?php

$city = 'london';

echo esc_html__( 'Your city is', 'secondtheme' ) . $city;

printf(
    /* tanslators: %s is the city name */
    esc_html__( 'Your city is %s', 'secondtheme' ),
    $city
);

?>

<?php get_footer(); ?>