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
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 768,
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
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 3,
                        "end": 5
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 5
            },
            "flags": 128,
            "start": 0,
            "end": 6
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 768,
                "start": 6,
                "end": 11
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
                            "flags": 768,
                            "start": 11,
                            "end": 18
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 11,
                        "end": 18
                    }
                ],
                "flags": 128,
                "start": 11,
                "end": 18
            },
            "flags": 128,
            "start": 6,
            "end": 19
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 768,
                "start": 19,
                "end": 23
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
                                                    "kind": 201392130,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 33,
                                                    "end": 34
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 33,
                                            "end": 34
                                        },
                                        "flags": 256,
                                        "start": 32,
                                        "end": 35
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 32,
                                "end": 35
                            },
                            "flags": 256,
                            "start": 30,
                            "end": 36
                        },
                        "flags": 128,
                        "start": 23,
                        "end": 36
                    }
                ],
                "flags": 128,
                "start": 23,
                "end": 36
            },
            "flags": 128,
            "start": 19,
            "end": 37
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "result",
                    "rawText": "result",
                    "flags": 768,
                    "start": 37,
                    "end": 45
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 45,
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
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 768,
                                                "start": 50,
                                                "end": 51
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 256,
                                        "start": 50,
                                        "end": 51
                                    },
                                    "flags": 256,
                                    "start": 49,
                                    "end": 52
                                }
                            ],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 49,
                            "end": 52
                        },
                        "flags": 256,
                        "start": 47,
                        "end": 53
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 53,
                        "end": 55
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "vals",
                        "rawText": "vals",
                        "flags": 768,
                        "start": 55,
                        "end": 60
                    },
                    "flags": 256,
                    "start": 47,
                    "end": 60
                },
                "flags": 256,
                "start": 37,
                "end": 60
            },
            "flags": 128,
            "start": 37,
            "end": 61
        }
    ],
    "isModule": false,
    "text": "var x;\n\nvar result;\nvar vals = [[1]];\n\nresult = [[x]] = vals;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 61
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

