# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/yield/gen/function_declaration
> :: test: function declaration
> :: case: var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } }
## Options

`````js
{}
`````
## Input

`````js
function not_gen() { var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } } }}
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
                "text": "not_gen",
                "rawText": "not_gen",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 16
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 17,
                "end": 17
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
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 24
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "gfe",
                                            "rawText": "gfe",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 24,
                                            "end": 28
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 177,
                                            "asyncKeyword": null,
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 30,
                                                "end": 39
                                            },
                                            "asteriskToken": {
                                                "kind": 201360950,
                                                "flags": 64,
                                                "transformFlags": 32,
                                                "start": 39,
                                                "end": 40
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "rgfe",
                                                "rawText": "rgfe",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 40,
                                                "end": 45
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 46,
                                                "end": 46
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [
                                                        {
                                                            "kind": 160,
                                                            "switchKeyword": {
                                                                "kind": 37757024,
                                                                "flags": 80,
                                                                "transformFlags": 0,
                                                                "start": 49,
                                                                "end": 56
                                                            },
                                                            "expression": {
                                                                "kind": 201392130,
                                                                "text": 1,
                                                                "rawText": "1",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 58,
                                                                "end": 59
                                                            },
                                                            "caseBlock": {
                                                                "kind": 152,
                                                                "clauses": [
                                                                    {
                                                                        "kind": 175,
                                                                        "caseKeyword": {
                                                                            "kind": 4194382,
                                                                            "flags": 80,
                                                                            "transformFlags": 0,
                                                                            "start": 62,
                                                                            "end": 67
                                                                        },
                                                                        "expression": {
                                                                            "kind": 229,
                                                                            "yieldKeyword": {
                                                                                "kind": 8454253,
                                                                                "flags": 64,
                                                                                "transformFlags": 0,
                                                                                "start": 67,
                                                                                "end": 73
                                                                            },
                                                                            "delegate": true,
                                                                            "asteriskToken": {
                                                                                "kind": 201360950,
                                                                                "flags": 64,
                                                                                "transformFlags": 32,
                                                                                "start": 73,
                                                                                "end": 74
                                                                            },
                                                                            "expression": {
                                                                                "kind": 201392131,
                                                                                "text": "foo",
                                                                                "rawText": "'foo'",
                                                                                "flags": 4194400,
                                                                                "transformFlags": 0,
                                                                                "start": 74,
                                                                                "end": 80
                                                                            },
                                                                            "flags": 32,
                                                                            "transformFlags": 4096,
                                                                            "start": 67,
                                                                            "end": 80
                                                                        },
                                                                        "colonToken": {
                                                                            "kind": 21,
                                                                            "flags": 64,
                                                                            "transformFlags": 0,
                                                                            "start": 80,
                                                                            "end": 81
                                                                        },
                                                                        "statements": [
                                                                            {
                                                                                "kind": 150,
                                                                                "breakKeyword": {
                                                                                    "kind": 37757005,
                                                                                    "flags": 80,
                                                                                    "transformFlags": 0,
                                                                                    "start": 81,
                                                                                    "end": 87
                                                                                },
                                                                                "label": null,
                                                                                "flags": 16,
                                                                                "transformFlags": 0,
                                                                                "start": 81,
                                                                                "end": 88
                                                                            }
                                                                        ],
                                                                        "flags": 16,
                                                                        "transformFlags": 0,
                                                                        "start": 62,
                                                                        "end": 88
                                                                    }
                                                                ],
                                                                "flags": 16,
                                                                "transformFlags": 0,
                                                                "start": 62,
                                                                "end": 88
                                                            },
                                                            "flags": 80,
                                                            "transformFlags": 0,
                                                            "start": 49,
                                                            "end": 90
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 49,
                                                    "end": 90
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 47,
                                                "end": 92
                                            },
                                            "returnType": null,
                                            "flags": 288,
                                            "transformFlags": 0,
                                            "start": 30,
                                            "end": 92
                                        },
                                        "flags": 16,
                                        "transformFlags": 4224,
                                        "start": 24,
                                        "end": 92
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 92
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 92
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 92
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 18,
                "end": 94
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 94
        }
    ],
    "isModule": false,
    "source": "function not_gen() { var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } } }}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 95
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 94, end: 95

```

