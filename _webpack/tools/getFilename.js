/*
 *
 * Copyright © 2022-present, DESSADER.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * File: getFilename.js
 * Created: 03.05.2022
 * Author: DESSADER
 * Contacts:
 *    Email: dessader.work@gmail.com
 *    Telegram: @dessader_work
 *    GitHub: github.com/Dessader
 *
 */

const getFilename = (ext, type) => {
  const separator = type === "asset/resource" ? "" : ".";
  switch (process.env.mode) {
    case "development": return `[name]${separator}${ext}`;
    case "production": return `[name].[contenthash:8]${separator}${ext}`;
  }
};

module.exports = getFilename;
