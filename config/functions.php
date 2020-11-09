<?php
/**
 * 汎用関数の設定ファイル
 */
function echoTitle()
{
    if (!is_home()) {
        wp_title('|', true, 'right');
    }
    bloginfo('name');
}
function echoDescription()
{
    global $post;
    $description = "";
    if (is_home()) {
        // ホームでは、ブログの説明文を取得
        $description = get_bloginfo('description');
    } elseif (is_category()) {
        // カテゴリーページでは、カテゴリーの説明文を取得
        $description = category_description();
    } elseif (is_single()) {
        if ($post->post_excerpt) {
            // 記事ページでは、記事本文から抜粋を取得
            $description = $post->post_excerpt;
        } else {
            // post_excerpt で取れない時は、自力で記事の冒頭100文字を抜粋して取得
            $description = strip_tags($post->post_content);
            $description = str_replace("\n", "", $description);
            $description = str_replace("\r", "", $description);
            $description = mb_substr($description, 0, 100) . "...";
        }
    } else {
        ;
    }
    echo $description;
}
function echoPostTitle()
{
    global $post;
    if (mb_strlen($post->post_title, 'UTF-8')>80) {
        $title= mb_substr($post->post_title, 0, 80, 'UTF-8');
        echo $title.'…';
    } else {
        echo $post->post_title;
    }
}
function echoThumbnail($size = 'size01', $default = true)
{
    if (has_post_thumbnail()) {
        the_post_thumbnail('size01');
    } elseif ($default) {
        echo '<img src="' . get_template_directory_uri() . '/images/no-image01.png">';
    }
}