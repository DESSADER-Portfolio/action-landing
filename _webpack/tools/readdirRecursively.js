/*
 *
 * Copyright © 2022-present, DESSADER.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * File: readdirRecursively.js
 * Created: 22.04.2022
 * Author: DESSADER
 * Contacts:
 *    Email: dessader.work@gmail.com
 *    Telegram: @dessader_work
 *    GitHub: github.com/Dessader
 *
 */

const fs = require("fs/promises");
const path = require("path");

const readdirRecursively = async (dir) => {
  const data = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    data.map((file) => {
      const absolutePath = path.resolve(dir, file.name);
      return file.isDirectory()
        ? readdirRecursively(absolutePath)
        : absolutePath;
    })
  );
  return [].concat(...files);
};

module.exports = readdirRecursively;
