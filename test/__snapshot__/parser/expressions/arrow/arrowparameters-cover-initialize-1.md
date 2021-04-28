# Kataw parser test case

## Input

`````js
var af = (x = 1) => x;
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
                                "flags": 16,
                                "start": 0,
                                "end": 19
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 125,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 10,
                                        "end": 11
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 11,
                                        "start": 512,
                                        "end": 13
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 768,
                                        "start": 13,
                                        "end": 15
                                    },
                                    "flags": 256,
                                    "start": 8,
                                    "end": 15
                                }
                            ],
                            "asyncToken": null,
                            "returnType": null,
                            "contents": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 768,
                                "start": 19,
                                "end": 21
                            },
                            "flags": 256,
                            "start": 8,
                            "end": 21
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 21
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 21
            },
            "flags": 128,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "text": "var af = (x = 1) => x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
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

