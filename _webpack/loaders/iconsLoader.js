/*
 *
 * Copyright © 2022-present, DESSADER.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * File: iconsLoader.js
 * Created: 23.04.2022
 * Author: DESSADER
 * Contacts:
 *    Email: dessader.work@gmail.com
 *    Telegram: @dessader_work
 *    GitHub: github.com/Dessader
 *
 */

const paths = require("../tools/paths");

module.exports = {
  test: /\.svg$/,
  include: paths.aliases.icons,
  use: [
    {
      loader: "svg-sprite-loader",
      options: {
        extract: true,
        outputPath: paths.resources.images + "/",
        spriteFilename: "icons.svg"
      }
    },
    {
      loader: "svgo-loader",
      options: {
        plugins: [
          {
            name: "removeAttrs",
            params: {
              attrs: "(fill|stroke)"
            }
          }
        ]
      }
    }
  ]
};
