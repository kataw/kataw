# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/destructuring/valid-cases/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/destructuring/valid-cases/gen/stand_alone
> :: test: stand alone
> :: case: ({ responseText: text } = res)
## Options

`````js
{}
`````
## Input

`````js
({ responseText: text } = res)
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
                "kind": 121,
                "expression": {
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
                                        "text": "responseText",
                                        "rawText": "responseText",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 2,
                                        "end": 15
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "text",
                                        "rawText": "text",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 16,
                                        "end": 21
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 2,
                                    "end": 21
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 21
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 1,
                        "end": 23
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 23,
                        "end": 25
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "res",
                        "rawText": "res",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 25,
                        "end": 29
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 1,
                    "end": 29
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 30
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "({ responseText: text } = res)",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
({ responseText: text } = res);
```

### Diagnostics

```javascript
✔ No errors
```

