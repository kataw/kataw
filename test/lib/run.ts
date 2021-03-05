import { parseScript, parseModule } from '../../src/kataw';
import { printSourceFile } from '../src/compiler/printer';
import { Options } from '../../src/compiler/types';
import { getTestFiles, promiseToReadFile, Constants, ColorCodes, promiseToWriteFile } from './utils';

let files: any = [];

const AUTO_UPDATE = process.argv.includes('-u');

if (process.argv.includes('-?') || process.argv.includes('--help')) {
  console.log(`
  Kataw Test Runner
  Usage:
    \`tests/kataw.spec.mjs\` [options]
  But for the time being:
    \`ts-node tests/run.ts\`
  Options:
    -f "path"     Only test this file / dir
    -g            Regenerate computed test case blocks (process all autogen.md files)
    -G            Same as -g except it skips existing files
    -u            Auto-update tests with the results (tests silently updated inline, use source control to diff)
`);
  process.exit();
}

export async function extractFiles(list: any) {
  list.forEach((obj: any) => {
    ({ options: obj.options, input: obj.input } = parseTestFile(obj));
  });
}

export async function runTest(list: any) {
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
        obj.options.module,
        obj.options.printer,
        obj.options.incremental
      );

      return { obj, result };
    })
  );

  console.timeEnd(
    ColorCodes.GREEN + 'Running ' + ColorCodes.RESET + list.length + ' test cases.' + ColorCodes.yellow + ' Total time'
  );

  await Promise.all(
    set.map(async ({ obj, result }: any) => {
      obj.newoutput.ast = result;
      obj.newoutput.pretty = printSourceFile(result, {
        tabWidth: 2,
        printWidth: 80,
        useTabs: false,
        bracketSpacing: true
      } as any);
    })
  );
}

async function generateSourceFile(
  input: string,
  options: Options,
  isModule: boolean,
  _printer: boolean,
  /* TODO */ _isIncremental: boolean
) {
  return (isModule ? parseModule : parseScript)(input, options);
}

export async function generateNewOutput(list: any) {
  list.forEach((obj: any) => {
    obj.data = generateOutputBlock(obj.data, obj.newoutput.ast, obj.newoutput.pretty, obj.options);
  });
}

export async function writeNewOutput(list: any) {
  let updated = 0;
  await Promise.all(
    list.map((obj: any): any => {
      const { data, previous, file } = obj;
      if (data !== previous) {
        if (AUTO_UPDATE) {
          ++updated;
          promiseToWriteFile(file, data);
        } else {
          process.exitCode = 1;
          console.log('Output mismatch for', file);
          return Promise.resolve();
        }
      }
    })
  );
  console.log('Updated', updated, 'files');
}

function parseTestFile(obj: any): any {
  const { data, previous } = obj;

  if (!previous) return;

  // find the options
  const optionsOffset = data.indexOf(Constants.Options);
  const start1 = data.indexOf(Constants.JsStart, optionsOffset);
  const end1 = data.indexOf(Constants.JsEnd, optionsOffset);

  // Negative if no opions are set, so we pass a empty obj
  const options = optionsOffset === -1 ? {} : eval('0||' + data.slice(start1 + Constants.JsStart.length, end1) + '');

  const inputOffset = data.indexOf(Constants.Input);
  const start = data.indexOf(Constants.JsStart, inputOffset);
  const end = data.indexOf(Constants.JsEnd, inputOffset);
  const input = data.slice(start + Constants.JsStart.length, end);

  return { options, input };
}

function generateOutputBlock(currentOutput: any, ast: any, printed: any, options: any) {
  ast = JSON.stringify(ast, null, '    ');
  let outputIndex = currentOutput.indexOf(Constants.Output);

  if (outputIndex < 0) outputIndex = currentOutput.length;

  let diagnosticString = '';
  if (printed !== '✖ Soon to be open sourced') {
    const diagnostics = (options.module ? parseModule(printed) : parseScript(printed)).diagnostics;

    if (diagnostics.length) {
      diagnostics.forEach(function (a: any) {
        diagnosticString += '✖ ' + a.message + ' - start: ' + a.start + ', end: ' + a.length;
        diagnosticString += '\n';
      });
    } else {
      diagnosticString += 'No errors';
    }
  }

  return options.printer
    ? '' +
        currentOutput.slice(0, outputIndex) +
        Constants.Output +
        '\n' +
        Constants.JavascriptStart +
        printed +
        Constants.JavascriptEnd +
        '\n' +
        Constants.JavascriptStart +
        diagnosticString +
        Constants.JavascriptEnd +
        '\n' +
        ''
    : '' +
        currentOutput.slice(0, outputIndex) +
        Constants.Output +
        '\n' +
        Constants.Header +
        '\n' +
        Constants.JavascriptStart +
        '' +
        ast +
        Constants.JavascriptEnd +
        Constants.Printed +
        '\n' +
        Constants.JavascriptStart +
        printed +
        Constants.JavascriptEnd +
        Constants.Diagnostics +
        '\n' +
        Constants.JavascriptStart +
        diagnosticString +
        Constants.JavascriptEnd +
        '\n' +
        '';
}

// parsing files => testing objects
export async function file2Tests(files: any) {
  const list = await Promise.all(files.map(promiseToReadFile)).catch((e) => {
    throw new Error(e);
  });

  await extractFiles(list);
  list.forEach((obj: any) => (obj.newoutput = {}));
  return list;
}
