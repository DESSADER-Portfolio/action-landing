/*
 *
 * Copyright © 2022-present, DESSADER.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * File: jsLoader.js
 * Created: 22.04.2022
 * Author: DESSADER
 * Contacts:
 *    Email: dessader.work@gmail.com
 *    Telegram: @dessader_work
 *    GitHub: github.com/Dessader
 *
 */

module.exports = {
  test: /\.js$/,
  exclude: /(node_modules)/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env"],
      plugins: ["@babel/plugin-transform-classes"]
    }
  }
};
