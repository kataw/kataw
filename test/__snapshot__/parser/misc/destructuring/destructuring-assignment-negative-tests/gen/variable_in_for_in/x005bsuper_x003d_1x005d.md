# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-05
- From: kataw8/test\__snapshot__/parser/misc/destructuring/destructuring-assignment-negative-tests/autogen.md
- Path: kataw8/test\__snapshot__\parser\misc\destructuring\destructuring-assignment-negative-tests\gen\variable_in_for_in
> :: test: variable in for in
> :: case: [super = 1]
## Input

`````js
var x, y, z; for (x in [super = 1] = {});
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
                                "kind": 125,
                                "left": {
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
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 64,
                                    "start": 29,
                                    "end": 31
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 31,
                                    "end": 33
                                },
                                "flags": 32,
                                "start": 24,
                                "end": 33
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 24,
                        "end": 33
                    },
                    "flags": 32,
                    "start": 22,
                    "end": 34
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 34,
                    "end": 36
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 38,
                        "end": 38
                    },
                    "flags": 48,
                    "start": 36,
                    "end": 39
                },
                "flags": 32,
                "start": 22,
                "end": 39
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 40,
                "end": 41
            },
            "flags": 16,
            "start": 12,
            "end": 41
        }
    ],
    "isModule": false,
    "source": "var x, y, z; for (x in [super = 1] = {});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' must be followed by an argument list or member access. - start: 24, end: 31
✖ Dot property must be an identifier - start: 29, end: 31
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 29, end: 31

```

