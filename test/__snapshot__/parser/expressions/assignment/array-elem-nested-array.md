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
                "flags": 0,
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
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 5
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 5
            },
            "flags": 16,
            "start": 0,
            "end": 6
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
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
                            "flags": 96,
                            "start": 11,
                            "end": 18
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 11,
                        "end": 18
                    }
                ],
                "flags": 16,
                "start": 11,
                "end": 18
            },
            "flags": 16,
            "start": 6,
            "end": 19
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
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
                            "flags": 96,
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
                                                    "flags": 96,
                                                    "start": 33,
                                                    "end": 34
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 33,
                                            "end": 34
                                        },
                                        "flags": 32,
                                        "start": 32,
                                        "end": 35
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 32,
                                "end": 35
                            },
                            "flags": 32,
                            "start": 30,
                            "end": 36
                        },
                        "flags": 16,
                        "start": 23,
                        "end": 36
                    }
                ],
                "flags": 16,
                "start": 23,
                "end": 36
            },
            "flags": 16,
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
                    "flags": 96,
                    "start": 37,
                    "end": 45
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
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
                                                "flags": 96,
                                                "start": 50,
                                                "end": 51
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 50,
                                        "end": 51
                                    },
                                    "flags": 32,
                                    "start": 49,
                                    "end": 52
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 49,
                            "end": 52
                        },
                        "flags": 32,
                        "start": 47,
                        "end": 53
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 53,
                        "end": 55
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "vals",
                        "rawText": "vals",
                        "flags": 96,
                        "start": 55,
                        "end": 60
                    },
                    "flags": 32,
                    "start": 47,
                    "end": 60
                },
                "flags": 32,
                "start": 37,
                "end": 60
            },
            "flags": 16,
            "start": 37,
            "end": 61
        }
    ],
    "isModule": false,
    "source": "var x;\n\nvar result;\nvar vals = [[1]];\n\nresult = [[x]] = vals;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 61
}
```

### Printed

```javascript

var x;
var result;
var vals = [[1]];
result = [[x]] = vals;
```

### Diagnostics

```javascript
✔ No errors
```

