# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: { triple
> :: case: import.call
## Input

`````js
{ { { import.call
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
                                                    "kind": 207,
                                                    "importKeyword": {
                                                        "kind": 37814364,
                                                        "flags": 0,
                                                        "start": 5,
                                                        "end": 12
                                                    },
                                                    "metaIdentifier": null,
                                                    "flags": 12,
                                                    "start": 96,
                                                    "end": 17
                                                },
                                                "flags": 16,
                                                "start": 12,
                                                "end": 17
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 5,
                                        "end": 17
                                    },
                                    "flags": 16,
                                    "start": 3,
                                    "end": 17
                                }
                            ],
                            "flags": 16,
                            "start": 3,
                            "end": 17
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 17
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "{ { { import.call",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot use 'import.meta' outside a module - start: 17, end: 17
✖ The parser expected to find a '}' to match the '{' token here - start: 17, end: 17

```

