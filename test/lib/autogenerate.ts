import { join, dirname } from 'path';
import { writeFileSync, unlinkSync, rmdirSync, mkdirSync } from 'fs';
import { promiseToReadFile, getTestFiles, san, ColorCodes, Constants } from './utils';

/**
 * Autogenerate files in the runner
 */
export async function autogen(files: string[], conservative: boolean) {
  // Info message to output after generating the files

  console.log(
    ColorCodes.GREEN +
      'Auto-generated ' +
      ColorCodes.yellow +
      files.length +
      ColorCodes.GREEN +
      ' files. \n\nRun ' +
      ColorCodes.yellow +
      'npm run test:update' +
      ColorCodes.GREEN +
      ' for auto update' +
      ColorCodes.RESET
  );

  files = files.filter((f: string) => f.endsWith('autogen.md'));

  let list = await Promise.all(files.map(promiseToReadFile)).catch((e) => {
    throw new Error(e);
  });

  list.forEach((obj: any) => {
    let genDir = join(dirname(obj.file), 'gen');
    if (!conservative) {
      let oldFiles: string[] = [];
      getTestFiles(genDir, '', oldFiles, true, true);
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

    let caseOffset = obj.data.indexOf(Constants.Cases);
    let templateOffset = obj.data.indexOf(Constants.Templates, Constants.Cases);
    let outputOffset = obj.data.indexOf(Constants.AutoGenOutput, Constants.Templates);

    let cases = obj.data
      .slice(caseOffset + Constants.Cases.length, templateOffset)
      .split('> `````js\n')
      .slice(1)
      .map((s: string) => {
        return s
          .split('\n> `````')[0]
          .split('\n')
          .map((s: any) => {
            return s.slice(2);
          })
          .join('\n');
      });

    let params = obj.data
      .slice(
        templateOffset + Constants.Templates.length,
        obj.data.indexOf('####', templateOffset + Constants.Templates.length)
      )
      .split('\n')
      .map((s: any) => s.trim())
      .filter((s: any) => s[0] === '-')
      .reduce((obj: any, s: any) => {
        let [k, v] = s.slice(2, -1).split(' = ');
        if (String(parseInt(v, 10)) === v) v = parseInt(k, 10);
        else if (v === 'true') v = true;
        else if (v === 'false') v = false;
        else if (v === 'null') v = null;
        obj[k] = v;
        return obj;
      }, {});

    // Temlates have a header and also have a ``js codeblock
    let templates = obj.data
      .slice(templateOffset + Constants.Templates.length, outputOffset)
      .split('\n#### ')
      .slice(1) // first element is the header
      .map((s: any) => {
        // We split on the #### so the title should be at the start of `s` now
        let title = s.split('\n')[0].trim();
        // Get everything inside the js code block
        let code = s.split('`````js\n')[1].split('\n`````')[0];
        return { title, code };
      });
    // Now generate all cases with each # in the params and templates replaced with each case

    templates.forEach(({ title, code }: any) => {
      let caseDir = join(genDir, san(String(title)));
      mkdirSync(caseDir, { recursive: true });
      cases.forEach((c: any) => {
        let testFile = join(caseDir, san(String(c)) + '.md');

        // immediately generate a test case for it, as well
        writeFileSync(
          testFile,
          `# Auto-generated test cases ( Kataw )
- Regenerated: ${new Date().toISOString().slice(0, 10)}
- From: ${obj.file.slice(obj.file.indexOf('kataw'))}
- Path: ${caseDir.slice(caseDir.indexOf('kataw'))}
> :: test: ${title.split('\n').join('\n>          ')}
> :: case: ${c.split('\n').join('\n>          ')}
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
}
