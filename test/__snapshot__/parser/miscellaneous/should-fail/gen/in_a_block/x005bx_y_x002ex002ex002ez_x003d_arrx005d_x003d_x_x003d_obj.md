# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-fail\gen\in_a_block
> :: test: in a block
> :: case: [x, y, ...z = arr] = x = obj
## Input

`````js
{ [x, y, ...z = arr] = x = obj }
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
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 3,
                                            "end": 4
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 5,
                                            "end": 7
                                        },
                                        {
                                            "kind": 223,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "start": 8,
                                                "end": 12
                                            },
                                            "argument": {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "z",
                                                    "rawText": "z",
                                                    "flags": 96,
                                                    "start": 12,
                                                    "end": 13
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 64,
                                                    "start": 13,
                                                    "end": 15
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "arr",
                                                    "rawText": "arr",
                                                    "flags": 96,
                                                    "start": 15,
                                                    "end": 19
                                                },
                                                "flags": 32,
                                                "start": 12,
                                                "end": 19
                                            },
                                            "flags": 32,
                                            "start": 8,
                                            "end": 19
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 3,
                                    "end": 19
                                },
                                "flags": 32,
                                "start": 1,
                                "end": 20
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 20,
                                "end": 22
                            },
                            "right": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 22,
                                    "end": 24
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 64,
                                    "start": 24,
                                    "end": 26
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "obj",
                                    "rawText": "obj",
                                    "flags": 96,
                                    "start": 26,
                                    "end": 30
                                },
                                "flags": 32,
                                "start": 22,
                                "end": 30
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 30
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 30
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 30
            },
            "flags": 16,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "{ [x, y, ...z = arr] = x = obj }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side must be a variable or a property access. - start: 20, end: 22

```

