// exitcode: 0 => success
// exitcode: 1 => test failing
// exitcode: 2 => bad argv
// exitcode: 3 => unknown error(bug)

import { getTestFiles } from './runner/utils';
import { resolve } from 'path';
import { generateNewOutput, runTest, writeNewOutput, file2Tests } from './runner/run';
import { autogen } from './runner/autogenerate';

runCli();

export async function runCli() {
  beforeExit();

  const opts = cliOpts();
  if (opts.gen) {
    autogen(opts.files, opts.conservative);
  } else {
    const list = await file2Tests(opts.files);
    await runTest(list);
    await generateNewOutput(list);
    await writeNewOutput(list, opts.update);
  }
}

export function cliOpts() {
  const help = process.argv.includes('-?') || process.argv.includes('--help');
  help && showHelp();

  const gen = process.argv.includes('-g') || process.argv.includes('-G');
  const opts = {
    gen,
    update: process.argv.includes('-u'),
    conservative: process.argv.includes('-G'), // skip existing
     // defaults to all tests(if not specified)
    files: getTestFiles(process.argv.includes('-f') ? [process.argv[process.argv.indexOf('-f') + 1]] : resolve('test/__snapshot__'), '', gen)
  };

  gen && (opts.files = opts.files.filter((f: any) => !f.endsWith('autogen.md')));

  if (opts.update && opts.gen) {
    process.exitCode = 2;
    throw new Error('Cannot use auto update and auto generate together');
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

function beforeExit() {
  process.exitCode = 0;
  process.on('beforeExit', function () {
    console.log(`exit code: ${process.exitCode}`);
  });
}
