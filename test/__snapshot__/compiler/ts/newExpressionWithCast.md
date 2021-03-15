# Kataw parser test case

## Input

`````js
// @noimplicitany: true

function Test() { }
// valid but error with noImplicitAny
var test = new Test();

function Test2() { }
// parse error
var test2 = new <any>Test2();

function Test3() { }
// valid with noImplicitAny
var test3 = new (<any>Test3)();


`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "// @noimplicitany: true\n\nfunction Test() { }\n// valid but error with noImplicitAny\nvar test = new Test();\n\nfunction Test2() { }\n// parse error\nvar test2 = new <any>Test2();\n\nfunction Test3() { }\n// valid with noImplicitAny\nvar test3 = new (<any>Test3)();\n\n",
    "filename": "",
    "statements": [
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "Test",
                "rawText": "Test",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 33,
                "end": 38
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 39,
                "end": 40
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
                    "start": 42,
                    "end": 42
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 40,
                "end": 44
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 256,
            "start": 0,
            "end": 44
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "test",
                            "rawText": "test",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 86,
                            "end": 91
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 66204,
                            "expression": {
                                "kind": 196712,
                                "text": "Test",
                                "rawText": "Test",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 97,
                                "end": 102
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 103,
                                "end": 103
                            },
                            "flags": 93,
                            "symbol": null,
                            "transformFlags": 32,
                            "start": 0,
                            "end": 104
                        },
                        "flags": 86,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 104
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 86,
                "end": 104
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 44,
            "end": 105
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "Test2",
                "rawText": "Test2",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 115,
                "end": 121
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 122,
                "end": 123
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
                    "start": 125,
                    "end": 125
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 123,
                "end": 127
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 256,
            "start": 105,
            "end": 127
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "test2",
                            "rawText": "test2",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 146,
                            "end": 152
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 65563,
                            "left": {
                                "kind": 65563,
                                "left": {
                                    "kind": 66204,
                                    "expression": {
                                        "kind": 131322,
                                        "text": "",
                                        "flags": 3,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 158,
                                        "end": 158
                                    },
                                    "typeArguments": null,
                                    "argumentList": null,
                                    "flags": 154,
                                    "symbol": null,
                                    "transformFlags": 32,
                                    "start": 1,
                                    "end": 158
                                },
                                "operator": "<",
                                "right": {
                                    "kind": 196712,
                                    "text": "any",
                                    "rawText": "any",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 160,
                                    "end": 163
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 154,
                                "end": 163
                            },
                            "operator": ">",
                            "right": {
                                "kind": 1073807915,
                                "expression": {
                                    "kind": 196712,
                                    "text": "Test2",
                                    "rawText": "Test2",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 164,
                                    "end": 169
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 0,
                                    "symbol": null,
                                    "start": 171,
                                    "end": 171
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 169,
                                "end": 171
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 154,
                            "end": 171
                        },
                        "flags": 146,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 171
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 146,
                "end": 171
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 127,
            "end": 172
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "Test3",
                "rawText": "Test3",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 182,
                "end": 188
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 189,
                "end": 190
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
                    "start": 192,
                    "end": 192
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 190,
                "end": 194
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 256,
            "start": 172,
            "end": 194
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "test3",
                            "rawText": "test3",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 226,
                            "end": 232
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 66204,
                            "expression": {
                                "kind": 66224,
                                "expression": {
                                    "kind": 134291684,
                                    "type": {
                                        "kind": 4202498,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 241,
                                        "end": 244
                                    },
                                    "expression": {
                                        "kind": 196712,
                                        "text": "Test3",
                                        "rawText": "Test3",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 245,
                                        "end": 250
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 240,
                                    "end": 250
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 238,
                                "end": 251
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 252,
                                "end": 252
                            },
                            "flags": 234,
                            "symbol": null,
                            "transformFlags": 32,
                            "start": 0,
                            "end": 253
                        },
                        "flags": 226,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 253
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 226,
                "end": 253
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 194,
            "end": 254
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
    "end": 256
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

