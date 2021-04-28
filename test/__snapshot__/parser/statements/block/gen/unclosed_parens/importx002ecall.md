# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: unclosed parens
> :: case: import.call
## Input

`````js
{( import.call
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
                                "kind": 120,
                                "expression": {
                                    "kind": 207,
                                    "importKeyword": {
                                        "kind": 37814364,
                                        "flags": 2,
                                        "start": 0,
                                        "end": 9
                                    },
                                    "flags": 9,
                                    "start": 768,
                                    "end": 14
                                },
                                "flags": 128,
                                "start": 9,
                                "end": 14
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 14
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 14
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 14
            },
            "flags": 128,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "text": "{( import.call",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Cannot use 'import.meta' outside a module - start: 14, end: 14

```

