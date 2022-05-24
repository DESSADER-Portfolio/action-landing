/*
 *
 * Copyright © 2022-present, DESSADER.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * File: miniCssExtractPlugin.js
 * Created: 25.04.2022
 * Author: DESSADER
 * Contacts:
 *    Email: dessader.work@gmail.com
 *    Telegram: @dessader_work
 *    GitHub: github.com/Dessader
 *
 */

const paths = require("../tools/paths");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const getFilename = require("../tools/getFilename");

module.exports = new MiniCSSExtractPlugin({
  filename: `${paths.modules.styles.outputPath}/${getFilename(".css", "asset/resource")}`
});
