/*
 *
 * Copyright © 2022-present, DESSADER.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * File: init.js
 * Created: 22.04.2022
 * Author: DESSADER
 * Contacts:
 *    Email: dessader.work@gmail.com
 *    Telegram: @dessader_work
 *    GitHub: github.com/Dessader
 *
 */

const paths = require("./tools/paths");

const loaders = require("./loaders/_loaders");
const plugins = require("./plugins/_plugins");

const readdirSync = require("./tools/readdirSync");
const createPageInstances = require("./lib/createPageInstances");
const createEntries = require("./lib/createEntries");

const CommonConfig = require("./configs/common");
const DevelopmentConfig = require("./configs/development");
const ProductionConfig = require("./configs/production");

const { merge } = require("webpack-merge");

const init = async () => {
  const mode = process.env.mode;
  const pageDirs = readdirSync(paths.aliases.pages);
  const pageInstances = createPageInstances(pageDirs);
  const entries = await createEntries(pageDirs);

  const commonConfig = new CommonConfig({
    entries: entries,
    loaders: loaders,
    plugins: plugins.common,
    pageInstances: pageInstances
  }).init();
  const developmentConfig = new DevelopmentConfig({}).init();
  const productionConfig = new ProductionConfig({
    minimizerPlugins: plugins.minimizers
  }).init();

  return merge(
    commonConfig,
    mode === "development" ? developmentConfig : productionConfig
  );
};

module.exports = init;
