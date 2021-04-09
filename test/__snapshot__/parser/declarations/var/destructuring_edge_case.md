# Kataw parser test case

## Input

`````js
var {[2]: y} = {2:3}
`````

## Options

### Parser Options

`````js
{}
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
                                        "kind": 204,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 81921,
                                                "value": 2,
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 6,
                                                "end": 7
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 5,
                                            "end": 8
                                        },
                                        "value": {
                                            "kind": 203,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 81921,
                                                "value": "y",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 9,
                                                "end": 11
                                            },
                                            "initializer": null,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 9,
                                            "end": 11
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 5,
                                        "end": 11
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 5,
                                "end": 11
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 3,
                            "end": 12
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 81921,
                                            "value": 3,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 18,
                                            "end": 19
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": 2,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 16,
                                            "end": 17
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 16,
                                        "end": 19
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 16,
                                "end": 19
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 14,
                            "end": 20
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 3,
                        "end": 20
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 3,
                "end": 20
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "var {[2]: y} = {2:3}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

