# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: rest param destructuring
> :: case: a instanceof b + c
## Input

`````js
([ ... a instanceof b + c ]) => x
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
                    "flags": 28,
                    "start": 0,
                    "end": 31
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
                                        "end": 6
                                    },
                                    "argument": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 768,
                                                "start": 6,
                                                "end": 8
                                            },
                                            "operatorToken": {
                                                "kind": 4229173,
                                                "flags": 512,
                                                "start": 8,
                                                "end": 19
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 768,
                                                "start": 19,
                                                "end": 21
                                            },
                                            "flags": 256,
                                            "start": 6,
                                            "end": 21
                                        },
                                        "operatorToken": {
                                            "kind": 34098,
                                            "flags": 512,
                                            "start": 21,
                                            "end": 23
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 768,
                                            "start": 23,
                                            "end": 25
                                        },
                                        "flags": 256,
                                        "start": 6,
                                        "end": 25
                                    },
                                    "flags": 256,
                                    "start": 2,
                                    "end": 25
                                }
                            ],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 2,
                            "end": 25
                        },
                        "flags": 256,
                        "start": 1,
                        "end": 27
                    }
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 31,
                    "end": 33
                },
                "flags": 256,
                "start": 0,
                "end": 33
            },
            "flags": 128,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "text": "([ ... a instanceof b + c ]) => x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The left hand side of the arrow is not destructible  - start: 28, end: 31

```

