# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-fail\gen\in_a_block
> :: test: in a block
> :: case: [this=x]
## Input

`````js
{ [this=x] }
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
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 125,
                                        "left": {
                                            "kind": 4276321,
                                            "flags": 96,
                                            "start": 3,
                                            "end": 7
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 64,
                                            "start": 7,
                                            "end": 8
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 8,
                                            "end": 9
                                        },
                                        "flags": 32,
                                        "start": 3,
                                        "end": 9
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 3,
                                "end": 9
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 10
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 10
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 10
            },
            "flags": 16,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "{ [this=x] }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 3, end: 8

```

