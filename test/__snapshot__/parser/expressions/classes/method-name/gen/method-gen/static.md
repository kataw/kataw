# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: method-gen
> :: case: static
## Input

`````js
({*static(x, y) {}});
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
                                "generatorToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 2,
                                    "end": 3
                                },
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "static",
                                        "rawText": "static",
                                        "flags": 96,
                                        "start": 3,
                                        "end": 9
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [
                                            {
                                                "kind": 215,
                                                "ellipsisToken": null,
                                                "binding": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 10,
                                                    "end": 11
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 32,
                                                "start": 10,
                                                "end": 11
                                            },
                                            {
                                                "kind": 215,
                                                "ellipsisToken": null,
                                                "binding": {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 96,
                                                    "start": 12,
                                                    "end": 14
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 32,
                                                "start": 12,
                                                "end": 14
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 160,
                                        "start": 10,
                                        "end": 15
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 17,
                                            "end": 17
                                        },
                                        "flags": 32,
                                        "start": 15,
                                        "end": 18
                                    },
                                    "flags": 160,
                                    "start": 9,
                                    "end": 18
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 18
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 18
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 19
                },
                "flags": 32,
                "start": 0,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "({*static(x, y) {}});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

({  });
```

### Diagnostics

```javascript
✔ No errors
```

