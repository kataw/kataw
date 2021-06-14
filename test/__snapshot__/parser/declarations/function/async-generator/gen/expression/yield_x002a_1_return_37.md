# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/declarations/function/async-generator/autogen.md
- Path: kataw/test/__snapshot__/parser/declarations/function/async-generator/gen/expression
> :: test: expression
> :: case: yield * 1; return 37
## Options

`````js
{}
`````
## Input

`````js
({ async * gen () {yield * 1; return 37} })
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
                                "kind": 257,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 352,
                                    "start": 2,
                                    "end": 8
                                },
                                "generatorToken": {
                                    "kind": 67143222,
                                    "flags": 64,
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
                                        "start": 10,
                                        "end": 14
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 416,
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
                                                        "kind": 229,
                                                        "yieldKeyword": {
                                                            "kind": 8454253,
                                                            "flags": 64,
                                                            "start": 19,
                                                            "end": 24
                                                        },
                                                        "delegate": true,
                                                        "asteriskToken": {
                                                            "kind": 67143222,
                                                            "flags": 64,
                                                            "start": 24,
                                                            "end": 26
                                                        },
                                                        "expression": {
                                                            "kind": 201392130,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 96,
                                                            "start": 26,
                                                            "end": 28
                                                        },
                                                        "flags": 32,
                                                        "start": 19,
                                                        "end": 28
                                                    },
                                                    "flags": 16,
                                                    "start": 19,
                                                    "end": 29
                                                },
                                                {
                                                    "kind": 161,
                                                    "returnKeyword": {
                                                        "kind": 37757022,
                                                        "flags": 80,
                                                        "start": 29,
                                                        "end": 36
                                                    },
                                                    "expression": {
                                                        "kind": 201392130,
                                                        "text": 37,
                                                        "rawText": "37",
                                                        "flags": 96,
                                                        "start": 36,
                                                        "end": 39
                                                    },
                                                    "flags": 80,
                                                    "start": 29,
                                                    "end": 39
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 19,
                                            "end": 39
                                        },
                                        "flags": 32,
                                        "start": 17,
                                        "end": 40
                                    },
                                    "flags": 416,
                                    "start": 14,
                                    "end": 40
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 40
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 40
                    },
                    "flags": 48,
                    "start": 1,
                    "end": 42
                },
                "flags": 32,
                "start": 0,
                "end": 43
            },
            "flags": 16,
            "start": 0,
            "end": 43
        }
    ],
    "isModule": false,
    "source": "({ async * gen () {yield * 1; return 37} })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript

({ * async gen() {
    yield * 1;
    return  37;
  } });
```

### Diagnostics

```javascript
✔ No errors
```

