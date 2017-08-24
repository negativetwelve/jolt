/**
 * Shared utilities across all jolt packages.
 */
export {default as chalk} from 'chalk';
export {default as commander} from 'commander';
export {default as spawn} from 'cross-spawn';
export const log = (...args) => console.log(args.join('\n'));
