# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-fail/gen/in_a_block
> :: test: in a block
> :: case: [true = x] = x
## Options

`````js
{}
`````
## Input

`````js
{ [true = x] = x }
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
                            "kind": 125,
                            "left": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 125,
                                            "left": {
                                                "kind": 24752947,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 3,
                                                "end": 7
                                            },
                                            "operatorToken": {
                                                "kind": 4125,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 7,
                                                "end": 9
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 9,
                                                "end": 11
                                            },
                                            "flags": 32,
                                            "transformFlags": 128,
                                            "start": 3,
                                            "end": 11
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 3,
                                    "end": 11
                                },
                                "flags": 32,
                                "transformFlags": 8,
                                "start": 1,
                                "end": 12
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 14
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 16
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 1,
                            "end": 16
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 1,
                        "end": 16
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 16
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "{ [true = x] = x }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 7, end: 9

```

