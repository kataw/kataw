# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: assignment unwrapped
> :: case: \u0073witch
## Input

`````js
\u0073witch = x;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 768,
                "start": 0,
                "end": 11
            },
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 11,
                    "end": 11
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 11,
                    "end": 13
                },
                "right": {
                    "kind": 81921,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 13,
                    "end": 15
                },
                "flags": 256,
                "start": 11,
                "end": 15
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "flags": 128,
                "start": 15,
                "end": 15
            },
            "flags": 128,
            "start": 0,
            "end": 15
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 15,
            "end": 16
        }
    ],
    "isModule": false,
    "text": "\\u0073witch = x;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 11,
            "end": 13
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 11,
            "end": 13
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 15,
            "end": 16
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 15,
            "end": 16
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 15,
            "end": 16
        }
    ],
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: assignment unwrapped
> :: case: \u0073witch
## Input

`````js
\u0073witch = x;
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: assignment unwrapped
> :: case: \u0073witch
## Input

`````js
\u0073witch = x;
`````
```

