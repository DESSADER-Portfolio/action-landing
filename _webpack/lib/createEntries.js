/*
 *
 * Copyright © 2022-present, DESSADER.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * File: createEntries.js
 * Created: 23.04.2022
 * Author: DESSADER
 * Contacts:
 *    Email: dessader.work@gmail.com
 *    Telegram: @dessader_work
 *    GitHub: github.com/Dessader
 *
 */

const path = require("path");
const readdirRecursively = require("../tools/readdirRecursively");
const fileExtensions = require("../tools/fileExtensions");

const createEntries = async (pageDirs) => {
  let entries = {};

  for (const dir of pageDirs) {
    const pageName = path.parse(dir).base;
    const pageFiles = await readdirRecursively(dir);

    entries[pageName] = [
      ...pageFiles
        .filter((file) => fileExtensions.isValid(path.parse(file).ext))
        .filter((file) => !path.parse(file).dir.includes("_blocks"))
    ];
  }

  return entries;
};

module.exports = createEntries;
