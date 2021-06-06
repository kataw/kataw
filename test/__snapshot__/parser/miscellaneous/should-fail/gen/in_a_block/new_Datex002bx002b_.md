# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-fail\gen\in_a_block
> :: test: in a block
> :: case: new Date++;
## Input

`````js
{ new Date++; }
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
                            "kind": 127,
                            "operandToken": {
                                "kind": 196635,
                                "flags": 64,
                                "start": 10,
                                "end": 12
                            },
                            "operand": {
                                "kind": 210,
                                "newKeyword": {
                                    "kind": 138477661,
                                    "flags": 96,
                                    "start": 1,
                                    "end": 5
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "Date",
                                    "rawText": "Date",
                                    "flags": 96,
                                    "start": 5,
                                    "end": 10
                                },
                                "argumentList": null,
                                "flags": 32,
                                "start": 1,
                                "end": 10
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 12
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 13
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "{ new Date++; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The operand of an increment or decrement operator must be a variable or a property access - start: 10, end: 12

```

