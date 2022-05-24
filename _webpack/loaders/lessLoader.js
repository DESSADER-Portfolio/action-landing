/*
 *
 * Copyright © 2022-present, DESSADER.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * File: lessLoader.js
 * Created: 22.04.2022
 * Author: DESSADER
 * Contacts:
 *    Email: dessader.work@gmail.com
 *    Telegram: @dessader_work
 *    GitHub: github.com/Dessader
 *
 */

const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  test: /\.less$/,
  use: [
    { loader: MiniCSSExtractPlugin.loader },
    {
      loader: "css-loader",
      options: {
        sourceMap: true
      }
    },
    { loader: "postcss-loader" },
    { loader: "less-loader" }
  ]
};
