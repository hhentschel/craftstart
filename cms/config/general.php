<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see \craft\config\GeneralConfig
 */

use craft\config\GeneralConfig;
use craft\helpers\App;

return GeneralConfig::create()
    ->aliases([
        '@assetsUrl' => App::env('CRAFT_ASSETS_URL'),
        '@cloudfrontUrl' => App::env('CLOUDFRONT_URL'),
        '@web' => App::env('PRIMARY_SITE_URL'),
        //
        '@webrootpath' => App::env('CRAFT_WEB_ROOT_PATH'),
        '@webroot' => App::env('CRAFT_WEB_ROOT'),
    ])
    // ->aliases([
    //     '@webroot' => dirname(__DIR__) . '/web',
    //     '@assetsUrl' => dirname(__DIR__) . '/web/dist',
    // ])

    ->allowUpdates(App::env('CRAFT_ALLOW_UPDATES'))
    ->allowAdminChanges(App::env('CRAFT_ALLOW_ADMIN_CHANGES'))
    ->backupOnUpdate(App::env('CRAFT_BACKUP_ON_UPDATE'))
    ->devMode(App::env('CRAFT_DEV_MODE'))
    ->maxRevisions(App::env('CRAFT_MAX_REVISIONS'))
    ->runQueueAutomatically(App::env('CRAFT_RUN_QUEUE_AUTOMATICALLY'))
    ->securityKey(App::env('CRAFT_SECURITY_KEY'))
    ->disallowRobots(App::env('CRAFT_DISALLOW_ROBOTS'))
    // Craft config settings from constants
    ->cpTrigger('cp')
    ->defaultTokenDuration('P1D')
    ->enableCsrfProtection(true)
    ->errorTemplatePrefix('errors/')
    ->partialTemplatesPath('/_views/_partials')
    ->extraFileKinds([
        'text' => [
            'extensions' => ['csv'],
        ],
    ])
    ->generateTransformsBeforePageLoad(true)
    ->maxCachedCloudImageSize(3000)
    ->maxUploadFileSize('100M')
    ->omitScriptNameInUrls(true)
    ->preventUserEnumeration(true)
    ->sendPoweredByHeader(false)
    ->preloadSingles(true)
    ->useEmailAsUsername(false)

    ->usePathInfo(true)
    ->limitAutoSlugsToAscii(true)
    ->convertFilenamesToAscii(true);

;
