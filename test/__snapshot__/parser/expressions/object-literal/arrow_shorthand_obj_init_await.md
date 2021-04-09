# Kataw parser test case

## Input

`````js
(function({x, ...y}) { })
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncToken": null,
                    "generatorToken": null,
                    "name": null,
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [
                            {
                                "kind": 215,
                                "ellipsisToken": null,
                                "binding": {
                                    "kind": 212,
                                    "propertyList": {
                                        "kind": 213,
                                        "properties": [
                                            {
                                                "kind": 222,
                                                "ellipsisToken": null,
                                                "left": {
                                                    "kind": 81921,
                                                    "value": "x",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 11,
                                                    "end": 12
                                                },
                                                "right": null,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 11,
                                                "end": 12
                                            },
                                            {
                                                "kind": 222,
                                                "ellipsisToken": {
                                                    "kind": 524302,
                                                    "autofix": 0,
                                                    "flags": 0,
                                                    "start": 13,
                                                    "end": 17
                                                },
                                                "left": {
                                                    "kind": 81921,
                                                    "value": "y",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 13,
                                                    "end": 18
                                                },
                                                "right": null,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 13,
                                                "end": 18
                                            }
                                        ],
                                        "multiline": false,
                                        "trailingComma": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 11,
                                        "end": 18
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 10,
                                    "end": 19
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "autofix": 0,
                                "flags": 256,
                                "start": 10,
                                "end": 19
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 10,
                        "end": 20
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "statements": [],
                            "multiline": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 22,
                            "end": 22
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 20,
                        "end": 24
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 24
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 25
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "text": "(function({x, ...y}) { })",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 25
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

