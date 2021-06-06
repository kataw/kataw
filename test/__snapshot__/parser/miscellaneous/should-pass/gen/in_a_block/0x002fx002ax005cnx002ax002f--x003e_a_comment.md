# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-pass/gen/in_a_block
> :: test: in a block
> :: case: 0/*\n*/--> a comment
## Input

`````js
{ 0/*\n*/--> a comment }
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
                            "kind": 198,
                            "left": {
                                "kind": 127,
                                "operandToken": {
                                    "kind": 196636,
                                    "flags": 64,
                                    "start": 3,
                                    "end": 11
                                },
                                "operand": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "start": 1,
                                    "end": 3
                                },
                                "flags": 32,
                                "start": 1,
                                "end": 11
                            },
                            "operatorToken": {
                                "kind": 34883,
                                "flags": 64,
                                "start": 11,
                                "end": 12
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 12,
                                "end": 14
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 14
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 14
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "comment",
                            "rawText": "comment",
                            "flags": 96,
                            "start": 14,
                            "end": 22
                        },
                        "flags": 16,
                        "start": 14,
                        "end": 22
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "{ 0/*\\n*/--> a comment }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The operand of an increment or decrement operator must be a variable or a property access - start: 3, end: 11
✖ Expected a `;` - start: 14, end: 22

```

