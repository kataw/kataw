# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: false }
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

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "yield",
                            "rawText": "yield",
                            "flags": 96,
                            "start": 3,
                            "end": 9
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 4,
                            "rawText": "4",
                            "flags": 96,
                            "start": 11,
                            "end": 13
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 13
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 14
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 14,
                "end": 18
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 18,
                            "end": 20
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 18,
                        "end": 20
                    }
                ],
                "flags": 16,
                "start": 18,
                "end": 20
            },
            "flags": 16,
            "start": 14,
            "end": 21
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 21,
                "end": 26
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "result",
                            "rawText": "result",
                            "flags": 96,
                            "start": 26,
                            "end": 33
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 26,
                        "end": 33
                    }
                ],
                "flags": 16,
                "start": 26,
                "end": 33
            },
            "flags": 16,
            "start": 21,
            "end": 34
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 34,
                "end": 38
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "vals",
                            "rawText": "vals",
                            "flags": 96,
                            "start": 38,
                            "end": 43
                        },
                        "type": null,
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 47,
                                "end": 47
                            },
                            "flags": 32,
                            "start": 45,
                            "end": 48
                        },
                        "flags": 16,
                        "start": 38,
                        "end": 48
                    }
                ],
                "flags": 16,
                "start": 38,
                "end": 48
            },
            "flags": 16,
            "start": 34,
            "end": 49
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "result",
                    "rawText": "result",
                    "flags": 97,
                    "start": 49,
                    "end": 57
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 57,
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
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 61,
                                        "end": 63
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 96,
                                        "start": 63,
                                        "end": 65
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "yield",
                                        "rawText": "yield",
                                        "flags": 96,
                                        "start": 65,
                                        "end": 71
                                    },
                                    "flags": 32,
                                    "start": 61,
                                    "end": 71
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 61,
                            "end": 71
                        },
                        "flags": 32,
                        "start": 59,
                        "end": 73
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 73,
                        "end": 75
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "vals",
                        "rawText": "vals",
                        "flags": 96,
                        "start": 75,
                        "end": 80
                    },
                    "flags": 32,
                    "start": 59,
                    "end": 80
                },
                "flags": 32,
                "start": 49,
                "end": 80
            },
            "flags": 16,
            "start": 49,
            "end": 81
        }
    ],
    "isModule": false,
    "source": "var yield = 4;\nvar x;\n\nvar result;\nvar vals = [];\n\nresult = [ x = yield ] = vals;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 81
}
```

### Printed

```javascript

var yield = 4;
var x;
var result;
var vals = [];
result = [x = yield,] = vals;

```

### Diagnostics

```javascript
✔ No errors
```

