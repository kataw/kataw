# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: with unclosed array
> :: case: /if
## Input

`````js
{[ /if
`````

## Output
### CST

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
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 221,
                                        "text": "/if",
                                        "flags": 96,
                                        "start": 2,
                                        "end": 6
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097184,
                                "start": 2,
                                "end": 6
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 6
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 6
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 6
            },
            "flags": 16,
            "start": 0,
            "end": 6
        }
    ],
    "isModule": false,
    "source": "{[ /if",
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
✖ Unterminated regular expression - start: 2, end: 4
✖ ',' expected - start: 6, end: 6
✖ Did you forgot a ']' to match the `[` token? - start: 6, end: 6

```

