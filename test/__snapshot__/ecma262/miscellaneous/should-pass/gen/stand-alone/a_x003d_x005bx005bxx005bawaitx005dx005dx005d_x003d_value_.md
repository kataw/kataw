# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/gen/stand-alone
> :: test: stand-alone
> :: case: a = [[x[await]]] = value;
## Options

`````js
{}
`````
## Input

`````js
a = [[x[await]]] = value;
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
                                                "kind": 130,
                                                "member": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 6,
                                                    "end": 7
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "await",
                                                    "rawText": "await",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 8,
                                                    "end": 13
                                                },
                                                "flags": 536870944,
                                                "transformFlags": 4,
                                                "start": 6,
                                                "end": 14
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 6,
                                        "end": 14
                                    },
                                    "flags": 32,
                                    "transformFlags": 8,
                                    "start": 5,
                                    "end": 15
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 15
                        },
                        "flags": 32,
                        "transformFlags": 8,
                        "start": 3,
                        "end": 16
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 18
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "value",
                        "rawText": "value",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 18,
                        "end": 24
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 3,
                    "end": 24
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 24
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "a = [[x[await]]] = value;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript
a = [[x[await]]] = value;
```

### Diagnostics

```javascript
✔ No errors
```

