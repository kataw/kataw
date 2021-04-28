# Kataw parser test case

## Input

`````js
var af = (x, ...y) => { return [x, y.length]; };
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
                            "text": "af",
                            "rawText": "af",
                            "flags": 768,
                            "start": 3,
                            "end": 6
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 768,
                                "start": 18,
                                "end": 21
                            },
                            "typeParameters": null,
                            "parameters": [
                                [
                                    {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 10,
                                        "end": 11
                                    },
                                    {
                                        "kind": 215,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 768,
                                            "start": 12,
                                            "end": 16
                                        },
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 768,
                                            "start": 16,
                                            "end": 17
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 258,
                                        "start": 12,
                                        "end": 17
                                    }
                                ]
                            ],
                            "asyncToken": null,
                            "returnType": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 161,
                                            "returnKeyword": {
                                                "kind": 37757022,
                                                "flags": 768,
                                                "start": 23,
                                                "end": 30
                                            },
                                            "expression": {
                                                "kind": 119,
                                                "elementList": {
                                                    "kind": 270,
                                                    "elements": [
                                                        {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 768,
                                                            "start": 32,
                                                            "end": 33
                                                        },
                                                        {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "y",
                                                                "rawText": "y",
                                                                "flags": 768,
                                                                "start": 34,
                                                                "end": 36
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "length",
                                                                "rawText": "length",
                                                                "flags": 768,
                                                                "start": 37,
                                                                "end": 43
                                                            },
                                                            "flags": 256,
                                                            "start": 34,
                                                            "end": 43
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 256,
                                                    "start": 32,
                                                    "end": 43
                                                },
                                                "flags": 256,
                                                "start": 30,
                                                "end": 44
                                            },
                                            "flags": 128,
                                            "start": 0,
                                            "end": 23
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 23,
                                    "end": 45
                                },
                                "flags": 256,
                                "start": 21,
                                "end": 47
                            },
                            "flags": 256,
                            "start": 8,
                            "end": 47
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 47
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 47
            },
            "flags": 128,
            "start": 0,
            "end": 48
        }
    ],
    "isModule": false,
    "text": "var af = (x, ...y) => { return [x, y.length]; };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 48
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

