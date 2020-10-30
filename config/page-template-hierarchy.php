<?php
/**
 * page-〇〇.php → /pages/〇〇.php
 */
add_filter('page_template_hierarchy', 'my_page_templates');
function my_page_templates($templates)
{
    global $wp_query;
    $template = get_page_template_slug();
    $pagename = $wp_query->query['pagename'];
    if (! $template && $pagename) {
        $decoded = urldecode($pagename);
        if ($decoded == $pagename) {
            array_unshift($templates, "pages/{$pagename}.php");
        }
    }
    return $templates;
}