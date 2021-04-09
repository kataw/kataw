# Kataw parser test case

## Input

`````js
var {x = 10, y: { z = 10}} = a;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 155,
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
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
                                            "start": 5,
                                            "end": 6
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": 10,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 8,
                                            "end": 11
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 5,
                                        "end": 11
                                    },
                                    {
                                        "kind": 204,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 81921,
                                            "value": "y",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 12,
                                            "end": 15
                                        },
                                        "value": {
                                            "kind": 203,
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
                                                                "value": "z",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 17,
                                                                "end": 19
                                                            },
                                                            "right": {
                                                                "kind": 81921,
                                                                "value": 10,
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 21,
                                                                "end": 24
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 17,
                                                            "end": 24
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "trailingComma": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 17,
                                                    "end": 24
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 15,
                                                "end": 25
                                            },
                                            "initializer": null,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 15,
                                            "end": 25
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 12,
                                        "end": 25
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 5,
                                "end": 25
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 3,
                            "end": 26
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 81921,
                            "value": "a",
                            "autofix": 0,
                            "flags": 768,
                            "start": 28,
                            "end": 30
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 3,
                        "end": 30
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 3,
                "end": 30
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "text": "var {x = 10, y: { z = 10}} = a;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

