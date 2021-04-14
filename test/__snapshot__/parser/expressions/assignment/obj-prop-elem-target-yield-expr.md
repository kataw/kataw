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
                            "kind": 81921,
                            "text": "vals",
                            "rawText": "vals",
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
                                            "text": 23,
                                            "rawText": "23",
                                            "flags": 768,
                                            "start": 15,
                                            "end": 18
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 12,
                                            "end": 14
                                        },
                                        "flags": 256,
                                        "start": 12,
                                        "end": 18
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 12,
                                "end": 18
                            },
                            "flags": 256,
                            "start": 10,
                            "end": 20
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 20
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 20
            },
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
                    "text": "result",
                    "rawText": "result",
                    "flags": 768,
                    "start": 21,
                    "end": 29
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 29,
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
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 36,
                                            "end": 38
                                        },
                                        "expression": {
                                            "kind": 81921,
                                            "text": "yield",
                                            "rawText": "yield",
                                            "flags": 768,
                                            "start": 39,
                                            "end": 44
                                        },
                                        "flags": 256,
                                        "start": 33,
                                        "end": 45
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 33,
                                        "end": 35
                                    },
                                    "flags": 256,
                                    "start": 33,
                                    "end": 45
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 33,
                            "end": 45
                        },
                        "flags": 256,
                        "start": 31,
                        "end": 47
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 47,
                        "end": 49
                    },
                    "right": {
                        "kind": 81921,
                        "text": "vals",
                        "rawText": "vals",
                        "flags": 768,
                        "start": 49,
                        "end": 54
                    },
                    "flags": 256,
                    "start": 31,
                    "end": 54
                },
                "flags": 256,
                "start": 21,
                "end": 54
            },
            "flags": 128,
            "start": 21,
            "end": 55
        }
    ],
    "isModule": false,
    "text": "var vals = { x: 23 };\n\nresult = { x: x[yield] } = vals;",
    "fileName": "__root__",
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

