# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/miscellaneous/destructuring/destructuring-assignment-negative-tests/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/destructuring/destructuring-assignment-negative-tests/gen/variable
> :: test: variable
> :: case: [super]
## Input

`````js
var x, y, z; ([super] = {});
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 5
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 6,
                            "end": 8
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 6,
                        "end": 8
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 9,
                            "end": 11
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 9,
                        "end": 11
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 11
            },
            "flags": 16,
            "start": 0,
            "end": 12
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
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
                                        "kind": 225,
                                        "superKeyword": {
                                            "kind": 4259935,
                                            "flags": 96,
                                            "start": 15,
                                            "end": 20
                                        },
                                        "flags": 96,
                                        "start": 15,
                                        "end": 20
                                    },
                                    "expression": {
                                        "kind": 16637,
                                        "text": "",
                                        "flags": 64,
                                        "start": 20,
                                        "end": 20
                                    },
                                    "flags": 536870944,
                                    "start": 15,
                                    "end": 20
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 15,
                            "end": 20
                        },
                        "flags": 32,
                        "start": 14,
                        "end": 21
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 21,
                        "end": 23
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 25,
                            "end": 25
                        },
                        "flags": 48,
                        "start": 23,
                        "end": 26
                    },
                    "flags": 32,
                    "start": 14,
                    "end": 26
                },
                "flags": 32,
                "start": 12,
                "end": 27
            },
            "flags": 16,
            "start": 12,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "var x, y, z; ([super] = {});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' must be followed by an argument list or member access. - start: 15, end: 21
✖ Dot property must be an identifier - start: 20, end: 21
✖ The left-hand side must be a variable or a property access. - start: 21, end: 23

```

