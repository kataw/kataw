# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/gen/in_a_block
> :: test: in a block
> :: case: x = [{__proto__: 1, __proto__: 2}]
## Options

`````js
{}
`````
## Input

`````js
{ x = [{__proto__: 1, __proto__: 2}] }
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
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 3
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 3,
                                "end": 5
                            },
                            "right": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "__proto__",
                                                            "rawText": "__proto__",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 8,
                                                            "end": 17
                                                        },
                                                        "right": {
                                                            "kind": 201392130,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 18,
                                                            "end": 20
                                                        },
                                                        "flags": 36,
                                                        "transformFlags": 128,
                                                        "start": 8,
                                                        "end": 20
                                                    },
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "__proto__",
                                                            "rawText": "__proto__",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 21,
                                                            "end": 31
                                                        },
                                                        "right": {
                                                            "kind": 201392130,
                                                            "text": 2,
                                                            "rawText": "2",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 32,
                                                            "end": 34
                                                        },
                                                        "flags": 36,
                                                        "transformFlags": 128,
                                                        "start": 21,
                                                        "end": 34
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 20,
                                                "transformFlags": 0,
                                                "start": 8,
                                                "end": 34
                                            },
                                            "flags": 52,
                                            "transformFlags": 8,
                                            "start": 7,
                                            "end": 35
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 7,
                                    "end": 35
                                },
                                "flags": 32,
                                "transformFlags": 8,
                                "start": 5,
                                "end": 36
                            },
                            "flags": 0,
                            "transformFlags": 128,
                            "start": 1,
                            "end": 36
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 36
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 36
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "{ x = [{__proto__: 1, __proto__: 2}] }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript

{
  x = [{__proto__: 1, __proto__: 2}];
}
```

### Diagnostics

```javascript
✔ No errors
```

