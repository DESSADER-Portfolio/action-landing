/*
 *
 * Copyright © 2022-present, DESSADER.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * File: faviconsPlugin.js
 * Created: 25.04.2022
 * Author: DESSADER
 * Contacts:
 *    Email: dessader.work@gmail.com
 *    Telegram: @dessader_work
 *    GitHub: github.com/Dessader
 *
 */

const path = require("path");
const paths = require("../tools/paths");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = new FaviconsWebpackPlugin({
  logo: path.join(paths.main.src, paths.resources.images, "favicon.svg"),
  outputPath: paths.resources.favicon,
  prefix: paths.resources.favicon + "/"
  // TODO: Added favicon options
});
