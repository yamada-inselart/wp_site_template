<?php
if (have_posts()):
    while (have_posts()): the_post();
?>

<article></article>

<?php
    endwhile;
    if (function_exists('wp_pagenavi')):
        wp_pagenavi();
    endif;
else:
?>
<p>記事はありません。</p>
<?php
endif;
