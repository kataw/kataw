# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/gen/in_a_block
> :: test: in a block
> :: case: [...await] = obj
## Options

`````js
{}
`````
## Input

`````js
{ [...await] = obj }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
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
                                                "start": 3,
                                                "end": 6
                                            },
                                            "argument": {
                                                "kind": 134299649,
                                                "text": "await",
                                                "rawText": "await",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 6,
                                                "end": 11
                                            },
                                            "flags": 1073741856,
                                            "transformFlags": 0,
                                            "start": 3,
                                            "end": 11
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 3,
                                    "end": 11
                                },
                                "flags": 32,
                                "transformFlags": 8,
                                "start": 1,
                                "end": 12
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 14
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "obj",
                                "rawText": "obj",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 18
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 1,
                            "end": 18
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 1,
                        "end": 18
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 18
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "{ [...await] = obj }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
{
  [...await] = obj;
}
```

### Diagnostics

```javascript
✔ No errors
```

