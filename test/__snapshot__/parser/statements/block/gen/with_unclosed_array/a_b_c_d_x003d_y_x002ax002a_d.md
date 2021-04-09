# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: with unclosed array
> :: case: a,b, c d = y ** d
## Input

`````js
{[ a,b, c d = y ** d
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 81921,
                                        "value": "a",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 2,
                                        "end": 4
                                    },
                                    {
                                        "kind": 81921,
                                        "value": "b",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 5,
                                        "end": 6
                                    },
                                    {
                                        "kind": 81921,
                                        "value": "c",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 7,
                                        "end": 9
                                    },
                                    {
                                        "kind": 125,
                                        "left": {
                                            "kind": 81921,
                                            "value": "d",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 9,
                                            "end": 11
                                        },
                                        "operatorToken": {
                                            "kind": 81921,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 9,
                                            "end": 13
                                        },
                                        "right": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 81921,
                                                "value": "y",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 13,
                                                "end": 15
                                            },
                                            "operatorToken": {
                                                "kind": 35897,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 15,
                                                "end": 18
                                            },
                                            "right": {
                                                "kind": 81921,
                                                "value": "d",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 18,
                                                "end": 20
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 13,
                                            "end": 20
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 9,
                                        "end": 20
                                    }
                                ],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 2,
                                "end": 20
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 1,
                            "end": 20
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 1,
                        "end": 20
                    }
                ],
                "multiLine": false,
                "autofix": 0,
                "flags": 128,
                "start": 1,
                "end": 20
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "{[ a,b, c d = y ** d",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 9,
            "end": 11
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 20,
            "end": 20
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 20,
            "end": 20
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 20,
            "end": 20
        }
    ],
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: with unclosed array
> :: case: a,b, c d = y ** d
## Input

`````js
{[ a,b, c d = y ** d
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: with unclosed array
> :: case: a,b, c d = y ** d
## Input

`````js
{[ a,b, c d = y ** d
`````
```

