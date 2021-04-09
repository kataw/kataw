# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
var x;

var result;
var vals = [[1]];

result = [[x]] = vals;
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
                            "value": "x",
                            "autofix": 0,
                            "flags": 768,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "autofix": 0,
                        "flags": 128,
                        "start": 3,
                        "end": 5
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 3,
                "end": 5
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 6
        },
        {
            "kind": 155,
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 81921,
                            "value": "result",
                            "autofix": 0,
                            "flags": 768,
                            "start": 11,
                            "end": 18
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "autofix": 0,
                        "flags": 128,
                        "start": 11,
                        "end": 18
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 11,
                "end": 18
            },
            "autofix": 0,
            "flags": 128,
            "start": 6,
            "end": 19
        },
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
                            "start": 23,
                            "end": 28
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 81921,
                                                    "value": 1,
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 33,
                                                    "end": 34
                                                }
                                            ],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 33,
                                            "end": 34
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 32,
                                        "end": 35
                                    }
                                ],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 32,
                                "end": 35
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 30,
                            "end": 36
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 23,
                        "end": 36
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 23,
                "end": 36
            },
            "autofix": 0,
            "flags": 128,
            "start": 19,
            "end": 37
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
                    "start": 37,
                    "end": 45
                },
                "operatorToken": {
                    "kind": 336003091,
                    "autofix": 0,
                    "flags": 0,
                    "start": 37,
                    "end": 47
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 81921,
                                                "value": "x",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 50,
                                                "end": 51
                                            }
                                        ],
                                        "trailingComma": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 50,
                                        "end": 51
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 49,
                                    "end": 52
                                }
                            ],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 49,
                            "end": 52
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 47,
                        "end": 53
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 53,
                        "end": 55
                    },
                    "right": {
                        "kind": 81921,
                        "value": "vals",
                        "autofix": 0,
                        "flags": 768,
                        "start": 55,
                        "end": 60
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 47,
                    "end": 60
                },
                "autofix": 0,
                "flags": 256,
                "start": 37,
                "end": 60
            },
            "autofix": 0,
            "flags": 128,
            "start": 37,
            "end": 61
        }
    ],
    "isModule": false,
    "text": "var x;\n\nvar result;\nvar vals = [[1]];\n\nresult = [[x]] = vals;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 61
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

