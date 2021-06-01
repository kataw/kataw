# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-01
- From: kataw8/test\__snapshot__/parser/statements/block/autogen.md
- Path: kataw8/test\__snapshot__\parser\statements\block\gen\with_unclosed_array
> :: test: with unclosed array
> :: case: /)finally
## Input

`````js
{[ /)finally
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
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
                                        "text": "/)finally",
                                        "flags": 96,
                                        "start": 2,
                                        "end": 12
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097184,
                                "start": 2,
                                "end": 12
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 12
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 12
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 12
            },
            "flags": 16,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "{[ /)finally",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Unterminated regular expression - start: 2, end: 12
✖ ',' expected - start: 12, end: 12

```

