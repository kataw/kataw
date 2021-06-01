# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-01
- From: kataw8/test\__snapshot__/parser/statements/block/autogen.md
- Path: kataw8/test\__snapshot__\parser\statements\block\gen\with_unclosed_array
> :: test: with unclosed array
> :: case: {{{ &/ function while}}
## Input

`````js
{[ {{{ &/ function while}}
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
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 5,
                                            "end": 5
                                        },
                                        "flags": 48,
                                        "start": 4,
                                        "end": 5
                                    },
                                    {
                                        "kind": 198,
                                        "left": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 6,
                                                "end": 6
                                            },
                                            "flags": 48,
                                            "start": 5,
                                            "end": 6
                                        },
                                        "operatorToken": {
                                            "kind": 134252103,
                                            "flags": 64,
                                            "start": 6,
                                            "end": 8
                                        },
                                        "right": {
                                            "kind": 221,
                                            "text": "/ function while}}",
                                            "flags": 96,
                                            "start": 8,
                                            "end": 26
                                        },
                                        "flags": 32,
                                        "start": 5,
                                        "end": 26
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 2,
                                "end": 26
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 26
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 26
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 26
            },
            "flags": 16,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "{[ {{{ &/ function while}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 4, end: 5
✖ The parser expected to find a '}' to match the '{' token here - start: 5, end: 6
✖ The parser expected to find a '}' to match the '{' token here - start: 6, end: 8
✖ Unterminated regular expression - start: 8, end: 26
✖ ',' expected - start: 26, end: 26

```

