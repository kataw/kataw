# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/destructuring/valid-cases/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/destructuring/valid-cases/gen/stand_alone
> :: test: stand alone
> :: case: a = [[x]] = value;
## Options

`````js
{}
`````
## Input

`````js
a = [[x]] = value;
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
                                                "start": 6,
                                                "end": 7
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 6,
                                        "end": 7
                                    },
                                    "flags": 32,
                                    "transformFlags": 8,
                                    "start": 5,
                                    "end": 8
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 8
                        },
                        "flags": 32,
                        "transformFlags": 8,
                        "start": 3,
                        "end": 9
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 9,
                        "end": 11
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "value",
                        "rawText": "value",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 17
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 3,
                    "end": 17
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "a = [[x]] = value;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
a = [[x]] = value;
```

### Diagnostics

```javascript
✔ No errors
```

