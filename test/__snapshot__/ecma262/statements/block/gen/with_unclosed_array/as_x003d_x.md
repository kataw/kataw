# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/statements/block/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/block/gen/with_unclosed_array
> :: test: with unclosed array
> :: case: as = x
## Options

`````js
{}
`````
## Input

`````js
{[ as = x
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
                                        "kind": 125,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "as",
                                            "rawText": "as",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 2,
                                            "end": 5
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 5,
                                            "end": 7
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 7,
                                            "end": 9
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 2,
                                        "end": 9
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 9
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 1,
                            "end": 9
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 1,
                        "end": 9
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 9
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "source": "{[ as = x",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 9
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 8, end: 9

```

