# Kataw parser test case

## Input

`````js
{ (x = {[yield]: 1}) => z }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 768,
                                "start": 20,
                                "end": 23
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
                                        "start": 3,
                                        "end": 4
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 768,
                                        "start": 4,
                                        "end": 6
                                    },
                                    "right": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 219,
                                                    "left": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 768,
                                                        "start": 16,
                                                        "end": 18
                                                    },
                                                    "right": {
                                                        "kind": 194,
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "yield",
                                                            "rawText": "yield",
                                                            "flags": 768,
                                                            "start": 9,
                                                            "end": 14
                                                        },
                                                        "flags": 256,
                                                        "start": 8,
                                                        "end": 15
                                                    },
                                                    "flags": 256,
                                                    "start": 8,
                                                    "end": 18
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "flags": 0,
                                            "start": 8,
                                            "end": 18
                                        },
                                        "flags": 256,
                                        "start": 6,
                                        "end": 19
                                    },
                                    "flags": 256,
                                    "start": 1,
                                    "end": 19
                                }
                            ],
                            "asyncToken": null,
                            "returnType": null,
                            "contents": {
                                "kind": 134299649,
                                "text": "z",
                                "rawText": "z",
                                "flags": 768,
                                "start": 23,
                                "end": 25
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 25
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 25
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 25
            },
            "flags": 128,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "text": "{ (x = {[yield]: 1}) => z }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
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

