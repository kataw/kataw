# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: conditional_last
> :: case: return => {}
## Input

`````js
bar, return => {};
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
                "kind": 132,
                "expressions": [
                    {
                        "kind": 81921,
                        "value": "bar",
                        "autofix": 0,
                        "flags": 768,
                        "start": 0,
                        "end": 3
                    },
                    {
                        "kind": 253,
                        "text": "",
                        "autofix": 0,
                        "flags": 12,
                        "start": 4,
                        "end": 4
                    }
                ],
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 4
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 4
        },
        {
            "kind": 161,
            "expression": {
                "kind": 253,
                "text": "",
                "autofix": 0,
                "flags": 12,
                "start": 11,
                "end": 11
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 4
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "autofix": 0,
                "flags": 128,
                "start": 16,
                "end": 16
            },
            "autofix": 0,
            "flags": 128,
            "start": 14,
            "end": 17
        },
        {
            "kind": 168,
            "autofix": 0,
            "flags": 128,
            "start": 17,
            "end": 18
        }
    ],
    "isModule": false,
    "text": "bar, return => {};",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 4,
            "end": 11
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 4,
            "end": 11
        },
        {
            "kind": 2,
            "source": 2,
            "code": 33,
            "error": "A return statement can only be used within a function_body",
            "start": 4,
            "end": 11
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 11,
            "end": 14
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 11,
            "end": 14
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 11,
            "end": 14
        }
    ],
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: conditional_last
> :: case: return => {}
## Input

`````js
bar, return => {};
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: conditional_last
> :: case: return => {}
## Input

`````js
bar, return => {};
`````
```

