# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: { triple
> :: case: false
## Input

`````js
{ { { false
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
                        "kind": 249,
                        "block": {
                            "kind": 124,
                            "statements": [
                                {
                                    "kind": 249,
                                    "block": {
                                        "kind": 124,
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 134,
                                                    "text": false,
                                                    "flags": 96,
                                                    "start": 5,
                                                    "end": 11
                                                },
                                                "flags": 16,
                                                "start": 5,
                                                "end": 11
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 5,
                                        "end": 11
                                    },
                                    "flags": 16,
                                    "start": 3,
                                    "end": 11
                                }
                            ],
                            "flags": 16,
                            "start": 3,
                            "end": 11
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 11
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 11
            },
            "flags": 16,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": false,
    "source": "{ { { false",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 11, end: 11
✖ The parser expected to find a '}' to match the '{' token here - start: 11, end: 11
✖ The parser expected to find a '}' to match the '{' token here - start: 11, end: 11

```

