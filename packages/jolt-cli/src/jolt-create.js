#!/usr/bin/env node

// Libraries
import {commander, guard, log} from 'jolt-utils';
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

guard(() => CreateCommand.run(argument, program.opts()));
