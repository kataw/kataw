# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\in_a_block
> :: test: in a block
> :: case: a = { x: x = flag1 = true, y: y = flag2 = true } = { y: 1 };
## Input

`````js
{ a = { x: x = flag1 = true, y: y = flag2 = true } = { y: 1 }; }
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
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 1,
                                "end": 3
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 3,
                                "end": 5
                            },
                            "right": {
                                "kind": 125,
                                "left": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "generatorToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 7,
                                                    "end": 9
                                                },
                                                "right": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 10,
                                                        "end": 12
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 64,
                                                        "start": 12,
                                                        "end": 14
                                                    },
                                                    "right": {
                                                        "kind": 125,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "flag1",
                                                            "rawText": "flag1",
                                                            "flags": 96,
                                                            "start": 14,
                                                            "end": 20
                                                        },
                                                        "operatorToken": {
                                                            "kind": 4125,
                                                            "flags": 64,
                                                            "start": 20,
                                                            "end": 22
                                                        },
                                                        "right": {
                                                            "kind": 24752947,
                                                            "flags": 96,
                                                            "start": 22,
                                                            "end": 27
                                                        },
                                                        "flags": 32,
                                                        "start": 14,
                                                        "end": 27
                                                    },
                                                    "flags": 32,
                                                    "start": 7,
                                                    "end": 27
                                                },
                                                "flags": 32,
                                                "start": 7,
                                                "end": 27
                                            },
                                            {
                                                "kind": 219,
                                                "generatorToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 96,
                                                    "start": 28,
                                                    "end": 30
                                                },
                                                "right": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 96,
                                                        "start": 31,
                                                        "end": 33
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 64,
                                                        "start": 33,
                                                        "end": 35
                                                    },
                                                    "right": {
                                                        "kind": 125,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "flag2",
                                                            "rawText": "flag2",
                                                            "flags": 96,
                                                            "start": 35,
                                                            "end": 41
                                                        },
                                                        "operatorToken": {
                                                            "kind": 4125,
                                                            "flags": 64,
                                                            "start": 41,
                                                            "end": 43
                                                        },
                                                        "right": {
                                                            "kind": 24752947,
                                                            "flags": 96,
                                                            "start": 43,
                                                            "end": 48
                                                        },
                                                        "flags": 32,
                                                        "start": 35,
                                                        "end": 48
                                                    },
                                                    "flags": 32,
                                                    "start": 28,
                                                    "end": 48
                                                },
                                                "flags": 32,
                                                "start": 28,
                                                "end": 48
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 7,
                                        "end": 48
                                    },
                                    "flags": 48,
                                    "start": 5,
                                    "end": 50
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 64,
                                    "start": 50,
                                    "end": 52
                                },
                                "right": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "generatorToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 96,
                                                    "start": 54,
                                                    "end": 56
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 96,
                                                    "start": 57,
                                                    "end": 59
                                                },
                                                "flags": 32,
                                                "start": 54,
                                                "end": 59
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 54,
                                        "end": 59
                                    },
                                    "flags": 48,
                                    "start": 52,
                                    "end": 61
                                },
                                "flags": 32,
                                "start": 5,
                                "end": 61
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 61
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 62
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 62
            },
            "flags": 16,
            "start": 0,
            "end": 64
        }
    ],
    "isModule": false,
    "source": "{ a = { x: x = flag1 = true, y: y = flag2 = true } = { y: 1 }; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 64
}
```

### Printed

```javascript

{
  a = { x: x = flag1 = true, y: y = flag2 = true } = { y: 1 };
}
```

### Diagnostics

```javascript
✔ No errors
```

