<?php

namespace modules\ckeditorcustomizations\src\web\assets\ckeditorcustomizations;

use Craft;
use craft\ckeditor\web\assets\BaseCkeditorPackageAsset;

/**
 * Ckeditor Customizations asset bundle
 */
class CkeditorCustomizationsAsset extends BaseCkeditorPackageAsset
{
    public $sourcePath = __DIR__ . '/dist';
    public $depends = [];
    public $js = [
        'typing.js',
        'text-transformation.js',
        'highlight.js',
    ];
    public $css = [];
    public array $pluginNames = [
        'Typing',
        'TextTransformation',
        'Highlight',
    ];
    public array $toolbarItems = [
        'highlight',
    ];
}
