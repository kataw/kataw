# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: c
> :: test: inside an async func
> :: case: debugge\u0072
## Input

`````js
async () => {  debugge\u0072 = x  }
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
                        "kind": 171,
                        "autofix": 0,
                        "flags": 128,
                        "start": 13,
                        "end": 28
                    }
                ],
                "multiLine": false,
                "autofix": 0,
                "flags": 128,
                "start": 13,
                "end": 28
            },
            "autofix": 0,
            "flags": 128,
            "start": 11,
            "end": 30
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "x",
                "autofix": 0,
                "flags": 768,
                "start": 30,
                "end": 32
            },
            "autofix": 0,
            "flags": 128,
            "start": 30,
            "end": 32
        }
    ],
    "isModule": false,
    "text": "async () => {  debugge\\u0072 = x  }",
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
            "code": 1,
            "error": "Unexpected token.",
            "start": 28,
            "end": 30
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 28,
            "end": 30
        },
        {
            "kind": 2,
            "source": 2,
            "code": 8,
            "error": "Declaration or statement expected. This follows a block of statements so if you intended to write a destructuring assignment you might need to wrap the whole assignment in parentheses",
            "start": 30,
            "end": 32
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 32,
            "end": 35
        }
    ],
    "start": 0,
    "end": 35
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: c
> :: test: inside an async func
> :: case: debugge\u0072
## Input

`````js
async () => {  debugge\u0072 = x  }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: c
> :: test: inside an async func
> :: case: debugge\u0072
## Input

`````js
async () => {  debugge\u0072 = x  }
`````
```

