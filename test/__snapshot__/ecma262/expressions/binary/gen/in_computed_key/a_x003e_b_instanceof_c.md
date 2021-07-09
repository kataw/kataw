# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/binary/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/binary/gen/in_computed_key
> :: test: in computed key
> :: case: a > b instanceof c
## Options

`````js
{}
`````
## Input

`````js
x = {[ a > b instanceof c ]: y}
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
                    "text": "x",
                    "rawText": "x",
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
                                    "kind": 194,
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
                                                "start": 6,
                                                "end": 8
                                            },
                                            "operatorToken": {
                                                "kind": 34883,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 8,
                                                "end": 10
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 10,
                                                "end": 12
                                            },
                                            "flags": 96,
                                            "transformFlags": 5120,
                                            "start": 6,
                                            "end": 12
                                        },
                                        "operatorToken": {
                                            "kind": 4229173,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 12,
                                            "end": 23
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 23,
                                            "end": 25
                                        },
                                        "flags": 96,
                                        "transformFlags": 5120,
                                        "start": 6,
                                        "end": 25
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 5,
                                    "end": 27
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 28,
                                    "end": 30
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 5,
                                "end": 30
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 30
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 3,
                    "end": 31
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 31
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "x = {[ a > b instanceof c ]: y}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
x = { [a > b instanceof c]: y };
```

### Diagnostics

```javascript
✔ No errors
```

