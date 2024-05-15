<?php
/**
 * Craft CMS 5 content migration that creates & deletes Fields, EntryTypes & Sections, adds the Fields to the
 * EntryTypes, adds the EntryTypes to the Sections, and then seeds the newly created Section with faked data.
 * Also has a `safeDown()` method to revert what the migration adds
 *
 * @licence   MIT
 * @link      https://nystudio107.com
 * @copyright Copyright (c) nystudio107
 */

namespace craft\contentmigrations;

use Craft;
use craft\base\Element;
use craft\base\Field;
use craft\db\Migration;
use craft\elements\Entry;
use craft\errors\ElementNotFoundException;
use craft\errors\EntryTypeNotFoundException;
use craft\errors\SectionNotFoundException;
use craft\errors\SiteNotFoundException;
use craft\fieldlayoutelements\CustomField;
use craft\fields\PlainText;
use craft\models\EntryType;
use craft\models\Section;
use craft\models\Section_SiteSettings;
use Faker\Factory;
use Throwable;
use yii\base\Exception;
use yii\base\InvalidConfigException;
use yii\db\Schema;

/**
 * m240514_111300_seed_db_data	 migration.
 */
class m240514_124542_seed_db_data extends Migration
{
    // Handle to the user that should own the entries
    private const USER_NAME = 'admin';
    // The number of entries to create
    private const NUM_ENTRIES = 100;
    // Array of configs for the Fields to create
    private const FIELD_CONFIGS = [
        [
            'class' => PlainText::class,
            'name' => 'Demo Data',
            'handle' => 'demoData',
            'translationMethod' => Field::TRANSLATION_METHOD_NONE,
            'multiline' => 0,
            'columnType' => Schema::TYPE_STRING,
        ],
    ];
    // Array of configs for the EntryTypes to create
    private const ENTRY_TYPE_CONFIGS = [
        [
            'class' => EntryType::class,
            'name' => 'Demo',
            'handle' => 'demo',
            'customFields' => [
                'demoData'
            ]
        ],
        [
            'class' => EntryType::class,
            'name' => 'CTA',
            'handle' => 'cta',
            'customFields' => [
                'ctaData'
            ]
        ],
        [
            'class' => EntryType::class,
            'name' => 'CTA',
            'handle' => 'cta',
            'customFields' => [
                'ctaData'
            ]
        ],
    ];
    // Array of configs for the Sections to create
    private const SECTION_CONFIGS = [
        [
            'class' => Section::class,
            'name' => 'Demo',
            'handle' => 'demo',
            'type' => Section::TYPE_CHANNEL,
            'enableVersioning' => false,
            'entryTypes' => [
                'demo',
            ]
        ],
        [
            'class' => Section::class,
            'name' => 'Demo Section',
            'handle' => 'demosection',
            'type' => Section::TYPE_STRUCTURE,
            'enableVersioning' => false,
            'entryTypes' => [
                'demo',
            ]
        ],
    ];


    /**
     * @inheritdoc
     */
    public function safeUp(): bool
    {
        try {
            $this->createFields(self::FIELD_CONFIGS);
            $this->createEntryTypes(self::ENTRY_TYPE_CONFIGS);
            $this->createSections(self::SECTION_CONFIGS);
            $this->addFieldsToEntryTypes(self::SECTION_CONFIGS, self::ENTRY_TYPE_CONFIGS, self::FIELD_CONFIGS);
            $this->createEntryData(self::FIELD_CONFIGS, self::SECTION_CONFIGS[0]['handle'], self::ENTRY_TYPE_CONFIGS[0]['handle'], self::USER_NAME, self::NUM_ENTRIES);
        } catch (Throwable $e) {
            Craft::error($e->getMessage(), __METHOD__);
            return false;
        }

        return true;
    }

    /**
     * @inheritdoc
     */
    public function safeDown(): bool
    {
        try {
            $this->deleteEntryData();
            $this->removeFieldsFromEntryTypes();
            $this->deleteFields(self::FIELD_CONFIGS);
            $this->deleteSections(self::SECTION_CONFIGS);
            $this->deleteEntryTypes(self::ENTRY_TYPE_CONFIGS);
        } catch (Throwable $e) {
            Craft::error($e->getMessage(), __METHOD__);
            return false;
        }

        return true;
    }

    /**
     * Create Fields based on $fieldConfigs
     *
     * @param array $fieldConfigs
     * @return void
     * @throws InvalidConfigException
     * @throws Throwable
     */
    protected function createFields(array $fieldConfigs): void
    {
        $fields = Craft::$app->getFields();
        foreach ($fieldConfigs as $fieldConfig) {
            $handle = $fieldConfig['handle'];
            if ($fields->getFieldByHandle($handle)) {
                echo "Field $handle already exists" . PHP_EOL;
                continue;
            }
            // Create & save each Field
            $field = Craft::createObject(array_merge($fieldConfig, [
            ]));
            $fields->saveField($field);
        }
    }

    /**
     * Delete Fields based on $fieldConfigs
     *
     * @param array $fieldConfigs
     * @return void
     * @throws Throwable
     */
    protected function deleteFields(array $fieldConfigs): void
    {
        $fields = Craft::$app->getFields();
        foreach ($fieldConfigs as $fieldConfig) {
            $handle = $fieldConfig['handle'];
            // Get and delete each field
            $field = $fields->getFieldByHandle($handle);
            if ($field) {
                Craft::$app->getFields()->deleteField($field);
            }
        }
    }

    /**
     * Create EntryTypes based on $entryTypeConfigs
     *
     * @param array $entryTypeConfigs
     * @return void
     * @throws EntryTypeNotFoundException
     * @throws InvalidConfigException
     * @throws Throwable
     */
    protected function createEntryTypes(array $entryTypeConfigs): void
    {
        $entries = Craft::$app->getEntries();
        foreach ($entryTypeConfigs as $entryTypeConfig) {
            $handle = $entryTypeConfig['handle'];
            if ($entries->getEntryTypeByHandle($handle)) {
                echo "EntryType $handle already exists" . PHP_EOL;
                continue;
            }
            // We use the custom field handles later on, to add them to the EntryType's layout
            unset($entryTypeConfig['customFields']);
            // Create & save each EntryType
            $entryType = Craft::createObject(array_merge($entryTypeConfig, [
            ]));
            if (!$entries->saveEntryType($entryType)) {
                $entryType->validate();
                echo "EntryType $handle could not be saved" . PHP_EOL . print_r($entryType->getErrors(), true) . PHP_EOL;
                return;
            }
        }
    }

    /**
     * Delete EntryTypes based on the $entryTypeConfigs
     *
     * @param array $entryTypeConfigs
     * @return void
     * @throws Throwable
     */
    protected function deleteEntryTypes(array $entryTypeConfigs): void
    {
        $entries = Craft::$app->getEntries();
        foreach ($entryTypeConfigs as $entryTypeConfigConfig) {
            $handle = $entryTypeConfigConfig['handle'];
            $entryType = $entries->getEntryTypeByHandle($handle);
            if ($entryType) {
                $entries->deleteEntryType($entryType);
            }
        }
    }

    /**
     * Create Sections based on the $sectionConfigs
     *
     * @param array $sectionConfigs
     * @return void
     * @throws InvalidConfigException
     * @throws SectionNotFoundException
     * @throws SiteNotFoundException
     * @throws Throwable
     */
    protected function createSections(array $sectionConfigs): void
    {
        $entries = Craft::$app->getEntries();
        foreach ($sectionConfigs as $sectionConfig) {
            $handle = $sectionConfig['handle'];
            if ($entries->getSectionByHandle($handle)) {
                echo "Section $handle already exists" . PHP_EOL;
                continue;
            }
            // Get all of the entry types by handle
            $entryTypes = [];
            $entryTypeHandles = $sectionConfig['entryTypes'];
            foreach ($entryTypeHandles as $entryTypeHandle) {
                $entryType = $entries->getEntryTypeByHandle($entryTypeHandle);
                if ($entryType) {
                    $entryTypes[] = $entryType;
                }
            }
            // Create & save each Section
            /** @var Section $section */
            $section = Craft::createObject(array_merge($sectionConfig, [
                'siteSettings' => [
                    new Section_SiteSettings([
                        'siteId' => Craft::$app->sites->getPrimarySite()->id,
                        'enabledByDefault' => true,
                        'hasUrls' => true,
                        'uriFormat' => "$handle/{slug}",
                        'template' => "$handle/_entry",
                    ]),
                ],
                'entryTypes' => $entryTypes,
            ]));
            if (!$entries->saveSection($section)) {
                $section->validate();
                echo "Section $handle could not be saved" . PHP_EOL . print_r($section->getErrors(), true) . PHP_EOL;
            }
        }
    }

    /**
     * Delete Sections based on the $sectionConfigs
     *
     * @param array $sectionConfigs
     * @return void
     * @throws Throwable
     */
    protected function deleteSections(array $sectionConfigs): void
    {
        $entries = Craft::$app->getEntries();
        foreach ($sectionConfigs as $sectionConfig) {
            $handle = $sectionConfig['handle'];
            $section = $entries->getSectionByHandle($handle);
            if ($section) {
                $entries->deleteSection($section);
            }
        }
    }

    /**
     * Add the Fields to the EntryTypes for each $sectionConfigs
     *
     * @param array $sectionConfigs
     * @param array $entryTypeConfigs
     * @param array $fieldConfigs
     * @return void
     * @throws EntryTypeNotFoundException
     * @throws InvalidConfigException
     * @throws Throwable
     */
    protected function addFieldsToEntryTypes(array $sectionConfigs, array $entryTypeConfigs, array $fieldConfigs): void
    {
        $entries = Craft::$app->getEntries();
        foreach ($sectionConfigs as $sectionConfig) {
            // Iterate through each Section
            $sectionHandle = $sectionConfig['handle'];
            $section = $entries->getSectionByHandle($sectionHandle);
            if (!$section) {
                echo "Section $sectionHandle doesn't exist" . PHP_EOL;
                return;
            }
            // Iterate through each EntryType
            foreach ($entryTypeConfigs as $entryTypeConfig) {
                $entryTypeHandle = $entryTypeConfig['handle'];
                if (!in_array($entryTypeHandle, $sectionConfig['entryTypes'], true)) {
                    continue;
                }
                $entryType = $entries->getEntryTypeByHandle($entryTypeHandle);
                if (!$entryType) {
                    echo "EntryType $entryTypeHandle doesn't exist" . PHP_EOL;
                    return;
                }
                // Iterate through each Field
                $elements = [];
                foreach ($fieldConfigs as $fieldConfig) {
                    $fieldHandle = $fieldConfig['handle'];
                    if (!in_array($fieldHandle, $entryTypeConfig['customFields'], true)) {
                        continue;
                    }
                    $field = Craft::$app->getFields()->getFieldByHandle($fieldHandle);
                    if (!$field) {
                        echo "Field $fieldHandle doesn't exist" . PHP_EOL;
                        continue;
                    }
                    $elements[] = Craft::createObject([
                        'class' => CustomField::class,
                        'fieldUid' => $field->uid,
                        'required' => false,
                    ]);
                }
                // Just assign the fields to the first tab
                $layout = $entryType->getFieldLayout();
                $tabs = $layout->getTabs();
                $tabs[0]->setElements(array_merge($tabs[0]->getElements(), $elements));
                $layout->setTabs($tabs);
                $entryType->setFieldLayout($layout);
                $entries->saveEntryType($entryType);
            }
        }
    }

    /**
     * Remove the Fields from the EntryTypes
     *
     * @return void
     */
    protected function removeFieldsFromEntryTypes(): void
    {
        // Do nothing, these will be destroyed along with the EntryType
    }

    /**
     * Create the Entry data
     *
     * @param array $fieldConfigs
     * @param string $sectionHandle
     * @param string $entryTypeHandle
     * @param string $userName
     * @param int $numEntries
     * @return void
     * @throws InvalidConfigException
     * @throws Throwable
     * @throws ElementNotFoundException
     * @throws Exception
     */
    protected function createEntryData(array $fieldConfigs, string $sectionHandle, string $entryTypeHandle, string $userName, int $numEntries): void
    {
        $faker = Factory::create();
        $entries = Craft::$app->getEntries();
        $section = $entries->getSectionByHandle($sectionHandle);
        if (!$section) {
            echo "Section $sectionHandle doesn't exist" . PHP_EOL;
            return;
        }
        $entryType = $entries->getEntryTypeByHandle($entryTypeHandle);
        if (!$entryType) {
            echo "EntryType $entryTypeHandle doesn't exist" . PHP_EOL;
            return;
        }
        $user = Craft::$app->users->getUserByUsernameOrEmail($userName);
        if (!$user) {
            echo "User $userName doesn't exist" . PHP_EOL;
            return;
        }
        for ($i = 0; $i < $numEntries; $i++) {
            $name = $faker->unique()->name();
            /* @var Entry $entry */
            $entry = Craft::createObject([
                'class' => Entry::class,
                'sectionId' => $section->id,
                'typeId' => $entryType->id,
                'authorId' => $user->id,
                'title' => $name,
            ]);
            // Just the essentials for bulk import/creation
            $entry->setScenario(Element::SCENARIO_ESSENTIALS);
            foreach ($fieldConfigs as $fieldConfig) {
                $handle = $fieldConfig['handle'];
                $entry->setFieldValue($handle, $name);
            }
            if (Craft::$app->elements->saveElement($entry)) {
                echo "#$i - Added entry $name" . PHP_EOL;
            } else {
                echo "#$i - Failed to add entry $name" . PHP_EOL;
            }
        }
    }

    /**
     * Delete all entries from $sectionHandle
     *
     * @return void
     */
    protected function deleteEntryData(): void
    {
        // Do nothing, these will be destroyed along with the EntryType
    }
}