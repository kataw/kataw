# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: c
> :: test: inside an async func
> :: case: inst\u0061nceof
## Input

`````js
async () => {  inst\u0061nceof = x  }
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
                            "kind": 198,
                            "left": {
                                "kind": 253,
                                "text": "",
                                "autofix": 0,
                                "flags": 12,
                                "start": 13,
                                "end": 13
                            },
                            "operatorToken": {
                                "kind": 4229173,
                                "autofix": 0,
                                "flags": 0,
                                "start": 13,
                                "end": 30
                            },
                            "right": {
                                "kind": 253,
                                "text": "",
                                "autofix": 0,
                                "flags": 12,
                                "start": 30,
                                "end": 30
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 13,
                            "end": 30
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 13,
                        "end": 30
                    }
                ],
                "multiLine": false,
                "autofix": 0,
                "flags": 128,
                "start": 13,
                "end": 30
            },
            "autofix": 0,
            "flags": 128,
            "start": 11,
            "end": 32
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "x",
                "autofix": 0,
                "flags": 768,
                "start": 32,
                "end": 34
            },
            "autofix": 0,
            "flags": 128,
            "start": 32,
            "end": 34
        }
    ],
    "isModule": false,
    "text": "async () => {  inst\\u0061nceof = x  }",
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
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 13,
            "end": 30
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 30,
            "end": 32
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 30,
            "end": 32
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 30,
            "end": 32
        },
        {
            "kind": 2,
            "source": 2,
            "code": 8,
            "error": "Declaration or statement expected. This follows a block of statements so if you intended to write a destructuring assignment you might need to wrap the whole assignment in parentheses",
            "start": 32,
            "end": 34
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 34,
            "end": 37
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
> :: case: inst\u0061nceof
## Input

`````js
async () => {  inst\u0061nceof = x  }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: c
> :: test: inside an async func
> :: case: inst\u0061nceof
## Input

`````js
async () => {  inst\u0061nceof = x  }
`````
```

