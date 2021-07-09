# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/yield/gen/function_declaration
> :: test: function declaration
> :: case: var o = { *gf() { switch (1) { case yield: break; } } }
## Options

`````js
{}
`````
## Input

`````js
function not_gen() { var o = { *gf() { switch (1) { case yield: break; } } } }}
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
                                            "text": "o",
                                            "rawText": "o",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 24,
                                            "end": 26
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 351,
                                                        "asyncKeyword": null,
                                                        "asteriskToken": {
                                                            "kind": 67143222,
                                                            "flags": 64,
                                                            "transformFlags": 32,
                                                            "start": 30,
                                                            "end": 32
                                                        },
                                                        "getKeyword": null,
                                                        "setKeyword": null,
                                                        "method": {
                                                            "kind": 209,
                                                            "name": {
                                                                "kind": 134299649,
                                                                "text": "gf",
                                                                "rawText": "gf",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 32,
                                                                "end": 34
                                                            },
                                                            "typeParameters": null,
                                                            "formalParameterList": {
                                                                "kind": 214,
                                                                "formalParameters": [],
                                                                "trailingComma": false,
                                                                "flags": 160,
                                                                "transformFlags": 0,
                                                                "start": 35,
                                                                "end": 36
                                                            },
                                                            "returnType": null,
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
                                                                                "start": 38,
                                                                                "end": 45
                                                                            },
                                                                            "expression": {
                                                                                "kind": 201392130,
                                                                                "text": 1,
                                                                                "rawText": "1",
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 47,
                                                                                "end": 48
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
                                                                                            "start": 51,
                                                                                            "end": 56
                                                                                        },
                                                                                        "expression": {
                                                                                            "kind": 229,
                                                                                            "yieldKeyword": {
                                                                                                "kind": 8454253,
                                                                                                "flags": 64,
                                                                                                "transformFlags": 0,
                                                                                                "start": 56,
                                                                                                "end": 62
                                                                                            },
                                                                                            "delegate": false,
                                                                                            "asteriskToken": null,
                                                                                            "expression": null,
                                                                                            "flags": 32,
                                                                                            "transformFlags": 4096,
                                                                                            "start": 56,
                                                                                            "end": 62
                                                                                        },
                                                                                        "colonToken": {
                                                                                            "kind": 21,
                                                                                            "flags": 64,
                                                                                            "transformFlags": 0,
                                                                                            "start": 62,
                                                                                            "end": 63
                                                                                        },
                                                                                        "statements": [
                                                                                            {
                                                                                                "kind": 150,
                                                                                                "breakKeyword": {
                                                                                                    "kind": 37757005,
                                                                                                    "flags": 80,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 63,
                                                                                                    "end": 69
                                                                                                },
                                                                                                "label": null,
                                                                                                "flags": 16,
                                                                                                "transformFlags": 0,
                                                                                                "start": 63,
                                                                                                "end": 70
                                                                                            }
                                                                                        ],
                                                                                        "flags": 16,
                                                                                        "transformFlags": 0,
                                                                                        "start": 51,
                                                                                        "end": 70
                                                                                    }
                                                                                ],
                                                                                "flags": 16,
                                                                                "transformFlags": 0,
                                                                                "start": 51,
                                                                                "end": 70
                                                                            },
                                                                            "flags": 80,
                                                                            "transformFlags": 0,
                                                                            "start": 38,
                                                                            "end": 72
                                                                        }
                                                                    ],
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 38,
                                                                    "end": 72
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 36,
                                                                "end": 74
                                                            },
                                                            "flags": 160,
                                                            "transformFlags": 0,
                                                            "start": 34,
                                                            "end": 74
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 30,
                                                        "end": 74
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 30,
                                                "end": 74
                                            },
                                            "flags": 48,
                                            "transformFlags": 8,
                                            "start": 28,
                                            "end": 76
                                        },
                                        "flags": 16,
                                        "transformFlags": 4224,
                                        "start": 24,
                                        "end": 76
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 76
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 76
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 76
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 18,
                "end": 78
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 78
        }
    ],
    "isModule": false,
    "source": "function not_gen() { var o = { *gf() { switch (1) { case yield: break; } } } }}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 79
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 78, end: 79

```

