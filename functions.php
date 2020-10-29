<?php
require_once(dirname(__FILE__) . '/config/image-size.php');
require_once(dirname(__FILE__) . '/config/source.php');
require_once(dirname(__FILE__) . '/config/components.php');


add_filter('page_template_hierarchy', 'my_page_templates');
function my_page_templates($templates)
{
    global $wp_query;

    $template = get_page_template_slug();
    $pagename = $wp_query->query['pagename'];

    if (! $template && $pagename) {
        $decoded = urldecode($pagename);
        if ($decoded == $pagename) {
            array_unshift($templates, "page/{$pagename}.php");
        }
    }

    return $templates;
}
