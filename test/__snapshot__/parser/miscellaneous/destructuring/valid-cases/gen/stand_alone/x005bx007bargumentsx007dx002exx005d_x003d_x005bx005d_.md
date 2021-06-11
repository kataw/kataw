# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/miscellaneous/destructuring/valid-cases/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/destructuring/valid-cases/gen/stand_alone
> :: test: stand alone
> :: case: [{arguments}.x] = [];
## Options

`````js
{}
`````
## Input

`````js
[{arguments}.x] = [];
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
                                "kind": 129,
                                "member": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 134299649,
                                                "text": "arguments",
                                                "rawText": "arguments",
                                                "flags": 96,
                                                "start": 2,
                                                "end": 11
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 2,
                                        "end": 11
                                    },
                                    "flags": 48,
                                    "start": 1,
                                    "end": 12
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 13,
                                    "end": 14
                                },
                                "flags": 536870944,
                                "start": 1,
                                "end": 14
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 1,
                        "end": 14
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 15
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 15,
                    "end": 17
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 19,
                        "end": 19
                    },
                    "flags": 32,
                    "start": 17,
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
    "source": "[{arguments}.x] = [];",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

[{ arguments }.x] = [];
```

### Diagnostics

```javascript
✔ No errors
```

