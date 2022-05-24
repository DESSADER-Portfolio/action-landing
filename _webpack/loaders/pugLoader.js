/*
 *
 * Copyright © 2022-present, DESSADER.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * File: pugLoader.js
 * Created: 22.04.2022
 * Author: DESSADER
 * Contacts:
 *    Email: dessader.work@gmail.com
 *    Telegram: @dessader_work
 *    GitHub: github.com/Dessader
 *
 */

const paths = require("../tools/paths");

module.exports = {
  test: /\.pug$/,
  use: {
    loader: "pug-loader",
    options: {
      pretty: true,
      root: paths.aliases.views
    }
  }
};
