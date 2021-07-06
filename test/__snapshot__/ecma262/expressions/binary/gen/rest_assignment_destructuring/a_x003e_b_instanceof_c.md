# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/binary/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/binary/gen/rest_assignment_destructuring
> :: test: rest assignment destructuring
> :: case: a > b instanceof c
## Options

`````js
{}
`````
## Input

`````js
[ ... a > b instanceof c ] = x
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
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
                                "kind": 223,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 1,
                                    "end": 5
                                },
                                "argument": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 5,
                                            "end": 7
                                        },
                                        "operatorToken": {
                                            "kind": 34883,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 7,
                                            "end": 9
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 9,
                                            "end": 11
                                        },
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 11
                                    },
                                    "operatorToken": {
                                        "kind": 4229173,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 11,
                                        "end": 22
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 22,
                                        "end": 24
                                    },
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 5,
                                    "end": 24
                                },
                                "flags": 1073741856,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 24
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 24
                    },
                    "flags": 32,
                    "transformFlags": 8,
                    "start": 0,
                    "end": 26
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 26,
                    "end": 28
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 28,
                    "end": 30
                },
                "flags": 32,
                "transformFlags": 128,
                "start": 0,
                "end": 30
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "[ ... a > b instanceof c ] = x",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side must be a variable or a property access. - start: 26, end: 28

```

