# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: c
> :: test: inside an async func
> :: case: implem\u0065nts
## Input

`````js
async () => {  implem\u0065nts = x  }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 81921,
                    "value": "async",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 5
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 7,
                    "end": 7
                },
                "flags": 256,
                "start": 0,
                "end": 8
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 8
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 125,
                            "left": {
                                "kind": 81921,
                                "value": "implements",
                                "autofix": 0,
                                "flags": 768,
                                "start": 13,
                                "end": 30
                            },
                            "operatorToken": {
                                "kind": 81921,
                                "autofix": 0,
                                "flags": 0,
                                "start": 13,
                                "end": 32
                            },
                            "right": {
                                "kind": 81921,
                                "value": "x",
                                "autofix": 0,
                                "flags": 768,
                                "start": 32,
                                "end": 34
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 13,
                            "end": 34
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 13,
                        "end": 34
                    }
                ],
                "multiLine": false,
                "autofix": 0,
                "flags": 128,
                "start": 13,
                "end": 34
            },
            "autofix": 0,
            "flags": 128,
            "start": 11,
            "end": 37
        }
    ],
    "isModule": false,
    "text": "async () => {  implem\\u0065nts = x  }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 8,
            "end": 11
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 8,
            "end": 11
        }
    ],
    "start": 0,
    "end": 37
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: c
> :: test: inside an async func
> :: case: implem\u0065nts
## Input

`````js
async () => {  implem\u0065nts = x  }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: c
> :: test: inside an async func
> :: case: implem\u0065nts
## Input

`````js
async () => {  implem\u0065nts = x  }
`````
```

