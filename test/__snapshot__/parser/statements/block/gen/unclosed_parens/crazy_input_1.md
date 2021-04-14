# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: unclosed parens
> :: case: crazy input 1
## Input

`````js
{( crazy input 1
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 132,
                                "flags": 256,
                                "start": 1,
                                "end": 8
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 8
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 8
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 8
            },
            "flags": 128,
            "start": 0,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "text": "input",
                "rawText": "input",
                "flags": 768,
                "start": 8,
                "end": 14
            },
            "flags": 128,
            "start": 8,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "text": 1,
                "rawText": "1",
                "flags": 768,
                "start": 14,
                "end": 16
            },
            "flags": 128,
            "start": 14,
            "end": 16
        }
    ],
    "isModule": false,
    "text": "{( crazy input 1",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 8,
            "end": 14
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 8,
            "end": 14
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 8,
            "end": 14
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 14,
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
- Path: s
> :: test: unclosed parens
> :: case: crazy input 1
## Input

`````js
{( crazy input 1
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: unclosed parens
> :: case: crazy input 1
## Input

`````js
{( crazy input 1
`````
```

