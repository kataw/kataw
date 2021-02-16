import { join, dirname } from 'path';
import { writeFileSync, existsSync, unlinkSync, rmdirSync, mkdirSync } from 'fs';
import { readFiles, getTestFiles, san, ColorCodes } from './utils';

/**
 * Autogenerate files in the runner
 */
export async function autogen(files: string[]) {
  const CASE_HEAD = '### Cases';
  const TPL_HEAD = '### Templates';
  const OUT_HEAD = '## Output';

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

  let list = await readFiles(files);

  list.forEach((obj: any) => {
    let genDir = join(dirname(obj.file), 'gen');
    if (existsSync(genDir)) {
      let oldFiles: any = [];
      getTestFiles(genDir, '', oldFiles, true, true);
      oldFiles.forEach((file: any) => {
        try {
          unlinkSync(file);
        } catch (e) {
          rmdirSync(file);
        }
      });
    }
    mkdirSync(genDir, { recursive: true });

    let caseOffset = obj.data.indexOf(CASE_HEAD);
    let templateOffset = obj.data.indexOf(TPL_HEAD, CASE_HEAD);
    let outputOffset = obj.data.indexOf(OUT_HEAD, TPL_HEAD);
    //ASSERT(caseOffset >= 0 || templateOffset >= 0 || outputOffset >= 0, 'missing required parts of autogen', obj.file);
    //    ASSERT(obj.data.slice(caseOffset + CASE_HEAD.length, templateOffset).split('> `````js\n').length > 2, 'expecting 2+ cases', obj.file);
    let cases = obj.data
      .slice(caseOffset + CASE_HEAD.length, templateOffset)
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
      .slice(templateOffset + TPL_HEAD.length, obj.data.indexOf('####', templateOffset + TPL_HEAD.length))
      .split('\n')
      .map((s: any) => s.trim())
      .filter((s: any) => s[0] === '-')
      .reduce((obj: any, s: any) => {
        //ASSERT(s[1] === ' ' && s[2] === '`' && s[s.length - 1] === '`', 'param composition', obj.file, s);
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
      .slice(templateOffset + TPL_HEAD.length, outputOffset)
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
