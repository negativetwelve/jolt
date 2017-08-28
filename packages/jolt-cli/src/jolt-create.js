#!/usr/bin/env node

// Libraries
import {commander, log, protect} from 'jolt-utils';
import {CreateCommand} from 'jolt-scripts';

// CLI
import {COMMAND} from './config';


let argument;
const program = new commander.Command(`${COMMAND} create`)
  .arguments('<type>')
  .usage('<type> [options]')
  .action(input => {
    argument = input;
  })
  .on('--help', () => log(''))
  .parse(process.argv);

protect(() => CreateCommand.run(argument, program.opts()));
