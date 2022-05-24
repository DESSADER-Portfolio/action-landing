/*
 *
 * Copyright © 2022-present, DESSADER.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * File: _plugins.js
 * Created: 23.04.2022
 * Author: DESSADER
 * Contacts:
 *    Email: dessader.work@gmail.com
 *    Telegram: @dessader_work
 *    GitHub: github.com/Dessader
 *
 */

const SpriteLoaderPlugin = require("./spriteLoaderPlugin");
const MiniCSSExtractPlugin = require("./miniCssExtractPlugin");
const FaviconsWebpackPlugin = require("./faviconsPlugin");
const ImageMinimizerPlugin = require("./imageMinimizerPlugin");
const TerserPlugin = require("./terserPlugin");
const CSSMinimizerPlugin = require("./cssMinimizerPlugin");

module.exports = {
  common: [SpriteLoaderPlugin, MiniCSSExtractPlugin, FaviconsWebpackPlugin],
  minimizers: [ImageMinimizerPlugin, TerserPlugin, CSSMinimizerPlugin],
  production: []
};
