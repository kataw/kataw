# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
var vals = { x: 23 };

result = { x: x[yield] } = vals;
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
                            "kind": 81921,
                            "value": "vals",
                            "autofix": 0,
                            "flags": 768,
                            "start": 3,
                            "end": 8
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
                                            "value": 23,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 15,
                                            "end": 18
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 12,
                                            "end": 14
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 12,
                                        "end": 18
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 12,
                                "end": 18
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 10,
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
            "end": 21
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "result",
                    "autofix": 0,
                    "flags": 768,
                    "start": 21,
                    "end": 29
                },
                "operatorToken": {
                    "kind": 268501004,
                    "autofix": 0,
                    "flags": 0,
                    "start": 21,
                    "end": 31
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 36,
                                            "end": 38
                                        },
                                        "expression": {
                                            "kind": 81921,
                                            "value": "yield",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 39,
                                            "end": 44
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 33,
                                        "end": 45
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 33,
                                        "end": 35
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 33,
                                    "end": 45
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 33,
                            "end": 45
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 31,
                        "end": 47
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 47,
                        "end": 49
                    },
                    "right": {
                        "kind": 81921,
                        "value": "vals",
                        "autofix": 0,
                        "flags": 768,
                        "start": 49,
                        "end": 54
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 31,
                    "end": 54
                },
                "autofix": 0,
                "flags": 256,
                "start": 21,
                "end": 54
            },
            "autofix": 0,
            "flags": 128,
            "start": 21,
            "end": 55
        }
    ],
    "isModule": false,
    "text": "var vals = { x: 23 };\n\nresult = { x: x[yield] } = vals;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 55
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

