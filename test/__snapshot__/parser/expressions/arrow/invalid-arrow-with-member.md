# Kataw parser test case

## Input

`````js
([...x.y] = z) => z
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
                    "flags": 0,
                    "start": 14,
                    "end": 17
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
                                        "kind": 223,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 0,
                                            "start": 2,
                                            "end": 5
                                        },
                                        "argument": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 134299649,
                                                "original": "x",
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 5,
                                                "end": 6
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "original": "y",
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "start": 7,
                                                "end": 8
                                            },
                                            "flags": 32,
                                            "start": 5,
                                            "end": 8
                                        },
                                        "flags": 32,
                                        "start": 2,
                                        "end": 8
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 2,
                                "end": 8
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 9
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 64,
                            "start": 9,
                            "end": 11
                        },
                        "right": {
                            "kind": 134299649,
                            "original": "z",
                            "text": "z",
                            "rawText": " z",
                            "flags": 96,
                            "start": 11,
                            "end": 13
                        },
                        "flags": 32,
                        "start": 1,
                        "end": 13
                    }
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "original": "z",
                    "text": "z",
                    "rawText": " z",
                    "flags": 96,
                    "start": 17,
                    "end": 19
                },
                "flags": 34,
                "start": 0,
                "end": 19
            },
            "flags": 16,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "([...x.y] = z) => z",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The left hand side of the arrow is not destructible  - start: 14, end: 17

```

