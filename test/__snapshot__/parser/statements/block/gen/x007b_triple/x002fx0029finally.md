# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: { triple
> :: case: /)finally
## Input

`````js
{ { { /)finally
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
                                                    "kind": 221,
                                                    "text": "/)finally",
                                                    "flags": 96,
                                                    "start": 5,
                                                    "end": 15
                                                },
                                                "flags": 16,
                                                "start": 5,
                                                "end": 15
                                            }
                                        ],
                                        "flags": 2097168,
                                        "start": 5,
                                        "end": 15
                                    },
                                    "flags": 16,
                                    "start": 3,
                                    "end": 15
                                }
                            ],
                            "flags": 16,
                            "start": 3,
                            "end": 15
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 15
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 15
            },
            "flags": 16,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "{ { { /)finally",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Unterminated regular expression - start: 5, end: 7
✖ The parser expected to find a '}' to match the '{' token here - start: 15, end: 15
✖ The parser expected to find a '}' to match the '{' token here - start: 15, end: 15
✖ The parser expected to find a '}' to match the '{' token here - start: 15, end: 15

```

