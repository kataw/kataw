# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: unclosed parens
> :: case: { /a/iui
## Input

`````js
{( { /a/iui
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
                                "end": 4
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 4
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 4
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 221,
                            "text": "/a/iui",
                            "flags": 768,
                            "start": 4,
                            "end": 11
                        },
                        "flags": 128,
                        "start": 4,
                        "end": 11
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 11
            },
            "flags": 128,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": false,
    "text": "{( { /a/iui",
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
✔ No errors
```

