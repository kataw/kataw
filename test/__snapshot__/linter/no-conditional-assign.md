# Kataw parser test case

## Input

`````js
for (let i = 1; i = 10; i++) {
	console.log('foo');
}

if (foo = 'bar') {
	console.log('foo');
}

	while (foo = 'bar') {
			console.log('foo');
		}

    with (foo = 'bar') {
			console.log('foo');
		}

    	do {
			console.log('foo');
		} while (foo = 'bar')

    	(foo = bar) ? foo() : bar();
`````

## Options

### Parser Options

`````js
{ lint: { noConditionalAssign: true } }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 41951307,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 8
                },
                "binding": {
                    "kind": 151,
                    "bindingList": [
                        {
                            "kind": 190,
                            "binding": {
                                "kind": 134299649,
                                "text": "i",
                                "rawText": "i",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 10
                            },
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 14
                            },
                            "flags": 16,
                            "transformFlags": 4224,
                            "start": 8,
                            "end": 14
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 14
                },
                "flags": 33554448,
                "transformFlags": 0,
                "start": 0,
                "end": 14
            },
            "condition": {
                "kind": 127,
                "operandToken": {
                    "kind": 196635,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 27
                },
                "operand": {
                    "kind": 134299649,
                    "text": "i",
                    "rawText": "i",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 25
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 23,
                "end": 27
            },
            "incrementor": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "i",
                    "rawText": "i",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 17
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 19
                },
                "right": {
                    "kind": 201392130,
                    "text": 10,
                    "rawText": "10",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 22
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 15,
                "end": 22
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
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
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 30,
                                        "end": 39
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "log",
                                        "rawText": "log",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 40,
                                        "end": 43
                                    },
                                    "flags": 97,
                                    "transformFlags": 2,
                                    "start": 30,
                                    "end": 43
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 201392131,
                                            "text": "foo",
                                            "rawText": "'foo'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 44,
                                            "end": 49
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 44,
                                    "end": 49
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 30,
                                "end": 50
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 30,
                            "end": 51
                        }
                    ],
                    "flags": 17,
                    "transformFlags": 0,
                    "start": 30,
                    "end": 51
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 28,
                "end": 53
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 53
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "transformFlags": 0,
                "start": 53,
                "end": 57
            },
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 59,
                    "end": 62
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 62,
                    "end": 64
                },
                "right": {
                    "kind": 201392131,
                    "text": "bar",
                    "rawText": "'bar'",
                    "flags": 4194400,
                    "transformFlags": 0,
                    "start": 64,
                    "end": 70
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 59,
                "end": 70
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
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
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 73,
                                        "end": 82
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "log",
                                        "rawText": "log",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 83,
                                        "end": 86
                                    },
                                    "flags": 97,
                                    "transformFlags": 2,
                                    "start": 73,
                                    "end": 86
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 201392131,
                                            "text": "foo",
                                            "rawText": "'foo'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 87,
                                            "end": 92
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 87,
                                    "end": 92
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 73,
                                "end": 93
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 73,
                            "end": 94
                        }
                    ],
                    "flags": 17,
                    "transformFlags": 0,
                    "start": 73,
                    "end": 94
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 71,
                "end": 96
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 81,
            "transformFlags": 0,
            "start": 53,
            "end": 96
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 81,
                "transformFlags": 0,
                "start": 96,
                "end": 104
            },
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 106,
                    "end": 109
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 109,
                    "end": 111
                },
                "right": {
                    "kind": 201392131,
                    "text": "bar",
                    "rawText": "'bar'",
                    "flags": 4194400,
                    "transformFlags": 0,
                    "start": 111,
                    "end": 117
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 106,
                "end": 117
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
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
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 120,
                                        "end": 131
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "log",
                                        "rawText": "log",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 132,
                                        "end": 135
                                    },
                                    "flags": 97,
                                    "transformFlags": 2,
                                    "start": 120,
                                    "end": 135
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 201392131,
                                            "text": "foo",
                                            "rawText": "'foo'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 136,
                                            "end": 141
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 136,
                                    "end": 141
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 120,
                                "end": 142
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 120,
                            "end": 143
                        }
                    ],
                    "flags": 17,
                    "transformFlags": 0,
                    "start": 120,
                    "end": 143
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 118,
                "end": 147
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 96,
            "end": 147
        },
        {
            "kind": 153,
            "withKeyword": {
                "kind": 37757029,
                "flags": 81,
                "transformFlags": 0,
                "start": 147,
                "end": 157
            },
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 159,
                    "end": 162
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 162,
                    "end": 164
                },
                "right": {
                    "kind": 201392131,
                    "text": "bar",
                    "rawText": "'bar'",
                    "flags": 4194400,
                    "transformFlags": 0,
                    "start": 164,
                    "end": 170
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 159,
                "end": 170
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
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
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 173,
                                        "end": 184
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "log",
                                        "rawText": "log",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 185,
                                        "end": 188
                                    },
                                    "flags": 97,
                                    "transformFlags": 2,
                                    "start": 173,
                                    "end": 188
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 201392131,
                                            "text": "foo",
                                            "rawText": "'foo'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 189,
                                            "end": 194
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 189,
                                    "end": 194
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 173,
                                "end": 195
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 173,
                            "end": 196
                        }
                    ],
                    "flags": 17,
                    "transformFlags": 0,
                    "start": 173,
                    "end": 196
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 171,
                "end": 200
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 147,
            "end": 200
        },
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 81,
                "transformFlags": 0,
                "start": 200,
                "end": 209
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
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
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 211,
                                        "end": 222
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "log",
                                        "rawText": "log",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 223,
                                        "end": 226
                                    },
                                    "flags": 97,
                                    "transformFlags": 2,
                                    "start": 211,
                                    "end": 226
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 201392131,
                                            "text": "foo",
                                            "rawText": "'foo'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 227,
                                            "end": 232
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 227,
                                    "end": 232
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 211,
                                "end": 233
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 211,
                            "end": 234
                        }
                    ],
                    "flags": 17,
                    "transformFlags": 0,
                    "start": 211,
                    "end": 234
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 209,
                "end": 238
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "transformFlags": 0,
                "start": 238,
                "end": 244
            },
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 246,
                    "end": 249
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 249,
                    "end": 251
                },
                "right": {
                    "kind": 201392131,
                    "text": "bar",
                    "rawText": "'bar'",
                    "flags": 4194400,
                    "transformFlags": 0,
                    "start": 251,
                    "end": 257
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 246,
                "end": 257
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 200,
            "end": 258
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 121,
                    "expression": {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 266,
                            "end": 269
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 269,
                            "end": 271
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 271,
                            "end": 275
                        },
                        "flags": 32,
                        "transformFlags": 128,
                        "start": 258,
                        "end": 275
                    },
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 258,
                    "end": 276
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 276,
                    "end": 278
                },
                "consequent": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 278,
                        "end": 282
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 283,
                        "end": 283
                    },
                    "flags": 32,
                    "transformFlags": 1,
                    "start": 278,
                    "end": 284
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 284,
                    "end": 286
                },
                "alternate": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 286,
                        "end": 290
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 291,
                        "end": 291
                    },
                    "flags": 32,
                    "transformFlags": 1,
                    "start": 286,
                    "end": 292
                },
                "flags": 35,
                "transformFlags": 4096,
                "start": 258,
                "end": 292
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 258,
            "end": 293
        }
    ],
    "isModule": false,
    "source": "for (let i = 1; i = 10; i++) {\n\tconsole.log('foo');\n}\n\nif (foo = 'bar') {\n\tconsole.log('foo');\n}\n\n\twhile (foo = 'bar') {\n\t\t\tconsole.log('foo');\n\t\t}\n\n    with (foo = 'bar') {\n\t\t\tconsole.log('foo');\n\t\t}\n\n    \tdo {\n\t\t\tconsole.log('foo');\n\t\t} while (foo = 'bar')\n\n    \t(foo = bar) ? foo() : bar();",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 293
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Unexpected assignment within 'If statement' - start: 70, end: 71
✖ Unexpected assignment within 'While statement' - start: 117, end: 118
✖ Unexpected assignment within 'Whith statement' - start: 170, end: 171
✖ Unexpected assignment within 'DoWhile statement' - start: 257, end: 258

```

