/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * @module typing/typing
 */
import { Plugin } from '@ckeditor/ckeditor5-core';
import Input from './input.js';
import Delete from './delete.js';
import TextTransformation from './texttransformation.js';
/**
 * The typing feature. It handles typing.
 *
 * This is a "glue" plugin which loads the {@link module:typing/input~Input} and {@link module:typing/delete~Delete}
 * plugins.
 */
export default class Typing extends Plugin {
    static get requires() {
        return [Input, Delete, TextTransformation];
    }
    /**
     * @inheritDoc
     */
    static get pluginName() {
        return 'Typing';
    }
}
