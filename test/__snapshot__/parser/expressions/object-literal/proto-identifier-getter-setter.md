# Kataw parser test case

## Input

`````js
({ __proto__: null, get __proto__(){}, set __proto__(x){} })
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
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "left": {
                                    "kind": 269,
                                    "value": null,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 13,
                                    "end": 18
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "__proto__",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 2,
                                    "end": 12
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 2,
                                "end": 18
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 81921,
                                    "value": "__proto__",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 23,
                                    "end": 33
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 34,
                                    "end": 35
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "statements": [],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 36,
                                        "end": 36
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 35,
                                    "end": 37
                                },
                                "autofix": 0,
                                "flags": 8448,
                                "start": 33,
                                "end": 37
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 81921,
                                    "value": "__proto__",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 42,
                                    "end": 52
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
                                                "value": "x",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 53,
                                                "end": 54
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 53,
                                            "end": 54
                                        }
                                    ],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 53,
                                    "end": 55
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "statements": [],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 56,
                                        "end": 56
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 55,
                                    "end": 57
                                },
                                "autofix": 0,
                                "flags": 4352,
                                "start": 52,
                                "end": 57
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 2,
                        "end": 57
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 59
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 60
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 60
        }
    ],
    "isModule": false,
    "text": "({ __proto__: null, get __proto__(){}, set __proto__(x){} })",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 60
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

