# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/with_unclosed_array
> :: test: with unclosed array
> :: case: {{{ &/ function while}}
## Options

`````js
{}
`````
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
                                            "transformFlags": 0,
                                            "start": 4,
                                            "end": 4
                                        },
                                        "flags": 48,
                                        "transformFlags": 8,
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
                                            "transformFlags": 0,
                                            "start": 5,
                                            "end": 5
                                        },
                                        "flags": 48,
                                        "transformFlags": 8,
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
                                                "transformFlags": 0,
                                                "start": 6,
                                                "end": 6
                                            },
                                            "flags": 48,
                                            "transformFlags": 8,
                                            "start": 5,
                                            "end": 6
                                        },
                                        "operatorToken": {
                                            "kind": 134252103,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 6,
                                            "end": 8
                                        },
                                        "right": {
                                            "kind": 371,
                                            "text": "/ function while}}",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 8,
                                            "end": 26
                                        },
                                        "flags": 48,
                                        "transformFlags": 5120,
                                        "start": 5,
                                        "end": 26
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 26
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 1,
                            "end": 26
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 1,
                        "end": 26
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 26
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "{[ {{{ &/ function while}}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
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
✖ The parser expected to find a '}' to match the '{' token here - start: 7, end: 8
✖ Unterminated regular expression - start: 8, end: 26
✖ ',' expected - start: 8, end: 26

```

