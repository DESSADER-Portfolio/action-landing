/*
 *
 * Copyright © 2022-present, DESSADER.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * File: development.js
 * Created: 25.04.2022
 * Author: DESSADER
 * Contacts:
 *    Email: dessader.work@gmail.com
 *    Telegram: @dessader_work
 *    GitHub: github.com/Dessader
 *
 */

const paths = require("../tools/paths");

class DevelopmentConfig {
  constructor() {
    this.mode = process.env.mode || "development";
  }

  init() {
    return {
      mode: this.mode,
      devServer: {
        static: {
          directory: paths.main.src
        },
        port: 3000,
        hot: true,
        client: {
          overlay: true
        },
        open: {
          app: {
            name: "Google Chrome"
          }
        }
      }
    };
  }
}

module.exports = DevelopmentConfig;
