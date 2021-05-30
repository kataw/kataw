# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-30
- From: kataw7/test\__snapshot__/parser/expressions/await/async-await-errors/autogen.md
- Path: kataw7/test\__snapshot__\parser\expressions\await\async-await-errors\gen\stand_alone
> :: test: stand alone
> :: case: ar O = { async method(x = await 1) { return x; } };
## Input

`````js
ar O = { async method(x = await 1) { return x; } };
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
                "kind": 134299649,
                "text": "ar",
                "rawText": "ar",
                "flags": 96,
                "start": 0,
                "end": 2
            },
            "flags": 16,
            "start": 0,
            "end": 2
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "O",
                    "rawText": "O",
                    "flags": 96,
                    "start": 2,
                    "end": 4
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 4,
                    "end": 6
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 257,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "start": 8,
                                    "end": 14
                                },
                                "generatorToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "method",
                                        "rawText": "method",
                                        "flags": 96,
                                        "start": 14,
                                        "end": 21
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [
                                            {
                                                "kind": 203,
                                                "ellipsisToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 22,
                                                    "end": 23
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "right": {
                                                    "kind": 208,
                                                    "awaitKeyword": {
                                                        "kind": 82196,
                                                        "flags": 64,
                                                        "start": 25,
                                                        "end": 31
                                                    },
                                                    "expression": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "start": 31,
                                                        "end": 33
                                                    },
                                                    "flags": 32,
                                                    "start": 25,
                                                    "end": 33
                                                },
                                                "flags": 34,
                                                "start": 22,
                                                "end": 33
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 290,
                                        "start": 22,
                                        "end": 34
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [
                                                {
                                                    "kind": 161,
                                                    "returnKeyword": {
                                                        "kind": 37757022,
                                                        "flags": 80,
                                                        "start": 36,
                                                        "end": 43
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 43,
                                                        "end": 45
                                                    },
                                                    "flags": 16,
                                                    "start": 0,
                                                    "end": 36
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 36,
                                            "end": 46
                                        },
                                        "flags": 32,
                                        "start": 34,
                                        "end": 48
                                    },
                                    "flags": 288,
                                    "start": 21,
                                    "end": 48
                                },
                                "flags": 32,
                                "start": 8,
                                "end": 48
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 8,
                        "end": 48
                    },
                    "flags": 48,
                    "start": 6,
                    "end": 50
                },
                "flags": 32,
                "start": 2,
                "end": 50
            },
            "flags": 16,
            "start": 2,
            "end": 51
        }
    ],
    "isModule": false,
    "source": "ar O = { async method(x = await 1) { return x; } };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 51
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 2, end: 4
✖ `await` expression cannot be used in function parameters - start: 25, end: 31

```

