/**
 * Shared utilities across all jolt packages.
 */
export {default as chalk} from 'chalk';
export {default as commander} from 'commander';
export {default as spawn} from 'cross-spawn';
export const log = (...args) => console.log(args.join('\n'));

// Propagates errors from the `callback` and exits the process.
export const protect = async (callback) => {
  try {
    await callback();
  } catch (error) {
    log(error.message);
    process.exit(1);
  }
};
