# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/gen/stand-alone
> :: test: stand-alone
> :: case: a = [arguments = 4, eval = 5] = value;
## Options

`````js
{}
`````
## Input

`````js
a = [arguments = 4, eval = 5] = value;
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
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 125,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "arguments",
                                        "rawText": "arguments",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 14
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 14,
                                        "end": 16
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 4,
                                        "rawText": "4",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 16,
                                        "end": 18
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 5,
                                    "end": 18
                                },
                                {
                                    "kind": 125,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "eval",
                                        "rawText": "eval",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 19,
                                        "end": 24
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 24,
                                        "end": 26
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 5,
                                        "rawText": "5",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 26,
                                        "end": 28
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 19,
                                    "end": 28
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 28
                        },
                        "flags": 32,
                        "transformFlags": 8,
                        "start": 3,
                        "end": 29
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 29,
                        "end": 31
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "value",
                        "rawText": "value",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 31,
                        "end": 37
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 3,
                    "end": 37
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 37
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "a = [arguments = 4, eval = 5] = value;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript

a = [arguments = 4, eval = 5] = value;
```

### Diagnostics

```javascript
✔ No errors
```

