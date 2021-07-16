# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/gen/stand-alone
> :: test: stand-alone
> :: case: s = {foo: yield / x}
## Options

`````js
{}
`````
## Input

`````js
s = {foo: yield / x}
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
                    "text": "s",
                    "rawText": "s",
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
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 5,
                                    "end": 8
                                },
                                "right": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "yield",
                                        "rawText": "yield",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 9,
                                        "end": 15
                                    },
                                    "operatorToken": {
                                        "kind": 35640,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 15,
                                        "end": 17
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 17,
                                        "end": 19
                                    },
                                    "flags": 96,
                                    "transformFlags": 5120,
                                    "start": 5,
                                    "end": 19
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 5,
                                "end": 19
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 19
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 3,
                    "end": 20
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 20
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "s = {foo: yield / x}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
s = { foo: yield / x };
```

### Diagnostics

```javascript
✔ No errors
```

