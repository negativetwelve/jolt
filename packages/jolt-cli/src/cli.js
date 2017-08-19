// Libraries
import chalk from 'chalk';
import commander from 'commander';
import spawn from 'cross-spawn';
import updateNotifier from 'update-notifier';

// CLI
import Package from '../package.json';
import {COMMAND} from './config';
import {log} from './utils';
import {run} from './run';


/**
 * Defines the main program. Adds several options to the CLI:
 *
 *   --verbose: Prints out more information.
 *   -v, --version: Prints out the package version.
 *   -h, --help: Prints out the extended help message + usage.
 *
 */
let command;
const program = new commander.Command(COMMAND)
  .version(Package.version, '-v, --version')
  .arguments('<command>')
  .usage('<command> [options]')
  .action(input => command = input)
  .allowUnknownOption()
  .option(
    '--verbose',
    'prints additional information'
  )
  .on('--help', () => {
    // NOTE(mark): Examples are usually added to each command individually.
    // We log a newline here for formatting purposes only.
    log('');
  });

/**
 * Runs the main program. If we recognize the project, we delegate to
 * the project scripts. If not, we print out a message describing what to do.
 */
const runProgram = (program, command, args) => {
  // Always check if there's an update regardless of what command the user runs.
  updateNotifier({
    pkg: Package,
    callback: (update) => {
      if (update) {
        // If there's an update, download it and then re-run the previous command.
        log(`Retrieving updated version: ${chalk.green(update.latest)}`);

        // TODO(mark): Add progress bar or show the actual output from yarn.
        spawn.sync('yarn', ['global', 'add', Package.name]);
        spawn.sync(COMMAND, [command, ...args], {stdio: 'inherit'});
      } else if (command === undefined || command === 'help') {
        program.help();
      } else {
        run(command, args, {
          verbose: program.verbose,
        });
      }
    },
  });
};

/**
 * We know the CLI for sure has the commands `init` and `generate`. We
 * include it here with a noop function in order to have it appear in the
 * documentation. All commands defer to the `run` function defined above.
 */
program
  .command('help')
  .description('displays commands and options');

// Main function that actually runs the CLI commands.
program.parse(process.argv);
runProgram(program, command, process.argv.slice(3));
