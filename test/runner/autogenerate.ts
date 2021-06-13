import { join, dirname } from 'path';
import { writeFileSync, unlinkSync, rmdirSync, mkdirSync } from 'fs';
import { promiseToReadFile, loadSnaps, san, ColorCodes, Constants, report, toUnixPath } from './utils';
import { defaultOptions } from '../conf/options';

/**
 * Autogenerate files in the runner
 */
export async function autogen(files: string[], conservative: boolean) {
  const testFiles: string[] = [];
  // Info message to output after generating the files

  console.log(
    ColorCodes.GREEN +
      'Auto-generated ' +
      ColorCodes.yellow +
      files.length +
      ColorCodes.GREEN +
      ' files. \n\n' +
      ColorCodes.RESET
  );

  files = files.filter((f: string) => f.endsWith('autogen.md'));

  let list = await Promise.all(files.map(promiseToReadFile)).catch((e) => {
    throw new Error(e);
  });

  list = list.map((it, idx) => ({ file: files[idx], data: it }));

  list.forEach((obj: any) => {
    const genDir = join(dirname(obj.file), 'gen');
    if (!conservative) {
      const oldFiles: string[] = loadSnaps(genDir, '', true, true);
      // Note: the folder should only contain generated files and folders which should delete just fine
      oldFiles.forEach((file: string) => {
        try {
          unlinkSync(file);
        } catch (e) {
          rmdirSync(file);
        }
      });
    } else {
      mkdirSync(genDir, { recursive: true });
    }

    const caseOffset = obj.data.indexOf(Constants.Cases);
    const templateOffset = obj.data.indexOf(Constants.Templates, Constants.Cases);
    const outputOffset = obj.data.indexOf(Constants.AutoGenOutput, Constants.Templates);

    if (caseOffset >= 0 || templateOffset >= 0 || outputOffset >= 0) {
      report('missing required parts of autogen' + obj.file);
    }

    const cases = obj.data
      .slice(caseOffset + Constants.Cases.length, templateOffset)
      .split('> `````js\n')
      .slice(1)
      .map((s: string) => {
        return s
          .split('\n> `````')[0]
          .split('\n')
          .map((s: any) => {
            if (s[0] === '>' && s[1] === ' ') {
              report('cases should be md quoted entirely, with one space' + obj.file);
            }
            return s.slice(2);
          })
          .join('\n');
      });

    const params = obj.data
      .slice(
        templateOffset + Constants.Templates.length,
        obj.data.indexOf('####', templateOffset + Constants.Templates.length)
      )
      .split('\n')
      .map((s: any) => s.trim())
      .filter((s: any) => s[0] === '-')
      .reduce((obj: any, s: any) => {
        if (s[1] === ' ' && s[2] === '`' && s[s.length - 1] === '`') {
          report('param composition' + obj.file);
        }
        let [k, v] = s.slice(2, -1).split(' = ');
        if (String(parseInt(v, 10)) === v) v = parseInt(k, 10);
        else if (v === 'true') v = true;
        else if (v === 'false') v = false;
        else if (v === 'null') v = null;
        obj[k] = v;
        return obj;
      }, {});

    // Temlates have a header and also have a ``js codeblock
    const templates = obj.data
      .slice(templateOffset + Constants.Templates.length, outputOffset)
      .split('\n#### ')
      .slice(1) // first element is the header
      .map((s: any) => {
        // We split on the #### so the title should be at the start of `s` now
        const title = s.split('\n')[0].trim();
        // Get everything inside the js code block
        const code = s.split('`````js\n')[1].split('\n`````')[0];
        return { title, code };
      });
    // Now generate all cases with each # in the params and templates replaced with each case

    templates.forEach(({ title, code }: any) => {
      const caseDir = toUnixPath(join(genDir, san(String(title))));
      mkdirSync(caseDir, { recursive: true });
      cases.forEach((c: any) => {
        // macos filename path has a limit(255 chars). as of now, we use the slice(0, 128).
        const testFile = join(caseDir, san(String(c)).slice(0, 128) + '.md');
        testFiles.push(testFile);
        const options = defaultOptions.find((it) => caseDir.includes(it.dir)) || {
          parserOptions: {},
          printerOptions: {}
        };
        // immediately generate a test case for it, as well
        writeFileSync(
          testFile,
          `# Auto-generated test cases ( Kataw )
- Regenerated: ${new Date().toISOString().slice(0, 10)}
- From: ${obj.file.slice(obj.file.indexOf('kataw')).replace(/\\/g, '/')}
- Path: ${caseDir.slice(caseDir.indexOf('kataw'))}
> :: test: ${title.split('\n').join('\n>          ')}
> :: case: ${c.split('\n').join('\n>          ')}
## Options

\`\`\`\`\`js
${JSON.stringify(options.parserOptions)}
\`\`\`\`\`
## Input
${Object.getOwnPropertyNames(params)
  .map((key) => '- `' + key + ' = ' + params[key].replace(/#/g, c) + '`\n')
  .join('')}
\`\`\`\`\`js
${code.replace(/#/g, c)}
\`\`\`\`\`
`
        );
      });
    });
  });

  return testFiles;
}
