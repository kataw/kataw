# Kataw parser test case

## Input

`````js
function foo(/*c1*/ x: any, /*d1*/ y: any,/*e1*/w?: any) { }
var a, b: any;
foo(/*c2*/ 1, /*d2*/ 1 + 2, /*e1*/ a + b);
foo(/*c3*/ function () { }, /*d2*/() => { }, /*e2*/ a + /*e3*/ b);
foo(/*c3*/ function () { }, /*d3*/() => { }, /*e3*/(a + b));
foo(
    /*c4*/ function () { },
    /*d4*/() => { },
    /*e4*/
    /*e5*/ "hello");
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "function foo(/*c1*/ x: any, /*d1*/ y: any,/*e1*/w?: any) { }\nvar a, b: any;\nfoo(/*c2*/ 1, /*d2*/ 1 + 2, /*e1*/ a + b);\nfoo(/*c3*/ function () { }, /*d2*/() => { }, /*e2*/ a + /*e3*/ b);\nfoo(/*c3*/ function () { }, /*d3*/() => { }, /*e3*/(a + b));\nfoo(\n    /*c4*/ function () { },\n    /*d4*/() => { },\n    /*e4*/\n    /*e5*/ \"hello\");",
    "filename": "",
    "statements": [
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "foo",
                "rawText": "foo",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 8,
                "end": 12
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 13,
                            "end": 21
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 4202498,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 22,
                            "end": 26
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 13,
                        "end": 26
                    },
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "y",
                            "rawText": "y",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 27,
                            "end": 36
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 4202498,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 37,
                            "end": 41
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 27,
                        "end": 41
                    },
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "w",
                            "rawText": "w",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 42,
                            "end": 49
                        },
                        "isOptional": true,
                        "type": {
                            "kind": 4202498,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 51,
                            "end": 55
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 42,
                        "end": 55
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 13,
                "end": 56
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
                    "start": 58,
                    "end": 58
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 56,
                "end": 60
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 256,
            "start": 0,
            "end": 60
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
                            "start": 64,
                            "end": 66
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "flags": 64,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 66
                    },
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "b",
                            "rawText": "b",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 67,
                            "end": 69
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 4202498,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 70,
                            "end": 74
                        },
                        "initializer": null,
                        "flags": 67,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 74
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 64,
                "end": 74
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 60,
            "end": 75
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 75,
                    "end": 79
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 4261540,
                            "text": 1,
                            "rawText": "1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 80,
                            "end": 88
                        },
                        {
                            "kind": 65563,
                            "left": {
                                "kind": 4261540,
                                "text": 1,
                                "rawText": "1",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 89,
                                "end": 98
                            },
                            "operator": "+",
                            "right": {
                                "kind": 4261540,
                                "text": 2,
                                "rawText": "2",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 100,
                                "end": 102
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 89,
                            "end": 102
                        },
                        {
                            "kind": 65563,
                            "left": {
                                "kind": 196712,
                                "text": "a",
                                "rawText": "a",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 103,
                                "end": 112
                            },
                            "operator": "+",
                            "right": {
                                "kind": 196712,
                                "text": "b",
                                "rawText": "b",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 114,
                                "end": 116
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 103,
                            "end": 116
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 88,
                    "end": 117
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 79,
                "end": 117
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 75,
            "end": 118
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 118,
                    "end": 122
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 8456285,
                            "name": null,
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 140,
                                "end": 141
                            },
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 143,
                                    "end": 143
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 141,
                                "end": 145
                            },
                            "typeParameters": null,
                            "type": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 123,
                            "end": 145
                        },
                        {
                            "kind": 83976,
                            "typeParameters": null,
                            "arrowParameters": {
                                "kind": 81929,
                                "elements": [],
                                "type": null,
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 146,
                                "end": 146
                            },
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 160,
                                    "end": 160
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 158,
                                "end": 162
                            },
                            "flags": 1073741824,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 146,
                            "end": 162
                        },
                        {
                            "kind": 65563,
                            "left": {
                                "kind": 196712,
                                "text": "a",
                                "rawText": "a",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 163,
                                "end": 172
                            },
                            "operator": "+",
                            "right": {
                                "kind": 196712,
                                "text": "b",
                                "rawText": "b",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 174,
                                "end": 183
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 163,
                            "end": 183
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 138,
                    "end": 184
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 122,
                "end": 184
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 118,
            "end": 185
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 185,
                    "end": 189
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 8456285,
                            "name": null,
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 207,
                                "end": 208
                            },
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 210,
                                    "end": 210
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 208,
                                "end": 212
                            },
                            "typeParameters": null,
                            "type": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 190,
                            "end": 212
                        },
                        {
                            "kind": 83976,
                            "typeParameters": null,
                            "arrowParameters": {
                                "kind": 81929,
                                "elements": [],
                                "type": null,
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 213,
                                "end": 213
                            },
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 227,
                                    "end": 227
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 225,
                                "end": 229
                            },
                            "flags": 1073741824,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 213,
                            "end": 229
                        },
                        {
                            "kind": 66224,
                            "expression": {
                                "kind": 65563,
                                "left": {
                                    "kind": 196712,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 238,
                                    "end": 239
                                },
                                "operator": "+",
                                "right": {
                                    "kind": 196712,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 241,
                                    "end": 243
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 230,
                                "end": 243
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 230,
                            "end": 244
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 205,
                    "end": 245
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 189,
                "end": 245
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 185,
            "end": 246
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 246,
                    "end": 250
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 8456285,
                            "name": null,
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 273,
                                "end": 274
                            },
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 276,
                                    "end": 276
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 274,
                                "end": 278
                            },
                            "typeParameters": null,
                            "type": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 251,
                            "end": 278
                        },
                        {
                            "kind": 83976,
                            "typeParameters": null,
                            "arrowParameters": {
                                "kind": 81929,
                                "elements": [],
                                "type": null,
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 279,
                                "end": 279
                            },
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 297,
                                    "end": 297
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 295,
                                "end": 299
                            },
                            "flags": 1073741824,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 279,
                            "end": 299
                        },
                        {
                            "kind": 4261583,
                            "text": "hello",
                            "rawText": "hello",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 300,
                            "end": 330
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 271,
                    "end": 331
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 250,
                "end": 331
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 246,
            "end": 332
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
    "end": 332
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

