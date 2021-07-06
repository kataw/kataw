# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: n
> :: test: expression
> :: case: await (yield 10); return 20
## Options

`````js
{}
`````
## Input

`````js
({ async * gen () {await (yield 10); return 20} })
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
                                    "kind": 67143222,
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
                                                        "kind": 208,
                                                        "awaitKeyword": {
                                                            "kind": 82196,
                                                            "flags": 64,
                                                            "transformFlags": 0,
                                                            "start": 19,
                                                            "end": 24
                                                        },
                                                        "expression": {
                                                            "kind": 121,
                                                            "expression": {
                                                                "kind": 229,
                                                                "yieldKeyword": {
                                                                    "kind": 8454253,
                                                                    "flags": 64,
                                                                    "transformFlags": 0,
                                                                    "start": 26,
                                                                    "end": 31
                                                                },
                                                                "delegate": false,
                                                                "asteriskToken": null,
                                                                "expression": {
                                                                    "kind": 201392130,
                                                                    "text": 10,
                                                                    "rawText": "10",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 31,
                                                                    "end": 34
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 26,
                                                                "end": 34
                                                            },
                                                            "flags": 24,
                                                            "transformFlags": 0,
                                                            "start": 32,
                                                            "end": 35
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 19,
                                                        "end": 35
                                                    },
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 19,
                                                    "end": 36
                                                },
                                                {
                                                    "kind": 161,
                                                    "returnKeyword": {
                                                        "kind": 37757022,
                                                        "flags": 80,
                                                        "transformFlags": 0,
                                                        "start": 36,
                                                        "end": 43
                                                    },
                                                    "expression": {
                                                        "kind": 201392130,
                                                        "text": 20,
                                                        "rawText": "20",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 43,
                                                        "end": 46
                                                    },
                                                    "flags": 80,
                                                    "transformFlags": 256,
                                                    "start": 36,
                                                    "end": 46
                                                }
                                            ],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 19,
                                            "end": 46
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 17,
                                        "end": 47
                                    },
                                    "flags": 416,
                                    "transformFlags": 0,
                                    "start": 14,
                                    "end": 47
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 47
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 47
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 1,
                    "end": 49
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 50
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": false,
    "source": "({ async * gen () {await (yield 10); return 20} })",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 50
}
```

### Printed

```javascript

({ async * gen() {
      await (yield 10);
      return 20;
    } });
```

### Diagnostics

```javascript
✔ No errors
```

