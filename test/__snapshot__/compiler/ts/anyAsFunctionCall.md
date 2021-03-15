# Kataw parser test case

## Input

`````js
var x: any;
var a = x();
var b = x('hello');
var c = x(x);

//// [anyAsFunctionCall.js]
// any is considered an untyped function call
// can be called except with type arguments which is an error
var x;
var a = x();
var b = x('hello');
var c = x(x);
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "var x: any;\nvar a = x();\nvar b = x('hello');\nvar c = x(x);\n\n//// [anyAsFunctionCall.js]\n// any is considered an untyped function call\n// can be called except with type arguments which is an error\nvar x;\nvar a = x();\nvar b = x('hello');\nvar c = x(x);",
    "filename": "",
    "statements": [
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 3,
                            "end": 5
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 4202498,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 6,
                            "end": 10
                        },
                        "initializer": null,
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 10
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 10
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 11
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
                            "text": "a",
                            "rawText": "a",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 15,
                            "end": 17
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 1073807915,
                            "expression": {
                                "kind": 196712,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 21
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 23,
                                "end": 23
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 23
                        },
                        "flags": 15,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 23
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 15,
                "end": 23
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 11,
            "end": 24
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
                            "text": "b",
                            "rawText": "b",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 28,
                            "end": 30
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 1073807915,
                            "expression": {
                                "kind": 196712,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 34
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [
                                    {
                                        "kind": 4261583,
                                        "text": "hello",
                                        "rawText": "hello",
                                        "flags": 33554432,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 35,
                                        "end": 42
                                    }
                                ],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 42,
                                "end": 43
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 34,
                            "end": 43
                        },
                        "flags": 28,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 43
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 28,
                "end": 43
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 24,
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
                            "text": "c",
                            "rawText": "c",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 48,
                            "end": 50
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 1073807915,
                            "expression": {
                                "kind": 196712,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 52,
                                "end": 54
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [
                                    {
                                        "kind": 196712,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 55,
                                        "end": 56
                                    }
                                ],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 56,
                                "end": 57
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 54,
                            "end": 57
                        },
                        "flags": 48,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 57
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 48,
                "end": 57
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 44,
            "end": 58
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
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 199,
                            "end": 201
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "flags": 199,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 201
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 199,
                "end": 201
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 58,
            "end": 202
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
                            "text": "a",
                            "rawText": "a",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 206,
                            "end": 208
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 1073807915,
                            "expression": {
                                "kind": 196712,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 210,
                                "end": 212
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 214,
                                "end": 214
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 212,
                            "end": 214
                        },
                        "flags": 206,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 214
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 206,
                "end": 214
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 202,
            "end": 215
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
                            "text": "b",
                            "rawText": "b",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 219,
                            "end": 221
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 1073807915,
                            "expression": {
                                "kind": 196712,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 223,
                                "end": 225
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [
                                    {
                                        "kind": 4261583,
                                        "text": "hello",
                                        "rawText": "hello",
                                        "flags": 33554432,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 226,
                                        "end": 233
                                    }
                                ],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 233,
                                "end": 234
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 225,
                            "end": 234
                        },
                        "flags": 219,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 234
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 219,
                "end": 234
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 215,
            "end": 235
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
                            "text": "c",
                            "rawText": "c",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 239,
                            "end": 241
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 1073807915,
                            "expression": {
                                "kind": 196712,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 243,
                                "end": 245
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [
                                    {
                                        "kind": 196712,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 246,
                                        "end": 247
                                    }
                                ],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 247,
                                "end": 248
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 245,
                            "end": 248
                        },
                        "flags": 239,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 248
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 239,
                "end": 248
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 235,
            "end": 249
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
    "end": 249
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

