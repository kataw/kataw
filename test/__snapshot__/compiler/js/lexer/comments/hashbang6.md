# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: false, next: true }
`````

## Input

`````js
const AsyncFunction = (async function (){}).constructor;
const GeneratorFunction = (function *(){}).constructor;
const AsyncGeneratorFunction = (async function *(){}).constructor;
for (const ctor of [
  Function,
  AsyncFunction,
  GeneratorFunction,
  AsyncGeneratorFunction,
]) {
  assert.throws(SyntaxError, () => ctor('#!\n_', ''), `${ctor.name} Call argument`);
  assert.throws(SyntaxError, () => ctor('#!\n_'), `${ctor.name} Call body`);
  assert.throws(SyntaxError, () => new ctor('#!\n_', ''), `${ctor.name} Construct argument`);
  assert.throws(SyntaxError, () => new ctor('#!\n_'), `${ctor.name} Construct body`);
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "const AsyncFunction = (async function (){}).constructor;\nconst GeneratorFunction = (function *(){}).constructor;\nconst AsyncGeneratorFunction = (async function *(){}).constructor;\nfor (const ctor of [\n  Function,\n  AsyncFunction,\n  GeneratorFunction,\n  AsyncGeneratorFunction,\n]) {\n  assert.throws(SyntaxError, () => ctor('#!\\n_', ''), `${ctor.name} Call argument`);\n  assert.throws(SyntaxError, () => ctor('#!\\n_'), `${ctor.name} Call body`);\n  assert.throws(SyntaxError, () => new ctor('#!\\n_', ''), `${ctor.name} Construct argument`);\n  assert.throws(SyntaxError, () => new ctor('#!\\n_'), `${ctor.name} Construct body`);\n}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 142,
                "isConst": true,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "AsyncFunction",
                                "rawText": "AsyncFunction",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 5,
                                "end": 19
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 74424,
                                "member": {
                                    "kind": 66224,
                                    "expression": {
                                        "kind": 9439250,
                                        "name": null,
                                        "formalParameters": {
                                            "kind": 90,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 39,
                                            "end": 40
                                        },
                                        "contents": {
                                            "kind": 91,
                                            "functionStatementList": {
                                                "kind": 94,
                                                "statements": [],
                                                "multiline": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 41,
                                                "end": 41
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 40,
                                            "end": 42
                                        },
                                        "typeParameters": null,
                                        "type": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 4,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 23,
                                        "end": 42
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 21,
                                    "end": 43
                                },
                                "expression": {
                                    "kind": 196711,
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 44,
                                    "end": 55
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 43,
                                "end": 55
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 5,
                            "end": 55
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 5,
                    "end": 55
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 56
            },
            {
                "kind": 142,
                "isConst": true,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "GeneratorFunction",
                                "rawText": "GeneratorFunction",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 62,
                                "end": 80
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 74424,
                                "member": {
                                    "kind": 66224,
                                    "expression": {
                                        "kind": 8915041,
                                        "name": null,
                                        "formalParameters": {
                                            "kind": 90,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 95,
                                            "end": 96
                                        },
                                        "contents": {
                                            "kind": 91,
                                            "functionStatementList": {
                                                "kind": 94,
                                                "statements": [],
                                                "multiline": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 97,
                                                "end": 97
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 96,
                                            "end": 98
                                        },
                                        "typeParameters": null,
                                        "type": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 128,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 84,
                                        "end": 98
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 82,
                                    "end": 99
                                },
                                "expression": {
                                    "kind": 196711,
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 100,
                                    "end": 111
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 99,
                                "end": 111
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 62,
                            "end": 111
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 62,
                    "end": 111
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
                "start": 56,
                "end": 112
            },
            {
                "kind": 142,
                "isConst": true,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "AsyncGeneratorFunction",
                                "rawText": "AsyncGeneratorFunction",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 118,
                                "end": 141
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 74424,
                                "member": {
                                    "kind": 66224,
                                    "expression": {
                                        "kind": 9963540,
                                        "name": null,
                                        "formalParameters": {
                                            "kind": 90,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 162,
                                            "end": 163
                                        },
                                        "contents": {
                                            "kind": 91,
                                            "functionStatementList": {
                                                "kind": 94,
                                                "statements": [],
                                                "multiline": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 164,
                                                "end": 164
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 163,
                                            "end": 165
                                        },
                                        "typeParameters": null,
                                        "type": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 8,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 145,
                                        "end": 165
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 143,
                                    "end": 166
                                },
                                "expression": {
                                    "kind": 196711,
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 167,
                                    "end": 178
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 166,
                                "end": 178
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 118,
                            "end": 178
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 118,
                    "end": 178
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
                "start": 112,
                "end": 179
            },
            {
                "kind": 2099287,
                "initializer": {
                    "kind": 142,
                    "isConst": true,
                    "binding": {
                        "kind": 31,
                        "bindingList": [
                            {
                                "kind": 141,
                                "binding": {
                                    "kind": 131102,
                                    "text": "ctor",
                                    "rawText": "ctor",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1025,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 190,
                                    "end": 195
                                },
                                "exclamation": false,
                                "type": null,
                                "initializer": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 190,
                                "end": 195
                            }
                        ],
                        "flags": 16,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 190,
                        "end": 195
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 256,
                    "parent": null,
                    "emitNode": null,
                    "start": 185,
                    "end": 195
                },
                "expression": {
                    "kind": 67207686,
                    "elementList": {
                        "kind": 65605,
                        "elements": [
                            {
                                "kind": 196712,
                                "text": "Function",
                                "rawText": "Function",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 200,
                                "end": 211
                            },
                            {
                                "kind": 196712,
                                "text": "AsyncFunction",
                                "rawText": "AsyncFunction",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 212,
                                "end": 228
                            },
                            {
                                "kind": 196712,
                                "text": "GeneratorFunction",
                                "rawText": "GeneratorFunction",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 229,
                                "end": 249
                            },
                            {
                                "kind": 196712,
                                "text": "AsyncGeneratorFunction",
                                "rawText": "AsyncGeneratorFunction",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 250,
                                "end": 275
                            }
                        ],
                        "trailingComma": true,
                        "multiline": true,
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 200,
                        "end": 276
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 198,
                    "end": 278
                },
                "statement": {
                    "kind": 2099237,
                    "block": {
                        "kind": 2084,
                        "statements": [
                            {
                                "kind": 2097233,
                                "expression": {
                                    "kind": 66091,
                                    "expression": {
                                        "kind": 74424,
                                        "member": {
                                            "kind": 196712,
                                            "text": "assert",
                                            "rawText": "assert",
                                            "flags": 16384,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 281,
                                            "end": 290
                                        },
                                        "expression": {
                                            "kind": 196711,
                                            "text": "throws",
                                            "rawText": "throws",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 291,
                                            "end": 297
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 290,
                                        "end": 297
                                    },
                                    "typeArguments": null,
                                    "argumentList": {
                                        "kind": 3,
                                        "elements": [
                                            {
                                                "kind": 196712,
                                                "text": "SyntaxError",
                                                "rawText": "SyntaxError",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 298,
                                                "end": 309
                                            },
                                            {
                                                "kind": 67592,
                                                "arrowParameters": {
                                                    "kind": 65545,
                                                    "typeParameters": 1,
                                                    "elements": [],
                                                    "type": null,
                                                    "accessModifier": null,
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 310,
                                                    "end": 310
                                                },
                                                "contents": {
                                                    "kind": 54,
                                                    "expressions": [
                                                        {
                                                            "kind": 66091,
                                                            "expression": {
                                                                "kind": 196712,
                                                                "text": "ctor",
                                                                "rawText": "ctor",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 316,
                                                                "end": 321
                                                            },
                                                            "typeArguments": null,
                                                            "argumentList": {
                                                                "kind": 3,
                                                                "elements": [
                                                                    {
                                                                        "kind": 67279,
                                                                        "text": "#!\n_",
                                                                        "rawText": "#!\n_",
                                                                        "flags": 16777216,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 322,
                                                                        "end": 329
                                                                    },
                                                                    {
                                                                        "kind": 67279,
                                                                        "text": "",
                                                                        "rawText": "",
                                                                        "flags": 16777216,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 330,
                                                                        "end": 333
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "transformFlags": 0,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 329,
                                                                "end": 334
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 321,
                                                            "end": 334
                                                        },
                                                        {
                                                            "kind": 66261,
                                                            "spans": [
                                                                {
                                                                    "kind": 66263,
                                                                    "rawText": "",
                                                                    "text": "",
                                                                    "expression": {
                                                                        "kind": 74424,
                                                                        "member": {
                                                                            "kind": 196712,
                                                                            "text": "ctor",
                                                                            "rawText": "ctor",
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "parent": null,
                                                                            "emitNode": null,
                                                                            "start": 339,
                                                                            "end": 343
                                                                        },
                                                                        "expression": {
                                                                            "kind": 196711,
                                                                            "text": "name",
                                                                            "rawText": "name",
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "parent": null,
                                                                            "emitNode": null,
                                                                            "start": 344,
                                                                            "end": 348
                                                                        },
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 343,
                                                                        "end": 348
                                                                    },
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 1,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 335,
                                                                    "end": 348
                                                                }
                                                            ],
                                                            "tail": {
                                                                "kind": 4260568,
                                                                "rawText": " Call argument",
                                                                "text": " Call argument",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 1,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 348,
                                                                "end": 364
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 335,
                                                            "end": 364
                                                        }
                                                    ],
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 316,
                                                    "end": 364
                                                },
                                                "flags": 536870912,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 310,
                                                "end": 364
                                            }
                                        ],
                                        "trailingComma": false,
                                        "transformFlags": 0,
                                        "flags": 0,
                                        "intersects": false,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 309,
                                        "end": 365
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 297,
                                    "end": 365
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 281,
                                "end": 366
                            },
                            {
                                "kind": 2097233,
                                "expression": {
                                    "kind": 66091,
                                    "expression": {
                                        "kind": 74424,
                                        "member": {
                                            "kind": 196712,
                                            "text": "assert",
                                            "rawText": "assert",
                                            "flags": 16384,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 366,
                                            "end": 375
                                        },
                                        "expression": {
                                            "kind": 196711,
                                            "text": "throws",
                                            "rawText": "throws",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 376,
                                            "end": 382
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 375,
                                        "end": 382
                                    },
                                    "typeArguments": null,
                                    "argumentList": {
                                        "kind": 3,
                                        "elements": [
                                            {
                                                "kind": 196712,
                                                "text": "SyntaxError",
                                                "rawText": "SyntaxError",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 383,
                                                "end": 394
                                            },
                                            {
                                                "kind": 67592,
                                                "arrowParameters": {
                                                    "kind": 65545,
                                                    "typeParameters": 1,
                                                    "elements": [],
                                                    "type": null,
                                                    "accessModifier": null,
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 395,
                                                    "end": 395
                                                },
                                                "contents": {
                                                    "kind": 54,
                                                    "expressions": [
                                                        {
                                                            "kind": 66091,
                                                            "expression": {
                                                                "kind": 196712,
                                                                "text": "ctor",
                                                                "rawText": "ctor",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 401,
                                                                "end": 406
                                                            },
                                                            "typeArguments": null,
                                                            "argumentList": {
                                                                "kind": 3,
                                                                "elements": [
                                                                    {
                                                                        "kind": 67279,
                                                                        "text": "#!\n_",
                                                                        "rawText": "#!\n_",
                                                                        "flags": 16777216,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 407,
                                                                        "end": 414
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "transformFlags": 0,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 414,
                                                                "end": 415
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 406,
                                                            "end": 415
                                                        },
                                                        {
                                                            "kind": 66261,
                                                            "spans": [
                                                                {
                                                                    "kind": 66263,
                                                                    "rawText": "",
                                                                    "text": "",
                                                                    "expression": {
                                                                        "kind": 74424,
                                                                        "member": {
                                                                            "kind": 196712,
                                                                            "text": "ctor",
                                                                            "rawText": "ctor",
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "parent": null,
                                                                            "emitNode": null,
                                                                            "start": 420,
                                                                            "end": 424
                                                                        },
                                                                        "expression": {
                                                                            "kind": 196711,
                                                                            "text": "name",
                                                                            "rawText": "name",
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "parent": null,
                                                                            "emitNode": null,
                                                                            "start": 425,
                                                                            "end": 429
                                                                        },
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 424,
                                                                        "end": 429
                                                                    },
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 1,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 416,
                                                                    "end": 429
                                                                }
                                                            ],
                                                            "tail": {
                                                                "kind": 4260568,
                                                                "rawText": " Call body",
                                                                "text": " Call body",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 1,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 429,
                                                                "end": 441
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 416,
                                                            "end": 441
                                                        }
                                                    ],
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 401,
                                                    "end": 441
                                                },
                                                "flags": 536870912,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 395,
                                                "end": 441
                                            }
                                        ],
                                        "trailingComma": false,
                                        "transformFlags": 0,
                                        "flags": 0,
                                        "intersects": false,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 394,
                                        "end": 442
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 382,
                                    "end": 442
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 366,
                                "end": 443
                            },
                            {
                                "kind": 2097233,
                                "expression": {
                                    "kind": 66091,
                                    "expression": {
                                        "kind": 74424,
                                        "member": {
                                            "kind": 196712,
                                            "text": "assert",
                                            "rawText": "assert",
                                            "flags": 16384,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 443,
                                            "end": 452
                                        },
                                        "expression": {
                                            "kind": 196711,
                                            "text": "throws",
                                            "rawText": "throws",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 453,
                                            "end": 459
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 452,
                                        "end": 459
                                    },
                                    "typeArguments": null,
                                    "argumentList": {
                                        "kind": 3,
                                        "elements": [
                                            {
                                                "kind": 196712,
                                                "text": "SyntaxError",
                                                "rawText": "SyntaxError",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 460,
                                                "end": 471
                                            },
                                            {
                                                "kind": 67592,
                                                "arrowParameters": {
                                                    "kind": 65545,
                                                    "typeParameters": 1,
                                                    "elements": [],
                                                    "type": null,
                                                    "accessModifier": null,
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 472,
                                                    "end": 472
                                                },
                                                "contents": {
                                                    "kind": 54,
                                                    "expressions": [
                                                        {
                                                            "kind": 66204,
                                                            "expression": {
                                                                "kind": 196712,
                                                                "text": "ctor",
                                                                "rawText": "ctor",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 482,
                                                                "end": 487
                                                            },
                                                            "typeArguments": null,
                                                            "argumentList": {
                                                                "kind": 3,
                                                                "elements": [
                                                                    {
                                                                        "kind": 67279,
                                                                        "text": "#!\n_",
                                                                        "rawText": "#!\n_",
                                                                        "flags": 16777216,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 488,
                                                                        "end": 495
                                                                    },
                                                                    {
                                                                        "kind": 67279,
                                                                        "text": "",
                                                                        "rawText": "",
                                                                        "flags": 16777216,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 496,
                                                                        "end": 499
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "transformFlags": 0,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 488,
                                                                "end": 499
                                                            },
                                                            "flags": 478,
                                                            "intersects": false,
                                                            "transformFlags": 32,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 0,
                                                            "end": 500
                                                        },
                                                        {
                                                            "kind": 66261,
                                                            "spans": [
                                                                {
                                                                    "kind": 66263,
                                                                    "rawText": "",
                                                                    "text": "",
                                                                    "expression": {
                                                                        "kind": 74424,
                                                                        "member": {
                                                                            "kind": 196712,
                                                                            "text": "ctor",
                                                                            "rawText": "ctor",
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "parent": null,
                                                                            "emitNode": null,
                                                                            "start": 505,
                                                                            "end": 509
                                                                        },
                                                                        "expression": {
                                                                            "kind": 196711,
                                                                            "text": "name",
                                                                            "rawText": "name",
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "parent": null,
                                                                            "emitNode": null,
                                                                            "start": 510,
                                                                            "end": 514
                                                                        },
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 509,
                                                                        "end": 514
                                                                    },
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 1,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 501,
                                                                    "end": 514
                                                                }
                                                            ],
                                                            "tail": {
                                                                "kind": 4260568,
                                                                "rawText": " Construct argument",
                                                                "text": " Construct argument",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 1,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 514,
                                                                "end": 535
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 501,
                                                            "end": 535
                                                        }
                                                    ],
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 478,
                                                    "end": 535
                                                },
                                                "flags": 536870912,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 472,
                                                "end": 535
                                            }
                                        ],
                                        "trailingComma": false,
                                        "transformFlags": 0,
                                        "flags": 0,
                                        "intersects": false,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 471,
                                        "end": 536
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 459,
                                    "end": 536
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 443,
                                "end": 537
                            },
                            {
                                "kind": 2097233,
                                "expression": {
                                    "kind": 66091,
                                    "expression": {
                                        "kind": 74424,
                                        "member": {
                                            "kind": 196712,
                                            "text": "assert",
                                            "rawText": "assert",
                                            "flags": 16384,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 537,
                                            "end": 546
                                        },
                                        "expression": {
                                            "kind": 196711,
                                            "text": "throws",
                                            "rawText": "throws",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 547,
                                            "end": 553
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 546,
                                        "end": 553
                                    },
                                    "typeArguments": null,
                                    "argumentList": {
                                        "kind": 3,
                                        "elements": [
                                            {
                                                "kind": 196712,
                                                "text": "SyntaxError",
                                                "rawText": "SyntaxError",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 554,
                                                "end": 565
                                            },
                                            {
                                                "kind": 67592,
                                                "arrowParameters": {
                                                    "kind": 65545,
                                                    "typeParameters": 1,
                                                    "elements": [],
                                                    "type": null,
                                                    "accessModifier": null,
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 566,
                                                    "end": 566
                                                },
                                                "contents": {
                                                    "kind": 54,
                                                    "expressions": [
                                                        {
                                                            "kind": 66204,
                                                            "expression": {
                                                                "kind": 196712,
                                                                "text": "ctor",
                                                                "rawText": "ctor",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 576,
                                                                "end": 581
                                                            },
                                                            "typeArguments": null,
                                                            "argumentList": {
                                                                "kind": 3,
                                                                "elements": [
                                                                    {
                                                                        "kind": 67279,
                                                                        "text": "#!\n_",
                                                                        "rawText": "#!\n_",
                                                                        "flags": 16777216,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 582,
                                                                        "end": 589
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "transformFlags": 0,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 582,
                                                                "end": 589
                                                            },
                                                            "flags": 572,
                                                            "intersects": false,
                                                            "transformFlags": 32,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 0,
                                                            "end": 590
                                                        },
                                                        {
                                                            "kind": 66261,
                                                            "spans": [
                                                                {
                                                                    "kind": 66263,
                                                                    "rawText": "",
                                                                    "text": "",
                                                                    "expression": {
                                                                        "kind": 74424,
                                                                        "member": {
                                                                            "kind": 196712,
                                                                            "text": "ctor",
                                                                            "rawText": "ctor",
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "parent": null,
                                                                            "emitNode": null,
                                                                            "start": 595,
                                                                            "end": 599
                                                                        },
                                                                        "expression": {
                                                                            "kind": 196711,
                                                                            "text": "name",
                                                                            "rawText": "name",
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "parent": null,
                                                                            "emitNode": null,
                                                                            "start": 600,
                                                                            "end": 604
                                                                        },
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 599,
                                                                        "end": 604
                                                                    },
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 1,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 591,
                                                                    "end": 604
                                                                }
                                                            ],
                                                            "tail": {
                                                                "kind": 4260568,
                                                                "rawText": " Construct body",
                                                                "text": " Construct body",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 1,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 604,
                                                                "end": 621
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 591,
                                                            "end": 621
                                                        }
                                                    ],
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 572,
                                                    "end": 621
                                                },
                                                "flags": 536870912,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 566,
                                                "end": 621
                                            }
                                        ],
                                        "trailingComma": false,
                                        "transformFlags": 0,
                                        "flags": 0,
                                        "intersects": false,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 565,
                                        "end": 622
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 553,
                                    "end": 622
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 537,
                                "end": 623
                            }
                        ],
                        "multiline": true,
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 281,
                        "end": 623
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 279,
                    "end": 625
                },
                "isAwait": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 1,
                "parent": null,
                "emitNode": null,
                "start": 179,
                "end": 625
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 625
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 625
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

