# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
var yield = 4;
var x;

var result;
var vals = [];

result = [ x = yield ] = vals;
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
                            "value": "yield",
                            "autofix": 0,
                            "flags": 768,
                            "start": 3,
                            "end": 9
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 81921,
                            "value": 4,
                            "autofix": 0,
                            "flags": 768,
                            "start": 11,
                            "end": 13
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 3,
                        "end": 13
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 3,
                "end": 13
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 14
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
                            "value": "x",
                            "autofix": 0,
                            "flags": 768,
                            "start": 18,
                            "end": 20
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "autofix": 0,
                        "flags": 128,
                        "start": 18,
                        "end": 20
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 18,
                "end": 20
            },
            "autofix": 0,
            "flags": 128,
            "start": 14,
            "end": 21
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
                            "start": 26,
                            "end": 33
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "autofix": 0,
                        "flags": 128,
                        "start": 26,
                        "end": 33
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 26,
                "end": 33
            },
            "autofix": 0,
            "flags": 128,
            "start": 21,
            "end": 34
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
                            "start": 38,
                            "end": 43
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 47,
                                "end": 47
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 45,
                            "end": 48
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 38,
                        "end": 48
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 38,
                "end": 48
            },
            "autofix": 0,
            "flags": 128,
            "start": 34,
            "end": 49
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
                    "start": 49,
                    "end": 57
                },
                "operatorToken": {
                    "kind": 336003091,
                    "autofix": 0,
                    "flags": 0,
                    "start": 49,
                    "end": 59
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 125,
                                    "left": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 61,
                                        "end": 63
                                    },
                                    "operatorToken": {
                                        "kind": 8454253,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 61,
                                        "end": 65
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "yield",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 65,
                                        "end": 71
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 61,
                                    "end": 71
                                }
                            ],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 61,
                            "end": 71
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 59,
                        "end": 73
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 73,
                        "end": 75
                    },
                    "right": {
                        "kind": 81921,
                        "value": "vals",
                        "autofix": 0,
                        "flags": 768,
                        "start": 75,
                        "end": 80
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 59,
                    "end": 80
                },
                "autofix": 0,
                "flags": 256,
                "start": 49,
                "end": 80
            },
            "autofix": 0,
            "flags": 128,
            "start": 49,
            "end": 81
        }
    ],
    "isModule": true,
    "text": "var yield = 4;\nvar x;\n\nvar result;\nvar vals = [];\n\nresult = [ x = yield ] = vals;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 81
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

