// exitcode: 0 => success
// exitcode: 1 => test failing
// exitcode: 2 => bad argv
// exitcode: 3 => unknown error(bug)

import ProgressBar = require('progress');
import { snapshotsFolderName, loadSnaps, ColorCodes } from './runner/utils';
import { resolve } from 'path';
import { autogen } from './runner/autogenerate';
import { file2Tob, updateTob } from './runner/tob';

const APIs = ['parser', 'printer'];

runCli();

async function runCli() {
  const opts = getCliOptions();
  const bar = new ProgressBar('Testing snapshots [:bar] :percent, :elapseds elapsed, eta :etas,', {
    clear: false,
    total: opts.files.length
  });

  if (opts.gen) {
    opts.files = await autogen(opts.files, opts.conservative);

    // TODO:there was something wrong in the update logic,
    // need to re-run `npm run test:update-all` to update the snapshots
    return;
  }
  setTiming(opts);

  let cnt = 0;

  for (let i = 0; i < opts.files.length; i++) {
    const tob = await file2Tob(opts.files[i], opts.check);
    if (tob.mismatchItems.length) {
      cnt++;
      // only log when not auto-gen mode
      opts.gen || console.log(`Output mismatch(${tob.mismatchItems}) for`, tob.filename);
      updateTob(tob, opts.updateItems);
    }
    bar.tick(1);
  }

  // Only show mismatch if it exist
  if (cnt > 0) {
    console.log(ColorCodes.RED + '\nMismatch: ' + ColorCodes.yellow + `${cnt}/${opts.files.length}` + ColorCodes.RESET);
    if (opts.updateItems.length === 0) process.exitCode = 1;
  }
}

export function getCliOptions(): any {
  const help = process.argv.includes('-?') || process.argv.includes('--help');
  help && showHelp();

  const gen = process.argv.includes('-g') || process.argv.includes('-G');
  const update = process.argv.includes('-u') ? process.argv[process.argv.indexOf('-u') + 1] : false;
  const check = process.argv.includes('-c');

  const opts = {
    gen,
    updateItems: update === 'all' ? APIs : update === false ? [] : [update],
    check,
    conservative: process.argv.includes('-G'), // skip existing
    // defaults to all tests(if not specified)
    files: loadSnaps(
      process.argv.includes('-f')
        ? [process.argv[process.argv.indexOf('-f') + 1]]
        : resolve('test/' + snapshotsFolderName),
      '',
      gen
    )
  };

  !gen && (opts.files = opts.files.filter((f: any) => !f.endsWith('autogen.md')));

  if (opts.updateItems.length) {
    if (opts.gen) {
      console.log('Cannot use auto update and auto generate together');
      process.exit(2);
    }
    if (opts.updateItems.some((it) => !APIs.includes(it))) {
      console.log(`updateItems can only be one of ${APIs.join(', ')}, but you passed ${opts.updateItems}.`);
      process.exit(2);
    }
    console.log(`update items: ${opts.updateItems}`);
  }

  return opts;
}

function showHelp() {
  console.log(`
    Kataw Test Runner
    Options:
      -f "path"     Only test this file / dir
      -g            Regenerate computed test case blocks (process all autogen.md files)
      -G            Same as -g except it skips existing files
      -u            Auto-update tests with the results (tests silently updated inline, use source control to diff)
      -c            Check the printed output
  `);
  process.exit(0);
}

function setTiming(opts: any) {
  const msg = `${ColorCodes.GREEN}Ran ${ColorCodes.RESET}${opts.files.length}  test cases.${ColorCodes.yellow} Total time${ColorCodes.RESET}`;

  console.time(msg);
  process.on('beforeExit', function () {
    console.timeEnd(msg);
  });
}
