# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_keyword_in_param_default
> :: test: assign to paren-wrapped keyword in param default
> :: case: for
## Options

`````js
{}
`````
## Input

`````js
async (x = (for) = f) => {}
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
                            "kind": 121,
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "flags": 64,
                                "start": 12,
                                "end": 12
                            },
                            "flags": 32,
                            "start": 10,
                            "end": 12
                        },
                        "flags": 32,
                        "start": 7,
                        "end": 12
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 0,
                "end": 0
            },
            "flags": 268435490,
            "start": 0,
            "end": 12
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 12,
                "end": 15
            },
            "initializer": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 15,
                "end": 15
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 15,
                "end": 15
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 16,
                        "end": 16
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 16,
                        "end": 18
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "f",
                        "rawText": "f",
                        "flags": 96,
                        "start": 18,
                        "end": 20
                    },
                    "flags": 32,
                    "start": 16,
                    "end": 20
                },
                "flags": 16,
                "start": 16,
                "end": 20
            },
            "flags": 80,
            "start": 12,
            "end": 20
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 26,
                "end": 26
            },
            "flags": 16,
            "start": 24,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "async (x = (for) = f) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 12, end: 15
✖ Missing an opening parentheses - '( - start: 15, end: 16
✖ Identifier expected - start: 16, end: 18
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 16, end: 18
✖ Expected a `;` - start: 20, end: 21
✖ Declaration or statement expected - start: 21, end: 24

```

