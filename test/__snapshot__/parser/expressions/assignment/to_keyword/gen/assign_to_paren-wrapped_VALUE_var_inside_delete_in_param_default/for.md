# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\assignment\to_keyword\gen\assign_to_paren-wrapped_VALUE_var_inside_delete_in_param_default
> :: test: assign to paren-wrapped VALUE var inside delete in param default
> :: case: for
## Input

`````js
(x = delete ((for) = f)) => {}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [],
                    "flags": 32,
                    "start": 0,
                    "end": 14
                },
                "flags": 32,
                "start": 0,
                "end": 14
            },
            "flags": 16,
            "start": 0,
            "end": 14
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 14,
                "end": 17
            },
            "initializer": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 17,
                "end": 17
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 17,
                "end": 17
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 18,
                        "end": 18
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 18,
                        "end": 20
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "f",
                        "rawText": "f",
                        "flags": 96,
                        "start": 20,
                        "end": 22
                    },
                    "flags": 32,
                    "start": 18,
                    "end": 22
                },
                "flags": 16,
                "start": 18,
                "end": 22
            },
            "flags": 80,
            "start": 14,
            "end": 22
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 29,
                "end": 29
            },
            "flags": 16,
            "start": 27,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "(x = delete ((for) = f)) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 14, end: 17
✖ Missing an opening parentheses - '( - start: 17, end: 18
✖ Identifier expected - start: 18, end: 20
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 18, end: 20
✖ Expected a `;` - start: 22, end: 23
✖ Declaration or statement expected - start: 23, end: 24
✖ Declaration or statement expected - start: 24, end: 27

```

