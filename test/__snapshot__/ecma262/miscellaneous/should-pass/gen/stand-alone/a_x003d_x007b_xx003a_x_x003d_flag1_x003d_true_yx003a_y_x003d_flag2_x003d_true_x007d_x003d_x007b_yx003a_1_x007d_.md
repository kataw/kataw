# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/gen/stand-alone
> :: test: stand-alone
> :: case: a = { x: x = flag1 = true, y: y = flag2 = true } = { y: 1 };
## Options

`````js
{}
`````
## Input

`````js
a = { x: x = flag1 = true, y: y = flag2 = true } = { y: 1 };
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
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 7
                                    },
                                    "right": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 8,
                                            "end": 10
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 10,
                                            "end": 12
                                        },
                                        "right": {
                                            "kind": 125,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "flag1",
                                                "rawText": "flag1",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 12,
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
                                                "kind": 24752947,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 20,
                                                "end": 25
                                            },
                                            "flags": 0,
                                            "transformFlags": 128,
                                            "start": 12,
                                            "end": 25
                                        },
                                        "flags": 0,
                                        "transformFlags": 128,
                                        "start": 5,
                                        "end": 25
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 5,
                                    "end": 25
                                },
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 26,
                                        "end": 28
                                    },
                                    "right": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 29,
                                            "end": 31
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 31,
                                            "end": 33
                                        },
                                        "right": {
                                            "kind": 125,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "flag2",
                                                "rawText": "flag2",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 33,
                                                "end": 39
                                            },
                                            "operatorToken": {
                                                "kind": 4125,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 39,
                                                "end": 41
                                            },
                                            "right": {
                                                "kind": 24752947,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 41,
                                                "end": 46
                                            },
                                            "flags": 0,
                                            "transformFlags": 128,
                                            "start": 33,
                                            "end": 46
                                        },
                                        "flags": 0,
                                        "transformFlags": 128,
                                        "start": 26,
                                        "end": 46
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 26,
                                    "end": 46
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 46
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 3,
                        "end": 48
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 48,
                        "end": 50
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 52,
                                        "end": 54
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 55,
                                        "end": 57
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 52,
                                    "end": 57
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 52,
                            "end": 57
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 50,
                        "end": 59
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 3,
                    "end": 59
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 59
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 60
        }
    ],
    "isModule": false,
    "source": "a = { x: x = flag1 = true, y: y = flag2 = true } = { y: 1 };",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 60
}
```

### Printed

```javascript

a = {x: x = flag1 = true , y: y = flag2 = true } = {y: 1};
```

### Diagnostics

```javascript
✔ No errors
```

