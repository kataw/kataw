# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-30
- From: kataw7/test\__snapshot__/parser/expressions/super/autogen.md
- Path: kataw7/test\__snapshot__\parser\expressions\super\gen\obj-expr-get
> :: test: obj-expr-get
> :: case: new super();
## Input

`````js
({ get x() { new super(); } })
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
                                "asyncKeyword": null,
                                "generatorToken": null,
                                "getKeyword": {
                                    "kind": 16498,
                                    "flags": 64,
                                    "start": 2,
                                    "end": 6
                                },
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 6,
                                        "end": 8
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 1056,
                                        "start": 9,
                                        "end": 10
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
                                                        "kind": 210,
                                                        "newKeyword": {
                                                            "kind": 138477661,
                                                            "flags": 96,
                                                            "start": 12,
                                                            "end": 16
                                                        },
                                                        "expression": {
                                                            "kind": 225,
                                                            "superKeyword": {
                                                                "kind": 4259935,
                                                                "flags": 96,
                                                                "start": 16,
                                                                "end": 22
                                                            },
                                                            "flags": 96,
                                                            "start": 16,
                                                            "end": 22
                                                        },
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 23,
                                                            "end": 23
                                                        },
                                                        "flags": 32,
                                                        "start": 12,
                                                        "end": 24
                                                    },
                                                    "flags": 16,
                                                    "start": 12,
                                                    "end": 25
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 12,
                                            "end": 25
                                        },
                                        "flags": 32,
                                        "start": 10,
                                        "end": 27
                                    },
                                    "flags": 1056,
                                    "start": 8,
                                    "end": 27
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 27
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 27
                    },
                    "flags": 48,
                    "start": 1,
                    "end": 29
                },
                "flags": 32,
                "start": 0,
                "end": 30
            },
            "flags": 16,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "({ get x() { new super(); } })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 16, end: 23

```

