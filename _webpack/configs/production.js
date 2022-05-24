/*
 *
 * Copyright © 2022-present, DESSADER.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * File: production.js
 * Created: 25.04.2022
 * Author: DESSADER
 * Contacts:
 *    Email: dessader.work@gmail.com
 *    Telegram: @dessader_work
 *    GitHub: github.com/Dessader
 *
 */

class ProductionConfig {
  constructor(options) {
    const { minimizerPlugins = [] } = options || {};

    this.mode = process.env.mode || "production";
    this.minimizerPlugins = minimizerPlugins;
  }

  init() {
    return {
      mode: this.mode,
      optimization: {
        minimizer: [...this.minimizerPlugins]
      }
    };
  }
}

module.exports = ProductionConfig;
