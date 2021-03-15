# Kataw parser test case

## Input

`````js
functionName<A /* A comment */>();
const a: T</* comment */> = 1;
functionName</* comment */>();
function foo</* comment */>() {}
interface Foo {
 </* comment */>(arg): any;
}
type T = </* comment */>(arg) => any;

functionName<
  A // comment
>();
const a: T<
  // comment
> = 1;
functionName<
  // comment
>();
function foo<
  // comment
>() {}
interface Foo {
 <
  A// comment
 >(arg): any;
}
type T = <
  // comment
>(arg) => any;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "functionName<A /* A comment */>();\nconst a: T</* comment */> = 1;\nfunctionName</* comment */>();\nfunction foo</* comment */>() {}\ninterface Foo {\n </* comment */>(arg): any;\n}\ntype T = </* comment */>(arg) => any;\n\nfunctionName<\n  A // comment\n>();\nconst a: T<\n  // comment\n> = 1;\nfunctionName<\n  // comment\n>();\nfunction foo<\n  // comment\n>() {}\ninterface Foo {\n <\n  A// comment\n >(arg): any;\n}\ntype T = <\n  // comment\n>(arg) => any;",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "functionName",
                    "rawText": "functionName",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 12
                },
                "typeArguments": {
                    "kind": 8419,
                    "typeArgumentsList": [
                        {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "A",
                                "rawText": "A",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 14
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 13,
                            "end": 31
                        }
                    ],
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 13,
                    "end": 31
                },
                "argumentList": {
                    "kind": 3,
                    "elements": [],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 32,
                    "end": 32
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 12,
                "end": 33
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 34
        },
        {
            "kind": 142,
            "isConst": true,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "a",
                            "rawText": "a",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 40,
                            "end": 42
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 43,
                                "end": 45
                            },
                            "typeArguments": {
                                "kind": 8419,
                                "typeArgumentsList": [],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 46,
                                "end": 46
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 43,
                            "end": 62
                        },
                        "initializer": {
                            "kind": 4261540,
                            "text": 1,
                            "rawText": "1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 62,
                            "end": 64
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 40,
                        "end": 64
                    }
                ],
                "flags": 8,
                "symbol": null,
                "transformFlags": 0,
                "start": 40,
                "end": 64
            },
            "flags": 32776,
            "symbol": null,
            "transformFlags": 769,
            "start": 34,
            "end": 65
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "functionName",
                    "rawText": "functionName",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 65,
                    "end": 78
                },
                "typeArguments": {
                    "kind": 8419,
                    "typeArgumentsList": [],
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 79,
                    "end": 93
                },
                "argumentList": {
                    "kind": 3,
                    "elements": [],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 94,
                    "end": 94
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 78,
                "end": 95
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 65,
            "end": 96
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "foo",
                "rawText": "foo",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 105,
                "end": 109
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 125,
                "end": 126
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 128,
                    "end": 128
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 126,
                "end": 129
            },
            "typeParameters": {
                "kind": 134226153,
                "typeParameterList": [],
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 110,
                "end": 110
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 256,
            "start": 96,
            "end": 129
        },
        {
            "kind": 8311,
            "name": {
                "kind": 196712,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 139,
                "end": 143
            },
            "typeParameters": null,
            "heritageClauses": null,
            "objectTypeMembers": {
                "kind": 536871081,
                "members": [
                    {
                        "kind": 8236,
                        "isReadOnly": false,
                        "accessModifier": null,
                        "typeParameters": {
                            "kind": 134226153,
                            "typeParameterList": [],
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 148,
                            "end": 148
                        },
                        "parameters": {
                            "kind": 134226095,
                            "parameterList": [
                                {
                                    "kind": 134226094,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 131102,
                                        "text": "arg",
                                        "rawText": "arg",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1025,
                                        "start": 163,
                                        "end": 166
                                    },
                                    "isOptional": false,
                                    "type": null,
                                    "initializer": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 1,
                                    "start": 163,
                                    "end": 166
                                }
                            ],
                            "trailingcomma": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 163,
                            "end": 166
                        },
                        "returnType": {
                            "kind": 4202498,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 168,
                            "end": 172
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 145,
                        "end": 173
                    }
                ],
                "multiline": true,
                "flags": 32768,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 145,
                "end": 173
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 129,
            "end": 175
        },
        {
            "kind": 8417,
            "name": {
                "kind": 196712,
                "text": "T",
                "rawText": "T",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 180,
                "end": 182
            },
            "type": {
                "kind": 8287,
                "typeParameters": {
                    "kind": 134226153,
                    "typeParameterList": [],
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 186,
                    "end": 186
                },
                "parameters": {
                    "kind": 134226095,
                    "parameterList": [
                        {
                            "kind": 134226094,
                            "ellipsis": false,
                            "binding": {
                                "kind": 131102,
                                "text": "arg",
                                "rawText": "arg",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1025,
                                "start": 201,
                                "end": 204
                            },
                            "isOptional": false,
                            "type": null,
                            "initializer": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1,
                            "start": 201,
                            "end": 204
                        }
                    ],
                    "trailingcomma": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 201,
                    "end": 204
                },
                "returnType": {
                    "kind": 4202498,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 208,
                    "end": 212
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 184,
                "end": 212
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 175,
            "end": 213
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "functionName",
                    "rawText": "functionName",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 213,
                    "end": 227
                },
                "typeArguments": {
                    "kind": 8419,
                    "typeArgumentsList": [
                        {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "A",
                                "rawText": "A",
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 228,
                                "end": 232
                            },
                            "typeArguments": null,
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 228,
                            "end": 245
                        }
                    ],
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 228,
                    "end": 245
                },
                "argumentList": {
                    "kind": 3,
                    "elements": [],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 246,
                    "end": 246
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 227,
                "end": 247
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 213,
            "end": 248
        },
        {
            "kind": 142,
            "isConst": true,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "a",
                            "rawText": "a",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 254,
                            "end": 256
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 257,
                                "end": 259
                            },
                            "typeArguments": {
                                "kind": 8419,
                                "typeArgumentsList": [],
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 260,
                                "end": 260
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 257,
                            "end": 277
                        },
                        "initializer": {
                            "kind": 4261540,
                            "text": 1,
                            "rawText": "1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 277,
                            "end": 279
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 254,
                        "end": 279
                    }
                ],
                "flags": 8,
                "symbol": null,
                "transformFlags": 0,
                "start": 254,
                "end": 279
            },
            "flags": 32776,
            "symbol": null,
            "transformFlags": 769,
            "start": 248,
            "end": 280
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "functionName",
                    "rawText": "functionName",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 280,
                    "end": 293
                },
                "typeArguments": {
                    "kind": 8419,
                    "typeArgumentsList": [],
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 294,
                    "end": 309
                },
                "argumentList": {
                    "kind": 3,
                    "elements": [],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 310,
                    "end": 310
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 293,
                "end": 311
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 280,
            "end": 312
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "foo",
                "rawText": "foo",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 321,
                "end": 325
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 342,
                "end": 343
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 345,
                    "end": 345
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 343,
                "end": 346
            },
            "typeParameters": {
                "kind": 134226153,
                "typeParameterList": [],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 326,
                "end": 326
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 256,
            "start": 312,
            "end": 346
        },
        {
            "kind": 8311,
            "name": {
                "kind": 196712,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 356,
                "end": 360
            },
            "typeParameters": null,
            "heritageClauses": null,
            "objectTypeMembers": {
                "kind": 536871081,
                "members": [
                    {
                        "kind": 8236,
                        "isReadOnly": false,
                        "accessModifier": null,
                        "typeParameters": {
                            "kind": 134226153,
                            "typeParameterList": [
                                {
                                    "kind": 134226152,
                                    "name": {
                                        "kind": 196711,
                                        "text": "A",
                                        "rawText": "A",
                                        "flags": 32768,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 365,
                                        "end": 369
                                    },
                                    "constraint": null,
                                    "defaultType": null,
                                    "expression": null,
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 365,
                                    "end": 369
                                }
                            ],
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 365,
                            "end": 369
                        },
                        "parameters": {
                            "kind": 134226095,
                            "parameterList": [
                                {
                                    "kind": 134226094,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 131102,
                                        "text": "arg",
                                        "rawText": "arg",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1025,
                                        "start": 383,
                                        "end": 386
                                    },
                                    "isOptional": false,
                                    "type": null,
                                    "initializer": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 1,
                                    "start": 383,
                                    "end": 386
                                }
                            ],
                            "trailingcomma": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 383,
                            "end": 386
                        },
                        "returnType": {
                            "kind": 4202498,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 388,
                            "end": 392
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 362,
                        "end": 393
                    }
                ],
                "multiline": true,
                "flags": 32768,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 362,
                "end": 393
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 346,
            "end": 395
        },
        {
            "kind": 8417,
            "name": {
                "kind": 196712,
                "text": "T",
                "rawText": "T",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 400,
                "end": 402
            },
            "type": {
                "kind": 8287,
                "typeParameters": {
                    "kind": 134226153,
                    "typeParameterList": [],
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 406,
                    "end": 406
                },
                "parameters": {
                    "kind": 134226095,
                    "parameterList": [
                        {
                            "kind": 134226094,
                            "ellipsis": false,
                            "binding": {
                                "kind": 131102,
                                "text": "arg",
                                "rawText": "arg",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1025,
                                "start": 422,
                                "end": 425
                            },
                            "isOptional": false,
                            "type": null,
                            "initializer": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1,
                            "start": 422,
                            "end": 425
                        }
                    ],
                    "trailingcomma": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 422,
                    "end": 425
                },
                "returnType": {
                    "kind": 4202498,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 429,
                    "end": 433
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 404,
                "end": 433
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 395,
            "end": 434
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 434
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

