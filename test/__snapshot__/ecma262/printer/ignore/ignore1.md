# Kataw parser test case

## Input

`````js
function a() {
  // kataw-ignore
  var fnString =
    '"' + this.USE + ' ' + this.STRICT + '";\n' +
    this.filterPrefix() +
    'var fn=' + this.generateFunction('fn', 's,l,a,i') +
    extra +
    this.watchFns() +
    'return fn;';

  // kataw-ignore
  const identity = Matrix.create(
    1, 0, 0,
    0, 1, 0,
    0, 0, 0
  );

  // Let's make sure that this comment doesn't interfere

  // kataw-ignore
  const commentsWithPrettierIgnore =   {
    "ewww":
            "gross-formatting",
  };

  function giveMeSome() {
    a(  a  ); // kataw-ignore
    // shouldn't I return something?  :shrug:
  }

  // kataw-ignore
  console.error(
    'In order to use ' + prompt + ', you need to configure a ' +
    'few environment variables to be able to commit to the ' +
    'repository. Follow those steps to get you setup:\n' +
    '\n' +
    'Go to https://github.com/settings/tokens/new\n' +
    ' - Fill "Token description" with "' + prompt + ' for ' +
      repoSlug + '"\n' +
    ' - Check "public_repo"\n' +
    ' - Press "Generate Token"\n' +
    '\n' +
    'In a different tab, go to https://travis-ci.org/' +
      repoSlug + '/settings\n' +
    ' - Make sure "Build only if .travis.yml is present" is ON\n' +
    ' - Fill "Name" with "GITHUB_USER" and "Value" with the name of the ' +
      'account you generated the token with. Press "Add"\n' +
    '\n' +
    'Once this is done, commit anything to the repository to restart ' +
      'Travis and it should work :)'
  );
}

const response = {
  // prettier-ignore
  '_text': 'Turn on the lights',
  intent: 'lights',
};

`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 11,
                "end": 11
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 67108945,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 38
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "fnString",
                                            "rawText": "fnString",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 38,
                                            "end": 47
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 198,
                                                "left": {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 198,
                                                            "left": {
                                                                "kind": 198,
                                                                "left": {
                                                                    "kind": 198,
                                                                    "left": {
                                                                        "kind": 198,
                                                                        "left": {
                                                                            "kind": 198,
                                                                            "left": {
                                                                                "kind": 198,
                                                                                "left": {
                                                                                    "kind": 201392131,
                                                                                    "text": "\"",
                                                                                    "rawText": "'\"'",
                                                                                    "flags": 4194401,
                                                                                    "transformFlags": 0,
                                                                                    "start": 49,
                                                                                    "end": 57
                                                                                },
                                                                                "operatorToken": {
                                                                                    "kind": 99634,
                                                                                    "flags": 96,
                                                                                    "transformFlags": 0,
                                                                                    "start": 57,
                                                                                    "end": 59
                                                                                },
                                                                                "right": {
                                                                                    "kind": 129,
                                                                                    "member": {
                                                                                        "kind": 4276321,
                                                                                        "flags": 96,
                                                                                        "transformFlags": 0,
                                                                                        "start": 59,
                                                                                        "end": 64
                                                                                    },
                                                                                    "expression": {
                                                                                        "kind": 134299649,
                                                                                        "text": "USE",
                                                                                        "rawText": "USE",
                                                                                        "flags": 96,
                                                                                        "transformFlags": 0,
                                                                                        "start": 65,
                                                                                        "end": 68
                                                                                    },
                                                                                    "flags": 96,
                                                                                    "transformFlags": 2,
                                                                                    "start": 59,
                                                                                    "end": 68
                                                                                },
                                                                                "flags": 4194401,
                                                                                "transformFlags": 5120,
                                                                                "start": 49,
                                                                                "end": 68
                                                                            },
                                                                            "operatorToken": {
                                                                                "kind": 99634,
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 68,
                                                                                "end": 70
                                                                            },
                                                                            "right": {
                                                                                "kind": 201392131,
                                                                                "text": " ",
                                                                                "rawText": "' '",
                                                                                "flags": 4194400,
                                                                                "transformFlags": 0,
                                                                                "start": 70,
                                                                                "end": 74
                                                                            },
                                                                            "flags": 4194401,
                                                                            "transformFlags": 5120,
                                                                            "start": 49,
                                                                            "end": 74
                                                                        },
                                                                        "operatorToken": {
                                                                            "kind": 99634,
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 74,
                                                                            "end": 76
                                                                        },
                                                                        "right": {
                                                                            "kind": 129,
                                                                            "member": {
                                                                                "kind": 4276321,
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 76,
                                                                                "end": 81
                                                                            },
                                                                            "expression": {
                                                                                "kind": 134299649,
                                                                                "text": "STRICT",
                                                                                "rawText": "STRICT",
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 82,
                                                                                "end": 88
                                                                            },
                                                                            "flags": 96,
                                                                            "transformFlags": 2,
                                                                            "start": 76,
                                                                            "end": 88
                                                                        },
                                                                        "flags": 4194401,
                                                                        "transformFlags": 5120,
                                                                        "start": 49,
                                                                        "end": 88
                                                                    },
                                                                    "operatorToken": {
                                                                        "kind": 99634,
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 88,
                                                                        "end": 90
                                                                    },
                                                                    "right": {
                                                                        "kind": 201392131,
                                                                        "text": "\";\n",
                                                                        "rawText": "'\";\\n'",
                                                                        "flags": 4194400,
                                                                        "transformFlags": 0,
                                                                        "start": 90,
                                                                        "end": 97
                                                                    },
                                                                    "flags": 4194401,
                                                                    "transformFlags": 5120,
                                                                    "start": 49,
                                                                    "end": 97
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 99634,
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 97,
                                                                    "end": 99
                                                                },
                                                                "right": {
                                                                    "kind": 131,
                                                                    "expression": {
                                                                        "kind": 129,
                                                                        "member": {
                                                                            "kind": 4276321,
                                                                            "flags": 97,
                                                                            "transformFlags": 0,
                                                                            "start": 99,
                                                                            "end": 108
                                                                        },
                                                                        "expression": {
                                                                            "kind": 134299649,
                                                                            "text": "filterPrefix",
                                                                            "rawText": "filterPrefix",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 109,
                                                                            "end": 121
                                                                        },
                                                                        "flags": 97,
                                                                        "transformFlags": 2,
                                                                        "start": 99,
                                                                        "end": 121
                                                                    },
                                                                    "argumentList": {
                                                                        "kind": 256,
                                                                        "elements": [],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "transformFlags": 0,
                                                                        "start": 122,
                                                                        "end": 122
                                                                    },
                                                                    "flags": 268435488,
                                                                    "transformFlags": 1,
                                                                    "start": 99,
                                                                    "end": 123
                                                                },
                                                                "flags": 4194401,
                                                                "transformFlags": 5120,
                                                                "start": 49,
                                                                "end": 123
                                                            },
                                                            "operatorToken": {
                                                                "kind": 99634,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 123,
                                                                "end": 125
                                                            },
                                                            "right": {
                                                                "kind": 201392131,
                                                                "text": "var fn=",
                                                                "rawText": "'var fn='",
                                                                "flags": 4194401,
                                                                "transformFlags": 0,
                                                                "start": 125,
                                                                "end": 139
                                                            },
                                                            "flags": 4194401,
                                                            "transformFlags": 5120,
                                                            "start": 49,
                                                            "end": 139
                                                        },
                                                        "operatorToken": {
                                                            "kind": 99634,
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 139,
                                                            "end": 141
                                                        },
                                                        "right": {
                                                            "kind": 131,
                                                            "expression": {
                                                                "kind": 129,
                                                                "member": {
                                                                    "kind": 4276321,
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 141,
                                                                    "end": 146
                                                                },
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "generateFunction",
                                                                    "rawText": "generateFunction",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 147,
                                                                    "end": 163
                                                                },
                                                                "flags": 96,
                                                                "transformFlags": 2,
                                                                "start": 141,
                                                                "end": 163
                                                            },
                                                            "argumentList": {
                                                                "kind": 256,
                                                                "elements": [
                                                                    {
                                                                        "kind": 201392131,
                                                                        "text": "fn",
                                                                        "rawText": "'fn'",
                                                                        "flags": 4194400,
                                                                        "transformFlags": 0,
                                                                        "start": 164,
                                                                        "end": 168
                                                                    },
                                                                    {
                                                                        "kind": 201392131,
                                                                        "text": "s,l,a,i",
                                                                        "rawText": "'s,l,a,i'",
                                                                        "flags": 4194400,
                                                                        "transformFlags": 0,
                                                                        "start": 169,
                                                                        "end": 179
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 164,
                                                                "end": 179
                                                            },
                                                            "flags": 268435488,
                                                            "transformFlags": 1,
                                                            "start": 141,
                                                            "end": 180
                                                        },
                                                        "flags": 4194401,
                                                        "transformFlags": 5120,
                                                        "start": 49,
                                                        "end": 180
                                                    },
                                                    "operatorToken": {
                                                        "kind": 99634,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 180,
                                                        "end": 182
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "extra",
                                                        "rawText": "extra",
                                                        "flags": 97,
                                                        "transformFlags": 0,
                                                        "start": 182,
                                                        "end": 192
                                                    },
                                                    "flags": 4194401,
                                                    "transformFlags": 5120,
                                                    "start": 49,
                                                    "end": 192
                                                },
                                                "operatorToken": {
                                                    "kind": 99634,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 192,
                                                    "end": 194
                                                },
                                                "right": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 4276321,
                                                            "flags": 97,
                                                            "transformFlags": 0,
                                                            "start": 194,
                                                            "end": 203
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "watchFns",
                                                            "rawText": "watchFns",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 204,
                                                            "end": 212
                                                        },
                                                        "flags": 97,
                                                        "transformFlags": 2,
                                                        "start": 194,
                                                        "end": 212
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 213,
                                                        "end": 213
                                                    },
                                                    "flags": 268435488,
                                                    "transformFlags": 1,
                                                    "start": 194,
                                                    "end": 214
                                                },
                                                "flags": 4194401,
                                                "transformFlags": 5120,
                                                "start": 49,
                                                "end": 214
                                            },
                                            "operatorToken": {
                                                "kind": 99634,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 214,
                                                "end": 216
                                            },
                                            "right": {
                                                "kind": 201392131,
                                                "text": "return fn;",
                                                "rawText": "'return fn;'",
                                                "flags": 4194401,
                                                "transformFlags": 0,
                                                "start": 216,
                                                "end": 233
                                            },
                                            "flags": 4194401,
                                            "transformFlags": 5120,
                                            "start": 49,
                                            "end": 233
                                        },
                                        "flags": 16,
                                        "transformFlags": 4224,
                                        "start": 38,
                                        "end": 233
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 38,
                                "end": 233
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 234
                        },
                        {
                            "kind": 162,
                            "lexicalKeyword": {
                                "kind": 37757004,
                                "flags": 67108945,
                                "transformFlags": 0,
                                "start": 234,
                                "end": 261
                            },
                            "binding": {
                                "kind": 151,
                                "bindingList": [
                                    {
                                        "kind": 190,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "identity",
                                            "rawText": "identity",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 261,
                                            "end": 270
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 134299649,
                                                    "text": "Matrix",
                                                    "rawText": "Matrix",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 272,
                                                    "end": 279
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "create",
                                                    "rawText": "create",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 280,
                                                    "end": 286
                                                },
                                                "flags": 96,
                                                "transformFlags": 2,
                                                "start": 272,
                                                "end": 286
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [
                                                    {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 97,
                                                        "transformFlags": 0,
                                                        "start": 287,
                                                        "end": 293
                                                    },
                                                    {
                                                        "kind": 201392130,
                                                        "text": 0,
                                                        "rawText": "0",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 294,
                                                        "end": 296
                                                    },
                                                    {
                                                        "kind": 201392130,
                                                        "text": 0,
                                                        "rawText": "0",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 297,
                                                        "end": 299
                                                    },
                                                    {
                                                        "kind": 201392130,
                                                        "text": 0,
                                                        "rawText": "0",
                                                        "flags": 97,
                                                        "transformFlags": 0,
                                                        "start": 300,
                                                        "end": 306
                                                    },
                                                    {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 307,
                                                        "end": 309
                                                    },
                                                    {
                                                        "kind": 201392130,
                                                        "text": 0,
                                                        "rawText": "0",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 310,
                                                        "end": 312
                                                    },
                                                    {
                                                        "kind": 201392130,
                                                        "text": 0,
                                                        "rawText": "0",
                                                        "flags": 97,
                                                        "transformFlags": 0,
                                                        "start": 313,
                                                        "end": 319
                                                    },
                                                    {
                                                        "kind": 201392130,
                                                        "text": 0,
                                                        "rawText": "0",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 320,
                                                        "end": 322
                                                    },
                                                    {
                                                        "kind": 201392130,
                                                        "text": 0,
                                                        "rawText": "0",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 323,
                                                        "end": 325
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 287,
                                                "end": 325
                                            },
                                            "flags": 268435488,
                                            "transformFlags": 1,
                                            "start": 272,
                                            "end": 329
                                        },
                                        "flags": 16,
                                        "transformFlags": 4224,
                                        "start": 261,
                                        "end": 329
                                    }
                                ],
                                "flags": 16777232,
                                "transformFlags": 0,
                                "start": 261,
                                "end": 329
                            },
                            "flags": 33554448,
                            "transformFlags": 0,
                            "start": 234,
                            "end": 330
                        },
                        {
                            "kind": 162,
                            "lexicalKeyword": {
                                "kind": 37757004,
                                "flags": 67108945,
                                "transformFlags": 0,
                                "start": 330,
                                "end": 415
                            },
                            "binding": {
                                "kind": 151,
                                "bindingList": [
                                    {
                                        "kind": 190,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "commentsWithPrettierIgnore",
                                            "rawText": "commentsWithPrettierIgnore",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 415,
                                            "end": 442
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 201392131,
                                                            "text": "ewww",
                                                            "rawText": "\"ewww\"",
                                                            "flags": 97,
                                                            "transformFlags": 0,
                                                            "start": 448,
                                                            "end": 459
                                                        },
                                                        "right": {
                                                            "kind": 201392131,
                                                            "text": "gross-formatting",
                                                            "rawText": "\"gross-formatting\"",
                                                            "flags": 97,
                                                            "transformFlags": 0,
                                                            "start": 460,
                                                            "end": 491
                                                        },
                                                        "flags": 33,
                                                        "transformFlags": 128,
                                                        "start": 448,
                                                        "end": 491
                                                    }
                                                ],
                                                "trailingComma": true,
                                                "flags": 17,
                                                "transformFlags": 0,
                                                "start": 448,
                                                "end": 492
                                            },
                                            "flags": 49,
                                            "transformFlags": 8,
                                            "start": 444,
                                            "end": 496
                                        },
                                        "flags": 16,
                                        "transformFlags": 4224,
                                        "start": 415,
                                        "end": 496
                                    }
                                ],
                                "flags": 16777232,
                                "transformFlags": 0,
                                "start": 415,
                                "end": 496
                            },
                            "flags": 33554448,
                            "transformFlags": 0,
                            "start": 330,
                            "end": 497
                        },
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 65,
                                "transformFlags": 0,
                                "start": 497,
                                "end": 509
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "giveMeSome",
                                "rawText": "giveMeSome",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 509,
                                "end": 520
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 521,
                                "end": 521
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 524,
                                                    "end": 530
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [
                                                        {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 531,
                                                            "end": 534
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 531,
                                                    "end": 534
                                                },
                                                "flags": 268435488,
                                                "transformFlags": 1,
                                                "start": 524,
                                                "end": 537
                                            },
                                            "flags": 16,
                                            "transformFlags": 4096,
                                            "start": 524,
                                            "end": 538
                                        }
                                    ],
                                    "flags": 33,
                                    "transformFlags": 0,
                                    "start": 524,
                                    "end": 538
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 522,
                                "end": 604
                            },
                            "returnType": null,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 497,
                            "end": 604
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "console",
                                        "rawText": "console",
                                        "flags": 67108961,
                                        "transformFlags": 0,
                                        "start": 604,
                                        "end": 633
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "error",
                                        "rawText": "error",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 634,
                                        "end": 639
                                    },
                                    "flags": 67108961,
                                    "transformFlags": 2,
                                    "start": 604,
                                    "end": 639
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 198,
                                            "left": {
                                                "kind": 198,
                                                "left": {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 198,
                                                            "left": {
                                                                "kind": 198,
                                                                "left": {
                                                                    "kind": 198,
                                                                    "left": {
                                                                        "kind": 198,
                                                                        "left": {
                                                                            "kind": 198,
                                                                            "left": {
                                                                                "kind": 198,
                                                                                "left": {
                                                                                    "kind": 198,
                                                                                    "left": {
                                                                                        "kind": 198,
                                                                                        "left": {
                                                                                            "kind": 198,
                                                                                            "left": {
                                                                                                "kind": 198,
                                                                                                "left": {
                                                                                                    "kind": 198,
                                                                                                    "left": {
                                                                                                        "kind": 198,
                                                                                                        "left": {
                                                                                                            "kind": 198,
                                                                                                            "left": {
                                                                                                                "kind": 198,
                                                                                                                "left": {
                                                                                                                    "kind": 198,
                                                                                                                    "left": {
                                                                                                                        "kind": 198,
                                                                                                                        "left": {
                                                                                                                            "kind": 198,
                                                                                                                            "left": {
                                                                                                                                "kind": 198,
                                                                                                                                "left": {
                                                                                                                                    "kind": 198,
                                                                                                                                    "left": {
                                                                                                                                        "kind": 201392131,
                                                                                                                                        "text": "In order to use ",
                                                                                                                                        "rawText": "'In order to use '",
                                                                                                                                        "flags": 4194401,
                                                                                                                                        "transformFlags": 0,
                                                                                                                                        "start": 640,
                                                                                                                                        "end": 663
                                                                                                                                    },
                                                                                                                                    "operatorToken": {
                                                                                                                                        "kind": 99634,
                                                                                                                                        "flags": 96,
                                                                                                                                        "transformFlags": 0,
                                                                                                                                        "start": 663,
                                                                                                                                        "end": 665
                                                                                                                                    },
                                                                                                                                    "right": {
                                                                                                                                        "kind": 134299649,
                                                                                                                                        "text": "prompt",
                                                                                                                                        "rawText": "prompt",
                                                                                                                                        "flags": 96,
                                                                                                                                        "transformFlags": 0,
                                                                                                                                        "start": 665,
                                                                                                                                        "end": 672
                                                                                                                                    },
                                                                                                                                    "flags": 4194401,
                                                                                                                                    "transformFlags": 5120,
                                                                                                                                    "start": 640,
                                                                                                                                    "end": 672
                                                                                                                                },
                                                                                                                                "operatorToken": {
                                                                                                                                    "kind": 99634,
                                                                                                                                    "flags": 96,
                                                                                                                                    "transformFlags": 0,
                                                                                                                                    "start": 672,
                                                                                                                                    "end": 674
                                                                                                                                },
                                                                                                                                "right": {
                                                                                                                                    "kind": 201392131,
                                                                                                                                    "text": ", you need to configure a ",
                                                                                                                                    "rawText": "', you need to configure a '",
                                                                                                                                    "flags": 4194400,
                                                                                                                                    "transformFlags": 0,
                                                                                                                                    "start": 674,
                                                                                                                                    "end": 703
                                                                                                                                },
                                                                                                                                "flags": 4194401,
                                                                                                                                "transformFlags": 5120,
                                                                                                                                "start": 640,
                                                                                                                                "end": 703
                                                                                                                            },
                                                                                                                            "operatorToken": {
                                                                                                                                "kind": 99634,
                                                                                                                                "flags": 96,
                                                                                                                                "transformFlags": 0,
                                                                                                                                "start": 703,
                                                                                                                                "end": 705
                                                                                                                            },
                                                                                                                            "right": {
                                                                                                                                "kind": 201392131,
                                                                                                                                "text": "few environment variables to be able to commit to the ",
                                                                                                                                "rawText": "'few environment variables to be able to commit to the '",
                                                                                                                                "flags": 4194401,
                                                                                                                                "transformFlags": 0,
                                                                                                                                "start": 705,
                                                                                                                                "end": 766
                                                                                                                            },
                                                                                                                            "flags": 4194401,
                                                                                                                            "transformFlags": 5120,
                                                                                                                            "start": 640,
                                                                                                                            "end": 766
                                                                                                                        },
                                                                                                                        "operatorToken": {
                                                                                                                            "kind": 99634,
                                                                                                                            "flags": 96,
                                                                                                                            "transformFlags": 0,
                                                                                                                            "start": 766,
                                                                                                                            "end": 768
                                                                                                                        },
                                                                                                                        "right": {
                                                                                                                            "kind": 201392131,
                                                                                                                            "text": "repository. Follow those steps to get you setup:\n",
                                                                                                                            "rawText": "'repository. Follow those steps to get you setup:\\n'",
                                                                                                                            "flags": 4194401,
                                                                                                                            "transformFlags": 0,
                                                                                                                            "start": 768,
                                                                                                                            "end": 825
                                                                                                                        },
                                                                                                                        "flags": 4194401,
                                                                                                                        "transformFlags": 5120,
                                                                                                                        "start": 640,
                                                                                                                        "end": 825
                                                                                                                    },
                                                                                                                    "operatorToken": {
                                                                                                                        "kind": 99634,
                                                                                                                        "flags": 96,
                                                                                                                        "transformFlags": 0,
                                                                                                                        "start": 825,
                                                                                                                        "end": 827
                                                                                                                    },
                                                                                                                    "right": {
                                                                                                                        "kind": 201392131,
                                                                                                                        "text": "\n",
                                                                                                                        "rawText": "'\\n'",
                                                                                                                        "flags": 4194401,
                                                                                                                        "transformFlags": 0,
                                                                                                                        "start": 827,
                                                                                                                        "end": 836
                                                                                                                    },
                                                                                                                    "flags": 4194401,
                                                                                                                    "transformFlags": 5120,
                                                                                                                    "start": 640,
                                                                                                                    "end": 836
                                                                                                                },
                                                                                                                "operatorToken": {
                                                                                                                    "kind": 99634,
                                                                                                                    "flags": 96,
                                                                                                                    "transformFlags": 0,
                                                                                                                    "start": 836,
                                                                                                                    "end": 838
                                                                                                                },
                                                                                                                "right": {
                                                                                                                    "kind": 201392131,
                                                                                                                    "text": "Go to https://github.com/settings/tokens/new\n",
                                                                                                                    "rawText": "'Go to https://github.com/settings/tokens/new\\n'",
                                                                                                                    "flags": 4194401,
                                                                                                                    "transformFlags": 0,
                                                                                                                    "start": 838,
                                                                                                                    "end": 891
                                                                                                                },
                                                                                                                "flags": 4194401,
                                                                                                                "transformFlags": 5120,
                                                                                                                "start": 640,
                                                                                                                "end": 891
                                                                                                            },
                                                                                                            "operatorToken": {
                                                                                                                "kind": 99634,
                                                                                                                "flags": 96,
                                                                                                                "transformFlags": 0,
                                                                                                                "start": 891,
                                                                                                                "end": 893
                                                                                                            },
                                                                                                            "right": {
                                                                                                                "kind": 201392131,
                                                                                                                "text": " - Fill \"Token description\" with \"",
                                                                                                                "rawText": "' - Fill \"Token description\" with \"'",
                                                                                                                "flags": 4194401,
                                                                                                                "transformFlags": 0,
                                                                                                                "start": 893,
                                                                                                                "end": 934
                                                                                                            },
                                                                                                            "flags": 4194401,
                                                                                                            "transformFlags": 5120,
                                                                                                            "start": 640,
                                                                                                            "end": 934
                                                                                                        },
                                                                                                        "operatorToken": {
                                                                                                            "kind": 99634,
                                                                                                            "flags": 96,
                                                                                                            "transformFlags": 0,
                                                                                                            "start": 934,
                                                                                                            "end": 936
                                                                                                        },
                                                                                                        "right": {
                                                                                                            "kind": 134299649,
                                                                                                            "text": "prompt",
                                                                                                            "rawText": "prompt",
                                                                                                            "flags": 96,
                                                                                                            "transformFlags": 0,
                                                                                                            "start": 936,
                                                                                                            "end": 943
                                                                                                        },
                                                                                                        "flags": 4194401,
                                                                                                        "transformFlags": 5120,
                                                                                                        "start": 640,
                                                                                                        "end": 943
                                                                                                    },
                                                                                                    "operatorToken": {
                                                                                                        "kind": 99634,
                                                                                                        "flags": 96,
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 943,
                                                                                                        "end": 945
                                                                                                    },
                                                                                                    "right": {
                                                                                                        "kind": 201392131,
                                                                                                        "text": " for ",
                                                                                                        "rawText": "' for '",
                                                                                                        "flags": 4194400,
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 945,
                                                                                                        "end": 953
                                                                                                    },
                                                                                                    "flags": 4194401,
                                                                                                    "transformFlags": 5120,
                                                                                                    "start": 640,
                                                                                                    "end": 953
                                                                                                },
                                                                                                "operatorToken": {
                                                                                                    "kind": 99634,
                                                                                                    "flags": 96,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 953,
                                                                                                    "end": 955
                                                                                                },
                                                                                                "right": {
                                                                                                    "kind": 134299649,
                                                                                                    "text": "repoSlug",
                                                                                                    "rawText": "repoSlug",
                                                                                                    "flags": 97,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 955,
                                                                                                    "end": 970
                                                                                                },
                                                                                                "flags": 4194401,
                                                                                                "transformFlags": 5120,
                                                                                                "start": 640,
                                                                                                "end": 970
                                                                                            },
                                                                                            "operatorToken": {
                                                                                                "kind": 99634,
                                                                                                "flags": 96,
                                                                                                "transformFlags": 0,
                                                                                                "start": 970,
                                                                                                "end": 972
                                                                                            },
                                                                                            "right": {
                                                                                                "kind": 201392131,
                                                                                                "text": "\"\n",
                                                                                                "rawText": "'\"\\n'",
                                                                                                "flags": 4194400,
                                                                                                "transformFlags": 0,
                                                                                                "start": 972,
                                                                                                "end": 978
                                                                                            },
                                                                                            "flags": 4194401,
                                                                                            "transformFlags": 5120,
                                                                                            "start": 640,
                                                                                            "end": 978
                                                                                        },
                                                                                        "operatorToken": {
                                                                                            "kind": 99634,
                                                                                            "flags": 96,
                                                                                            "transformFlags": 0,
                                                                                            "start": 978,
                                                                                            "end": 980
                                                                                        },
                                                                                        "right": {
                                                                                            "kind": 201392131,
                                                                                            "text": " - Check \"public_repo\"\n",
                                                                                            "rawText": "' - Check \"public_repo\"\\n'",
                                                                                            "flags": 4194401,
                                                                                            "transformFlags": 0,
                                                                                            "start": 980,
                                                                                            "end": 1011
                                                                                        },
                                                                                        "flags": 4194401,
                                                                                        "transformFlags": 5120,
                                                                                        "start": 640,
                                                                                        "end": 1011
                                                                                    },
                                                                                    "operatorToken": {
                                                                                        "kind": 99634,
                                                                                        "flags": 96,
                                                                                        "transformFlags": 0,
                                                                                        "start": 1011,
                                                                                        "end": 1013
                                                                                    },
                                                                                    "right": {
                                                                                        "kind": 201392131,
                                                                                        "text": " - Press \"Generate Token\"\n",
                                                                                        "rawText": "' - Press \"Generate Token\"\\n'",
                                                                                        "flags": 4194401,
                                                                                        "transformFlags": 0,
                                                                                        "start": 1013,
                                                                                        "end": 1047
                                                                                    },
                                                                                    "flags": 4194401,
                                                                                    "transformFlags": 5120,
                                                                                    "start": 640,
                                                                                    "end": 1047
                                                                                },
                                                                                "operatorToken": {
                                                                                    "kind": 99634,
                                                                                    "flags": 96,
                                                                                    "transformFlags": 0,
                                                                                    "start": 1047,
                                                                                    "end": 1049
                                                                                },
                                                                                "right": {
                                                                                    "kind": 201392131,
                                                                                    "text": "\n",
                                                                                    "rawText": "'\\n'",
                                                                                    "flags": 4194401,
                                                                                    "transformFlags": 0,
                                                                                    "start": 1049,
                                                                                    "end": 1058
                                                                                },
                                                                                "flags": 4194401,
                                                                                "transformFlags": 5120,
                                                                                "start": 640,
                                                                                "end": 1058
                                                                            },
                                                                            "operatorToken": {
                                                                                "kind": 99634,
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 1058,
                                                                                "end": 1060
                                                                            },
                                                                            "right": {
                                                                                "kind": 201392131,
                                                                                "text": "In a different tab, go to https://travis-ci.org/",
                                                                                "rawText": "'In a different tab, go to https://travis-ci.org/'",
                                                                                "flags": 4194401,
                                                                                "transformFlags": 0,
                                                                                "start": 1060,
                                                                                "end": 1115
                                                                            },
                                                                            "flags": 4194401,
                                                                            "transformFlags": 5120,
                                                                            "start": 640,
                                                                            "end": 1115
                                                                        },
                                                                        "operatorToken": {
                                                                            "kind": 99634,
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 1115,
                                                                            "end": 1117
                                                                        },
                                                                        "right": {
                                                                            "kind": 134299649,
                                                                            "text": "repoSlug",
                                                                            "rawText": "repoSlug",
                                                                            "flags": 97,
                                                                            "transformFlags": 0,
                                                                            "start": 1117,
                                                                            "end": 1132
                                                                        },
                                                                        "flags": 4194401,
                                                                        "transformFlags": 5120,
                                                                        "start": 640,
                                                                        "end": 1132
                                                                    },
                                                                    "operatorToken": {
                                                                        "kind": 99634,
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 1132,
                                                                        "end": 1134
                                                                    },
                                                                    "right": {
                                                                        "kind": 201392131,
                                                                        "text": "/settings\n",
                                                                        "rawText": "'/settings\\n'",
                                                                        "flags": 4194400,
                                                                        "transformFlags": 0,
                                                                        "start": 1134,
                                                                        "end": 1148
                                                                    },
                                                                    "flags": 4194401,
                                                                    "transformFlags": 5120,
                                                                    "start": 640,
                                                                    "end": 1148
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 99634,
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 1148,
                                                                    "end": 1150
                                                                },
                                                                "right": {
                                                                    "kind": 201392131,
                                                                    "text": " - Make sure \"Build only if .travis.yml is present\" is ON\n",
                                                                    "rawText": "' - Make sure \"Build only if .travis.yml is present\" is ON\\n'",
                                                                    "flags": 4194401,
                                                                    "transformFlags": 0,
                                                                    "start": 1150,
                                                                    "end": 1216
                                                                },
                                                                "flags": 4194401,
                                                                "transformFlags": 5120,
                                                                "start": 640,
                                                                "end": 1216
                                                            },
                                                            "operatorToken": {
                                                                "kind": 99634,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 1216,
                                                                "end": 1218
                                                            },
                                                            "right": {
                                                                "kind": 201392131,
                                                                "text": " - Fill \"Name\" with \"GITHUB_USER\" and \"Value\" with the name of the ",
                                                                "rawText": "' - Fill \"Name\" with \"GITHUB_USER\" and \"Value\" with the name of the '",
                                                                "flags": 4194401,
                                                                "transformFlags": 0,
                                                                "start": 1218,
                                                                "end": 1292
                                                            },
                                                            "flags": 4194401,
                                                            "transformFlags": 5120,
                                                            "start": 640,
                                                            "end": 1292
                                                        },
                                                        "operatorToken": {
                                                            "kind": 99634,
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 1292,
                                                            "end": 1294
                                                        },
                                                        "right": {
                                                            "kind": 201392131,
                                                            "text": "account you generated the token with. Press \"Add\"\n",
                                                            "rawText": "'account you generated the token with. Press \"Add\"\\n'",
                                                            "flags": 4194401,
                                                            "transformFlags": 0,
                                                            "start": 1294,
                                                            "end": 1354
                                                        },
                                                        "flags": 4194401,
                                                        "transformFlags": 5120,
                                                        "start": 640,
                                                        "end": 1354
                                                    },
                                                    "operatorToken": {
                                                        "kind": 99634,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 1354,
                                                        "end": 1356
                                                    },
                                                    "right": {
                                                        "kind": 201392131,
                                                        "text": "\n",
                                                        "rawText": "'\\n'",
                                                        "flags": 4194401,
                                                        "transformFlags": 0,
                                                        "start": 1356,
                                                        "end": 1365
                                                    },
                                                    "flags": 4194401,
                                                    "transformFlags": 5120,
                                                    "start": 640,
                                                    "end": 1365
                                                },
                                                "operatorToken": {
                                                    "kind": 99634,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 1365,
                                                    "end": 1367
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "Once this is done, commit anything to the repository to restart ",
                                                    "rawText": "'Once this is done, commit anything to the repository to restart '",
                                                    "flags": 4194401,
                                                    "transformFlags": 0,
                                                    "start": 1367,
                                                    "end": 1438
                                                },
                                                "flags": 4194401,
                                                "transformFlags": 5120,
                                                "start": 640,
                                                "end": 1438
                                            },
                                            "operatorToken": {
                                                "kind": 99634,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 1438,
                                                "end": 1440
                                            },
                                            "right": {
                                                "kind": 201392131,
                                                "text": "Travis and it should work :)",
                                                "rawText": "'Travis and it should work :)'",
                                                "flags": 4194401,
                                                "transformFlags": 0,
                                                "start": 1440,
                                                "end": 1477
                                            },
                                            "flags": 4194401,
                                            "transformFlags": 5120,
                                            "start": 640,
                                            "end": 1477
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 640,
                                    "end": 1477
                                },
                                "flags": 268435488,
                                "transformFlags": 1,
                                "start": 604,
                                "end": 1481
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 604,
                            "end": 1482
                        }
                    ],
                    "flags": 67108897,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 1482
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 12,
                "end": 1484
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 1484
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 1484,
                "end": 1491
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "response",
                            "rawText": "response",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1491,
                            "end": 1500
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392131,
                                            "text": "_text",
                                            "rawText": "'_text'",
                                            "flags": 4194401,
                                            "transformFlags": 0,
                                            "start": 1504,
                                            "end": 1535
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "Turn on the lights",
                                            "rawText": "'Turn on the lights'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 1536,
                                            "end": 1557
                                        },
                                        "flags": 4194337,
                                        "transformFlags": 128,
                                        "start": 1504,
                                        "end": 1557
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "intent",
                                            "rawText": "intent",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 1558,
                                            "end": 1567
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "lights",
                                            "rawText": "'lights'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 1568,
                                            "end": 1577
                                        },
                                        "flags": 33,
                                        "transformFlags": 128,
                                        "start": 1558,
                                        "end": 1577
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 4194321,
                                "transformFlags": 0,
                                "start": 1504,
                                "end": 1578
                            },
                            "flags": 4194353,
                            "transformFlags": 8,
                            "start": 1502,
                            "end": 1580
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 1491,
                        "end": 1580
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 1491,
                "end": 1580
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 1484,
            "end": 1581
        }
    ],
    "isModule": false,
    "source": "function a() {\n  // kataw-ignore\n  var fnString =\n    '\"' + this.USE + ' ' + this.STRICT + '\";\\n' +\n    this.filterPrefix() +\n    'var fn=' + this.generateFunction('fn', 's,l,a,i') +\n    extra +\n    this.watchFns() +\n    'return fn;';\n\n  // kataw-ignore\n  const identity = Matrix.create(\n    1, 0, 0,\n    0, 1, 0,\n    0, 0, 0\n  );\n\n  // Let's make sure that this comment doesn't interfere\n\n  // kataw-ignore\n  const commentsWithPrettierIgnore =   {\n    \"ewww\":\n            \"gross-formatting\",\n  };\n\n  function giveMeSome() {\n    a(  a  ); // kataw-ignore\n    // shouldn't I return something?  :shrug:\n  }\n\n  // kataw-ignore\n  console.error(\n    'In order to use ' + prompt + ', you need to configure a ' +\n    'few environment variables to be able to commit to the ' +\n    'repository. Follow those steps to get you setup:\\n' +\n    '\\n' +\n    'Go to https://github.com/settings/tokens/new\\n' +\n    ' - Fill \"Token description\" with \"' + prompt + ' for ' +\n      repoSlug + '\"\\n' +\n    ' - Check \"public_repo\"\\n' +\n    ' - Press \"Generate Token\"\\n' +\n    '\\n' +\n    'In a different tab, go to https://travis-ci.org/' +\n      repoSlug + '/settings\\n' +\n    ' - Make sure \"Build only if .travis.yml is present\" is ON\\n' +\n    ' - Fill \"Name\" with \"GITHUB_USER\" and \"Value\" with the name of the ' +\n      'account you generated the token with. Press \"Add\"\\n' +\n    '\\n' +\n    'Once this is done, commit anything to the repository to restart ' +\n      'Travis and it should work :)'\n  );\n}\n\nconst response = {\n  // prettier-ignore\n  '_text': 'Turn on the lights',\n  intent: 'lights',\n};\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 1582
}
```

### Printed

```javascript
function a() {
  var fnString =
    "'\"'" +
    this.USE +
    "' '" +
    this.STRICT +
    "'\";\n'" +
    this.filterPrefix() +
    "'var fn='" +
    this.generateFunction("'fn'", "'s,l,a,i'") +
    extra +
    this.watchFns() +
    "'return fn;'"
  ;
  const identity = Matrix.create(1, 0, 0, 0, 1, 0, 0, 0, 0);
  const commentsWithPrettierIgnore = {
      "\"ewww\"": "\"gross-formatting\"",
    };
  function giveMeSome() {
    a(a);
  }
  

  // kataw-ignore
  console.error(

      "'In order to use '" +
      prompt +
      "', you need to configure a '" +
      "'few environment variables to be able to commit to the '" +
      "'repository. Follow those steps to get you setup:\n'" +
      "'\n'" +
      "'Go to https://github.com/settings/tokens/new\n'" +
      "' - Fill \"Token description\" with \"'" +
      prompt +
      "' for '" +
      repoSlug +
      "'\"\n'" +
      "' - Check \"public_repo\"\n'" +
      "' - Press \"Generate Token\"\n'" +
      "'\n'" +
      "'In a different tab, go to https://travis-ci.org/'" +
      repoSlug +
      "'/settings\n'" +
      "' - Make sure \"Build only if .travis.yml is present\" is ON\n'" +
      "' - Fill \"Name\" with \"GITHUB_USER\" and \"Value\" with the name of the '" +
      "'account you generated the token with. Press \"Add\"\n'" +
      "'\n'" +
      "'Once this is done, commit anything to the repository to restart '" +
      "'Travis and it should work :)'"

  );
}
const response = {
    "'_text'": "'Turn on the lights'",
    intent: "'lights'",
  };

```

### Diagnostics

```javascript
✔ No errors
```

