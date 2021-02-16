import { parseScript, parseModule } from '../src/kataw';
//import { toJs } from '../src/compiler/printer/';
import { Options } from '../src/compiler/types';
import { getTestFiles, promiseToReadFile, Constants, ColorCodes } from './lib/utils';
import { autogen } from './lib/autogenerate';
import { writeFile } from 'fs';
import { resolve } from 'path';

const AUTO_UPDATE = process.argv.includes('-u');
const AUTO_GENERATE = process.argv.includes('-g');
const AUTO_GENERATE_CONSERVATIVE = process.argv.includes('-G');
const TARGET_FILE = process.argv.includes('-f') ? process.argv[process.argv.indexOf('-f') + 1] : '';

if (process.argv.includes('-?') || process.argv.includes('--help')) {
  console.log(`
  Kataw Test Runner
  Usage:
    \`tests/kataw.spec.mjs\` [options]
  But for the time being:
    \`node --experimental-modules tests/zeparser.spec.mjs\`
  And suggested if also testing builds:
    \`node --experimental-modules cli/build.mjs; node --experimental-modules tests/zeparser.spec.mjs\` [options]
  Options:
    -f "path"     Only test this file / dir
    -g            Regenerate computed test case blocks (process all autogen.md files)
    -G            Same as -g except it skips existing files
    -u            Auto-update tests with the results (tests silently updated inline, use source control to diff)
`);
  process.exit();
}

if (AUTO_UPDATE && (AUTO_GENERATE || AUTO_GENERATE_CONSERVATIVE))
  throw new Error('Cannot use auto update and auto generate together');

async function extractFiles(list: any) {
  list.forEach((obj: any) => {
    ({ options: obj.options, input: obj.input } = parseTestFile(obj));
  });
}

async function runTest(list: any) {
  console.time(
    ColorCodes.GREEN + 'Running ' + ColorCodes.RESET + list.length + ' test cases.' + ColorCodes.yellow + ' Total time'
  );
  const set = await Promise.all(
    list.map(async (obj: any) => {
      const { input, options } = obj;
      const result = await generateSourceFile(
        input,
        {
          // Enable stage 3 support (ESNext)
          next: options.next,
          // Enable React JSX parsing
          jsx: options.jsx,
          // Disable web compatibility
          disableWebCompat: options.disableWebCompat,
          // Enables implied strict mode
          impliedStrict: options.impliedStrict
        },
        obj.module,
        obj.incremental
      );

      return { obj, result };
    })
  );

  console.timeEnd(
    ColorCodes.GREEN + 'Running ' + ColorCodes.RESET + list.length + ' test cases.' + ColorCodes.yellow + ' Total time'
  );

  await Promise.all(
    set.map(async ({ obj, result }: any) => {
      (obj.newoutput.ast = result), obj.file;
      obj.newoutput.pretty = '✖ Soon to be open sourced'; //toJs(result);
    })
  );
}

async function generateSourceFile(
  input: string,
  options: Options,
  isModule: boolean,
  /* TODO */ _isIncremental: boolean
) {
  return isModule ? parseModule(input, options) : parseScript(input, options);
}

async function generateNewOutput(list: any) {
  list.forEach((obj: any) => {
    obj.data = generateOutputBlock(obj.data, obj.newoutput.ast, obj.newoutput.pretty);
  });
}

async function writeNewOutput(list: any) {
  let updated = 0;
  await Promise.all(
    list.map((obj: any): any => {
      const { data, previous, file } = obj;
      if (data !== previous) {
        if (AUTO_UPDATE) {
          ++updated;
          let res: any,
            rej: any,
            p = new Promise((resolve, reject) => ((res = resolve), (rej = reject)));
          writeFile(file, data, 'utf8', (err: any) => (err ? rej(err) : res()));
          return p;
        } else {
          console.log('Output mismatch for', file);
          return Promise.resolve();
        }
      }
    })
  );
  console.log('Updated', updated, 'files');
}

async function main() {
  if (TARGET_FILE) {
    console.log('Using explicit file:', TARGET_FILE);
    files = [TARGET_FILE];
  } else {
    files = files.filter((f: any) => !f.endsWith('autogen.md'));
  }

  const list = await Promise.all(files.map(promiseToReadFile)).catch((e) => {
    throw new Error(e);
  });

  await extractFiles(list);

  list.forEach((obj: any) => (obj.newoutput = {}));
  await runTest(list);

  await generateNewOutput(list);
  await writeNewOutput(list);

  console.timeEnd('Whole test run');
}

function parseTestFile(obj: any): any {
  const { data, previous } = obj;

  if (!previous) return;

  // find the options
  const optionsOffset = data.indexOf(Constants.Options_HEADER);
  const start1 = data.indexOf(Constants.INPUT_START, optionsOffset);
  const end1 = data.indexOf(Constants.INPUT_END, optionsOffset);

  // Negative if no opions are set, so we pass a empty obj
  const options =
    optionsOffset === -1 ? {} : eval('0||' + data.slice(start1 + Constants.INPUT_START.length, end1) + '');

  const inputOffset = data.indexOf(Constants.INPUT_HEADER);
  const start = data.indexOf(Constants.INPUT_START, inputOffset);
  const end = data.indexOf(Constants.INPUT_END, inputOffset);
  const input = data.slice(start + Constants.INPUT_START.length, end);

  return { options, input };
}

function generateOutputBlock(currentOutput: any, ast: any, printed: any) {
  ast = JSON.stringify(ast, null, '    ');
  let outputIndex = currentOutput.indexOf(Constants.OUTPUT_HEADER);

  if (outputIndex < 0) outputIndex = currentOutput.length;

  let diagnosticString = '';

  if (printed !== '✖ Soon to be open sourced') {
    const diagnostics = parseScript(printed).diagnostics;

    if (diagnostics.length) {
      diagnostics.forEach(function (a: any) {
        diagnosticString += '✖ ' + a.message + ' - start: ' + a.start + ', end: ' + a.length;
        diagnosticString += '\n';
      });
    } else {
      diagnosticString += '✔ No errors';
    }
  }
  return (
    '' +
    currentOutput.slice(0, outputIndex) +
    Constants.OUTPUT_HEADER +
    '\n' +
    Constants.OUTPUT_HEADER_SLOPPY +
    '\n' +
    Constants.OUTPUT_CODE +
    '' +
    ast +
    Constants.OUTPUT_CODE1 +
    Constants.OUTPUT_HEADER_PRINTED +
    '\n' +
    Constants.OUTPUT_CODE +
    printed +
    Constants.OUTPUT_CODE1 +
    Constants.OUTPUT_HEADER_DIAGNOSTICS +
    '\n' +
    Constants.OUTPUT_CODE +
    diagnosticString +
    Constants.OUTPUT_CODE1 +
    '\n' +
    ''
  );
}

console.time('Whole test run');

let files: any = [];

getTestFiles(resolve('test/__snapshot__'), '', files, true);

if (AUTO_GENERATE) {
  autogen(files, AUTO_GENERATE_CONSERVATIVE);
} else {
  main();
}
