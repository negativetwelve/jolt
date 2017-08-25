#!/usr/bin/env node

// Libraries
import {commander, log} from 'jolt-utils';

// CLI
import Package from '../package.json';
import {COMMAND} from './config';


/**
 * Defines the main program. Adds several options to the CLI:
 *
 *   -v, --version: Prints out the package version.
 *   -h, --help: Prints out the extended help message + usage.
 *
 */
new commander.Command(COMMAND)
  .version(Package.version, '-v, --version')
  .arguments('<command>')
  .usage('<command> [options]')
  .on('--help', () => log(''))
  .command('self-update', 'updates the CLI and all dependencies')
  .command('create', 'creates a new package')
  .parse(process.argv);
