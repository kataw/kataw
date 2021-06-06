# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-pass/gen/stand-alone
> :: test: stand-alone
> :: case: [[x[yield]]] = value;
## Input

`````js
[[x[yield]]] = value;
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
                                            "kind": 536871042,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 2,
                                                "end": 3
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "yield",
                                                "rawText": "yield",
                                                "flags": 96,
                                                "start": 4,
                                                "end": 9
                                            },
                                            "flags": 32,
                                            "start": 2,
                                            "end": 10
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 2,
                                    "end": 10
                                },
                                "flags": 32,
                                "start": 1,
                                "end": 11
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 1,
                        "end": 11
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 12
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 12,
                    "end": 14
                },
                "right": {
                    "kind": 134299649,
                    "text": "value",
                    "rawText": "value",
                    "flags": 96,
                    "start": 14,
                    "end": 20
                },
                "flags": 32,
                "start": 0,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "[[x[yield]]] = value;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

[[]] = value;
```

### Diagnostics

```javascript
✔ No errors
```

