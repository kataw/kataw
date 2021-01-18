var fs = require('fs');

var messages = require(__dirname + '/../src/compiler/diagnostics/diagnosticMessages.json');

var sb = ['// code below is auto-generated from diagnosticsMessages.json by scripts/build-diagnostics\n\n'];

function makeKey(text) {
  return text.replace(/[^\w]+/g, '_').replace(/_+$/, '');
}

sb.push('/* @internal */\nexport const enum DiagnosticCode {\n');

var first = true;
Object.keys(messages).forEach(text => {
  var key = makeKey(text);
  if (first) first = false;
  else {
    sb.push(',\n');
  }
  sb.push('  ' + key + ' = ' + messages[text]);
});

sb.push('\n}\n\nexport const diagnosticMap: { [key: number]: string; } = {\n');

Object.keys(messages).forEach(text => {
  sb.push('[' + messages[text] + ']: ' + JSON.stringify(text) + ',\n');
});

sb.push('};\n');

fs.writeFileSync(__dirname + '/../src/compiler/diagnostics/diagnosticMessages.generated.ts', sb.join(''), {
  encoding: 'utf8'
});
