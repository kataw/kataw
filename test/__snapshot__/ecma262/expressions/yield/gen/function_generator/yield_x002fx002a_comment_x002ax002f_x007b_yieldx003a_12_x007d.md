# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/yield/gen/function_generator
> :: test: function generator
> :: case: yield /* comment */ { yield: 12 }
## Options

`````js
{}
`````
## Input

`````js
function * gen() { function not_gen() { yield /* comment */ { yield: 12 } }}
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
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "transformFlags": 32,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "transformFlags": 0,
                "start": 10,
                "end": 14
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 15,
                "end": 15
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
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
                                "start": 18,
                                "end": 27
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "not_gen",
                                "rawText": "not_gen",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 27,
                                "end": 35
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 36
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
                                                "kind": 134299649,
                                                "text": "yield",
                                                "rawText": "yield",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 39,
                                                "end": 45
                                            },
                                            "flags": 16,
                                            "transformFlags": 4096,
                                            "start": 39,
                                            "end": 45
                                        },
                                        {
                                            "kind": 124,
                                            "block": {
                                                "kind": 249,
                                                "statements": [
                                                    {
                                                        "kind": 163,
                                                        "label": {
                                                            "kind": 134299649,
                                                            "text": "yield",
                                                            "rawText": "yield",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 61,
                                                            "end": 67
                                                        },
                                                        "colonToken": {
                                                            "kind": 21,
                                                            "flags": 64,
                                                            "transformFlags": 0,
                                                            "start": 67,
                                                            "end": 68
                                                        },
                                                        "statement": {
                                                            "kind": 120,
                                                            "expression": {
                                                                "kind": 201392130,
                                                                "text": 12,
                                                                "rawText": "12",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 68,
                                                                "end": 71
                                                            },
                                                            "flags": 16,
                                                            "transformFlags": 4096,
                                                            "start": 68,
                                                            "end": 71
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 61,
                                                        "end": 71
                                                    }
                                                ],
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 61,
                                                "end": 71
                                            },
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 45,
                                            "end": 73
                                        }
                                    ],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 39,
                                    "end": 73
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 37,
                                "end": 75
                            },
                            "returnType": null,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 75
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 75
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 16,
                "end": 76
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 0,
            "end": 76
        }
    ],
    "isModule": false,
    "source": "function * gen() { function not_gen() { yield /* comment */ { yield: 12 } }}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 76
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ '; ' expected - start: 45, end: 61

```

