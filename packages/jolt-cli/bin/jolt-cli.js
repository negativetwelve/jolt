#!/usr/bin/env node

'use strict';

/**
 * This file works with any node version >= 0.10.0. If the version is less
 * than 8, we print out a message and ask the developer to upgrade.
 */
var chalk = require('chalk');

var currentNodeVersion = process.versions.node;
var semver = currentNodeVersion.split('.');
var major = semver[0];

if (major < 8) {
  console.error(
    chalk.red(
      'You are running Node ' + currentNodeVersion + '.\n' +
      'Jolt requires Node 6 or higher. \n' +
      'Please update your version of Node.'
    )
  );
  process.exit(1);
}

require('../build/cli');
