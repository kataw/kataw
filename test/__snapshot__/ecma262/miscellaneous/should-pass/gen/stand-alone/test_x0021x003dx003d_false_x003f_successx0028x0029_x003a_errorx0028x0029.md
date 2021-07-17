# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/gen/stand-alone
> :: test: stand-alone
> :: case: test !== false ? success() : error()
## Options

`````js
{}
`````
## Input

`````js
test !== false ? success() : error()
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
                "kind": 197,
                "shortCircuit": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "test",
                        "rawText": "test",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 4
                    },
                    "operatorToken": {
                        "kind": 34621,
                        "flags": 96,
                        "transformFlags": 16,
                        "start": 4,
                        "end": 8
                    },
                    "right": {
                        "kind": 205586437,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 14
                    },
                    "flags": 96,
                    "transformFlags": 5120,
                    "start": 0,
                    "end": 14
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 16
                },
                "consequent": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "success",
                        "rawText": "success",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 24
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 25,
                        "end": 25
                    },
                    "flags": 32,
                    "transformFlags": 1,
                    "start": 16,
                    "end": 26
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 26,
                    "end": 28
                },
                "alternate": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "error",
                        "rawText": "error",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 28,
                        "end": 34
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 35,
                        "end": 35
                    },
                    "flags": 32,
                    "transformFlags": 1,
                    "start": 28,
                    "end": 36
                },
                "flags": 96,
                "transformFlags": 4096,
                "start": 0,
                "end": 36
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "test !== false ? success() : error()",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript
test !== false ? success() : error();
```

### Diagnostics

```javascript
✔ No errors
```

