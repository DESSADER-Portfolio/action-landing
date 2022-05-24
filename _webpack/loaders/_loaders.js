/*
 *
 * Copyright © 2022-present, DESSADER.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * File: _loaders.js
 * Created: 22.04.2022
 * Author: DESSADER
 * Contacts:
 *    Email: dessader.work@gmail.com
 *    Telegram: @dessader_work
 *    GitHub: github.com/Dessader
 *
 */

const jsLoader = require("./jsLoader");
const tsLoader = require("./tsLoader");
const imagesLoader = require("./imagesLoader");
const fontsLoader = require("./fontsLoader");
const pugLoader = require("./pugLoader");
const lessLoader = require("./lessLoader");
const sassLoader = require("./sassLoader");
const iconsLoader = require("./iconsLoader");

module.exports = [
  jsLoader,
  tsLoader,
  imagesLoader,
  fontsLoader,
  pugLoader,
  lessLoader,
  sassLoader,
  iconsLoader
];
