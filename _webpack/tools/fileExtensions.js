/*
 *
 * Copyright © 2022-present, DESSADER.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * File: fileExtensions.js
 * Created: 03.05.2022
 * Author: DESSADER
 * Contacts:
 *    Email: dessader.work@gmail.com
 *    Telegram: @dessader_work
 *    GitHub: github.com/Dessader
 *
 */

class FileExtensions {
  static list = [".js", ".ts", ".scss", ".sass", ".less"];

  static isValid(extension) {
    return this.list.includes(extension);
  }
}

module.exports = FileExtensions;
