// exitcode: 0 => success
// exitcode: 1 => test failing
// exitcode: 2 => bad argv
// exitcode: 3 => unknown error(bug)

import { report, snapshotsFolderName, loadSnaps, ColorCodes } from './runner/utils';
import { resolve } from 'path';
import { autogen } from './runner/autogenerate';
import { file2Tob, updateTob } from './runner/tob';

const fn = ['parser', 'printer'];

runCli();

export async function runCli() {
  const opts = cliOpts();
  console.time(
    ColorCodes.GREEN +
      'Running ' +
      ColorCodes.RESET +
      opts.files.length +
      ' test cases.' +
      ColorCodes.yellow +
      ' Total time' +
      ColorCodes.RESET
  );
  if (opts.gen) {
    autogen(opts.files, opts.conservative);
  } else {
    let cnt = 0;

    for (let i = 0; i < opts.files.length; i++) {
      const tob = await file2Tob(opts.files[i]);
      if (!tob.isMatched) {
        cnt++;
        console.log('Output mismatch for', tob.filename);
        updateTob(tob, opts.updateItems);
      }
    }
    console.timeEnd(
      ColorCodes.GREEN +
        'Running ' +
        ColorCodes.RESET +
        opts.files.length +
        ' test cases.' +
        ColorCodes.yellow +
        ' Total time' +
        ColorCodes.RESET
    );

    // Only show mismatch if it exist
    if (cnt > 0) {
      console.log(ColorCodes.RED + 'Mismatch: ' + ColorCodes.yellow + `${cnt}/${opts.files.length}` + ColorCodes.RESET);
      if (opts.updateItems.length === 0) process.exitCode = 1;
    }
  }
}


export function cliOpts(): any {
  const help = process.argv.includes('-?') || process.argv.includes('--help');
  help && showHelp();

  const gen = process.argv.includes('-g') || process.argv.includes('-G');
  const update = process.argv.includes('-u') ? process.argv[process.argv.indexOf('-u') + 1] : false;

  const opts = {
    gen,
    updateItems: update === 'all' ? fn : update === false ? [] : [update],
    conservative: process.argv.includes('-G'), // skip existing
    // defaults to all tests(if not specified)
    files: loadSnaps(
      process.argv.includes('-f') ? [process.argv[process.argv.indexOf('-f') + 1]] : resolve('test/' + snapshotsFolderName),
      '',
      gen
    )
  };

  // gen && (opts.files = opts.files.filter((f: any) => !f.endsWith('autogen.md')));

  if (opts.updateItems.length) {
    if (opts.gen) {
      process.exitCode = 2;
      throw new Error('Cannot use auto update and auto generate together');
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
  `);
  process.exit(0);
}
