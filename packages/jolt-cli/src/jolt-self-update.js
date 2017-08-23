// Libraries
import chalk from 'chalk';
import commander from 'commander';
import spawn from 'cross-spawn';
import updateNotifier from 'update-notifier';

// CLI
import Package from '../package.json';
import {COMMAND} from './config';
import {log} from './utils';


new commander.Command(`${COMMAND} self-update`)
  .command('*')
  .action(() => updateNotifier({
    pkg: Package,
    callback: (error, update) => {
      if (update && update.current !== update.latest) {
        // If there's an update, download it and then re-run the previous
        // command.
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
  }))
  .parse(process.argv);
