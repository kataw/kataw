# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: method-gen
> :: case: yield
## Input

`````js
({*yield(x, y) {}});
`````

## Output

### Hybrid CST

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
                                "kind": 209,
                                "name": {
                                    "kind": 81921,
                                    "text": "yield",
                                    "rawText": "yield",
                                    "flags": 768,
                                    "start": 3,
                                    "end": 8
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 81921,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 768,
                                                "start": 9,
                                                "end": 10
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 256,
                                            "start": 9,
                                            "end": 10
                                        },
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 81921,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 768,
                                                "start": 11,
                                                "end": 13
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 256,
                                            "start": 11,
                                            "end": 13
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 1280,
                                    "start": 9,
                                    "end": 14
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 16,
                                        "end": 16
                                    },
                                    "flags": 256,
                                    "start": 14,
                                    "end": 17
                                },
                                "flags": 1280,
                                "start": 8,
                                "end": 17
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 2,
                        "end": 17
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 18
                },
                "flags": 256,
                "start": 0,
                "end": 19
            },
            "flags": 128,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "({*yield(x, y) {}});",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: method-gen
> :: case: yield
## Input

`````js
({*yield(x, y) {}});
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: method-gen
> :: case: yield
## Input

`````js
({*yield(x, y) {}});
`````
```

