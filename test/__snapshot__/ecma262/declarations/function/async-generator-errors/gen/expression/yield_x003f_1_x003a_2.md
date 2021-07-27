# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/function/async-generator-errors/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/function/async-generator-errors/gen/expression
> :: test: expression
> :: case: yield ? 1 : 2
## Options

`````js
{}
`````
## Input

`````js
({ async * gen () {yield ? 1 : 2} })
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 351,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 352,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 8
                                },
                                "asteriskToken": {
                                    "kind": 201360950,
                                    "flags": 64,
                                    "transformFlags": 32,
                                    "start": 8,
                                    "end": 10
                                },
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
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
                                        "flags": 416,
                                        "transformFlags": 0,
                                        "start": 16,
                                        "end": 17
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [
                                                {
                                                    "kind": 120,
                                                    "expression": {
                                                        "kind": 197,
                                                        "shortCircuit": {
                                                            "kind": 229,
                                                            "yieldKeyword": {
                                                                "kind": 8454253,
                                                                "flags": 64,
                                                                "transformFlags": 0,
                                                                "start": 19,
                                                                "end": 24
                                                            },
                                                            "delegate": false,
                                                            "asteriskToken": null,
                                                            "expression": null,
                                                            "flags": 32,
                                                            "transformFlags": 4096,
                                                            "start": 19,
                                                            "end": 24
                                                        },
                                                        "questionToken": {
                                                            "kind": 134217750,
                                                            "flags": 64,
                                                            "transformFlags": 0,
                                                            "start": 24,
                                                            "end": 26
                                                        },
                                                        "consequent": {
                                                            "kind": 201392130,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 26,
                                                            "end": 28
                                                        },
                                                        "colonToken": {
                                                            "kind": 21,
                                                            "flags": 64,
                                                            "transformFlags": 0,
                                                            "start": 28,
                                                            "end": 30
                                                        },
                                                        "alternate": {
                                                            "kind": 201392130,
                                                            "text": 2,
                                                            "rawText": "2",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 30,
                                                            "end": 32
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 4096,
                                                        "start": 19,
                                                        "end": 32
                                                    },
                                                    "flags": 16,
                                                    "transformFlags": 4096,
                                                    "start": 19,
                                                    "end": 32
                                                }
                                            ],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 19,
                                            "end": 32
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 17,
                                        "end": 33
                                    },
                                    "flags": 416,
                                    "transformFlags": 0,
                                    "start": 14,
                                    "end": 33
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 33
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 33
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 1,
                    "end": 35
                },
                "flags": 34,
                "transformFlags": 0,
                "start": 0,
                "end": 36
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "({ async * gen () {yield ? 1 : 2} })",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot use the 'yield' keyword on the left-hand side of conditional expression in a generator context - start: 19, end: 26

```

