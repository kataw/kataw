# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: with unclosed array
> :: case: {{{ &/ function while}}
## Input

`````js
{[ {{{ &/ function while}}
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
                            "kind": 198,
                            "left": {
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
                                            "flags": 32,
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
                                            "flags": 32,
                                            "start": 4,
                                            "end": 5
                                        },
                                        {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 6,
                                                "end": 6
                                            },
                                            "flags": 32,
                                            "start": 5,
                                            "end": 6
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 2,
                                    "end": 6
                                },
                                "flags": 32,
                                "start": 1,
                                "end": 6
                            },
                            "operatorToken": {
                                "kind": 34375,
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
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ ',' expected - start: 4, end: 5
✖ ',' expected - start: 5, end: 6
✖ ',' expected - start: 6, end: 8
✖ Unterminated regular expression - start: 8, end: 9

```

