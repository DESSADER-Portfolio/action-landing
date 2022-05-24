/*
 *
 * Copyright © 2022-present, DESSADER.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * File: paths.js
 * Created: 22.04.2022
 * Author: DESSADER
 * Contacts:
 *    Email: dessader.work@gmail.com
 *    Telegram: @dessader_work
 *    GitHub: github.com/Dessader
 *
 */

const path = require("path");

class Paths {
  static root = {
    app: path.resolve(__dirname, "../../")
  };

  static main = {
    src: path.join(this.root.app, "src"),
    build: path.join(this.root.app, "build"),
    publicPath: "/"
  };
  
  static resources = {
    scripts: "scripts",
    helpers: "scripts/helpers",
    views: "views",
    styles: "views/styles",
    components: "views/components",
    pages: "views/pages",
    assets: "assets",
    images: "assets/images",
    icons: "assets/images/icons",
    favicon: "assets/images/favicon",
    videos: "assets/videos",
    fonts: "assets/fonts"
  };

  // TODO: Refactoring module & resource
  // Add build and dev path support for each resource type

  static modules = {
    styles: {
      srcPath: this.resources.styles,
      outputPath: "styles"
    }
  };

  static aliases = {
    scripts: path.join(this.main.src, this.resources.scripts),
    helpers: path.join(this.main.src, this.resources.helpers),
    views: path.join(this.main.src, this.resources.views),
    componentsJs: path.join(this.main.src, this.resources.components, "components.ts"),
    componentsScss: path.join(this.main.src, this.resources.components, "components.scss"),
    styles: path.join(this.main.src, this.resources.styles),
    pages: path.join(this.main.src, this.resources.pages),
    icons: path.join(this.main.src, this.resources.icons)
  };
}

module.exports = Paths;
