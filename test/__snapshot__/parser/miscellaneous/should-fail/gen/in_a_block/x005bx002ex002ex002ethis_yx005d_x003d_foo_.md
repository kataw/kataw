# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-fail/gen/in_a_block
> :: test: in a block
> :: case: [...this, y] = foo;
## Input

`````js
{ [...this, y] = foo; }
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
                                            "kind": 223,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "start": 3,
                                                "end": 6
                                            },
                                            "argument": {
                                                "kind": 4276321,
                                                "flags": 96,
                                                "start": 6,
                                                "end": 10
                                            },
                                            "flags": 32,
                                            "start": 3,
                                            "end": 10
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 11,
                                            "end": 13
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 3,
                                    "end": 13
                                },
                                "flags": 32,
                                "start": 1,
                                "end": 14
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 14,
                                "end": 16
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 16,
                                "end": 20
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 20
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 21
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 21
            },
            "flags": 16,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "{ [...this, y] = foo; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side must be a variable or a property access. - start: 14, end: 16

```

