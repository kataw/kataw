# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: unclosed parens
> :: case: /if
## Input

`````js
{( /if
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
                                "kind": 221,
                                "text": "/if",
                                "flags": 768,
                                "start": 2,
                                "end": 6
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 6
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 6
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 6
            },
            "flags": 128,
            "start": 0,
            "end": 6
        }
    ],
    "isModule": false,
    "text": "{( /if",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 6
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Unexpected token. - start: 2, end: 4

```

