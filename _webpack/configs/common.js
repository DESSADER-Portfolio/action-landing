/*
 *
 * Copyright © 2022-present, DESSADER.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * File: common.js
 * Created: 25.04.2022
 * Author: DESSADER
 * Contacts:
 *    Email: dessader.work@gmail.com
 *    Telegram: @dessader_work
 *    GitHub: github.com/Dessader
 *
 */

const path = require("path");
const paths = require("../tools/paths");
const fileExtensions = require("../tools/fileExtensions");
const getFilename = require("../tools/getFilename");

class CommonConfig {
  constructor(options) {
    const {
      entries = {},
      loaders = [],
      pageInstances = [],
      plugins = []
    } = options || {};

    this.entries = entries;
    this.loaders = loaders;
    this.pageInstances = pageInstances;
    this.plugins = plugins;
  }

  init() {
    return {
      entry: {
        app: path.join(paths.main.src, "index.ts"),
        ...this.entries
      },
      output: {
        clean: true,
        path: paths.main.build,
        publicPath: "/",
        filename: `${paths.resources.scripts}/${getFilename("js")}`
      },
      optimization: {
        splitChunks: {
          chunks: "all",
          cacheGroups: {
            vendors: {
              test: /[\\/]node_modules[\\/]/,
              name(module) {
                const packageName = module.context.match(
                  /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                )[1];
                return `vendor_module.${packageName.replace("@", "")}`;
              }
            }
          }
        }
      },
      module: {
        rules: [...this.loaders]
      },
      plugins: [...this.plugins, ...this.pageInstances],
      resolve: {
        extensions: fileExtensions.list,
        alias: {
          "@src": paths.main.src,
          "@helpers": paths.aliases.helpers,
          "@styles": paths.aliases.styles,
          "@views": paths.aliases.views,
          "@components/js": paths.aliases.componentsJs,
          "@components/scss": paths.aliases.componentsScss
        }
      }
    };
  }
}

module.exports = CommonConfig;
