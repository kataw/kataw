# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: in arrow head
> :: case: x + y
## Input

`````js
([ x + y ]) => {}
`````

## Output
### CST

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
                    "start": 11,
                    "end": 14
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 2,
                                        "end": 4
                                    },
                                    "operatorToken": {
                                        "kind": 34098,
                                        "flags": 64,
                                        "start": 4,
                                        "end": 6
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 6,
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
                        "end": 10
                    }
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 16,
                        "end": 16
                    },
                    "flags": 32,
                    "start": 14,
                    "end": 17
                },
                "flags": 34,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "([ x + y ]) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The left hand side of the arrow is not destructible  - start: 11, end: 14

```

