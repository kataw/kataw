# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: c
> :: test: inside an async func
> :: case: expo\u0072t
## Input

`````js
async () => {  expo\u0072t = x  }
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
                        "kind": 257,
                        "declaration": null,
                        "namedExports": null,
                        "exportFromClause": null,
                        "fromClause": null,
                        "autofix": 0,
                        "flags": 128,
                        "start": 13,
                        "end": 26
                    }
                ],
                "multiLine": false,
                "autofix": 0,
                "flags": 128,
                "start": 13,
                "end": 26
            },
            "autofix": 0,
            "flags": 128,
            "start": 11,
            "end": 28
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "x",
                "autofix": 0,
                "flags": 768,
                "start": 28,
                "end": 30
            },
            "autofix": 0,
            "flags": 128,
            "start": 28,
            "end": 30
        }
    ],
    "isModule": false,
    "text": "async () => {  expo\\u0072t = x  }",
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
            "code": 60,
            "error": "The `export` keyword can only be used with the module goal",
            "start": 13,
            "end": 26
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 26,
            "end": 28
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 26,
            "end": 28
        },
        {
            "kind": 2,
            "source": 2,
            "code": 8,
            "error": "Declaration or statement expected. This follows a block of statements so if you intended to write a destructuring assignment you might need to wrap the whole assignment in parentheses",
            "start": 28,
            "end": 30
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 30,
            "end": 33
        }
    ],
    "start": 0,
    "end": 33
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: c
> :: test: inside an async func
> :: case: expo\u0072t
## Input

`````js
async () => {  expo\u0072t = x  }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: c
> :: test: inside an async func
> :: case: expo\u0072t
## Input

`````js
async () => {  expo\u0072t = x  }
`````
```

