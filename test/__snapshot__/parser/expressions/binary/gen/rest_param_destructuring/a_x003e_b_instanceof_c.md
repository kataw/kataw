# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: rest param destructuring
> :: case: a > b instanceof c
## Input

`````js
([ ... a > b instanceof c ]) => x
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
                    "start": 28,
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
                                        "flags": 0,
                                        "start": 2,
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
                                                "flags": 96,
                                                "start": 6,
                                                "end": 8
                                            },
                                            "operatorToken": {
                                                "kind": 34883,
                                                "flags": 64,
                                                "start": 8,
                                                "end": 10
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "start": 10,
                                                "end": 12
                                            },
                                            "flags": 32,
                                            "start": 6,
                                            "end": 12
                                        },
                                        "operatorToken": {
                                            "kind": 4229173,
                                            "flags": 64,
                                            "start": 12,
                                            "end": 23
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 96,
                                            "start": 23,
                                            "end": 25
                                        },
                                        "flags": 32,
                                        "start": 6,
                                        "end": 25
                                    },
                                    "flags": 32,
                                    "start": 2,
                                    "end": 25
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 2,
                            "end": 25
                        },
                        "flags": 32,
                        "start": 1,
                        "end": 27
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 31,
                    "end": 33
                },
                "flags": 34,
                "start": 0,
                "end": 33
            },
            "flags": 16,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "([ ... a > b instanceof c ]) => x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

([...a > b inctanceof c]) =>  x;
```

### Diagnostics

```javascript
✖ The left hand side of the arrow is not destructible  - start: 28, end: 31

```

