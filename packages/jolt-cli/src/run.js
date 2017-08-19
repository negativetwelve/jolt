// Libraries
import spawn from 'cross-spawn';

// CLI
import {PACKAGE} from './config';
import {log} from './utils';


/**
 * Actually delegates the command we want to run to the installed PACKAGE.
 */
export const run = (command, args, {verbose = false}) => {
  const packagePath = require.resolve(PACKAGE);
  const executable = 'node';
  const commandArgs = [packagePath, command, ...args];

  if (verbose) {
    log(`Running: ${executable} ${commandArgs.join(' ')}`);
  }

  // Runs the script in a new shell.
  const result = spawn.sync(executable, commandArgs, {stdio: 'inherit'});

  // Pass on the exit code from the spawned process.
  process.exit(result.status);
};
