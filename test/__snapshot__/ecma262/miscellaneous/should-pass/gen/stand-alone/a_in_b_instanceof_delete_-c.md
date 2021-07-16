# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/gen/stand-alone
> :: test: stand-alone
> :: case: a in b instanceof delete -c
## Options

`````js
{}
`````
## Input

`````js
a in b instanceof delete -c
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
                "kind": 198,
                "left": {
                    "kind": 198,
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
                        "kind": 21006388,
                        "flags": 96,
                        "transformFlags": 8192,
                        "start": 1,
                        "end": 4
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 4,
                        "end": 6
                    },
                    "flags": 96,
                    "transformFlags": 5120,
                    "start": 0,
                    "end": 6
                },
                "operatorToken": {
                    "kind": 4229173,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 17
                },
                "right": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 4259886,
                        "flags": 96,
                        "transformFlags": 8192,
                        "start": 17,
                        "end": 24
                    },
                    "operand": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 134318643,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 24,
                            "end": 26
                        },
                        "operand": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 26,
                            "end": 27
                        },
                        "flags": 32,
                        "transformFlags": 16384,
                        "start": 24,
                        "end": 27
                    },
                    "flags": 32,
                    "transformFlags": 16384,
                    "start": 17,
                    "end": 27
                },
                "flags": 96,
                "transformFlags": 5120,
                "start": 0,
                "end": 27
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "a in b instanceof delete -c",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
a in b instanceof delete -c;
```

### Diagnostics

```javascript
✔ No errors
```

