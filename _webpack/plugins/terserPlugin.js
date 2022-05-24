/*
 *
 * Copyright © 2022-present, DESSADER.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * File: terserPlugin.js
 * Created: 25.04.2022
 * Author: DESSADER
 * Contacts:
 *    Email: dessader.work@gmail.com
 *    Telegram: @dessader_work
 *    GitHub: github.com/Dessader
 *
 */

const TerserPlugin = require("terser-webpack-plugin");

module.exports = new TerserPlugin({
  test: /\.js$/,
  exclude: /(node_modules)/
});
