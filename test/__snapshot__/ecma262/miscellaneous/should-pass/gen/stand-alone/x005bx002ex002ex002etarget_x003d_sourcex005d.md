# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-pass/gen/stand-alone
> :: test: stand-alone
> :: case:  [...target = source]
## Options

`````js
{}
`````
## Input

`````js
 [...target = source]
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
                                "start": 2,
                                "end": 5
                            },
                            "argument": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "target",
                                    "rawText": "target",
                                    "flags": 96,
                                    "start": 5,
                                    "end": 11
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 11,
                                    "end": 13
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "source",
                                    "rawText": "source",
                                    "flags": 96,
                                    "start": 13,
                                    "end": 20
                                },
                                "flags": 32,
                                "start": 5,
                                "end": 20
                            },
                            "flags": 1073741856,
                            "start": 2,
                            "end": 20
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 2,
                    "end": 20
                },
                "flags": 32,
                "start": 0,
                "end": 21
            },
            "flags": 16,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": " [...target = source]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

[...target = source];

```

### Diagnostics

```javascript
✔ No errors
```

