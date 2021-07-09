# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/binary/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/binary/gen/spread
> :: test: spread
> :: case: a instanceof b > c
## Options

`````js
{}
`````
## Input

`````js
[ ... a instanceof b > c ]
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
                                        "kind": 4229173,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 7,
                                        "end": 18
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 18,
                                        "end": 20
                                    },
                                    "flags": 96,
                                    "transformFlags": 5120,
                                    "start": 5,
                                    "end": 20
                                },
                                "operatorToken": {
                                    "kind": 34883,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 20,
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
                                "transformFlags": 5120,
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
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "[ ... a instanceof b > c ]",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
[...a instanceof b > c];
```

### Diagnostics

```javascript
✔ No errors
```

