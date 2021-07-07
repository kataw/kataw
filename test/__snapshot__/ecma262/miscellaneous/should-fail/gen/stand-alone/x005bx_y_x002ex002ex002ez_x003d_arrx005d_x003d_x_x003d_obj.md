# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/gen/stand-alone
> :: test: stand-alone
> :: case: [x, y, ...z = arr] = x = obj
## Options

`````js
{}
`````
## Input

`````js
[x, y, ...z = arr] = x = obj
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
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 2
                            },
                            {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 3,
                                "end": 5
                            },
                            {
                                "kind": 223,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 6,
                                    "end": 10
                                },
                                "argument": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 10,
                                        "end": 11
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 11,
                                        "end": 13
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "arr",
                                        "rawText": "arr",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 13,
                                        "end": 17
                                    },
                                    "flags": 0,
                                    "transformFlags": 128,
                                    "start": 10,
                                    "end": 17
                                },
                                "flags": 1073741856,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 17
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 17
                    },
                    "flags": 32,
                    "transformFlags": 8,
                    "start": 0,
                    "end": 18
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 20
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 20,
                        "end": 22
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 22,
                        "end": 24
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "obj",
                        "rawText": "obj",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 24,
                        "end": 28
                    },
                    "flags": 0,
                    "transformFlags": 128,
                    "start": 20,
                    "end": 28
                },
                "flags": 32,
                "transformFlags": 128,
                "start": 0,
                "end": 28
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "[x, y, ...z = arr] = x = obj",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side must be a variable or a property access. - start: 18, end: 20

```

