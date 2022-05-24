/*
 *
 * Copyright © 2022-present, DESSADER.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * File: createPageInstances.js
 * Created: 25.04.2022
 * Author: DESSADER
 * Contacts:
 *    Email: dessader.work@gmail.com
 *    Telegram: @dessader_work
 *    GitHub: github.com/Dessader
 *
 */

const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const createPageInstances = (pageDirs) => {
  return pageDirs.map((pageDir) => {
    const { name } = path.parse(pageDir);

    return new HTMLWebpackPlugin({
      template: path.join(pageDir, name + ".pug"),
      filename: `${name}.html`,
      inject: "body",
      chunks: ["app", name],
      minify: false
    });
  });
};

module.exports = createPageInstances;
