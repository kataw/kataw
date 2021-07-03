# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_keyword_inside_delete_in_param_default
> :: test: assign to paren-wrapped keyword inside delete in param default
> :: case: with
## Options

`````js
{}
`````
## Input

`````js
async (x = delete ((with) = f)) => {}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 0,
                "end": 5
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 7,
                            "end": 8
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 96,
                            "start": 8,
                            "end": 10
                        },
                        "right": {
                            "kind": 126,
                            "operandToken": {
                                "kind": 4259886,
                                "flags": 96,
                                "start": 10,
                                "end": 17
                            },
                            "operand": {
                                "kind": 121,
                                "expression": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 16637,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 64,
                                        "start": 20,
                                        "end": 20
                                    },
                                    "flags": 19,
                                    "start": 32,
                                    "end": 20
                                },
                                "flags": 17,
                                "start": 32,
                                "end": 20
                            },
                            "flags": 32,
                            "start": 10,
                            "end": 20
                        },
                        "flags": 32,
                        "start": 7,
                        "end": 20
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 0,
                "end": 0
            },
            "flags": 268435490,
            "start": 0,
            "end": 20
        },
        {
            "kind": 153,
            "withKeyword": {
                "kind": 37757029,
                "flags": 80,
                "start": 20,
                "end": 24
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 24,
                "end": 24
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "start": 25,
                        "end": 25
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 25,
                        "end": 27
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "f",
                        "rawText": "f",
                        "flags": 96,
                        "start": 27,
                        "end": 29
                    },
                    "flags": 32,
                    "start": 25,
                    "end": 29
                },
                "flags": 16,
                "start": 25,
                "end": 29
            },
            "flags": 80,
            "start": 20,
            "end": 29
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 36,
                "end": 36
            },
            "flags": 16,
            "start": 34,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "async (x = delete ((with) = f)) => {}",
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
✖ Identifier expected - start: 20, end: 24
✖ Missing an opening parentheses - '( - start: 24, end: 25
✖ Identifier expected - start: 25, end: 27
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 25, end: 27
✖ Expected a `;` - start: 29, end: 30
✖ Declaration or statement expected - start: 30, end: 31
✖ Declaration or statement expected - start: 31, end: 34

```

