/*
 *
 * Copyright © 2022-present, DESSADER.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * File: imageMinimizerPlugin.js
 * Created: 25.04.2022
 * Author: DESSADER
 * Contacts:
 *    Email: dessader.work@gmail.com
 *    Telegram: @dessader_work
 *    GitHub: github.com/Dessader
 *
 */

const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

// TODO: Improve image optimization

module.exports = new ImageMinimizerPlugin({
  minimizer: {
    implementation: ImageMinimizerPlugin.imageminMinify,
    options: {
      plugins: [
        ["gifsicle", { interlaced: true }],
        ["jpegtran", { progressive: true }],
        ["optipng", { optimizationLevel: 5 }]
      ]
    }
  }
});
