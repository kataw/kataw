# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-29
- From: kataw7/test\__snapshot__/parser/expressions/assignment/destructuring-assignment-negative-tests/autogen.md
- Path: kataw7/test\__snapshot__\parser\expressions\assignment\destructuring-assignment-negative-tests\gen\variable_in_for_in
> :: test: variable in for in
> :: case: [super]
## Input

`````js
var x, y, z; for (x in [super] = {});
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
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 12,
                "end": 16
            },
            "initializer": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 18,
                "end": 19
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 19,
                "end": 22
            },
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
                                        "start": 24,
                                        "end": 29
                                    },
                                    "flags": 96,
                                    "start": 24,
                                    "end": 29
                                },
                                "expression": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 64,
                                    "start": 29,
                                    "end": 29
                                },
                                "flags": 536870944,
                                "start": 24,
                                "end": 29
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 24,
                        "end": 29
                    },
                    "flags": 32,
                    "start": 22,
                    "end": 30
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 30,
                    "end": 32
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 34,
                        "end": 34
                    },
                    "flags": 48,
                    "start": 32,
                    "end": 35
                },
                "flags": 32,
                "start": 22,
                "end": 35
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 36,
                "end": 37
            },
            "flags": 16,
            "start": 12,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "var x, y, z; for (x in [super] = {});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' must be followed by an argument list or member access. - start: 24, end: 30
✖ Dot property must be an identifier - start: 29, end: 30
✖ The left-hand side must be a variable or a property access. - start: 30, end: 32

```

