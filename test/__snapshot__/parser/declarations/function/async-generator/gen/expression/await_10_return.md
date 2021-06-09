# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/declarations/function/async-generator/autogen.md
- Path: kataw8/test\__snapshot__\parser\declarations\function\async-generator\gen\expression
> :: test: expression
> :: case: await 10; return
## Input

`````js
({ async * gen () {await 10; return} })
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
                                                        "kind": 208,
                                                        "awaitKeyword": {
                                                            "kind": 82196,
                                                            "flags": 64,
                                                            "start": 19,
                                                            "end": 24
                                                        },
                                                        "expression": {
                                                            "kind": 201392130,
                                                            "text": 10,
                                                            "rawText": "10",
                                                            "flags": 96,
                                                            "start": 24,
                                                            "end": 27
                                                        },
                                                        "flags": 32,
                                                        "start": 19,
                                                        "end": 27
                                                    },
                                                    "flags": 16,
                                                    "start": 19,
                                                    "end": 28
                                                },
                                                {
                                                    "kind": 161,
                                                    "returnKeyword": {
                                                        "kind": 37757022,
                                                        "flags": 80,
                                                        "start": 28,
                                                        "end": 35
                                                    },
                                                    "expression": null,
                                                    "flags": 16,
                                                    "start": 0,
                                                    "end": 28
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 19,
                                            "end": 35
                                        },
                                        "flags": 32,
                                        "start": 17,
                                        "end": 36
                                    },
                                    "flags": 416,
                                    "start": 14,
                                    "end": 36
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 36
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 36
                    },
                    "flags": 48,
                    "start": 1,
                    "end": 38
                },
                "flags": 32,
                "start": 0,
                "end": 39
            },
            "flags": 16,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "({ async * gen () {await 10; return} })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript

({ * async gen() {
    await 10;
    return ;
  } });
```

### Diagnostics

```javascript
✔ No errors
```

