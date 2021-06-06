# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/statements/block/autogen.md
- Path: kataw8/test\__snapshot__\parser\statements\block\gen\with_unclosed_array
> :: test: with unclosed array
> :: case: { /a/iui
## Input

`````js
{[ { /a/iui
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
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 4,
                                            "end": 4
                                        },
                                        "flags": 48,
                                        "start": 2,
                                        "end": 4
                                    },
                                    {
                                        "kind": 221,
                                        "text": "/a/iui",
                                        "flags": 96,
                                        "start": 4,
                                        "end": 11
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 2,
                                "end": 11
                            },
                            "flags": 32,
                            "start": 1,
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
    "source": "{[ { /a/iui",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Duplicate regular expression flag - start: 9, end: 10
✖ The parser expected to find a '}' to match the '{' token here - start: 4, end: 11

```

