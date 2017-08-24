#!/usr/bin/env node

// Libraries
import updateNotifier from 'update-notifier';
import {chalk, commander, log, spawn} from 'jolt-utils';

// CLI
import Package from '../package.json';
import {COMMAND} from './config';


new commander.Command(`${COMMAND} self-update`)
  .on('--help', () => log(''))
  .parse(process.argv);

updateNotifier({
  pkg: Package,
  callback: (error, update) => {
    if (update && update.current !== update.latest) {
      // If there's an update, download it.
      log(`Retrieving updated version: ${chalk.green(update.latest)}`);
      spawn.sync('yarn', ['global', 'add', Package.name], {
        stdio: 'inherit',
      });
    } else {
      log(
        `${chalk.green(COMMAND)} is already up-to-date with version: ` +
        `${Package.version}.`,
      );
    }
  },
});
