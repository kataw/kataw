# Kataw parser test case

## Input

`````js
([...{a = b} = c]) => d;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 18,
                    "start": 0,
                    "end": 21
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 223,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 2,
                                        "start": 0,
                                        "end": 5
                                    },
                                    "argument": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 205,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 768,
                                                            "start": 6,
                                                            "end": 7
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 768,
                                                            "start": 9,
                                                            "end": 11
                                                        },
                                                        "flags": 256,
                                                        "start": 6,
                                                        "end": 11
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "start": 6,
                                                "end": 11
                                            },
                                            "flags": 256,
                                            "start": 5,
                                            "end": 12
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 12,
                                            "start": 512,
                                            "end": 14
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 768,
                                            "start": 14,
                                            "end": 16
                                        },
                                        "flags": 256,
                                        "start": 5,
                                        "end": 16
                                    },
                                    "flags": 256,
                                    "start": 2,
                                    "end": 16
                                }
                            ],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 2,
                            "end": 16
                        },
                        "flags": 256,
                        "start": 1,
                        "end": 17
                    }
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 768,
                    "start": 21,
                    "end": 23
                },
                "flags": 256,
                "start": 0,
                "end": 23
            },
            "flags": 128,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "text": "([...{a = b} = c]) => d;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
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

