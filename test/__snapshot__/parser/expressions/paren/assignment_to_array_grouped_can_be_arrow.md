# Kataw parser test case

## Input

`````js
([x, y] = z) => x;
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
                    "flags": 12,
                    "start": 0,
                    "end": 15
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 125,
                        "left": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 2,
                                        "end": 3
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 768,
                                        "start": 4,
                                        "end": 6
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 2,
                                "end": 6
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 7
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 7,
                            "start": 512,
                            "end": 9
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 768,
                            "start": 9,
                            "end": 11
                        },
                        "flags": 256,
                        "start": 1,
                        "end": 11
                    }
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 15,
                    "end": 17
                },
                "flags": 256,
                "start": 0,
                "end": 17
            },
            "flags": 128,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "text": "([x, y] = z) => x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
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

