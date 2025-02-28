<?php

namespace modules\ckeditorcustomizations\src;

use Craft;
use yii\base\Module as BaseModule;
use craft\ckeditor\Plugin;
use modules\ckeditorcustomizations\src\web\assets\ckeditorcustomizations\CkeditorCustomizationsAsset;


/**
 * CkeditorCustomizations module
 *
 * @method static CkeditorCustomizations getInstance()
 */
class CkeditorCustomizations extends BaseModule
{
    public function init(): void
    {
        Craft::setAlias('@modules/ckeditorcustomizations/src', __DIR__);
        Plugin::registerCkeditorPackage(CkeditorCustomizationsAsset::class);

        // Set the controllerNamespace based on whether this is a console or web request
        if (Craft::$app->request->isConsoleRequest) {
            $this->controllerNamespace = 'modules\\ckeditorcustomizations\\src\\console\\controllers';
        } else {
            $this->controllerNamespace = 'modules\\ckeditorcustomizations\\src\\controllers';
        }

        parent::init();

        // Defer most setup tasks until Craft is fully initialized
        Craft::$app->onInit(function() {
            $this->attachEventHandlers();
            // ...
        });
    }

    private function attachEventHandlers(): void
    {
        // Register event handlers here ...
        // (see https://craftcms.com/docs/4.x/extend/events.html to get started)
    }
}
